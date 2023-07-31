import styled from "styled-components";

export const Tweet = styled.article`
  display: flex;
  padding: 1rem 1rem 0.5rem 1rem;
  transition: 0.2s;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

export const TweetHeader = styled.header`
  padding-left: 7px;
  display: flex;
  gap: 4px;
  margin-bottom: 5px;
`;

export const TweetBody = styled.div``;

export const TweetFooter = styled.footer`
  display: flex;
  gap: 2rem;
  margin-top: 10px;
`;

export const IconContainer = styled.div<{ color: string; active?: boolean }>`
  transition: 0.2s;

  display: flex;
  align-items: center;
  gap: 4px;

  width: fit-content;

  font-size: ${(props) => props.theme.fontSizes.small};

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

export const TweetContainer = styled.div``;

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
`;

export const TweetContent = styled.div`
  padding-left: 7px;
`;

export const TweetUsername = styled.div`
  color: ${(props) => props.theme.colors.text};
`;
