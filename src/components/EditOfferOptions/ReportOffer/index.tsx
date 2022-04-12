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
import { MODAL_TEXT, MODAL_STATUS } from "./constans";
import { Status } from "./types";

interface Props {
  close: () => void;
}

export default function ReportOffer({ close }: Props) {
  const { t } = useTranslation();
  const { mutate, error, isLoading } = useReportItem();
  const queryClient = useQueryClient();

  const { targetType, matchID, targetID } = useContext(EditOfferContext);

  const [problem, setProblem] = useState<string | null>(null);
  const [reportStatus, setReportStatus] = useState<Status>(
    MODAL_STATUS.REQUEST
  );

  const handleReport = () =>
    mutate(
      {
        matchID: matchID!,
        targetID,
        targetType,
        reportType: problem!,
      },
      {
        onSuccess: () => setReportStatus(MODAL_STATUS.SUCCESS),
        onError: () => setReportStatus(MODAL_STATUS.ERROR),
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

  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <ProblemIllustraion />
      {isLoading && <ActivityIndicator size="large" />}
      <FormHeader style={{ marginTop: 7 }}>
        {t(MODAL_TEXT[reportStatus].title)}
      </FormHeader>
      <FormDescription style={{ marginTop: 8, marginBottom: 38 }}>
        {reportStatus !== MODAL_STATUS.ERROR
          ? t(MODAL_TEXT[reportStatus].content)
          : (error as Error)?.message || "Couldn't report entry"}
      </FormDescription>
      {reportStatus === MODAL_STATUS.REQUEST ? (
        <SelectProblemDropdown onSelect={setProblem} problemType={problem} />
      ) : (
        ""
      )}
      <FormFooter
        style={{
          justifyContent:
            reportStatus !== MODAL_STATUS.REQUEST ? "center" : "space-between",
          flexDirection: "row",
        }}
      >
        {reportStatus !== MODAL_STATUS.REQUEST ? (
          <ButtonCta
            anchor={t("others:common.buttons.backToDesktop")}
            onPress={
              reportStatus === MODAL_STATUS.SUCCESS ? closeAfterSuccess : close
            }
          />
        ) : (
          <>
            <ButtonCta
              variant="outlined"
              anchor={t("others:common.buttons.cancel")}
              onPress={close}
            />
            <ButtonCta
              anchor={t("others:common.buttons.report")}
              onPress={handleReport}
              disabled={!problem || isLoading}
            />
          </>
        )}
      </FormFooter>
    </FormWrapper>
  );
}
