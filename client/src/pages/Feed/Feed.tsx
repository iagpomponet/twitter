import { Spin } from "antd";
import SideMenu from "../../component/SideMenu/SideMenu";
import Tweet from "../../component/Tweet/Tweet";
import { useGetTweets } from "../../services/tweet";

import * as css from "./Feed.styles";
import TweetInput from "../../component/TweetInput/TweetInput";
import { useUserData } from "../../hooks/user";

const Feed = () => {
  const { data: tweets, isLoading: tweetsLoading } = useGetTweets();
  const { user } = useUserData();
  // TODO: Feed should only be visible to logged in users otherwise redirect to login page
  // TODO: Implement bootstrap endpoint

  console.log("tweets :>> ", tweets);
  return (
    <css.Feed>
      <css.FeedTitle>Página Inicial</css.FeedTitle>
      <TweetInput profilePic="https://miro.medium.com/max/316/1*LGHbA9o2BKka2obwwCAjWg.jpeg" />
      {tweetsLoading ? (
        <css.LoadingContainer>
          <Spin />
        </css.LoadingContainer>
      ) : null}
      {tweets?.length
        ? tweets?.map((tweet) => {
            const hasLiked = JSON.parse(tweet.likes)?.includes(user.id);
            if (tweet.replyToTweet) {
              return;
            }
            return (
              <Tweet
                liked={hasLiked}
                id={tweet.id}
                likes={tweet.likes}
                key={tweet.id}
                user={tweet.user}
                message={tweet.text}
                retweets={0}
              />
            );
          })
        : null}
    </css.Feed>
  );
};

export default Feed;
