import GlobalStyle from "./globalStyles";
import Login from "./pages/Login/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import Feed from "./pages/Feed/Feed";
import TwitterTheme from "./Theme";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TwitterTheme>
        <GlobalStyle />
        <RouterProvider router={router} />
      </TwitterTheme>
      
    </QueryClientProvider>
  );
}

export default App;
