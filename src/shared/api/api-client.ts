import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_SERVER_URL,
  timeout: 10000,
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
});

export { instance };
