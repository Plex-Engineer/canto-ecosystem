import { Column, Row } from "../layout/layout";
import Text from "../text/text";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.full}>
        <Row gap={60}>
          <Column gap={30}>
            <Text>report bug</Text>
            <Text>documents</Text>
            <Text>about canto</Text>
          </Column>
          <Column gap={30}>
            <Text>report bug</Text>
            <Text>documents</Text>
            <Text>about canto</Text>
          </Column>
        </Row>
        <Column gap={20}>
          <Text color="secondary">all right reserved 2021-2022</Text>
          <Row gap={20}>
            <Text>twitter</Text>
            <Text>discord</Text>
            <Text>telegram</Text>
          </Row>
        </Column>
      </div>
    </div>
  );
};

export default Footer;
