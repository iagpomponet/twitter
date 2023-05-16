import { Spin } from "antd";
import SideMenu from "../../component/SideMenu/SideMenu";
import Tweet from "../../component/Tweet/Tweet";
import { useGetTweets } from "../../services/tweet";

import * as css from "./Feed.styles";
import TweetInput from "../../component/TweetInput/TweetInput";

const Feed = () => {
  const { data: tweets, isLoading: tweetsLoading } = useGetTweets();
  // TODO: Feed should only be visible to logged in users otherwise redirect to login page
  // TODO: Tweets component
  // TODO: Implement bootstrap endpoint

  console.log("tweets :>> ", tweets);
  return (
    <css.PageContainer>
      <SideMenu />
      <css.Feed>
        <css.FeedTitle>Página Inicial</css.FeedTitle>
        <TweetInput profilePic="https://miro.medium.com/max/316/1*LGHbA9o2BKka2obwwCAjWg.jpeg" />
        {tweetsLoading ? (
          <css.LoadingContainer>
            <Spin />
          </css.LoadingContainer>
        ) : null}
        {tweets?.length &&
          tweets?.map((tweet) => (
            <Tweet
              likes={tweet.likes}
              key={tweet.id}
              user={tweet.user}
              message={tweet.text}
              retweets={0}
            />
          ))}
      </css.Feed>
    </css.PageContainer>
  );
};

export default Feed;
