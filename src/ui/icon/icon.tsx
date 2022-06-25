import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";

export default function Icon() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      className={css.icon}
      src="https://res.cloudinary.com/dwf-m7/image/upload/v1656107515/icon_h9c2tz.png"
      onClick={handleClick}
    />
  );
}