import Text from "../text/text";
import styles from "./text_area.module.scss";

const TextArea = () => {
  return (
    <div className={styles.container}>
      <label
        htmlFor="p-details"
        style={{
          width: "100%",
        }}
      >
        <Text type="silkscreen" color="secondary" size={18}>
          Details
        </Text>
      </label>
      <textarea
        rows={6}
        name="details"
        id="p-details"
        className={styles["text-area"]}
      ></textarea>
    </div>
  );
};

export default TextArea;
