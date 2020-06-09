import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import PhotoModal from "./PhotoModal";
import JDcontainer from "../container/Container";
import { useModal } from "../../hooks/hook";

export const standard = () => {
  const modalHook = useModal();
  return (
    <JDcontainer verticalPadding>
      <PhotoModal modalHook={modalHook}>Card Content</PhotoModal>
    </JDcontainer>
  );
};

export default {
  title: "Card",
  component: standard,
  decorators: [withKnobs],
};

standard.story = {
  name: "standard",
};
