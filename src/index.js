import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Page/ErrorPage";
import MainPage from "./Page/MainPage";
import Firebase from "./firebaseData/Firebase";
import Design from "./design/Design";
import Api from "./apisection/Api";
import Withwith from "./withwith/Withwith";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/menu/firebase", element: <Firebase /> },
      { path: "/menu/design", element: <Design /> },
      { path: "/menu/api", element: <Api /> },
      { path: "/menu/withwith", element: <Withwith /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
