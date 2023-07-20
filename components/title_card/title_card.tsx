import { Column, Row } from "../layout/layout";
import Text from "../text/text";
import styles from "./title_card.module.scss";

interface Props {
  title: string;
  subtitle: string;
}
const TitleCard = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  );
};

export default TitleCard;
