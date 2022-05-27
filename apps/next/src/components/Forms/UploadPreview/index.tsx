import React from "react";
import styled from "styled-components/native";

import CloseIcon from "../../../style/svgs/close.svg";

const PreviewWrapper = styled.View`
  position: relative;
  width: 85px;
  height: 85px;
  background: #fff;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
`;

const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #003566;
  border-radius: 100%;
  top: -10px;
  right: -10px;
`;

type Props = {
  preview: string;
  onDelete: (key: string) => void;
};

const UploadPreview = ({ preview, onDelete }: Props) => {
  return (
    <PreviewWrapper>
      <img
        alt=""
        src={preview}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
      />
      <IconWrapper onPress={() => onDelete(preview)}>
        <CloseIcon />
      </IconWrapper>
    </PreviewWrapper>
  );
};

export default UploadPreview;
