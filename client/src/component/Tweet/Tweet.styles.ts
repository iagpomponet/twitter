import styled from "styled-components";

export const Tweet = styled.article<{ type: string }>`
  display: flex;
  transition: 0.2s;
  ${(props) =>
    props.type === "feed"
      ? `border-top: 1px solid ${props.theme.colors.border};
    cursor: pointer;

    &:hover {
      background-color: #f5f8fa;
    }
    `
      : `
        flex-wrap: wrap;
      `}
`;

export const TweetHeader = styled.header`
  display: flex;
  gap: 4px;
  margin-bottom: 5px;
  padding: 1rem 0.5rem 0 0.5rem;
`;

export const TweetBody = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const TweetFooter = styled.footer<{ type: string }>`
  ${({ type, theme }) =>
    type === "feed"
      ? `
        display: flex;
        gap: 2rem;
        margin: 10px 0 10px 0;`
      : `
          padding: 0 1rem;
          display: flex;
          align-items: center;
          margin-top: 32px;
          gap: 4rem;
          width: 100%;
          padding: 10px 1rem 8px 1rem;
          border-top: 1px solid ${theme.colors.border};
        `}
`;

export const IconContainer = styled.div<{ color: string; active?: boolean }>`
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;

  ${(props) =>
    props.active
      ? `
    color: ${props.color};

    svg, path, g {
      fill: ${props.color};
    }
  `
      : null}

  svg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 6px;
  }

  &:hover {
    fill: ${(props) => props.color};
    color: ${(props) => props.color};

    svg {
      background-color: ${(props) => props.theme.colors.muted};
    }
  }
`;

export const TweetContainer = styled.div`
  width: 100%;
`;

export const TweetName = styled.span`
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const TweetAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const TweetAvatarContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  padding: 1rem 0;
`;

export const TweetContent = styled.div<{ type: string }>`
  ${({ type }) =>
    type === "feed" ? `  padding: 0 0.5rem;` : `padding: 0 1rem;`}
`;

export const TweetUsername = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

export const DateDetails = styled.span`
  display: block;
  padding: 0 1rem;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 400;
  font-size: 15px;
`;

export const DetailsHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 1rem;
`;

export const DetailsUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReplieList = styled.section`
  display: flex;
  flex-direction: column;
`;
