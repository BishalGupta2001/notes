import DefaultPart from "../Components/DefaultPart/DefaultPart";
import SideBar from "../Components/SideBar/SideBar";
import style from "./Dashboard.module.css";

import React from "react";

const Dashboard = () => {
  return (
    <main className={style.mains}>
      <div className={style.mainContainer}>
        <div className={style.leftContainer}>
          <SideBar />
        </div>
        <div className={style.rightContainer}>
          <DefaultPart />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
