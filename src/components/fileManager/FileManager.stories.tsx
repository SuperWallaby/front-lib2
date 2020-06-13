import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FileManageModal from "./FileManagerModal";
import { useFilesManager } from "../../hooks/hook";
import { useModal, JDbutton } from "../..";

export const standard = () => {
  const fileManageHook = useFilesManager(
    [
      "https://item.kakaocdn.net/do/ae897b8fe81a9cf7bcbe9af58d473755f43ad912ad8dd55b04db6a64cddaf76d",
    ],
    "MyFileManager"
  );
  const modalHook = useModal(true);
  return (
    <div>
      <JDbutton onClick={modalHook.openModal} />
      <FileManageModal uploaderHook={fileManageHook} modalHook={modalHook} />
    </div>
  );
};

export default {
  title: "FileManager",
  component: standard,
  decorators: [withKnobs],
};

standard.story = {
  name: "standard",
};
