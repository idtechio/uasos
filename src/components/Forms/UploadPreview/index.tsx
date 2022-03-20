import { StyleSheet, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import { Theme } from "../../../style/theme.config";

const DeletePhotoText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-top: 5px;
`;
const PreviewWrapper = styled.View`
  align-items: center;
  width: 100px;
  max-height: 100px;
  overflow: hidden;
  border: 1.5px #c8c8c8 dashed;
  border-radius: 10px;
  flex-direction: column;
  background: #fff;
  margin-top: 5px;
  margin-horizontal: 5px;
`;

type Props = {
  preview: string;
  onDelete: () => void;
};

const UploadPreview = ({ preview, onDelete }: Props) => {
  const { t } = useTranslation();

  return (
    <PreviewWrapper>
      <img src={preview} alt="" style={styles.image} />
      <TouchableOpacity onPress={onDelete}>
        <DeletePhotoText>{t("hostAdd.accomodationPhotoReset")}</DeletePhotoText>
      </TouchableOpacity>
    </PreviewWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default UploadPreview;
