import GlobalStyle from "./globalStyles";
import Login from "./pages/Login/Login";

import { useGetUser } from "./services/user/index";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useParams,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import Feed from "./pages/Feed/Feed";
import TwitterTheme from "./Theme";
import { UserProvider, useUserData } from "./hooks/user";
import { Spin } from "antd";
import { LoadingSpinnerContainer } from "./component/Layout";
import { useEffect } from "react";
import { LOGIN, SIGNUP } from "./constants/routes";
import SideMenu from "./component/SideMenu/SideMenu";
import TweetDetails from "./pages/TweetDetails/TweetDetails";

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
  {
    path: "/tweet/:tweet_id",
    element: <TweetDetails />,
  },
]);

function AppScaffolder() {
  const location = window.location;
  const {
    data: user,
    isLoading: userDataLoading,
    isSuccess: userDataSuccess,
  } = useGetUser(location.pathname !== LOGIN && location.pathname !== SIGNUP);
  const { setUser } = useUserData();

  useEffect(() => {
    if (userDataSuccess) {
      setUser(user);
    }
  }, [userDataSuccess]);

  if (userDataLoading) {
    return (
      <LoadingSpinnerContainer>
        <Spin />
      </LoadingSpinnerContainer>
    );
  }

  return (
    <TwitterTheme>
      <GlobalStyle />
      <div className="flex">
        <SideMenu />
        <RouterProvider router={router} />
      </div>
    </TwitterTheme>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AppScaffolder />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
