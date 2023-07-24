"use client";
import TitleCard from "@/components/title_card/title_card";
import styles from "./page.module.css";
import Directory from "@/components/directory/directory";

export default function Home() {
  return (
    <main className={styles.main}>
      <TitleCard
        title="Canto's Ecosystem"
        subtitle="An overview of the apps and integrations."
      />
      <Directory />
    </main>
  );
}
