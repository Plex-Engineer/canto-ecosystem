"use client";

import Text from "../text/text";
import styles from "./selector.module.scss";
import React from "react";
interface Props {
  items: string[];
}

const Selector = (props: Props) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className={styles.container}>
      {props.items.map((item, idx) => (
        <Item
          key={item}
          active={selected === idx}
          onClick={() => {
            setSelected(idx);
          }}
        >
          {item}
        </Item>
      ))}
    </div>
  );
};

interface IProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}
const Item = (props: IProps) => {
  return (
    <div
      className={`${styles.item} ${props.active && styles.active}`}
      onClick={props.onClick}
    >
      <Text size={16}>{props.children}</Text>
    </div>
  );
};

export default Selector;
