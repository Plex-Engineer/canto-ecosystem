"use client";
import Text from "@/components/text/text";
import styles from "./page.module.css";
import Directory from "@/components/directory/directory";
import Modal from "@/components/modal/modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.main}>
      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
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
