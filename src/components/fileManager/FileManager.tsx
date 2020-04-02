import React, { useState, useRef, useEffect } from "react";
import { IuseFilesManager, TlocalFile } from "../../hooks/hook";
import ImgViewer from "./ImgViewer";
import Align from "../align/Align";
import Button, { IButtonProps } from "../button/Button";
import FileLi from "./FileLi";
import { TFileManagerLangs } from "./FileManagerModal";

export const defaultLangSet = {
  cancelLabel: "취소",
  confrimLabel: "확인",
  fileAddLabel: "파일 추가",
  headTitle: "파일 관리하기",
  unExsistFileMessage: "파일이 존재하지 않습니다."
};

export interface ImageUploaderProps {
  uploaderHook: IuseFilesManager;
  addBtnProps?: IButtonProps;
  langs?: TFileManagerLangs;
}

let lastLength = 0;

const ImageUploader: React.FC<ImageUploaderProps> = ({
  uploaderHook,
  addBtnProps,
  langs = defaultLangSet
}) => {
  const {
    deleteUrl,
    isError,
    localFiles,
    onChangeFile,
    uploading,
    urls,
    deletelocalFile
  } = uploaderHook;

  const fileInput = useRef<HTMLInputElement>(null);
  const [selectFile, setSelectFile] = useState<string | TlocalFile | null>(
    null
  );
  const isEmptyFile = urls.length + localFiles.length === 0;

  const handleSelect = (file: string | TlocalFile | null) => {
    setSelectFile(file);
  };

  const fileContext = {
    handleSelect,
    deleteUrl,
    selectFile,
    deletelocalFile,
    langs
  };

  useEffect(() => {
    const isInUrls = urls.find(url => url === selectFile);
    const isInLocal = localFiles.find(file => file === selectFile);
    if (!isInLocal && !isInUrls) {
      setSelectFile(null);
    }
  }, [urls.length + localFiles.length]);

  useEffect(() => {
    if (lastLength !== localFiles.length) {
      if (lastLength < localFiles.length) {
        setSelectFile(localFiles[localFiles.length - 1]);
      }
      lastLength = localFiles.length;
    }
  }, [localFiles.length]);

  return (
    <div className="filesManager">
      <Align grid>
        <Align
          col={{
            full: 6,
            wlg: 12
          }}
        >
          <ImgViewer
            loading={uploading || false}
            minHeight={"9.375rem"}
            error={isError}
            uploaderRef={fileInput}
            urlOrBase64={
              //   @ts-ignore
              selectFile ? selectFile.base64 || selectFile : undefined
            }
            onChangeFile={onChangeFile}
            mb="normal"
          />
          <Button
            id="AddFileBtn"
            onClick={() => {
              fileInput.current?.click();
            }}
            br="round"
            size="long"
            mb="large"
            thema="primary"
            label={langs.fileAddLabel}
            {...addBtnProps}
          />
        </Align>
        <Align
          col={{
            full: 6,
            wlg: 12
          }}
        >
          {urls.map(url => (
            <FileLi fileContext={fileContext} url={url} isUrl={true} />
          ))}
          {localFiles.map(file => (
            <FileLi fileContext={fileContext} file={file} />
          ))}
          {isEmptyFile && <FileLi fileContext={fileContext} isSkelton />}
        </Align>
      </Align>
    </div>
  );
};

export default ImageUploader;
