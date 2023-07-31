import { useTheme } from "styled-components";
import CommentIcon from "../../assets/CommentIcon";
import RetweetIcon from "../../assets/RetweetIcon";
import * as css from "./Tweet.styles";
import { TweetProps } from "./Tweet.types";
import LikeIcon from "../../assets/LikeIcon";
import { useLikeTweets } from "../../services/tweet";
import { useQueryClient } from "react-query";

const Tweet = ({ id, user, message, likes, retweets, liked }: TweetProps) => {
  const queryClient = useQueryClient();
  const theme = useTheme();
  const numOfLikes = JSON.parse(likes)?.length || 0;
  const { mutateAsync } = useLikeTweets();

  const handleLike = async () => {
    await mutateAsync({ tweet: id });
    queryClient.invalidateQueries("tweets");
  };

  // Handle fill hearth if user has liked
  // Check bugs

  return (
    <css.Tweet>
      <css.TweetAvatarContainer>
        <css.TweetAvatar src={user.profilePic} alt="Profile pic" />
      </css.TweetAvatarContainer>
      <css.TweetContainer>
        <css.TweetHeader>
          <css.TweetName>{user.fullName}</css.TweetName>
          <css.TweetUsername>@{user.username}</css.TweetUsername>
        </css.TweetHeader>
        <css.TweetContent>{message}</css.TweetContent>

        {/* Bottom tweet nav */}
        <css.TweetFooter>
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
    </css.Tweet>
  );
};

export default Tweet;
