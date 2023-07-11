import Text from "@/components/text/text";
import styles from "./page.module.css";
import Directory from "@/components/directory/directory";

export default function Home() {
  return (
    <main className={styles.main}>
      <Directory> directory</Directory>
    </main>
  );
}
