import TabPanel from "../../../src/components/TabPanel";
import ProvidingSupport from "./ProvidingSupport";
import LookingForSupport from "./LookingForSupport";
import { useTranslation } from "next-i18next";

export default function SupportSection() {
  const { t } = useTranslation("desktop");
  return (
    <TabPanel
      items={[
        {
          key: "1",
          title: t("providingSupport"),
          content: ProvidingSupport({ offers: [] }),
        },
        {
          key: "2",
          title: t("lookingForSupport"),
          content: LookingForSupport({ requests: [] }),
        },
      ]}
      initialSelectedIndex={0}
    />
  );
}
