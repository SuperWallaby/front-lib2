import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Align from "./Align";
import "../../scss/all.scss";

export default {
  title: "Align",
  component: () => <Align />,
  decorators: [withKnobs]
};

const Block = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#ddd"
    }}
  />
);

export const standard = () => {
  return (
    <div>
      <Align
        style={{
          minHeight: "100px"
        }}
        flex={{}}
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>{" "}
      <Align
        flex={{
          vCenter: true,
          between: true
        }}
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>{" "}
    </div>
  );
};

standard.story = {
  name: "standard"
};
