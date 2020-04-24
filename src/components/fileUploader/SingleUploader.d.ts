import React from "react";
import { IInputTextCutsomProp } from "../InputText/InputText";
import { IButtonProps } from "../button/Button";
import { IuseFilesManager } from "../../hooks/hook";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
export interface IProps extends IDiv, JDatomExtentionSet {
    label?: string;
    fileUploaderHook: IuseFilesManager;
    buttonProps?: IButtonProps;
    inputProps?: IInputTextCutsomProp;
    index?: number;
}
export declare const FileUploader: React.FC<IProps>;
export default FileUploader;
