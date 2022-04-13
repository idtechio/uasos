import { useTranslation } from "next-i18next";
import React, { useCallback } from "react";
import { useQueryClient } from "react-query";
import { QueryKeys } from "../../../queries/queryKeys";
import { useDeleteItem } from "../../../queries/useListing";
import HomeIllustration from "../../../style/svgs/home_illustration.svg";
import ButtonCta from "../ButtonCta";
import {
  ButtonsBox,
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../style";
import { TargetTypes } from "../EditOfferButton/types";

export default function DeleteOfferForm({
  close,
  targetID,
  targetType,
}: {
  close(): void;
  targetID: string;
  targetType: TargetTypes;
}) {
  const { t } = useTranslation();
  const { mutate, isError, error, isSuccess, isLoading } = useDeleteItem();

  const handleDelete = () => mutate({ targetID, targetType });

  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />

      <FormHeader style={{ marginTop: 38 }}>
        {t("others:deleteOffer.popup.header")}
      </FormHeader>

      {isSuccess ? (
        <>
          <FormDescription style={{ marginTop: 40 }}>
            {t("others:deleteOffer.popup.confirmation")}
          </FormDescription>

          <ButtonCta
            style={{ marginTop: 88 }}
            onPress={close}
            anchor={t("others:common.buttons.close")}
          />
        </>
      ) : (
        <>
          <FormDescription style={{ marginTop: 40 }}>
            {t("others:deleteOffer.popup.areYouSure")}
          </FormDescription>

          <FormFooter>
            {isError && error && (
              <FormDescription style={{ color: "red", marginBottom: 12 }}>
                {(error as Error)?.message || "Couldn't delete entry"}
              </FormDescription>
            )}
            <ButtonsBox>
              <ButtonCta
                variant="outlined"
                anchor={t("others:common.buttons.cancel")}
                onClick={close}
              />
              <ButtonCta
                onPress={handleDelete}
                anchor={t("accomodationPhotoReset")}
                disabled={isLoading}
              />
            </ButtonsBox>
          </FormFooter>
        </>
      )}
    </FormWrapper>
  );
}
