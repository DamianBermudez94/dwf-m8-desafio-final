import React from "react";
import css from "./header.css";
import Icon from "ui/icon/icon";
import NavBurger from "ui/nav-burger/nav-burger";

export default function Header() {
  return (
    <div className={css.root}>
      <Icon />
      <NavBurger />
    </div>
  );
}