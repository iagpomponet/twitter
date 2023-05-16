import { TweetInputProps } from "./TweetInput.types";
import * as css from "./TweetInput.styles";
import { useCreateTweet } from "../../services/tweet";
import { Spin } from "antd";
import { useState } from "react";
import { useQueryClient } from "react-query";

const TweetInput = ({ profilePic }: TweetInputProps) => {
  const queryClient = useQueryClient();
  const [tweet, setTweet] = useState("");
  const { mutateAsync: createTweet, isLoading: createTweetLoading } =
    useCreateTweet();

  const handleSaveTweet = async () => {
    if (tweet.length) {
      await createTweet(tweet);
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
      setTweet("");
    }
  };

  return (
    <>
      <css.TweetInputContainer>
        <div>
          <css.Avatar src={profilePic} alt="" />
        </div>
        <css.TweetInputWrapper>
          {createTweetLoading ? (
            <Spin />
          ) : (
            <css.TweetTextInput
              onChange={(e) => setTweet(e.target.value)}
              maxLength={180}
              placeholder="O que está acontecendo?"
            />
          )}
          <css.TweetInputFooter>
            <css.SubmitButton onClick={handleSaveTweet}>
              Tweetar
            </css.SubmitButton>
          </css.TweetInputFooter>
        </css.TweetInputWrapper>
      </css.TweetInputContainer>
    </>
  );
};

export default TweetInput;
