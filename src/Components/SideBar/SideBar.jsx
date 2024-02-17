import React from "react";
import style from "./SideBar.module.css";
import PopUp from "../PopUp/PopUp";

const SideBar = () => {
  return (
    <div className={style.mainContainer}>
      <h1 className={style.heading}>Pocket Notes</h1>
      <p className={style.defaultText}>Add new Notes here</p>
      <div className={style.btn}>
        <PopUp />
      </div>
    </div>
  );
};
export default SideBar;
