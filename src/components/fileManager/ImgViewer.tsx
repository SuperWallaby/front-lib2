import React, { Fragment, useRef, ChangeEvent } from "react";
import { JDmbClass, JDmrClass } from "../../utils/autoClasses";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import JDLabel from "../label/JDLabel";
import Preloader from "../preloader/Preloader";
import classnames from "classnames";
import { s4 } from "../../utils/utils";

const fileImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgwZFJ7m2AzVe95PD2yra_4VpLvf7JvIUDRLikQ_-Zs0D0eAAX&usqp=CAU";

interface IProps extends JDatomExtentionSet, IDiv {
  minHeight?: string;
  height?: string;
  className?: any;
  coverImg?: boolean;
  canUploadImg?: boolean;
  autoHeight?: boolean;
  label?: string;
  onChangeFile?: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  urlOrBase64?: string;
  loading?: boolean;
  uploaderRef?: React.RefObject<HTMLInputElement>;
  error?: boolean;
}

const ImgViewer: React.FC<IProps> = ({
  loading,
  error,
  coverImg,
  mb,
  mr,
  minHeight,
  height,
  urlOrBase64,
  canUploadImg = true,
  onChangeFile,
  label,
  uploaderRef,
  className
}) => {
  const imgViewerRef = useRef<HTMLDivElement>(null);

  const classes = classnames("imgViewer", className, {
    "imgViewer--error": error,
    "imgViewer--loading": loading,
    "imgViewer--coverImg": coverImg,
    ...JDmbClass(mb),
    ...JDmrClass(mr)
  });

  const randomKey = s4();
  const isFile = urlOrBase64 && !urlOrBase64.includes("image");

  const imageStyle = {
    minHeight,
    backgroundImage: isFile ? `url(${fileImg})` : `url(${urlOrBase64})`
  };

  const imgViewerStyle = {
    height,
    minHeight
  };
  const imgViewer_loading_style = {
    backgroundImage: "none",
    minHeight
  };

  return (
    <Fragment>
      {label && <JDLabel txt={label} />}
      <div
        ref={imgViewerRef}
        className={classes}
        style={
          !loading && !urlOrBase64 ? imgViewerStyle : imgViewer_loading_style
        }
      >
        {canUploadImg && (
          <input
            ref={uploaderRef}
            tabIndex={-1}
            className="imgViewer__input"
            onChange={onChangeFile}
            id="photo"
            type="file"
            accept="image/*"
          />
        )}
        <div className="imgViewer__image-wrap">
          <div className="imgViewer__image" style={imageStyle}></div>
        </div>
        {/* 아래 이미지는 이미지 크기를 재는 용도로만 사용됨 */}
        <img
          style={{
            visibility: "hidden",
            opacity: 0,
            position: "absolute"
          }}
          id={`file${randomKey}`}
          src={isFile ? fileImg : urlOrBase64}
        />
        <Preloader size="large" noAnimation loading={loading} />
      </div>
    </Fragment>
  );
};

export default ImgViewer;
