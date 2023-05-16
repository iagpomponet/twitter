import styled from "styled-components";

export const TweetInputContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const TweetTextInput = styled.textarea`
  border: 0;
  outline: 0;
  width: 100%;
  display: flex;
  margin: 1rem 0;
  position: relative;
  top: 1rem;

  font-size: 20px;
  font-family: sans-serif;
`;

export const TweetInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  cursor: pointer;
  transition: 0.4s;

  font-weight: bold;
  font-size: 15px;

  &:hover {
    opacity: 0.8;
  }
`;

export const TweetInputFooter = styled.div`
  display: flex;
`;
