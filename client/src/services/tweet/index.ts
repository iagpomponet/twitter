import { useMutation, useQuery } from "react-query";
import { api } from "../api";
import { Tweet } from "./types";

const getTweets = (): Promise<Tweet[]> =>
  api.get("/tweets").then((response) => response.data);

export const useGetTweets = () => useQuery("tweets", getTweets);

const createTweet = (text: string) => api.post("/tweets", { text });

export const useCreateTweet = () => useMutation(createTweet);

const likeTweet = ({ tweet }: { tweet: string }) =>
  api.post(`/tweets/${tweet}/likes`);

export const useLikeTweets = () => useMutation(likeTweet);

export const getTweetById = (id?: string) =>
  api.get(`/tweets/${id}`).then((res) => res.data);

export const useGetTweetById = ({ id }: { id?: string }) =>
  useQuery("tweetDetails", () => getTweetById(id), {
    enabled: !!id,
  });
