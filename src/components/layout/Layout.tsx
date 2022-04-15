import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../ui/NavBar/NavBar";


export function Layout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}