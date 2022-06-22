import React, { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { FieldError, useFormContext } from "react-hook-form";

import UploadIcon from "../../../style/svgs/upload.svg";
import UploadPreview from "../UploadPreview";
import Compressor from "compressorjs";
import { MAX_HEIGHT, MAX_WIDTH, MIME_TYPE, QUALITY } from "./config";
import { blobToBase64 } from "./utils";
import { ButtonLabelText, List, UploadButton } from "./style";

type UploadInputProps = {
  accept?: string;
  name: string;
  label?: string;
  onFileChange(dataUris: Array<string>): void;
  onBlur?: (e: unknown) => void;
  disabled?: boolean;
  error?: FieldError;
};

// TODO: Change component to RN using https://github.com/rnmods/react-native-document-picker#readme
const UploadInput = ({
  accept = ".jpeg",
  label,
  onFileChange,
  disabled,
  name,
}: UploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, toggleLoading] = useState(false);

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
        inputRef.current.removeEventListener("change", handleChange);
      }
    };
  }, [onFileChange, uploadedPhotos]);

  return (
    <>
      <List>
        {uploadedPhotos.map((file: string) => (
          <UploadPreview key={file} preview={file} onDelete={handleDelete} />
        ))}
        {uploadedPhotos.length < 3 && (
          <>
            <UploadButton disabled={disabled} onPress={handleClick}>
              <UploadIcon />
              <ButtonLabelText>
                {isLoading ? <ActivityIndicator /> : <Text>{label}</Text>}
              </ButtonLabelText>
            </UploadButton>
            {/* TODO: Change input to RN element */}
            <input
              type="file"
              ref={inputRef}
              accept={accept}
              style={{ display: "none" }}
            />
          </>
        )}
      </List>
    </>
  );
};

export default UploadInput;
