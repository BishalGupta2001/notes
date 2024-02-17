import React, { useState } from "react";
import style from "./PopUp.module.css";
import Modal from "../PopUp/Modal";

function PopUp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className={style.addBtn}>
        +{" "}
      </button>
      {showModal && (
        <>
          {" "}
          <div
            className={`${style.modal} ${style["modal-background"]}`}
            onClick={() => setShowModal(false)}
          />
          <Modal onClose={() => setShowModal(false)} />
        </>
      )}
    </>
  );
}

export default PopUp;


