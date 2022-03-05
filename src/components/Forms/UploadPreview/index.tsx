import { View, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const DeletePhotoText = styled.Text`
  color: ${(props) => props.theme.colors.error};
  margin-top: 5px;
`;
const PreviewWrapper = styled.View`
  align-items: center;
  // padding: 12px 20px;
  width: 100px;
  max-height: 100px;
  overflow: hidden;
  border: 1.5px #c8c8c8 dashed;
  border-radius: 10px;
  flex-direction: column;
  background: #fff;
  margin-horizontal: 10px;
  // max-width: 100px;
`;

const UploadPreview = ({ preview, onDelete }) => {
  const { t } = useTranslation();

  return (
    <PreviewWrapper>
      <img
        src={preview}
        alt=""
        style={{
          maxWidth: 100,
          maxHeight: 80,
          borderRadius: 8,
          overflow: "hidden",
        }}
      />
      <TouchableOpacity onPress={onDelete}>
        <DeletePhotoText>{t("hostAdd.accomodationPhotoReset")}</DeletePhotoText>
      </TouchableOpacity>
    </PreviewWrapper>
  );
};

export default UploadPreview;
