import styled from "styled-components";

export const SideMenuContainer = styled.div`
  margin-top: 1rem;
  max-width: 259px;
  width: 100%;

  svg {
    height: 30px;
  }

  li {
    list-style: none;
  }
`;

export const SideMenu = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  max-width: calc(100vw / 2.8);
  width: 100%;
  height: 100vh;
  border-right: 1px solid ${(props) => props.theme.colors.border};
`;

export const HomeMenuItem = styled.span`
  margin-left: 10px;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: fit-content;

  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
  }
`;

export const MenuItem = styled.span<{ isSelected?: boolean }>`
  padding: 8px 22px;
  border-radius: 30px;
  display: flex;
  gap: 12px;
  align-items: center;
  width: fit-content;

  font-weight: ${({ isSelected }) => (isSelected ? "600" : "400")};
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;

  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : theme.colors.text};

  svg {
    fill: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : theme.colors.text};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const SideMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
