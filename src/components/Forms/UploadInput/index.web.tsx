import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Platform } from "react-native";
import styled from "styled-components/native";
import UploadIcon from "../../../style/svgs/upload.svg";

type UploadInputProps = {
  accept: string;
  children: React.ReactNode;
  onFileChange(file: File, dataUri: string | undefined): void;
  disabled: boolean;
};

const UploadButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 12px 20px;
  border: 1.5px #c8c8c8 dashed;
  border-radius: 10px;
  flex-direction: column;
  background: #fff;
  width: 100px;
  height: 100px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  margin-top: 5px;
  margin-horizontal: 5px;
`;

const ButtonLabelText = styled.Text`
  color: #003566;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.5px;
  margin-top: 10px;
  text-align: center;
`;

const UploadInput = ({
  accept,
  children,
  onFileChange,
  disabled,
}: UploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, toggleLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.click();
    }
  }, [isLoading]);

  useEffect(() => {
    const handleChange = (event: Event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0] as File;
      const reader = new FileReader();
      toggleLoading(true);

      reader.onload = (ev) => {
        onFileChange(file, ev.target?.result as string);
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
  }, [onFileChange]);

  if (Platform.OS !== "web") {
    return null;
  }

  return (
    <>
      <UploadButton disabled={disabled} onPress={handleClick}>
        <UploadIcon
          style={{ marginLeft: "4px", width: "15px", height: "15px" }}
        />
        <ButtonLabelText>
          {isLoading ? <ActivityIndicator /> : children}
        </ButtonLabelText>
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
