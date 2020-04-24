import React from "react";
import { IuseFilesManager } from "../../hooks/hook";
import { IButtonProps } from "../button/Button";
import { TFileManagerLangs } from "./FileManagerModal";
export declare const defaultLangSet: {
    cancelLabel: string;
    confrimLabel: string;
    fileAddLabel: string;
    headTitle: string;
    unExsistFileMessage: string;
};
export interface ImageUploaderProps {
    uploaderHook: IuseFilesManager;
    addBtnProps?: IButtonProps;
    langs?: TFileManagerLangs;
}
declare const ImageUploader: React.FC<ImageUploaderProps>;
export default ImageUploader;
