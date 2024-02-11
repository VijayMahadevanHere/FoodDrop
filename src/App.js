import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ErrorElement from "./components/ErrorElement";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfilePage from './components/ProfilePage'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FormData from "./components/loginForm";
import ShimmerCard from "./components/Shimmer";
import UserContext from "./utils/userContext";
import PlayContext from "./utils/playContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";

const InstaMart = lazy(() => import("./components/InstaMart"));
const Aboutus = lazy(() => import("./components/ProfilePage"));
const AppLayout = () => {
  const [loginUser,setLoginUser]=useState({
    
      name:null,
      email:null
    
   })
  return (
    <Provider store={store}>
  <UserContext.Provider value={{user:loginUser,setLoginUser}}>
      <PlayContext.Provider value={{game:'football'}}>
        <Header />
        <Outlet />
        </PlayContext.Provider>
        <Footer />
        </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <FormData />,
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<h2>Loading..</h2>}>
            <ProfilePage />
          </Suspense>
        ),
        
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
      path:'/cart',
      element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
