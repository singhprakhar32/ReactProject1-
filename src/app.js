/**
 * Parcel is doing all these things for us
 * HMR(Hot module Replacement)
 * File watcher algorithm  C++ (it is very fast it just tracks the reacords of file in every time)
 * Buildings
 * Minifying
 * Cleaning our code
 * Dev and production builds
 * super fast algorithm
 * Image Optimization
 * Caching while development
 * Consistency hashing algorithm
 * Zero Configuration
 * Transitive Dependencies
 * browserlist is a key which makes our code compatible with browser
 * * */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React, { useState,useEffect } from "react";
import ReactDom from "react-dom/client"; // this react and react-dom commming from node modules
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import About from "./components/AboutComponent";
import ContactUsPageComponent from "./components/ContactUsPageComponent";
import Error from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import CartComponent from "./components/CartComponent.js";
const AppComponent = () => {
  const [userName, setUserName] = useState();
  //Make an api call and send userName and password
  useEffect(() => {
    const data = {
      name: "Prakhar singh",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{name:userName}}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
      </Provider>
    </>
  );
};  
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contactus", element: <ContactUsPageComponent /> },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<CartComponent />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
