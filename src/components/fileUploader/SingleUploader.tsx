import React, { useRef, Fragment } from "react";
import { InputText } from "../InputText/InputText";
import Button, { IButtonProps } from "../button/Button";
import Align from "../align/Align";
import { IuseFilesManager } from "../../hooks/hook";
import { JDlabel } from "../..";

export interface IProps {
  label: string;
  fileUploaderHook: IuseFilesManager;
  buttonProps?: IButtonProps;
  index?: number;
}

export const FileUploader: React.FC<IProps> = ({
  label,
  fileUploaderHook,
  buttonProps,
  index
}) => {
  const { localFiles, onChangeFile } = fileUploaderHook;
  const file = localFiles[index || 0];
  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleBtnClick = () => {
    uploaderRef?.current?.click();
  };

  console.log("file");
  console.log(file);

  return (
    <Fragment>
      {label && <JDlabel txt={label} />}
      <Align flex={{}}>
        <input
          style={{
            position: "absolute",
            opacity: 0,
            width: "1px",
            height: "1px"
          }}
          type="file"
          onChange={onChangeFile}
          ref={uploaderRef}
        />
        <InputText value={file?.fileName} />
        <Button onClick={handleBtnClick} {...buttonProps} />
      </Align>
    </Fragment>
  );
};

export default FileUploader;
