import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { instance } from "src/shared/api/api-client";
import { CompareFormData, compareSchema } from "./schema";
import { CompareResult } from "./types";

export const useCompareForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CompareResult | null>(null);

  const methods = useForm<CompareFormData>({
    resolver: zodResolver(compareSchema),
    mode: "onBlur",
  });

  const fetchTermData = async (term: string) => {
    try {
      const searchRes = await instance.get("/search", {
        params: {
          part: "snippet",
          type: "video",
          q: term,
          maxResults: 50,
          order: "relevance",
        },
      });

      const searchData = searchRes.data;
      const totalResultsApprox = searchData.pageInfo?.totalResults || 0;
      const videoIds = searchData.items
        ?.map((item) => item.id.videoId)
        .filter(Boolean)
        .join(",");

      if (!videoIds) return null;

      const videosRes = await instance.get("/videos", {
        params: {
          part: "statistics,snippet",
          id: videoIds,
        },
      });

      const videosData = videosRes.data;

      const stats = videosData.items.map((v) => ({
        views: Number(v.statistics?.viewCount || 0),
        likes: Number(v.statistics?.likeCount || 0),
        date: v.snippet?.publishedAt,
      }));

      const totalViews = stats.reduce((sum, v) => sum + v.views, 0);
      const totalLikes = stats.reduce((sum, v) => sum + v.likes, 0);
      const avgViews = stats.length ? totalViews / stats.length : 0;
      const avgLikes = stats.length ? totalLikes / stats.length : 0;

      return {
        term,
        totalResultsApprox,
        totalViews,
        avgViews,
        totalLikes,
        avgLikes,
        timeline: stats.map((v) => ({
          date: v.date,
          views: v.views,
        })),
      };
    } catch (error) {
      console.error(`Error fetching data for ${term}:`, error);
      return null;
    }
  };

  const onSubmit = async ({ termA, termB }: CompareFormData) => {
    setIsLoading(true);
    try {
      const [dataA, dataB] = await Promise.all([
        fetchTermData(termA),
        fetchTermData(termB),
      ]);

      const result: CompareResult = { termA: dataA, termB: dataB };
      console.log("Comparison result:", result);
      setData(result);
    } catch (err) {
      console.error("Error comparing terms:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { methods, onSubmit, isLoading, data };
};
