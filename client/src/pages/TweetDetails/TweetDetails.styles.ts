import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Section = styled.section`
  border-right: 1px solid ${(props) => props.theme.colors.border};

  article:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  width: 100%;
  max-width: 600px;
  margin-right: auto;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 40px;

  h4 {
    font-size: 20px;
  }

  svg {
    width: 30px;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;

    &:hover {
      background-color: #f5f8fa;
    }
  }
`;
