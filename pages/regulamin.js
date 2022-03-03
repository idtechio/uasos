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
          REGULAMIN KORZYSTANIA Z PLATFORMY I APLIKACJI SOSUA.PL 1. Definicje 2.
          Postanowienia ogólne 3. Ogólne warunki korzystania z Serwisu i
          Aplikacji 4. Konto 5. Dodawanie Ogłoszeń 6. Działanie Użytkowników 7.
          Reklamacje 8. Własność intelektualna 9. Przerwa techniczna 10.
          Postanowienia końcowe 1. Definicje ID Tech - ID Tech sp. z o.o. z
          siedzibą w Warszawie, ul. Jana Olbrachta 29 / 54, 01-102 Warszawa,
          zarejestrowaną w rejestrze przedsiębiorców Krajowego Rejestru Sądowego
          prowadzonego przez Sąd Rejonowy dla m. st. Warszawy w Warszawie, VIII
          Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS:
          0000925748, NIP: 527-297-31-56, REGON: 520146250 Konto – zbiór danych,
          jakie są powiązane z danym Użytkownikiem, obejmujące informacje o jego
          aktywności na Platformie lub w Aplikacji, w tym informacje, jakie
          Użytkownik podaje w Platformie lub Aplikacji Rejestracja – proces
          utworzenia Konta przez Użytkownika, po zaakceptowaniu przez
          Użytkownika wymaganych dokumentów i zgód Użytkownik – oznacza osobę
          fizyczną posiadającą pełną zdolność do czynności prawnych, posiadająca
          Konto i korzystającą z Platofromy lub Aplikacji po zalogowaniu na
          Konto po wcześniejszym potwierdzeniu swojej autentyczności za pomocą
          loginu i hasła w Platformie lub Aplikacji i korzystający z
          funkcjonalności, zakresu danych, formularzy i funkcji udostępnionych
          przez ID Tech Odwiedzający – oznacza osobę fizyczną nieposiadającą
          Konta i niebędącą Użytkownikiem, która może korzystać z Platformy i
          Aplikacji bez rejestracji, zgodnie z zasadami określonymi niniejszym
          Regulaminem Platforma – prowadzona przez ID Tech sp. o.o. internetowa
          platforma online dostępna w domenie: SOSUA.pl Aplikacja –
          oprogramowanie działające na urządzeniach przenośnych, takich jak
          telefony komórkowe, smartfony czy tablety w systemach operacyjnych
          tych urządzeń, w systemie Windows lub Android, będąca w stanie
          wykorzystywać funkcje tych urządzeń do którego wszelkie prawa
          autorskie posiada ID Tech sp. o.o. Ogłoszenie Gospodarza – ogłoszenie
          pochodzące od Użytkownika, w ramach którego Użytkownik wyraża chęć
          udzielenia zakwaterowania, według kryteriów przewidzianych w ramach
          Platformy lub Aplikacji i określonych niniejszym Regulaminem
          Ogłoszenie Gościa - ogłoszenie pochodzące od Użytkownika, w ramach
          którego Użytkownik zgłasza zapotrzebowanie na zakwaterowanie, według
          kryteriów przewidzianych w ramach Platformy lub Aplikacji i
          określonych niniejszym Regulaminem. Ogłoszenie – ogłoszenie Gospodarza
          i Ogłoszenie Gościa RODO - Rozporządzenie Parlamentu Europejskiego i
          Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
          (ogólne rozporządzenie o ochronie danych) 2. Postanowienia ogólne 1.
          Niniejszy Regulamin określa warunki korzystania z Platformy i
          Aplikacji, w tym zasady Rejestracji, Konta oraz publikacji Ogłoszeń.
          2. Platforma i Aplikacja służą do wyszukiwania przez Użytkowników
          Ogłoszeń dotyczących udostępnienia lub otrzymania zakwaterowania.
          Platforma i Aplikacja stworzone zostały w celu udzielania pomocy
          uchodźcom, którzy zmuszeni zostali do opuszczenia Ukrainy w związku z
          wybuchem wojny. 3. Korzystanie z Platformy i Aplikacji jest bezpłatne.
          4. Każdy Odwiedzający oraz Użytkownik zobowiązany jest do stosowania
          się do niniejszego Regulaminu. 5. W ramach Platformy i Aplikacji
          umożliwia się: a. Odwiedzającemu - dostęp do treści Ogłoszeń; b.
          Użytkownikowi: i. dostęp do treści Ogłoszeń; ii. dostęp do Konta; iii.
          opublikowanie Ogłoszenia po zalogowaniu się na Konto; iv. wybór
          Ogłoszenia dopasowanego do kryteriów Użytkownika wystawiającego
          Ogłoszenie Gospodarza z Ogłoszeniem Gościa pochodzącym od innego
          Użytkownika. 3. Konto 1. W celu uzyskania dostępu do Konta konieczne
          jest dokonanie Rejestracji. 2. Konto umożliwia Użytkownikowi: a.
          Opublikowanie Ogłoszenia; b. Wybór jednego Ogłoszenia przedstawionego
          Użytkownikowi w wyniku dopasowania kryteriów Ogłoszenia Gospodarza z
          Ogłoszeniem Gościa. 3. Użytkownik w ramach jednego adresu e-mail może
          posiadać tylko jedno Konto w Platformie / Aplikacji. Użytkownik może
          tymi samymi danymi logować się w Platformie oraz Aplikacji. 4. W celu
          dokonania Rejestracji Użytkownik zobowiązany jest: a. Wypełnić
          formularz rejestracyjny dostępny w Platofmie lub Aplikacji i podać
          wymagane w nim dane, takie jak imię, adres e-mail, unikalne hasło lub
          uwierzytelnić za pośrednictwem zewnętrznego usługodawcy (Facebook,
          Google). Użytkownik zobowiązuje się do podania prawdziwych, pełnych i
          aktualnych danych. W razie zmiany danych Użytkownik jest zobowiązany
          do ich aktualizacji; b. Zapoznać się i zaakceptować niniejszy
          Regulamin oraz Politykę Prywatności; 5. Po dokonaniu kroków, o których
          mowa w pkt 4 powyżej, Użytkownik logujący się w ramach wypełniania
          formularza rejestracyjnego otrzyma wiadomość e-mail potwierdzającą
          rejestrację Konta. W przypadku uwierzytelniania za pośrednictwem
          zewnętrznego usługodawcy (Facebook, Google) Użytkownik nie otrzymuje
          wiadomości elektronicznej o założeniu Konta. 6. Podanie przez
          Użytkownika nieprawdziwych danych skutkować będzie natychmiastowym
          rozwiązaniem umowy o świadczenie usług Konta i usunięciem Konta. 7.
          Użytkownikowi nie wolno udostępniać Konta lub danych niezbędnych do
          logowania osobom trzecim. 8. Użytkownikowi zabrania się podejmowania
          działań sprzecznych z niniejszym Regulaminem, obowiązującymi
          przepisami prawa lub dobrymi obyczajami, w szczególności obejmuje to
          działania mogące naruszać dobra osobiste, nawoływanie do popełniania
          czynów zabronionych i ich pochwalanie, nawoływanie do nienawiści na
          tle narodowościowym, etnicznym, rasowym i wyznaniowym. 9. Użytkownik
          zobowiązuje się do zachowania wszelkich środków ostrożności mających
          na celu zachowanie w tajemnicy oraz ochronę danych przed
          nieuprawnionym ujawnieniem lub dostępem. 10. Z chwilą rejestracji
          Konta dochodzi do zawarcia umowy świadczenia przez ID Tech na rzecz
          Użytkownika usługi Konta, która zawarta zostaje na czas nieokreślony.
          11. Użytkownik może rozwiązać umowę o świadczenie usług Konta w każdym
          czasie poprzez wybranie opcji „Usuń Konto” w swoim Koncie. 12.
          Użytkownik będący konsumentem lub osobą fizyczną zawierająca umowę
          bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści
          tej umowy wynika, że nie posiada ona dla tej osoby charakteru
          zawodowego, może w terminie 14 dni od dnia zawarcia umowy odstąpić od
          niej bez podania przyczyny, składając oświadczenie w tym zakresie za
          pomocą wiadomości e-mail na adres: info@id-tech.io lub pisemnie na
          adres: ID Tech sp. z o.o., Andersia Business Center, Plac Andersa 7,
          61-894 Poznań. 13. Usunięcie Konta jest równoznaczne z utratą przez
          Użytkownika dostępu do Konta i wszelkich danych oraz informacji w nim
          zawartych, w tym treści Ogłoszenia. 14. ID Tech może rozwiązać z
          Użytkownikiem umowę o świadczenie usług Konta za miesięcznym okresem
          wypowiedzenia, jeśli Użytkownik: a. Nie logował się do swojego Konta
          przez okres dłuższy niż 12 miesięcy; b. Mimo założenia Konta nie
          zamieścił żadnego Ogłoszenia w przeciągu 30 dni od dnia dokonania
          Rejestracji. 15. O wypowiedzeniu umowy, o którym mowa powyżej, ID Tech
          zawiadomi Użytkownika w ramach korespondencji e-mail. 16. ID Tech może
          rozwiązać z Użytkownikiem umowę o świadczenie usług Konta w trybie
          natychmiastowym w następujących sytuacjach: a. Naruszania przez
          Użytkownika niniejszego Regulaminu, podejmowania działań sprzecznych z
          obowiązującymi przepisami prawa lub dobrymi obyczajami, w
          szczególności obejmuje to działania mogące naruszać dobra osobiste,
          nawoływanie do popełniania czynów zabronionych i ich pochwalanie,
          nawoływanie do nienawiści na tle narodowościowym, etnicznym, rasowym i
          wyznaniowym; b. Podejmowania przez Użytkownika działań mających na
          celu naruszanie dobrego imienia ID Tech lub działań, które mogą
          skutkować powstaniem po stronie ID Tech szkody; c. Podejmowaniu
          jakichkolwiek działań wskazujących na działanie zautomatyzowane. 4.
          Dodawanie Ogłoszeń A. Opublikowanie Ogłoszenia Gospodarza 1.
          Użytkownik w ramach dostępu do Konta uprawniony jest do dodawania
          Ogłoszenia Gospodarza. 2. Użytkownik może dodać tylko jedno Ogłoszenie
          Gospodarza w ramach jednej lokalizacji, w której oferuje
          zakwaterowanie. 3. Ogłoszenie Gospodarza dodaje Użytkownik mieszkający
          na terenie Rzeczpospolitej, posiadający tytuł prawny do lokalu,
          którego dotyczy to Ogłoszenie. 4. Opublikowanie Ogłoszenia Gospodarza
          odbywa się po zalogowaniu w Koncie i przejściu do zakładki: Dodaj
          Ogłoszenie. 5. Po dodaniu Ogłoszenia Gospodarza, Użytkownik otrzymuje
          wiadomość e-mail. Ogłoszenie Gospodarza podlega weryfikacji przez
          moderatora i po akceptacji moderatora staje się widoczne na Platformie
          lub Aplikacji, o czym Użytkownik jest powiadamiany wiadomością
          elektroniczną na podany przez niego przy Rejestracji adres e-mail. 6.
          Ogłoszenie dodawane jest poprzez wprowadzenie lub wybór odpowiednich
          danych i kryteriów zamieszczonych Na Platformie lub Aplikacji, takich
          jak: miejscowość, typ przestrzeni noclegowej, długość noclegu i
          możliwość przedłużenia tego okresu, wiek, liczba osób, w tym dzieci,
          informacja, kogo można przyjąć, czy zapewnia się transport od granicy,
          preferowane pochodzenie osób, możliwość przyjęcia zwierząt, ułatwienia
          dla osób niepełnosprawnych i płeć. Nie wszystkie informacje są
          obligatoryjne, ale pomocne są przy dopasowywaniu Ogłoszenia Gospodarza
          i Ogłoszenia Gościa. 7. Po wprowadzeniu niezbędnych danych i ich
          zaakceptowaniu dochodzi do opublikowania Ogłoszenia Gospodarza. 8. Na
          podstawie danych i kryteriów określonych w Ogłoszeniu Gospodarza
          następuje dopasowanie z Ogłoszeniem Gościa. Wynik dopasowania zostaje
          przedstawiony Użytkownikowi w ramach posiadanego Konta. O dopasowaniu
          Użytkownik publikujący Ogłoszenie Gospodarza zostaje powiadomiony w
          ramach korespondencji elektronicznej na podany przez niego przy
          Rejestracji adres e-mail. W korespondencji Użytkownik publikujący
          Ogłoszenie Gospodarza otrzymuje: - dane w postaci adresu e-mail
          Użytkownika, którego Ogłoszenie Gościa zostało sparowane; - link, w
          ramach którego Użytkownik potwierdza, iż Użytkownicy porozumieli się
          co do warunków zakwaterowania. Link aktywny będzie przez 6 godzin.
          Przez wskazany czas widoczność Ogłoszenia Gospodarza zostaje
          zawieszona i jest niewidoczna dla pozostałych Użytkowników i
          Odwiedzających Platformę lub Aplikację. W przypadku braku
          potwierdzenia porozumienia poprzez wskazany link w określonym czasie,
          Ogłoszenie Gospodarza zostaje odwieszona i jest widoczna na Platformie
          i Aplikacji. Potwierdzenie równoznaczne będzie z usunięciem Ogłoszenia
          z Platformy i Aplikacji. B. Opublikowanie Ogłoszenia Gościa 1.
          Użytkownik będący uchodźcą, który zmuszony został do opuszczenia
          Ukrainy w związku z wybuchem wojny w ramach dostępu do Konta
          uprawniony jest do dodawania Ogłoszeń Gościa. 2. Weryfikacja
          spełnienia przez Użytkownika warunku, o którym mowa w ust. 1 powyżej,
          ciąży na Użytkowniku publikującym Ogłoszenie Gospodarza, którego
          Ogłoszenie dopasowano do Ogłoszenia Gościa. 3. Użytkownik może dodać
          tylko jedno Ogłoszenie Gościa w ramach jednej lokalizacji, w której
          poszukuje zakwaterowania. 4. Opublikowanie Ogłoszenia Gościa odbywa
          się po zalogowaniu w Koncie i przejściu do zakładki: Dodaj Ogłoszenie.
          5. Po dodaniu Ogłoszenia Gościa, Użytkownik otrzymuje wiadomość
          e-mail. Ogłoszenie Gościa podlega weryfikacji przez moderatora i po
          akceptacji moderatora staje się widoczne Na Platformie lub Aplikacji,
          o czym Użytkownik jest powiadamiany wiadomością elektroniczną na
          podany przez niego przy Rejestracji adres e-mail. 6. Ogłoszenie
          dodawane jest poprzez wprowadzenie lub wybór odpowiednich danych i
          kryteriów zamieszczonych na Platformie lub Aplikacji, takich jak:
          miejscowość, rodzaj zakwaterowania (mieszkanie, pokój), długość
          noclegu i możliwość przedłużenia tego okresu, wiek, liczba osób, w tym
          dzieci, informacja, o tym, kto poszukuje noclegu, czy potrzebny jest
          transport od granicy, pochodzenie osób, możliwość przyjęcia zwierząt,
          ułatwienia dla osób niepełnosprawnych i płeć. Nie wszystkie informacje
          są obligatoryjne, ale pomocne są przy dopasowywaniu Ogłoszenia
          Gospodarza i Ogłoszenia Gościa. 7. Po wprowadzeniu wszystkich danych i
          ich zaakceptowaniu dochodzi do opublikowania Ogłoszenia Gościa. 8. Na
          podstawie danych i kryteriów określonych w Ogłoszeniu Gościa następuje
          dopasowanie z Ogłoszeniem Gospodarza. Wynik dopasowania zostaje
          przedstawiony Użytkownikowi w ramach posiadanego Konta. 9. O
          dopasowaniu Użytkownik publikujący Ogłoszenie Gospodarza zostaje
          powiadomiony w ramach korespondencji elektronicznej na podany przez
          niego przy Rejestracji adres e-mail. W korespondencji Użytkownik
          publikujący Ogłoszenie Gościa otrzymuje: - dane Użytkownika w postaci
          adresu e-mail, którego Ogłoszenie Gospodarza zostało sparowane; -
          link, w ramach którego Użytkownik potwierdza, iż Użytkownicy
          porozumieli się co do warunków zakwaterowania. Link aktywny będzie
          przez 6 godzin. Przez wskazany czas widoczność Ogłoszenia Gościa
          zostaje zawieszona i jest niewidoczna dla pozostałych Użytkowników i
          Odwiedzających Platformę lub Aplikację. W przypadku braku
          potwierdzenia porozumienia poprzez wskazany link w określonym czasie,
          Ogłoszenie Gościa zostaje odwieszone i jest widoczne na Platformie i
          Aplikacji. Potwierdzenie równoznaczne będzie z usunięciem Ogłoszenia z
          Platformy i Aplikacji. 5. Działanie Użytkowników 1. Wszelkie działania
          oraz zachowania Odwiedzającego lub Użytkownika powinny być zgodne z
          prawem, dobrymi obyczajami, obowiązującymi przepisami prawa,
          niniejszym Regulaminem. Zakazane jest korzystanie przez Odwiedzającego
          lub Użytkownika z Platformy lub Aplikacji w sposób niezgodny z ich
          przeznaczeniem, wbrew zasadom określonym niniejszym Regulaminem. 2.
          Odwiedzający i Użytkownik zobowiązuje się w szczególności do: a.
          Niepodejmowania jakichkolwiek działań, które mogłyby zakłócać
          prawidłowe działanie Platformy lub Aplikacji, w tym do nieingerowania
          w treści, zawartość Platformy lub Aplikacji; b. Niepodejmowania
          jakichkolwiek działań, które mogłyby zakłócać lub wpływać na elementy
          lub infrastrukturę techniczną Platformy lub Aplikacji; 3. Ponadto
          Użytkownik zobowiązuje się do: a. Niewprowadzania w błąd osób
          korzystających z Platformy lub Aplikacji, w tym poprzez podawanie
          fałszywych danych lub publikację nieprawdziwych Ogłoszeń; b.
          Nieposługiwania się danymi o charakterze bezprawnym, obraźliwym,
          naruszającymi dobre imię osób trzecich, dobra osobiste, w tym dobre
          imię, renomę. 4. W przypadku uzyskania przez Odwiedzającego lub
          Użytkownika wiarygodnej informacji o bezprawności działań lub treści
          zawartej w Platformie lub Aplikacji lub informacji o działaniu wbrew
          postanowieniom niniejszego Regulaminu, Użytkownik może dokonać
          zgłoszenia takiej sytuacji na adres: info@idtech.pl. Użytkownik
          dokonujący zgłoszenia powinien podać ID Tech dane w celu dokonania
          weryfikacji zgłoszenia. 6. Odpowiedzialność 1. ID Tech nie ponosi
          odpowiedzialności za zachowania, działania, zaniechania oraz treści
          zamieszczane przez Użytkowników na Platformie oraz Aplikacji, w tym w
          szczególności za ich prawdziwość, jakość, bezpieczeństwo danych. 2.
          Odwiedzający lub Użytkownik ponosi pełną odpowiedzialność za swoje
          działania i zaniechania związane z korzystaniem z Platformy lub
          Aplikacji, w tym Konta, publikowania Ogłoszeń, w szczególności może
          ponosić odpowiedzialność odszkodowawczą względem ID Tech lub innych
          Odwiedzających lub Użytkowników. 3. W przypadku uzyskania podejrzenia,
          że za pośrednictwem Konta może dojść lub dochodzi do działań
          bezprawnych, naruszających bezpieczeństwo innych użytkowników
          Platformy lub Aplikacji, naruszających bezpieczeństwo lub szkodzących
          ID Tech, ID Tech może tymczasowo lub trwale zablokować Użytkownikowi
          dostęp do Konta oraz powiadomić odpowiednie organy ścigania.
          Zablokowanie konta będzie równoznaczne czasowym lub trwałym
          zaprzestaniem świadczenia usług na rzecz Użytkownika. Trwała blokada
          Konta skutkować będzie rozwiązaniem umowy o świadczenie usług Konta. O
          blokadzie Konta Użytkownik zostanie powiadomiony w ramach
          korespondencji e-mail. 4. ID Tech nie dokonuje weryfikacji tożsamości
          osób korzystających z Platformy i Aplikacji. 5. ID Tech nie ponosi
          odpowiedzialności z tytułu nieprawidłowego dopasowania Ogłoszenia
          Gospodarza z Ogłoszeniem Gościem. 6. ID Tech nie jest pośrednikiem ani
          stroną jakichkolwiek umów, transakcji dokonywanych przez Użytkowników
          w ramach Platformy lub Aplikacji. W szczególności ID Tech nie
          pośredniczy w zawieraniu umów użyczenia/najmu lokalu. W ramach
          Platformy lub Aplikacji nie dochodzi do zawarcia jakichkolwiek umów.
          Wszelkie uzgodnienia pomiędzy Użytkownikami dokonywane są poza
          Platformą lub Aplikacją, za co ID Tech nie ponosi odpowiedzialności.
          7. Ogłoszenia mają charakter informacyjny i nie stanowią oferty w
          rozumieniu przepisów prawa cywilnego. 8. Każdy Użytkownik, który
          korzysta z Platformy lub Aplikacji, ponosi odpowiedzialność za skutki
          swoich działań lub zaniechań. Działania lub zaniechania niezgodne z
          prawem mogą skutkować odpowiedzialnością prawną, w tym karną na
          podstawie odrębnych przepisów. 7. Reklamacje 1. Odwiedzający lub
          Użytkownik może kontaktować się z ID Tech w sprawie nieprawidłowości
          świadczonych usług, działania Konta, Platformy, Aplikacji, w
          następujących formach: a. Poprzez korespondencję elektroniczną,
          kierowaną na adres: info@id-tech.io b. Pisemnie na adres: ID Tech sp.
          z o.o., Andersia Business Center, Plac Andersa 7, 61-894 Poznań. 2.
          Użytkownik jest uprawniony do złożenia reklamacji dotyczącej
          nienależytego wykonania lub niewykonania przez ID Tech usług
          określonych niniejszym Regulaminem. Użytkownik zobowiązany jest do
          złożenia reklamacji poprzez: a. korespondencję elektroniczną,
          kierowaną na adres: info@id-tech.io b. Przesłanie pisma na adres: : ID
          Tech sp. z o.o., Andersia Business Center, Plac Andersa 7, 61-894
          Poznań. 3. Reklamacja powinna zawierać przede wszystkim: imię, adres
          e-mail Użytkownika, żądanie Użytkownika składane w związku z
          reklamacją. Reklamacja nieposiadająca ww. danych może wymagać
          uzupełnienia, a w sytuacji niemożności zidentyfikowania osoby, od
          której reklamacja pochodzi, podlegać będzie ona odrzuceniu. 4. ID Tech
          zobowiązana jest do ustosunkowania się do złożonej reklamacji w ciągu
          30 dni od daty jej otrzymania. Odpowiedź udzielana będzie w ramach
          korespondencji elektronicznej, na podany przez Użytkownika adres. 8.
          Własność intelektualna 1. Treści publikowane na Platformie, w tym
          materiały tekstowe, graficzne, loga, video, stanowią przedmiot ochrony
          praw własności intelektualnej ID Tech. Zabronione jest jakiekolwiek
          wykorzystywanie tych treści bez uprzedniej zgody ID Tech, w tym
          zabronione jest wykorzystywanie oznaczeń Platformy lub Aplikacji.
          Zabrania się agregowania, zbierania i przetwarzania informacji i
          danych zawartych na Platformie lub w Aplikacji. 9. Przerwa techniczna
          1. ID Tech dołoży należytej staranności, aby świadczenie usług
          odbywało się w sposób niezakłócony. 2. ID Tech zastrzega sobie prawo
          do dokonywania przerw technicznych w działaniu Platformy lub
          Aplikacji. 3. Przerwy techniczne będą planowane w godzinach nocnych,
          aby nie zakłócać możliwości korzystania z Platformy lub Aplikacji. ID
          Tech zobowiązuje się do informowania o każdej zaplanowanej przerwie
          technicznej z odpowiednim wyprzedzeniem. 10. Postanowienia końcowe 1.
          ID Tech przetwarza dane osobowe Użytkowników zgodnie z obowiązującymi
          przepisami prawa oraz zgodnie z Polityką Prywatności stanowiącą
          załącznik do niniejszego Regulaminu. 2. Użytkownik zobowiązany jest do
          nieujawniania osobom trzecim informacji dotyczących innych
          Użytkowników, które otrzymał od ID Tech w związku z korzystaniem z
          Platformy lub Aplikacji. 3. ID Tech jest uprawniona do dokonywania
          zmian w Regulaminie w następujących sytuacjach: a. Zmiany przepisów
          prawa mających wpływ na usługi świadczone w ramach niniejszego
          Regulaminu; b. Zmian technologicznych i funkcjonalnych, c. Zmian
          związanych z bezpieczeństwem Użytkowników lub Platformy/Aplikacji; d.
          Zmian w Polityce prywatności; e. Zmian związanych z usprawnieniem
          Platformy lub Aplikacji. 4. O wszelkich zmianach Użytkownik będzie
          informowany poprzez zamieszczenie informacji w Platformie lub
          Aplikacji oraz drogą elektroniczną na podany przez niego przy
          Rejestracji adres e-mail. 5. Zmiany wchodzą w życie w terminie
          wskazanym w informacji, o której mowa w pkt 4 powyżej, nie krótszym
          niż 15 dni, za wyjątkiem sytuacji: a. Podlegania obowiązkowi prawnemu
          lub regulacyjnemu, na podstawie którego ID Tech zobowiązana jest do
          dokonania zmian Regulaminu i które uniemożliwiają dotrzymanie ww.
          terminu; b. Przeciwdziałania nieprzewidzianemu i bezpośredniemu
          zagrożeniu związanego z ochroną usług pośrednictwa internetowego,
          Użytkowników przed oszustwami, naruszeniem danych, spamem, złośliwym
          oprogramowaniem lub innymi zagrożeniami dla cyberbezpieczeństwa. 6.
          Prawem właściwym dla umowy pomiędzy ID Tech a Użytkownikiem jest prawo
          polskie. 7. 7. Użytkownicy będący konsumentami mają możliwość
          skorzystania z pozasądowego sposobu rozpatrywania reklamacji i
          dochodzenia roszczeń przed Stałym Polubownym Sądem Konsumenckim przy
          Wojewódzkim Inspektorze Inspekcji Handlowej w Poznaniu. Informacje o
          sposobie dostępu do ww. trybu i procedur rozstrzygania sporów,
          znajdują się pod adresem: www.uokik.pl, w zakładce Rozstrzyganie
          sporów konsumenckich. Dodatkowo konsumenci będący osobami fizycznymi,
          mogą skorzystać z platformy unijnej ODR, dostępnej pod adresem: 8.
          https://ec.europa.eu › consumers › odr 9. We wszystkich sprawach
          nieuregulowanych w niniejszym Regulaminie zastosowanie znajdują
          przepisy powszechnie obowiązującego prawa polskiego, a w szczególności
          przepisy kodeksu cywilnego, ogólnego rozporządzenia o ochronie danych
          oraz ustawy o świadczeniu usług drogą elektroniczną.
        </Text>
      </CompositionContainer>
    </CompositionAppBody>
  );
}
