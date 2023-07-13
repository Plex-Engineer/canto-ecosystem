"use client";
import Text from "@/components/text/text";
import styles from "./page.module.css";
import Directory from "@/components/directory/directory";
import Modal from "@/components/modal/modal";
import { useEffect, useState } from "react";
import { useScrollLock } from "@/utils/scrollLock";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll(8);
    } else {
      unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    <main className={styles.main}>
      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          width="500px"
          height="500px"
        >
          <Text>Modal</Text>
        </Modal>
      )}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open
      </button>
      <Directory> directory</Directory>
    </main>
  );
}
