import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
`;

export const Feed = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.border};

  article:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  width: 100%;
  max-width: 600px;
  margin-right: auto;
`;

export const FeedTitle = styled.span`
  display: block;
  padding: 1rem;
  font-weight: 500;
  font-size: 20px;
  font-weight: 600;
`;
