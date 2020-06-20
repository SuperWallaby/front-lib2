import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Avatar from "./Avatar";
import JDcontainer from "../container/Container";
import { useFilesManager } from "../..";

export default {
  title: "Avatar",
  component: <Avatar />,
  decorators: [withKnobs],
};

export const standard = () => {
  const uploader = useFilesManager();

  return (
    <JDcontainer verticalPadding>
      <Avatar size="small" />
      <Avatar />
      <Avatar size="large" />
      <Avatar size="huge" />
      <Avatar size="huge" uploader={uploader} mode="edit" />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
