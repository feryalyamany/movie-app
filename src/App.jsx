import "./App.css";
import React, { useEffect, useState } from "react";
import MasterPage from "./Components/MasterPage/MasterPage";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Tvshows from "./Components/Tvshows/Tvshows";
import People from "./Components/People/People";
import Networks from "./Components/Networks/Networks";
import Error from "./Components/Error/Error";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Registeration from "./Components/Registeration/Registeration";
import Login from "./Components/Login/Login";
import Itemdetails from "./Components/Itemdetails/Itemdetails";
import jwtDecode from "jwt-decode";
import MediaContextProvider from "./Context/MediaContext";

function App() {
  let Protect = ({ children }) => {
    if (localStorage.getItem("token") === null) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      saveUserData();
    }
  }, []);
  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken);
  }
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MasterPage setuserData={setuserData} userData={userData} />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "movies",
          element: (
            <Protect>
              <Movies />
            </Protect>
          ),
        },
        {
          path: "tvshows",
          element: (
            <Protect>
              <Tvshows />
            </Protect>
          ),
        },
        {
          path: "people",
          element: (
            <Protect>
              <People />
            </Protect>
          ),
        },
        {
          path: "networks",
          element: (
            <Protect>
              <Networks />
            </Protect>
          ),
        },
        { path: "itemdetails/:id/:media_type", element: <Protect><Itemdetails /></Protect> },
        { path: "register", element: <Registeration /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (


    <>
    <MediaContextProvider>
    <RouterProvider router={routers} />
    </MediaContextProvider>
    
    </>
  );
}

export default App;
