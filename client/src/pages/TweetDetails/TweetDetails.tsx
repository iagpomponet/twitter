// will get id from url and fetch from api

import { Link, useParams } from "react-router-dom";
import { TweetDetailsProps } from "./TweetDetails.types";
import { useGetTweetById } from "../../services/tweet";

import * as css from "./TweetDetails.styles";
import { Spin } from "antd";
import Tweet from "../../component/Tweet/Tweet";
import { useEffect, useState } from "react";
import { useUserData } from "../../hooks/user";
import ArrowLeftIcon from "../../assets/ArrowLeftIcon";

const TweetDetails = ({}: TweetDetailsProps) => {
  const {
    user: { id: userId },
  } = useUserData();
  const [hasLiked, setHasLiked] = useState(false);
  const { tweet_id: id } = useParams();
  const { data, isLoading: isTweetLoading } = useGetTweetById({ id });

  useEffect(() => {
    if (data) {
      setHasLiked(JSON.parse(data.likes)?.includes(userId));
    }
  }, [data]);

  return (
    <css.Section>
      <css.Header>
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
        <h4>Tweet</h4>
      </css.Header>
      {isTweetLoading ? (
        <css.LoadingContainer>
          <Spin />
        </css.LoadingContainer>
      ) : (
        // TODO: Planning to add a prop and custom the component to some kind of full mode where it fills the page and we can see the comments
        <Tweet
          type="details"
          user={data.user}
          likes={data.likes}
          retweets={0}
          message={data.text}
          id={data.id}
          liked={hasLiked}
        />
      )}
    </css.Section>
  );
};

export default TweetDetails;
