import React from "react";
import { JDmodalConfigProps } from "../modal/Modal";
import { IUseModal } from "../../hooks/hook";
import { ImageUploaderProps } from "./FileManager";
export declare type TFileManagerLangs = {
    headTitle: string;
    cancelLabel: string;
    confrimLabel: string;
    fileAddLabel: string;
    unExsistFileMessage: string;
};
interface IProps extends ImageUploaderProps {
    modalProp?: JDmodalConfigProps;
    modalHook: IUseModal;
    langs?: TFileManagerLangs;
}
declare const ImageManagerModal: React.FC<IProps>;
export default ImageManagerModal;
