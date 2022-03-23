import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Routes } from "../../../src/consts/router";
import CardAdd from "./CardAdd";
import { SupportCard, SupportWrapper, Title } from "./style";

type Request = {
  id: string;
};

type RequestProps = {
  requests: Request[];
};

export default function LookingForSupport({
  requests,
}: RequestProps): JSX.Element {
  const { t } = useTranslation("desktop");
  const router = useRouter();
  const NoOffer = () => (
    <CardAdd
      label={t("addSubmission")}
      onPress={() => router.push(Routes.GUEST)}
    />
  );
  const Offers = () => (
    <>
      {requests.map((_) => (
        <SupportCard>
          <span>i'm an guest</span>
        </SupportCard>
      ))}
    </>
  );
  return (
    <SupportWrapper>
      <Title>{t("yourSubmission")}</Title>
      {requests.length > 0 ? <Offers /> : <NoOffer />}
    </SupportWrapper>
  );
}
