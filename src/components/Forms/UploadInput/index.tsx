import ReactDOM from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { ActivityIndicator, Platform, Text } from "react-native";
import styled from "styled-components/native";
import UploadIcon from "../../../style/svgs/upload.svg";
import UploadPreview from "../UploadPreview";
import Compressor from "compressorjs";
import { MAX_HEIGHT, MAX_WIDTH, MIME_TYPE, QUALITY } from "./config";
import { blobToBase64 } from "./utils";
import ImageViewer from "react-simple-image-viewer";

type UploadInputProps = {
  accept?: string;
  name: string;
  label?: string;
  onFileChange(dataUris: Array<string>): void;
  onBlur?: (e: unknown) => void;
  disabled?: boolean;
  error?: FieldError;
};

const UploadButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1.5px #c8c8c8 dashed;
  border-radius: 10px;
  flex-direction: column;
  background: #fff;
  width: 85px;
  height: 85px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

const ButtonLabelText = styled.Text`
  color: #003566;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.5px;
  margin-top: 10px;
  text-align: center;
`;

const List = styled.View`
  display: flex;
  flex-direction: row;
  gap: 0px 15px;
`;

const UploadInput = ({
  accept = ".jpeg",
  label,
  onFileChange,
  disabled,
  name,
}: UploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, toggleLoading] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const { watch, setValue } = useFormContext();

  const uploadedPhotos: Array<string> = watch(name);

  const handleClick = useCallback(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.click();
    }
  }, [isLoading]);

  const handleDelete = (key: string) => {
    const filteredPhotos = uploadedPhotos.filter(
      (uploadedPhoto) => uploadedPhoto !== key
    );

    setValue(name, filteredPhotos, { shouldValidate: true });
  };

  useEffect(() => {
    const handleChange = (event: Event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0] as File;
      if (!file) {
        return null;
      }
      toggleLoading(true);

      new Compressor(file, {
        quality: QUALITY,
        mimeType: MIME_TYPE,
        maxHeight: MAX_HEIGHT,
        maxWidth: MAX_WIDTH,
        success(result) {
          blobToBase64(result).then((result) => {
            onFileChange([result as string, ...uploadedPhotos]);
            toggleLoading(false);
          });
        },
        error() {
          toggleLoading(false);
        },
      });
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("change", handleChange);
    }

    return () => {
      if (inputRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        inputRef.current.removeEventListener("change", handleChange);
      }
    };
  }, [onFileChange, uploadedPhotos]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  if (Platform.OS !== "web") {
    return null;
  }

  return (
    <>
      <List>
        {uploadedPhotos.map((file: string, index) => (
          <UploadPreview
            key={file}
            preview={file}
            onDelete={handleDelete}
            onClick={() => openImageViewer(index)}
          />
        ))}
        {uploadedPhotos.length < 3 && (
          <>
            <UploadButton disabled={disabled} onPress={handleClick}>
              <UploadIcon />
              <ButtonLabelText>
                {isLoading ? <ActivityIndicator /> : <Text>{label}</Text>}
              </ButtonLabelText>
            </UploadButton>
            <input
              type="file"
              ref={inputRef}
              accept={accept}
              style={{ display: "none" }}
            />
          </>
        )}
      </List>
      {isViewerOpen &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              zIndex: 100,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <ImageViewer
              src={uploadedPhotos}
              currentIndex={currentImage}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0, 0.7)",
              }}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          </div>,
          document.getElementById("photo-viewer") as HTMLDivElement
        )}
    </>
  );
};

export default UploadInput;
