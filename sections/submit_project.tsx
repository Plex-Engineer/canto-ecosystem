"use client";
import { useState } from "react";
import styles from "./submit_project.module.scss";
import { Column, Row } from "@/components/layout/layout";
import TextField from "@/components/input/text_field";
import TextArea from "@/components/textarea/text_area";

const SubmitProject = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    tags: "",
    website: "",
    twitter: "",
  });

  return (
    <div className={styles.container}>
      <Column gap={30} align="center">
        <Row gap={30}>
          <TextField
            name="Name"
            label="Project Name"
            onChange={(e: any) => {
              setData({
                ...data,
                name: e.target.value,
              });
            }}
            value={data.name}
          />
          <TextField
            name="site"
            label="website"
            onChange={(e: any) => {
              setData({
                ...data,
                website: e.target.value,
              });
            }}
            value={data.website}
          />
        </Row>
        <Row gap={30}>
          <TextField
            name="twitter"
            label="twitter handle"
            onChange={(e: any) => {
              setData({
                ...data,
                twitter: e.target.value,
              });
            }}
            value={data.twitter}
          />
          <TextField
            name="category"
            label="category"
            onChange={(e: any) => {
              setData({
                ...data,
                tags: e.target.value,
              });
            }}
            value={data.tags}
          />
        </Row>
        <Column
          gap={10}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TextArea />
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

export default SubmitProject;
