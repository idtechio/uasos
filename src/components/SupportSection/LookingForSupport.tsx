import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";
import { AnnouncementHighlights } from "./AnnouncementHighlights";
import CardAdd from "./CardAdd";
import DetailsLink from "./DetailsLink";
import { Request } from "./types";
import { Error } from "../Inputs/style";
import {
  HeaderWrapper,
  MoreButtonWrapper,
  SupportCard,
  SupportWrapper,
  TextWrapper,
  Title,
  Label,
} from "./style";
import StatusBadge from "../StatusBadge";
import EditOfferButton from "../EditOfferOptions/EditOfferButton";
import { LoadingCards } from "./LoadingCards";
import styled from "styled-components/native";

type RequestProps = {
  requests?: Request[];
  isError: boolean;
  isLoading: boolean;
  readonly: boolean;
};

export default function LookingForSupport({
  requests,
  isError,
  isLoading,
  readonly,
}: RequestProps): JSX.Element {
  const { t } = useTranslation("desktop");
  if (!isLoading && (isError || !requests)) {
    return (
      <SupportWrapper>
        <Error>{t("could_not_fetch_requests_list")}</Error>
      </SupportWrapper>
    );
  }

  return (
    <SupportWrapper>
      <Title>{t("overviewOfYourOffers")}</Title>
      <Content isLoading={isLoading} requests={requests} readonly={readonly} />
    </SupportWrapper>
  );
}

const Content = ({
  isLoading,
  readonly,
  requests,
}: {
  isLoading: boolean;
  readonly: boolean;
  requests?: Request[];
}) => {
  if (isLoading || requests === undefined) {
    return <LoadingCards count={3} showImage={false} />;
  }
  if (requests.length === 0) {
    return <NoOffer readonly={readonly} />;
  }
  return <Requests requests={requests} readonly={readonly} />;
};

const NoOffer = ({ readonly }: { readonly: boolean }) => {
  const { t } = useTranslation("desktop");

  const router = useRouter();
  return (
    <CardAdd
      label={t("addRequest")}
      readonly={readonly}
      onPress={() => {
        if (!readonly) router.push(Routes.HOST);
      }}
    />
  );
};

const RequestTextWrapper = styled(TextWrapper)`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 8px;
`;

const RequestFirstLine = styled(Label)`
  font-size: 10px;
`;
const RequestSecondLine = styled(Label)`
  font-weight: 700;
  font-size: 14px;
`;

const Requests = ({
  requests,
  readonly,
}: {
  requests: Request[];
  readonly: boolean;
}) => {
  const { t } = useTranslation("desktop");

  return (
    <>
      {requests.map((r) => (
        <SupportCard key={r.id}>
          <HeaderWrapper>
            <MoreButtonWrapper>
              {!readonly && <EditOfferButton />}
            </MoreButtonWrapper>
            <RequestTextWrapper>
              <RequestFirstLine>{t("submission")}</RequestFirstLine>
              <RequestSecondLine>{t("accomodationSearch")}</RequestSecondLine>
            </RequestTextWrapper>
          </HeaderWrapper>
          <div
            style={{
              alignSelf: "flex-start",
              justifySelf: "flex-end",
              marginBottom: 14,
            }}
          >
            <StatusBadge state={r.state} />
          </div>
          <AnnouncementHighlights
            beds={r.beds}
            city={r.city}
            duration={r.duration}
          />

          {!readonly && (
            <DetailsLink
              href={{
                pathname: Routes.DETAILS,
                query: { id: r.id, type: "request" },
              }}
            />
          )}
        </SupportCard>
      ))}
    </>
  );
};
