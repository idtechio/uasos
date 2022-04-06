import { useTranslation } from "next-i18next";
import { useContext } from "react";
import { EditOfferContext } from "../EditOfferButton/index";
import React, { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import ButtonCta from "../ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../style";
import SelectProblemDropdown from "./SelectProblemDropdown";
import { ProblemIllustraion } from "./style";
import { useReportItem } from "../../../queries/useListing";
import { useQueryClient } from "react-query";
import { QueryKeys } from "../../../queries/queryKeys";

interface Props {
  close: () => void;
}

export default function ReportOffer({ close }: Props) {
  const { t } = useTranslation();
  const { mutate, error, isLoading, isError } = useReportItem();
  const queryClient = useQueryClient();

  const { targetType, matchID, targetID } = useContext(EditOfferContext);
  const [problem, setProblem] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<
    "request" | "success" | "error"
  >("request");

  const onReport = () => {
    handleReport();
  };

  const handleReport = () =>
    mutate(
      {
        matchID: matchID!,
        targetID,
        targetType,
        reportType: problem!,
      },
      {
        onSuccess: () => setReportStatus("success"),
        onError: () => setReportStatus("error"),
      }
    );

  const closeAfterSuccess = useCallback(() => {
    if (targetType === "guests") {
      queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
    }

    if (targetType === "hosts") {
      queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
    }

    close();
  }, [queryClient, targetType, close]);

  const ModalContent = useCallback(() => {
    switch (reportStatus) {
      case "request":
        return (
          <>
            <FormHeader style={{ marginTop: 7 }}>
              {t("others:desktop.contextMenu.reportProblem")}
            </FormHeader>
            <FormDescription
              style={{ marginTop: 8, marginBottom: 38, maxWidth: "25ch" }}
            >
              {t("others:reportProblem.popup.description")}
            </FormDescription>
            <SelectProblemDropdown
              onSelect={setProblem}
              problemType={problem}
            />
            <FormFooter
              style={{
                marginTop: 53,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <ButtonCta
                variant="outlined"
                anchor={t("others:common.buttons.cancel")}
                onPress={close}
              />
              <ButtonCta
                anchor={t("others:common.buttons.report")}
                onPress={onReport}
                disabled={!problem || isLoading}
              />
            </FormFooter>
          </>
        );

      case "success":
        return (
          <>
            <FormHeader style={{ marginTop: 7 }}>
              {t("others:reportProblem.popup.problemReported")}
            </FormHeader>
            <FormDescription style={{ marginTop: 8, marginBottom: 38 }}>
              {t("others:reportProblem.popup.thanksForLettingKnow")}
            </FormDescription>
            <FormFooter style={{ justifyContent: "center" }}>
              <ButtonCta
                anchor={t("others:common.buttons.backToDesktop")}
                onPress={closeAfterSuccess}
              />
            </FormFooter>
          </>
        );
      case null:
      default:
        return null;
    }
  }, [reportStatus, problem]);

  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <ProblemIllustraion />
      {isLoading && (
        <>
          <ActivityIndicator size="large" />
        </>
      )}
      <ModalContent />
      {isError && (
        <>
          <FormHeader style={{ marginTop: 7 }}>
            {(error as Error)?.message || "Couldn't report entry"}
          </FormHeader>
          <FormFooter style={{ justifyContent: "center" }}>
            <ButtonCta
              anchor={t("others:common.buttons.backToDesktop")}
              onPress={close}
            />
          </FormFooter>
        </>
      )}
    </FormWrapper>
  );
}
