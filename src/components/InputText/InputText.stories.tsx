import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import InputText from "./InputText";
import "../../scss/components/InputText.scss";
import JDcontainer from "../container/Container";
import MDX from "./readMe.mdx";

export default {
  title: "InputText",
  component: () => <InputText />,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: MDX
    }
  }
};

export const standard = () => {
  return (
    <JDcontainer verticalPadding>
      <InputText />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard"
};
