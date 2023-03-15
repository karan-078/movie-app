import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import { Home, MovieDetail } from "./Components/constant";

const Layout = () => {
  return (
    <div className="layot">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />,
              },
            
              {
                path: "/moviedetail/:id",
                element:<MovieDetail/>,
              },
        ]

    },
  
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
