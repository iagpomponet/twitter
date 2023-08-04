import { UserI } from "../../services/user/types";

export interface Reply {
  createdAt: string;
  id: string;
  likes: string;
  user: Partial<UserI>;
  text: string;
}

export interface TweetProps {
  user: any;
  likes: string;
  retweets: number;
  message: string;
  id: string;
  liked: boolean;
  type?: "feed" | "details";
  replies?: Reply[];
}
