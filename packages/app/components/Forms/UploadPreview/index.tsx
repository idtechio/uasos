import React from "react";
import CloseIcon from "../../../style/svgs/close.svg";
import { IconWrapper, PreviewWrapper, Image } from "./style";

type Props = {
  preview: string;
  onDelete: (key: string) => void;
};

const UploadPreview = ({ preview, onDelete }: Props) => {
  const onPressHandler = () => onDelete(preview);

  return (
    <PreviewWrapper>
      <Image source={{ uri: preview }} accessibilityLabel={""} />
      <IconWrapper onPress={onPressHandler}>
        <CloseIcon />
      </IconWrapper>
    </PreviewWrapper>
  );
};

export default UploadPreview;
