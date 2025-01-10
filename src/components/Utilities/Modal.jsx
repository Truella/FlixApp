import React from "react";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = ({ onClose }) => {
  return <div className={styles.modal_overlay} onClick={onClose}></div>;
};
const ModalContent = ({ children }) => {
  return <div className={styles.modal_content}>{children}</div>;
};
export default function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("modal_root")
      )}
      {ReactDOM.createPortal(
        <ModalContent>{children}</ModalContent>,
        document.getElementById("modal_root")
      )}
    </>
  );
}
