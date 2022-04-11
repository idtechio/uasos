import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import TabPanel from "../TabPanel";
import LookingForSupport from "./LookingForSupport";
import ProvidingSupport from "./ProvidingSupport";
import { Offer, Request } from "./types";

type SupportSectionProps = {
  offers?: Offer[];
  isOffersLoading: boolean;
  isOffersInError: boolean;
  requests?: Request[];
  isRequestsLoading: boolean;
  isRequestsInError: boolean;
  readonly: boolean;
  identityVerified: boolean;
};

export default function SupportSection({
  offers,
  isOffersLoading,
  isOffersInError,
  requests,
  isRequestsLoading,
  isRequestsInError,
  readonly,
  identityVerified,
}: SupportSectionProps) {
  const { t } = useTranslation();

  const items = useMemo(() => {
    return [
      {
        key: "1",
        title: t("others:desktop.providingSupport"),
        content: (
          <ProvidingSupport
            offers={offers}
            isError={isOffersInError}
            isLoading={isOffersLoading}
            readonly={readonly}
            identityVerified={identityVerified}
          />
        ),
      },
      {
        key: "2",
        title: t("others:desktop.lookingForSupport"),
        content: (
          <LookingForSupport
            requests={requests}
            isError={isRequestsInError}
            isLoading={isRequestsLoading}
            readonly={readonly}
            identityVerified={identityVerified}
          />
        ),
      },
    ];
  }, [
    t,
    offers,
    isOffersLoading,
    isOffersInError,
    requests,
    isRequestsLoading,
    isRequestsInError,
    readonly,
    identityVerified,
  ]);

  return <TabPanel items={items} initialSelectedIndex={0} />;
}
