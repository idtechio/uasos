import { LanguageFlags } from "./LanguageFlags";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitcher = () => {
  const { locales, asPath } = useRouter();

  return (
    <>
      {locales
        ? locales.map((locale, i) => {
            return (
              <span key={i} style={{ marginLeft: -12 }}>
                <Link href={asPath} locale={locale}>
                  <a>
                    <LanguageFlags locale={locale} />
                  </a>
                </Link>
              </span>
            );
          })
        : null}
    </>
  );
};

export default LanguageSwitcher;
