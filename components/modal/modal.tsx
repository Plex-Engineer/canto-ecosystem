import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal = ({ onClose, children, title }: Props) => {
  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <a href="#" onClick={handleClose}>
              x
            </a>
          </div>
          {title && <h3 className={styles.title}>{title}</h3>}
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.querySelector("#modal-root")!
  );
};

export default Modal;
