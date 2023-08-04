import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#1DA1F2",
    secondary: "#14171A",
    accent: "#E0245E",
    background: "#FFFFFF",
    text: "#1C1E21",
    muted: "#E1E8ED",
    border: "#E1E8ED",
    hover: "#F5F8FA",
    green: "#1DA1F2",
    gray: "rgb(83, 100, 113)",
  },
  fontSizes: {
    small: "13px",
    medium: "16px",
    large: "20px",
  },
  fonts: {
    primary: "Helvetica Neue, sans-serif",
  },
  borderRadius: "4px",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
};

const TwitterTheme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default TwitterTheme;
