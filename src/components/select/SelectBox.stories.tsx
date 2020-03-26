import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import SelectBox from "./SelectBox";
import "../../scss/all.scss";
import JDcontainer from "../container/Container";
import { useSelect } from "../..";

export default {
  title: "SelectBox",
  component: () => <SelectBox />,
  decorators: [withKnobs]
};

export const standard = () => {
  const options = [
    {
      label: "Strawberry",
      value: "strawberry"
    },
    {
      label: "Apple",
      value: "apple"
    },
    {
      label: "Graph",
      value: "graph"
    }
  ];
  const selectBoxHook = useSelect(options[0]);

  return (
    <JDcontainer
      style={{
        minHeight: "500px"
      }}
      verticalPadding
    >
      <SelectBox {...selectBoxHook} options={options} />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard"
};
