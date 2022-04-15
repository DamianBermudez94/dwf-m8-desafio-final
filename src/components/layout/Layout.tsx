import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../ui/NavBar/NavBar";
import css from "./Layout.css";

export function Layout() {
  return (
    <div className={css.root}>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}