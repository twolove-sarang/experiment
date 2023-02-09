import React from "react";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../firebaseData/firebaseUserContext/userContext";

export default function OutletSection() {
  return (
    <>
      <UserContextProvider value>
        <Outlet />
      </UserContextProvider>
    </>
  );
}
