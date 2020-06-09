import React from "react";
import { IUseModal } from "../../hooks/hook";
import JDmodal from "../modal/Modal";
import JDSlider from "../slider/Slider";
import PhotoFrame from "../photoFrame/PhotoFrame";
import { Slide } from "../slider/Slider";

type TPhotoModalInfo = {
  images: string[];
};

interface IProps {
  modalHook: IUseModal<TPhotoModalInfo>;
}

const PhotoModal: React.FC<IProps> = ({ modalHook }) => {
  const { images } = modalHook.info || { images: [] };
  return (
    <JDmodal {...modalHook}>
      <JDSlider>
        {(images || []).map((img: string) => (
          <Slide>
            <PhotoFrame src={img} />
          </Slide>
        ))}
      </JDSlider>
    </JDmodal>
  );
};

export default PhotoModal;
