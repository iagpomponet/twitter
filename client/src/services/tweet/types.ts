import { Reply } from "../../component/Tweet/Tweet.types";

export interface Tweet {
  id: string;
  text: string;
  likes: string;
  createdAt: string;
  user: User | null;
  replies: Reply[];
  replyToTweet?: string;
}

interface User {
  // Define the properties of the User entity here
  // For example: id, username, etc.
}
