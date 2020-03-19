import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Container from "./Container";
import "../../scss/components/card/Card.scss";

export default {
  title: "Card",
  component: () => <Container />,
  decorators: [withKnobs]
};

export const standard = () => {
  return (
    <Container
      style={{
        background: "#ccc"
      }}
    />
  );
};

standard.story = {
  name: "standard"
};
