"use client";

import { useState } from "react";
import Modal from "../modal/modal";
import Text from "../text/text";
import styles from "./navbar.module.scss";
import IntegrateOnCanto from "@/sections/integrate_on_canto/integrate";
import Recommendation from "@/sections/recommendation/recommendation";
import Link from "next/link";

type ModalType = "" | "integrate" | "recommend";

const NavBar = () => {
  const [modalType, setModalType] = useState<ModalType>(""); // ["", "integrate"

  return (
    <nav className={styles.navbar}>
      <Modal
        open={modalType !== ""}
        onClose={() => {
          setModalType(""); //setting it to empty string will close the modal
        }}
        width="600px"
        height="500px"
        title={modalType === "integrate" ? "Integrate on Canto" : "Explore"}
      >
        {modalType === "integrate" && <IntegrateOnCanto />}
        {modalType === "recommend" && <Recommendation />}
      </Modal>
      <Text type="silkscreen" color="white" size={26}>
        CEDC Directory
      </Text>

      <ul className={styles["nav-list"]}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <Text type="silkscreen" color="white" size={14}>
            Ecosystem
          </Text>
        </li>
        <Link href="/spotlight">
          <li className={styles["nav-item"]}>
            <Text type="silkscreen" color="white" size={14}>
              Spotlight
            </Text>
          </li>
        </Link>
        <li
          className={styles["nav-item"]}
          onClick={() => {
            setModalType("recommend");
          }}
        >
          <Text type="silkscreen" color="white" size={14}>
            Explore
          </Text>
        </li>
        <li
          className={styles["nav-item"]}
          onClick={() => {
            setModalType("integrate");
          }}
        >
          <Text type="silkscreen" color="white" size={14}>
            Integrate on canto
          </Text>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
