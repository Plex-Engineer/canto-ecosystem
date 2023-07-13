import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  width?: string;
  height?: string;
}

const Modal = ({ onClose, children, title, width, height, open }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    ref.current?.classList.add(styles.fadeout);
    setTimeout(() => {
      onClose();
    }, 400);
  }

  const modalContent = (
    <div className={styles.overlay} onClick={handleClose} ref={ref}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.wrapper}
        style={{
          width: width ? width : "auto",
          height: height ? height : "auto",
        }}
      >
        <div className={styles.modal}>
          <div className={styles.header}>
            <img
              onClick={handleClose}
              src="icons/close.svg"
              alt="close"
              height={20}
            />
          </div>
          {title && <h3 className={styles.title}>{title}</h3>}
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
  if (open) {
    return ReactDOM.createPortal(
      modalContent,
      document.querySelector("#modal-root")!
    );
  } else {
    return null;
  }
};

export default Modal;
