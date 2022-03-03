import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { Text } from "react-native";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default function Account(props) {
  const { t } = useTranslation();

  return (
    <CompositionAppBody>
      <CompositionContainer>
        <Text>
          Polityka prywatności Celem niniejszej Polityki Prywatności jest
          wyjaśnienie zasad oraz praw związanych z przetwarzaniem Twoich danych
          osobowych przez ID Tech sp. z o.o. z siedzibą w Warszawie, ul. Jana
          Olbrachta 29 / 54, 01-102 Warszawa, zarejestrowaną w rejestrze
          przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd
          Rejonowy dla m. st. Warszawy w Warszawie, VIII Wydział Gospodarczy
          Krajowego Rejestru Sądowego pod numerem KRS: 0000925748, NIP:
          527-297-31-56, REGON: 520146250 w ramach udostępnianej Platformy oraz
          Aplikacji. Ilekroć w niniejszej polityce występują pojęcia pisane
          wielką literą, zostały one zdefiniowane w Regulaminie korzystania z
          platformy i aplikacji SOSUA.PL (dalej: Regulamin). I. Administrator
          danych Administrator danych Administratorem Twoich danych osobowych
          jest ID Tech sp. z o.o. z siedzibą w Warszawie, ul. Jana Olbrachta 29
          / 54, 01-102 w Warszawie, zarejestrowana w rejestrze przedsiębiorców
          Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla m. st.
          Warszawy w Warszawie, VIII Wydział Gospodarczy Krajowego Rejestru
          Sądowego pod numerem KRS: 0000925748, NIP: 527-297-31-56, REGON:
          520146250. Informacje kontaktowe Kontakt z Administratorem jest
          możliwy drogą korespondencyjną pod ww. adresem siedziby. Administrator
          danych osobowych powołał inspektora ochrony danych. Kontakt z
          inspektorem ochrony danych możliwy jest pod ww. adresem siedziby lub
          poprzez kontakt pocztą elektroniczną na adres: iod@id-tech.io II.
          Zakres, cele i okres przetwarzania danych osobowych Informacje ogólne
          W ramach zakładania przez Ciebie Konta, korzystania z naszej
          Platformy/Aplikacji i zamieszczania Ogłoszeń, otrzymujemy od Ciebie
          Twoje dane osobowe. Korzystanie z Platformy/Aplikacji możliwe jest
          jedynie po zapoznaniu się i zaakceptowaniu niniejszej Polityki
          Prywatności oraz Regulaminu. Przetwarzanie danych Podczas Rejestracji
          Konta na naszej Platformie lub w Aplikacji wymagamy od Ciebie podania
          następujących danych: ● Imię ● Adres e-mail ● Hasło (hasło znane jest
          wyłącznie Tobie, my go zabezpieczamy w taki sposób, aby nie znać jego
          treści) Przekazanie przez Ciebie ww. danych jest dobrowolne, ale
          niezbędne w celu zawarcia umowy i świadczenia przez nas na Twoją rzecz
          usług zgodnie z Regulaminem. Konsekwencją niepodania ww. danych będzie
          niemożliwość udostępnienia przez nas na Twoją rzecz oferowanych przy
          użyciu Platformy usług oraz korzystania z Konta, o którym mowa w
          Regulaminie. Po dokonaniu Rejestracji Konta, jeżeli chcesz opublikować
          Ogłoszenie, musisz uzupełnić dane w zakresie oferowanego lub
          poszukiwanego lokum, tj. podać następujące informacje: ● Miejscowości,
          której dotyczy Ogłoszenie ● Długości noclegu i możliwość przedłużenia
          tego okresu ● Wieku (przedziały wiekowe) ● Preferowanej liczbie osób,
          których dotyczy Ogłoszenie, w tym dzieci ● Informacji, kogo oferujący
          miejsce nocjegowe może przyjąć, ● Informacji o transporcie od granicy
          ● Informacji o ewentualnych ułatwieniach dla osób niepełnosprawnych ●
          Informacji czy Ogłoszenie dotyczy również zwierząt ● Informacji czy
          Ogłoszenie dotyczy: mieszkania, pokoju, miejsca w pokoju ● Płci (nie
          masz obowiązku wskazywać tych informacji, ale bardzo ułatwią nam dobór
          Ogłoszeń Gospodarzy do potrzeb Gości) ● Pochodzenia (nie masz
          obowiązku wskazywać tych informacji, ale bardzo ułatwią nam dobór
          Ogłoszeń Gospodarzy do potrzeb Gości) Konsekwencją niepodania ww.
          danych będzie niemożliwość zamieszczenia przez nas Ogłoszenia. Dane te
          są przetwarzane w oparciu o Twoją zgodę. Gromadzenie innych danych Gdy
          korzystasz z Konta, gromadzimy informacje o zamieszczonym przez Ciebie
          Ogłoszeniu, o Twoich działaniach na Platformie i w Aplikacji. W ramach
          Konta możesz dodatkowo umieścić swoje zdjęcie lub grafikę, które mogą
          przedstawiać Twój wizerunek. Zamieszczając swoje zdjęcie lub grafikę
          wyrażasz zgodę na ich przetwarzanie. W przypadku logowania się poprzez
          konto na Facebooku wyrażasz zgodę na przetwarzanie Twojego wizerunku
          lub grafiki zamieszczonej w serwisie Facebook, o czym również poniżej.
          W przypadku logowania się do naszej Platformy lub Aplikacji za
          pośrednictwem innych serwisów – usług uwierzytelniających, Twoje dane
          osobowe będziemy pozyskiwać za pośrednictwem tych źródeł (konto
          Facebook, konto Google). W takim wypadku będziemy pozyskiwać Twoje
          dane osobowe w postaci nazwy użytkownika, adresu e-mail, zdjęcia lub
          awataru, którymi posługujesz się w ramach serwisów poprzez które
          dokonujesz logowania. Twoje dane osobowe pochodzące z ww. źródeł
          będziemy przetwarzać tylko na potrzeby logowania i korzystania przez
          Ciebie z Platformy lub Aplikacji. Zgodnie z przyjętą praktyką
          większości stron internetowych, przechowujemy zapytania HTTP kierowane
          do naszego serwera. Przeglądane zasoby identyfikowane są poprzez
          adresy URL. Dane jakie możemy przetwarzać w tym celu to: publiczny
          adres IP komputera z którego nadeszło zapytanie, nazwę Użytkownika,
          dane pochodzące z plików cookies, informacje o Twoim ruchu na
          Platformie lub w Aplikacji, informacje o przeglądarce, parametry
          oprogramowania i sprzętu. Możemy również przetwarzać informacje
          pochodzące z logów do celów statystycznych oraz analitycznych dla
          zapewnienia jak najwyższej jakości usług. Zebrane logi przechowywane
          są przez czas nieokreślony jako materiał pomocniczy służący do
          administrowania Platformą i Aplikacją i służą m.in do towrzenia
          zbiorczych statystyk, które nie zawierają cech identyfikujących
          konkretne osoby. Cel i odstawy przetwarzania danych Będziemy
          przetwarzać Twoje dane w następujących celach: ● zawarcia i
          wykonywania umowy o świadczenie usług, jaką jest udostępnianie Ci
          Platformy/Aplikacji celem zamieszczania przez Ciebie Ogłoszeń –
          pamiętaj, że informacje, które zamieszczasz w Ogłoszeniu nie pochodzą
          ani nie są tworzone czy inicjowane przez nas. Nie ponosimy
          odpowiedzialności za informacje ani treści udostępniane przez Ciebie w
          ramach zakładania Konta i logowania, jak i Ogłoszenia. Pamiętaj, że
          podając swoje dane, odpowiadasz za ich poprawność, zgodność z
          Regulaminem; ● udzielenia odpowiedzi na wszelkie skierowane zapytania
          lub wnioski, w tym złożone poprzez formularz kontaktowy; ● realizacji
          obowiązków prawnych ciążących na nas, w tym zapewnienia bezpieczeństwa
          świadczonych usług; ● celach analitycznych lub statystycznych.
          Podstawą przetwarzania danych osobowych jest: ● Twoja zgoda - art 6
          ust 1 lit. a RODO odpowiednio w zw. z art. 9 ust. 1 lit. a RODO; ●
          niezbędność do zawarcia i wykonania umowy o świadczenie usług – art. 6
          ust. 1 lit. b RODO; ● realizacja obowiązków prawnych ciążących na
          Administratorze, w tym zapewnienia bezpieczeństwa świadczonych usług –
          art. 6 ust. 1 lit. c RODO; ● w zakresie prowadzenia statystyk lub
          analiz - art. 6 ust. 1 lit. f RODO (nasz prawnie uzasadniony interes w
          celu optymalizacji świadczonych przez nas usług). Okresy przetwarzania
          danych Dane zebrane w celach zawarcia i wykonania umowy będą
          przetwarzane przez okres jej trwania, tj. do czasu usunięcia Konta, a
          po tym czasie przechowywane do momentu upływu okresu przedawnienia
          roszczeń (w celu zabezpieczenia informacji na wypadek prawnej potrzeby
          wykazania faktów albo zabezpieczenia lub dochodzenia roszczeń lub
          ochrony przed nimi), tj. przez okres 2 lat. Dane te mogą być
          przechowywane dłużej, jeżeli obowiązek taki wynika z przepisów prawa
          (np. dotyczące archiwizacji). Twoje dane udostępnione w ramach
          kontaktu z nami, będą przetwarzane przez okres niezbędny do udzielenia
          odpowiedzi i ew. prowadzenia korespondencji, a następnie do chwili
          upływu okresu przedawnienia ewentualnych roszczeń, nie dłużej jednak,
          niż 6 lat. Pozostałe dane przetwarzane w oparciu o Twoją zgodę będą
          przetwarzanie do czasu wycofania zgody. III. Odbiorcy danych osobowych
          Komu udostępniamy dane Możemy udostępnić Twoje dane osobowe podmiotom
          trzecim, z którymi posiadamy zawarte umowy w zakresie usług
          przechowywania danych, usług analitycznych, w celu świadczenia przez
          te podmioty na naszą rzecz ww. usług. Podmioty te nie są i nie będą
          uprawnione do wykorzystywania Twoich danych osobowych dla własnych
          potrzeb. Bez Twojej zgody dane osobowe nie będą udostępniane innym
          podmiotom trzecim, za wyjątkiem ww. okoliczności oraz w sytuacji,
          kiedy przekazanie następuje uprawnionym podmiotom (m.in. organy
          ścigania czy wymiaru sprawiedliwości) - na skutek prawnie
          uzasadnionego żądania. Przesyłanie danych poza Wspólnotą Europejską
          Twoje dane osobowe mogą być przekazywane poza Europejski Obszar
          Gospodarczy, m. in. do: ● Google LLC z siedzibą w Mountain View, Stany
          Zjednoczone, w związku z korzystaniem przez nas z reCAPTCHA w celu
          zapewnienia bezpieczeństwa świadczonych usług oraz potwierdzenia, że
          nie jesteś robotem. Możedsz zapoznać się z informacjami dotyczącymi
          tego rozwiązania pod adresem:
          https://policies.google.com/privacy?hl=pl oraz
          https://policies.google.com/terms?hl=pl. ● Google Cloud Firestore -
          zewnętrznego dostawcy bazy danych. Możesz zapoznać się z informacjami
          dotyczącymi zabezpieczania Twoich danych osobowych przez dostawcę w
          witrynie internetowej https://firebase.google.com/support/privacy.
          Ruch na naszych stronach monitorowany jest przez system analityczny
          Google Analytics, którego celem jest gromadzenie informacji o sposobie
          korzystania ze stron i ich popularności. Informacje te (np. używana
          przeglądarka lub adres IP) nie będą nigdy udostępniane przez nas na
          rzecz podmiotów trzecich, z wyjątkiem dostawcy usług Google Analytics,
          tj. Google Inc. Dane te stanowią informacje dotyczącą urządzenia, a
          nie konkretnej osoby. Nie będziemy podejmować żadnych czynności
          zmierzających do identyfikacji tej osoby. Szczegóły polityki
          prywatności Google Analytics dostępne są pod adresem:
          http://www.google.com/analytics/learn/privacy.html. IV. Cookies
          Stosowane w usłudze Pliki Cookies zbierają jedynie informacje o
          urządzeniach i ustawieniach przeglądarki oraz są niezbędne do
          zapewnienia prawidłowości działania strony. Możesz zmodyfikować
          ustawienia dotyczące plików cookies. Ich zmiana może dotyczyć
          zablokowania automatycznej obsługi plików cookies lub informowania za
          każdym razem o ich wykorzystaniu w Twoich urządzeniach. Sposoby
          obsługi i możliwości modyfikacji plików cookies znajdują się
          ustawieniach używanej przez Ciebie przeglądarki internetowej. Musisz
          jednak wiedzieć, że wyłączenie stosowania cookies może spowodować
          utrudnienia lub uniemożliwić korzystanie z niektórych usług. Dodatkowo
          w usłudze mogą być wykorzystywane sesyjne pliki Cookies służące
          obsłudze informacji o zapoznaniu się z wyróżnionymi informacjami.
          Dzięki ich zastosowaniu informacja wyświetla się tylko raz dla jednej
          sesji użytkownika i nie ukazuje się ponownie. Wymieniony wyżej sesyjny
          plik Cookie występuje w określonym czasie, i tylko przez czas, w jakim
          strona jest odwiedzana przez użytkownika. V. Prawa osoby, której dane
          dotyczą W każdym przypadku macie prawo do: a. dostępu do swoich danych
          (w tym np. otrzymania informacji, które dane są przetwarzane); b.
          żądania sprostowania i ograniczenia przetwarzania danych (np. jeśli są
          nieprawidłowe); c. żądania usunięcia swoich danych (np. w przypadku,
          gdy były one przetwarzane niezgodnie z prawem); d. cofnięcia zgody w
          dowolnym momencie bez wpływu na zgodność z prawem przetwarzania,
          którego dokonano na podstawie zgody przed jej cofnięciem (w przypadku,
          gdy przetwarzanie odbywało się w oparciu o zgodę); e. przenoszenia
          danych, które dostarczyliście nam, i które są przetwarzane w sposób
          zautomatyzowany, a przetwarzanie odbywa się na podstawie zgody lub na
          podstawie umowy (przenoszenie np. do innego administratora); f.
          wniesienia sprzeciwu wobec przetwarzania danych, w przypadku, gdy
          przetwarzanie danych osobowych odbywa się do celów wynikających z
          prawnie uzasadnionych interesów realizowanych przez Administratora lub
          przez stronę trzecią; g. wniesienia skargi do Prezesa Urzędu Ochrony
          Danych (dane kontaktowe: dostępne na stronie: https://uodo.gov.pl/) w
          przypadku, gdy Twoim zdaniem przetwarzanie danych narusza przepisy
          dotyczące ochrony danych osobowych. Powyższe uprawnienia możesz
          wykonać, gdy: 1) w odniesieniu do żądania sprostowania danych: Twoje
          dane są nieprawidłowe lub niekompletne; 2) w odniesieniu do żądania
          usunięcia danych: Twoje dane nie są niezbędne do celów, dla których
          zostały zebrane; cofniesz swoją zgodę na przetwarzanie danych;
          zgłosisz uprzednio sprzeciw wobec przetwarzania Twoich danych; Twoje
          dane będą przetwarzane niezgodnie z prawem; dane powinny być usunięte
          w celu wywiązania się z obowiązku wynikającego z przepisu prawa; 3) w
          odniesieniu do żądania ograniczenia przetwarzania danych: zauważysz,
          że Twoje dane są nieprawidłowe; Twoje dane będą przetwarzane
          niezgodnie z prawem, ale nie będziesz chciał/a, aby zostały usunięte;
          Twoje dane nie są już nam potrzebne, ale mogą być potrzebne Tobie do
          obrony lub dochodzenia roszczeń; lub wniesiesz sprzeciw wobec
          przetwarzania danych – do czasu ustalenia, czy prawnie uzasadnione
          podstawy po naszej stronie są nadrzędne wobec podstawy sprzeciwu; 4) w
          odniesieniu do żądania przeniesienia danych jeśli przetwarzanie Twoich
          danych odbywa się na podstawie Twojej zgody lub umowy zawartej z Tobą
          oraz przetwarzanie to odbywa się w sposób automatyczny; 5) w
          odniesieniu do cofnięcia zgody: jeżeli Twoje dane przetwarzane są na
          podstawie zgody. VI. Bezpieczeństwo Co robimy W celu zapewnienia
          bezpieczeństwa: ● kontrolujemy metody gromadzenia, przechowywania i
          przetwarzania informacji; ● stosujemy fizyczne i organizacyjne środki
          bezpieczeństwa, aby przetwarzanie danych spełniało wymogi przewidziane
          przepisami o ochronie danych osobowych i by chroniło prawa osób,
          których dane przetwarza, w tym zabezpieczamy dane przed ich
          udostępnieniem osobom nieupoważnionym, zabraniem przez osobę
          nieuprawnioną, przetwarzaniem z naruszeniem przepisów prawa, zmianą,
          utratą, uszkodzeniem lub zniszczeniem; ● dbamy o szybkie przywrócenie
          dostępności danych osobowych i dostępu do nich w razie incydentu
          fizycznego lub technicznego; ● odpowiednio testujemy i oceniamy
          skuteczność środków technicznych i organizacyjnych mających zapewnić
          bezpieczeństwo przetwarzania; ● udzielamy dostępu do danych osobowych
          jedynie tym osobom, którzy muszą mieć do nich dostęp, w celu
          realizacji powierzonych im obowiązków i jedynie w takim zakresie, w
          jakim są im niezbędne do realizacji tych zadań. Osoby te są
          zobowiązane do zachowania ścisłej poufności, a w przypadku
          niewypełnienia tych zobowiązań mogą ponieść konsekwencje, łącznie z
          zakończeniem współpracy. Mechanizmy związane z przeciwdziałaniem ruchu
          zautomatyzowanego W celu zapewnienia bezpieczeństwa i przeciwdziałania
          robotom internetowym, korzystamy z Google reCAPTCHA do badania
          zachowania użytkowników pod kątem weryfikacji czy dane działania nie
          noszą znamion działania robotów. Możemy w związku z tym ujawniać
          Google LCC informacje, takie jak: adres IP oraz dane pozwalające
          stwierdzić czy nastąpiło działanie zautomatyzowane (ustawienia
          przeglądarki, techniczne elementy urządzenia, informacje o zachowaniu
          na naszej Platformie/w Aplikacji). Czy profilujemy Twoje dane osobowe
          Informacje podane przez Ciebie w Ogłoszeniu są profilowane pod kątem
          dopasowania oferowanego zakwaterowania do potrzeb osób poszukujących
          pomocy. Jednak w wyniku tych działań nie są podejmowane w stosunku do
          Ciebie decyzje wywołujące skutki prawne lub w podobny sposób istotnie
          na Ciebie wpływające. Stosowany przez nas mechanizm służy wyłącznie
          lepszemu doborowi publikowanych Ogłoszeń osób oferujących pomoc do
          potrzeb osób poszukujących tej pomocy. Jest to obecnie jedyny
          mechanizm pozwalający lepiej dopasować publikowane Ogłoszenia. VII.
          Postanowienia końcowe Oświadczenie dotyczące Polityki prywatności
          Zastrzegamy sobie prawo do jednostronnej zmiany Polityki Prywatności w
          każdym czasie, jeśli będzie to niezbędne w wyniku wprowadzenia
          modyfikacji w usługach, Regulaminie, polityce lub zarządzaniu spółki,
          prawie bądź jurysdykcji. Zmiany będą obowiązywać od dnia opublikowania
          ich na stronie wraz ze wskazaniem daty ich wprowadzenia. Platforma lub
          Aplikacja może zawierać odnośniki do innych stron WWW. Nie ponosimy
          odpowiedzialności za zasady zachowania prywatności obowiązujące na
          tych stronach. Po przejściu na inne strony, zapoznj się z ich polityką
          prywatności.
        </Text>
      </CompositionContainer>
    </CompositionAppBody>
  );
}
