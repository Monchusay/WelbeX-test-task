import React from "react";
import style from "./Header.module.css";

const Header = ({ title }) => {
  return (
    <div className={style.Header}>
      <p className={style.Title}>{title}</p>
    </div>
  );
};

export default Header;
