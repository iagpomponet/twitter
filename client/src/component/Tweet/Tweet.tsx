import { useTheme } from "styled-components";
import CommentIcon from "../../assets/CommentIcon";
import RetweetIcon from "../../assets/RetweetIcon";
import * as css from "./Tweet.styles";
import { TweetProps } from "./Tweet.types";
import LikeIcon from "../../assets/LikeIcon";
import { useLikeTweets, useReplyToTweet } from "../../services/tweet";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserData } from "../../hooks/user";

const Tweet = ({
  id,
  user,
  message,
  likes,
  retweets,
  liked,
  type = "feed",
  replies,
}: TweetProps) => {
  const {
    user: { id: userId },
  } = useUserData();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const theme = useTheme();
  const numOfLikes = JSON.parse(likes)?.length || 0;
  const { mutateAsync: likeTweet } = useLikeTweets();
  const { mutateAsync: replyTweet } = useReplyToTweet();

  const [reply, setReply] = useState<string | null>(null);

  const handleLike = async () => {
    await likeTweet({ tweet: id });
    queryClient.invalidateQueries("tweets");
    queryClient.invalidateQueries("tweetDetails");
  };

  const handleClick = () => {
    if (type === "feed") {
      navigate(`/tweet/${id}`);
    }
  };

  const handleReply = async () => {
    if (reply) {
      await replyTweet({ id, content: reply });
      queryClient.invalidateQueries("tweetDetails");
    }
  };

  const handleReplyChange = (e: any) => {
    const text = e?.target?.value;
    console.log("text :>> ", text);
    if (text) {
      setReply(text);
    }
  };

  console.log("replies :>> ", replies);

  // Handle fill hearth if user has liked
  // Check bugs
  return (
    <>
      <css.Tweet type={type}>
        {type === "details" ? (
          <css.DetailsHeader>
            <css.TweetAvatar src={user.profilePic} alt="Profile pic" />
            <css.DetailsUserInfo>
              <css.TweetName>{user.fullName}</css.TweetName>
              <css.TweetUsername>@{user.username}</css.TweetUsername>
            </css.DetailsUserInfo>
          </css.DetailsHeader>
        ) : (
          <css.TweetAvatarContainer>
            <css.TweetAvatar src={user.profilePic} alt="Profile pic" />
          </css.TweetAvatarContainer>
        )}

        <css.TweetContainer>
          <div onClick={handleClick}>
            {type === "feed" ? (
              <css.TweetHeader>
                <css.TweetName>{user.fullName}</css.TweetName>
                <css.TweetUsername>@{user.username}</css.TweetUsername>
              </css.TweetHeader>
            ) : null}
            <css.TweetContent type={type}>{message}</css.TweetContent>

            {type === "details" ? (
              <css.DateDetails>7:03 PM · 3 de ago de 2023</css.DateDetails>
            ) : null}

            {/* Bottom tweet nav */}
          </div>
          <css.TweetFooter type={type}>
            <css.IconContainer color={(theme as any).colors.primary}>
              <CommentIcon />
              <span>{replies?.length || 0}</span>
            </css.IconContainer>

            <css.IconContainer color="#19cf86">
              <RetweetIcon />
              <span>{retweets}</span>
            </css.IconContainer>

            <css.IconContainer
              active={liked}
              onClick={handleLike}
              color={(theme as any).colors.accent}
            >
              <LikeIcon active={liked} />
              <span>{numOfLikes}</span>
            </css.IconContainer>
          </css.TweetFooter>
        </css.TweetContainer>
      </css.Tweet>
      {/* Replie input */}
      {type === "details" ? (
        <>
          <css.ReplyInputSection>
            <css.TweetAvatar src={user.profilePic} alt="Profile pic" />
            <css.ReplyInput
              onChange={handleReplyChange}
              placeholder="Post your reply!"
            />
            <css.Button onClick={handleReply}>Reply</css.Button>
          </css.ReplyInputSection>
          <css.ReplieList>
            {replies
              ? replies.map((replie) => {
                  const liked = JSON.parse(replie.likes)?.includes(userId);
                  return (
                    <Tweet
                      user={replie.user}
                      likes={replie.likes}
                      retweets={0}
                      message={replie.text}
                      id={replie.id}
                      liked={liked}
                    />
                  );
                })
              : null}
          </css.ReplieList>
        </>
      ) : null}
    </>
  );
};

export default Tweet;
