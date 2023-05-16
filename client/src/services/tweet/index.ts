import { useMutation, useQuery } from "react-query";
import { api } from "../api";
import { Tweet } from "./types";

const getTweets = (): Promise<Tweet[]> =>
  api.get("/tweets").then((response) => response.data);

export const useGetTweets = () => useQuery("tweets", getTweets);

const createTweet = (text: string) => api.post("/tweets", { text });

export const useCreateTweet = () => useMutation(createTweet);
