import React, { useRef, useEffect, useState } from "react";
import styles from "./PopUp.module.css";

function Modal({ onClose }) {
  const chooseColor = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [input, setInput] = useState("");
  // console.log(input);

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={modalRef} className={styles.container}>
      <h2 className={styles.header}>Create New group</h2>
      <div className={styles.groupContainer}>
        <h4 className={styles.groupName}>Group Name</h4>
        <div className={styles.inputContainer}>
          <input
            onChange={(event) => setInput(event.target.value)}
            id="textArea"
            type="text"
            placeholder="Enter group name"
          />
        </div>
      </div>
      <div className={styles.colorContainer}>
        <h4 className={styles.colOptions}>Choose colour</h4>
        <div className={styles.colorsContainer}>
          {chooseColor.map((color, index) => (
            <div
              key={index}
              className={styles.colorOption}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <button onClick={onClose} className={styles.btn}>
        Create
      </button>
    </div>
  );
}

export default Modal;
