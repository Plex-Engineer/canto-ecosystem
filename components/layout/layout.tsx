import React from "react";

interface Props {
  children: React.ReactNode;
  gap?: number | "space-between";
  justify?: "start" | "center" | "end" | "space-between" | "stretch";
  align?: "start" | "center" | "end" | "space-between";
  style?: React.CSSProperties;
}
const Row = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: props.gap,
        justifyContent: props.justify,
        alignItems: props.align,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

const Column = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: props.gap,
        justifyContent: props.justify,
        alignItems: props.align,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export { Row, Column };
