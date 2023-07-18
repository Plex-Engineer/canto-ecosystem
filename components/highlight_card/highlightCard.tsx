import { Row } from "../layout/layout";
import Text from "../text/text";
import styles from "./highlight.module.scss";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  created_at: string;
  site: string;
}
const HighlightCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <Row justify="space-between" align="end">
        <Text type="silkscreen" size={24}>
          {props.title}
        </Text>
        <div
          style={{
            width: "100px",
          }}
        >
          <Text>{props.created_at}</Text>
        </div>
      </Row>
      <div className={styles["image-box"]}>
        <img className={styles.img} src={props.imageUrl} alt={props.title} />

        <a href={props.site} target="_blank">
          <Text color="primary" type="silkscreen">
            Open Link
          </Text>
        </a>
      </div>
      <Text>{props.description}</Text>
    </div>
  );
};

export default HighlightCard;
