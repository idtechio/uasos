import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Platform } from "react-native";
import styled from "styled-components/native";
import UploadIcon from "../../../style/svgs/upload.svg";

type UploadInputProps = {
  accept: string;
  children: React.ReactNode;
  onFileChange(file: File, dataUri: string): void;
};

const UploadButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 12px 20px;
  border: 1.5px #003566 solid;
  border-radius: 50px;
`;

const ButtonLabelText = styled.Text`
  color: #003566;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.5px;
`;

const UploadInput = ({ accept, children, onFileChange }: UploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const [isLoading, toggleLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.click();
    }
  }, [isLoading]);

  useEffect(() => {
    const handleChange = (event) => {
      const file = (event.target as HTMLInputElement).files[0];
      const reader = new FileReader();
      toggleLoading(true);

      reader.onload = (ev) => {
        onFileChange(file, ev.target.result as string);
        toggleLoading(false);
      };
      reader.onerror = () => toggleLoading(false);
      reader.onabort = () => toggleLoading(false);

      reader.readAsDataURL(file);
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("change", handleChange);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("change", handleChange);
      }
    };
  });

  if (Platform.OS !== "web") {
    return null;
  }

  return (
    <>
      <UploadButton onPress={handleClick}>
        <ButtonLabelText>
          {isLoading ? <ActivityIndicator /> : children}
        </ButtonLabelText>
        <UploadIcon
          style={{ marginLeft: "4px", width: "15px", height: "15px" }}
        />
      </UploadButton>
      <input
        type="file"
        accept={accept}
        ref={inputRef}
        style={{ display: "none" }}
      />
    </>
  );
};

export default UploadInput;