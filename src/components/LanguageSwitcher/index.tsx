import LanguageFlags from "./LanguageFlags";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitcher = () => {
  const { locales, asPath } = useRouter();

  return (
    <>
      {locales
        ? locales.map((l, i) => {
            return (
              <span key={i} style={{ marginLeft: -12 }}>
                <Link href={asPath} locale={l}>
                  {LanguageFlags(l)}
                </Link>
              </span>
            );
          })
        : null}
    </>
  );
};

export default LanguageSwitcher;
