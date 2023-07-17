import TextField from "@/components/input/text_field";
import Text from "@/components/text/text";
import { useState } from "react";
import styles from "./integrate.module.scss";
import { Column, Row } from "@/components/layout/layout";
const IntegrateOnCanto = () => {
  const [data, setData] = useState({
    author: {
      name: "",
      twitter: "",
      telegram: "",
    },
    project: {
      name: "",
      description: "",
    },
  });

  return (
    <div className={styles.container}>
      <Column gap={30} align="center">
        <Row gap={30}>
          <TextField
            name="Name"
            label="Name"
            onChange={(e: any) => {
              setData({
                ...data,
                author: {
                  ...data.author,
                  name: e.target.value,
                },
              });
            }}
            value={data.author.name}
          />
          <TextField
            name="project"
            label="Project Name"
            onChange={(e: any) => {
              setData({
                ...data,
                project: {
                  ...data.project,
                  name: e.target.value,
                },
              });
            }}
            value={data.project.name}
          />
        </Row>
        <Row gap={30}>
          <TextField
            name="twitter"
            label="twitter handle"
            onChange={(e: any) => {
              setData({
                ...data,
                author: {
                  ...data.author,
                  twitter: e.target.value,
                },
              });
            }}
            value={data.author.twitter}
          />
          <TextField
            name="telegram"
            label="telegram"
            onChange={(e: any) => {
              setData({
                ...data,
                author: {
                  ...data.author,
                  telegram: e.target.value,
                },
              });
            }}
            value={data.author.telegram}
          />
        </Row>
        <Column
          gap={10}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
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
        </Column>

        <input
          type="submit"
          value="submit"
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
        />
      </Column>
    </div>
  );
};

export default IntegrateOnCanto;
