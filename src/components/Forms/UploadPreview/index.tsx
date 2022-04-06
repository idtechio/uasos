import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import { Theme } from "../../../style/theme.config";

const DeletePhotoText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-top: 5px;
`;
const PreviewWrapper = styled.View`
  width: 100px;
  margin-top: 5px;
  overflow: hidden;
  background: #fff;
  margin-left: 5px;
  max-height: 100px;
  margin-right: 5px;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  border: 1.5px #c8c8c8 dashed;
`;

type Props = {
  preview: string;
  onDelete: (key: string) => void;
};

const UploadPreview = ({ preview, onDelete }: Props) => {
  const { t } = useTranslation();

  return (
    <PreviewWrapper>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={preview}
        style={{
          objectFit: "cover",
          width: 100,
          height: 80,
          borderRadius: 8,
          overflow: "hidden",
        }}
      />
      <TouchableOpacity onPress={() => onDelete(preview)}>
        <DeletePhotoText>{t("hostAdd.accomodationPhotoReset")}</DeletePhotoText>
      </TouchableOpacity>
    </PreviewWrapper>
  );
};

export default UploadPreview;
