import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components/native";
import { LanguageFlags } from "./LanguageFlags";

const Wrapper = styled.View`
  margin-left: 6px;
`;

function LanguageSwitcher() {
  const { locales, asPath } = useRouter();

  return locales ? (
    <>
      {locales.map((locale) => (
        <Wrapper key={locale}>
          <Link passHref href={asPath} locale={locale}>
            <a>
              <LanguageFlags locale={locale} />
            </a>
          </Link>
        </Wrapper>
      ))}
    </>
  ) : null;
}

export default LanguageSwitcher;
