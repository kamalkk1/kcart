import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/Body";

import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import ProductInfo from "./components/ProductInfo";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store"



// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Kamal Kishore ",
    email: "kamalk2620@gmail.com",
  });


  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
     
        <Outlet />
      
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
   
      {
        path: "/product/:proId",
        element: <ProductInfo />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
