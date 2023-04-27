import { useTheme } from "styled-components";
import CommentIcon from "../../assets/CommentIcon";
import RetweetIcon from "../../assets/RetweetIcon";
import * as css from "./Tweet.styles"
import { TweetProps } from "./Tweet.types";
import LikeIcon from "../../assets/LikeIcon";

const Tweet = ({ profilePic, user, name, message }: TweetProps) => {
    const theme = useTheme();

    return <css.Tweet>
        <css.TweetAvatarContainer>
            <css.TweetAvatar src={profilePic} alt="Profile pic" />
        </css.TweetAvatarContainer>
        <css.TweetContainer>
            <css.TweetHeader>
                <css.TweetName>
                {name}
                </css.TweetName>
                <css.TweetUsername>
                    {user}
                </css.TweetUsername>
            </css.TweetHeader>
            <css.TweetContent>
                {message}
            </css.TweetContent>

            {/* Bottom tweet nav */}
            <css.TweetFooter>
                <css.IconContainer color={(theme as any).colors.primary}>
                    <CommentIcon />
                    <span>
                        8
                    </span>
                </css.IconContainer>

                <css.IconContainer color="#19cf86">
                    <RetweetIcon />
                    <span>4</span>
                </css.IconContainer>

                <css.IconContainer color={(theme as any).colors.accent}>
                    <LikeIcon />
                    <span>5</span>
                </css.IconContainer>
                
            </css.TweetFooter>
        </css.TweetContainer>
    </css.Tweet>
};

export default Tweet;