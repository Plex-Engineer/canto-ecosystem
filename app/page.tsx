"use client";
import Text from "@/components/text/text";
import styles from "./page.module.css";
import Directory from "@/components/directory/directory";
import Modal from "@/components/modal/modal";
import { useEffect, useState } from "react";
import { useScrollLock } from "@/utils/scrollLock";
import IntegrateOnCanto from "@/sections/integrate";

export default function Home() {
  return (
    <main className={styles.main}>
      <Directory> directory</Directory>
    </main>
  );
}
