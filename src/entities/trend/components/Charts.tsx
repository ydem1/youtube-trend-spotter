import { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "src/shared/hooks/useAppSelector";
import { Loader } from "src/shared/ui/Loader";

export const Charts: FC = () => {
  const { termA, termB, isLoading } = useAppSelector((s) => s.trend);

  if (!termA || !termB) return null;

  if (isLoading) return <Loader />;

  const merged = [
    ...termA.timeline.map((p) => ({ date: p.date, [termA.term]: p.views })),
    ...termB.timeline.map((p) => ({ date: p.date, [termB.term]: p.views })),
  ];

  return (
    <section className="container py-12 md:gap-20 md:py-24">
      <div className="mx-auto w-full max-w-4xl rounded-3xl bg-widget/60 p-6 shadow-lg">
        <h3 className="mb-4 text-center text-lg font-semibold text-default">
          Views Over Time
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={merged}>
            <Line
              type="monotone"
              dataKey={termA.term}
              stroke="#9333EA"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey={termB.term}
              stroke="#BE185D"
              dot={false}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
