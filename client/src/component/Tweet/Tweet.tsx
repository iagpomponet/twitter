import { useTheme } from "styled-components";
import CommentIcon from "../../assets/CommentIcon";
import RetweetIcon from "../../assets/RetweetIcon";
import * as css from "./Tweet.styles";
import { TweetProps } from "./Tweet.types";
import LikeIcon from "../../assets/LikeIcon";
import { useLikeTweets } from "../../services/tweet";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const theme = useTheme();
  const numOfLikes = JSON.parse(likes)?.length || 0;
  const { mutateAsync } = useLikeTweets();

  console.log("replies :>> ", replies);

  const handleLike = async () => {
    await mutateAsync({ tweet: id });
    queryClient.invalidateQueries("tweets");
    queryClient.invalidateQueries("tweetDetails");
  };

  const handleClick = () => {
    if (type === "feed") {
      navigate(`/tweet/${id}`);
    }
  };

  // Handle fill hearth if user has liked
  // Check bugs

  return (
    <css.Tweet onClick={handleClick} type={type}>
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
        <css.TweetFooter type={type}>
          <css.IconContainer color={(theme as any).colors.primary}>
            <CommentIcon />
            <span>0</span>
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
      <css.ReplieList>
        {replies
          ? replies.map((replie) => {
              return (
                <Tweet
                  user={replie.user}
                  likes={replie.likes}
                  retweets={0}
                  message={replie.text}
                  id={""}
                  liked={false}
                />
              );
            })
          : null}
      </css.ReplieList>
    </css.Tweet>
  );
};

export default Tweet;
