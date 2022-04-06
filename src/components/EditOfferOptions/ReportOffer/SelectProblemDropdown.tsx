import { useTranslation } from "next-i18next";
import { useContext } from "react";
import { EditOfferContext } from "../EditOfferButton/index";
import React from "react";
import { Dropdown } from "../../Dropdown";
import { DropdownStyles, StyledLabel } from "./style";

const Label = ({ children }: { children: string }) => (
  <StyledLabel>{children}</StyledLabel>
);

interface Props {
  problemType: string | null;
  onSelect(problem: string | null): void;
}
export default function SelectProblemDropdown({
  problemType,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const { targetType } = useContext(EditOfferContext);

  const PROBLEM_TYPES = [
    ...(targetType == "hosts"
      ? [
          {
            label: (
              <Label>
                {t("others:reportProblem.popup.reasons.guestNotNeedHelp")}
              </Label>
            ),
            value: "report_guest_inactive",
          },
        ]
      : []),
    ...(targetType == "guests"
      ? [
          {
            label: (
              <Label>
                {t("others:reportProblem.popup.reasons.hostCantHelp")}
              </Label>
            ),
            value: "report_host_inactive",
          },
        ]
      : []),
    {
      label: (
        <Label>
          {t("others:reportProblem.popup.reasons.rejectedAfterContact")}
        </Label>
      ),
      value: "report_first_contact",
    },
    {
      label: (
        <Label>
          {t("others:reportProblem.popup.reasons.noResponseAfterContact")}
        </Label>
      ),
      value: "report_no_contact",
    },
    {
      label: <Label>{t("others:reportProblem.popup.reasons.notShowUp")}</Label>,
      value: "report_no_show_up",
    },
  ];

  return (
    <Dropdown
      styles={DropdownStyles}
      placeholder={t("others:forms.generic.selectFromList")}
      data={PROBLEM_TYPES}
      selected={problemType}
      itemPressFunction={onSelect}
    />
  );
}
