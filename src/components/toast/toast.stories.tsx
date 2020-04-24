import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Toast from "./Toast";
import "../../scss/all.scss";
import JDcontainer from "../container/Container";
import JDbutton from "../button/Button";
import { toast } from "react-toastify";

export default {
  title: "Toast",
  component: () => <Toast />,
  decorators: [withKnobs],
};

export const standard = () => {
  return (
    <JDcontainer
      style={{
        minHeight: "500px",
      }}
      verticalPadding
    >
      <JDbutton
        onClick={() => {
          toast("토스트");
        }}
        label="토스트"
      />
      <JDbutton
        onClick={() => {
          toast.warn("토스트");
        }}
        thema="error"
        label="토스트"
      />
      <JDbutton
        onClick={() => {
          toast.success("토스트");
        }}
        thema="primary"
        label="토스트"
      />
      <Toast />
    </JDcontainer>
  );
};

standard.story = {
  name: "standard",
};
