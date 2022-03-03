const BASE_PATH = "/instructions";

export const DATA = [
  {
    title: "Rejestracja w portalu",
    text: "Użytkownik rejestruje się w portalu jako oferujący lokum albo potrzebujący schronienia.",
    image: `${BASE_PATH}/1.png`,
  },
  {
    title: "Wypełnienie formularza",
    text: "Użytkownik wypełnia formularz dotyczący oferowanego lokum lub poszukiwanego zakwaterowania.",
    image: `${BASE_PATH}/2.png`,
  },
  {
    title: "Automatyczne parowanie",
    text: "Algorytm przeszukuje bazę ogłoszeń oraz bazę potrzebujących i na podstawie dostarczonych informacji dobiera najlepsze połączenie.",
    image: `${BASE_PATH}/3.png`,
  },
  {
    title: "Informacja wysłana do użytkownika",
    text: "Po poprawnym dopasowaniu użytkownicy otrzymują wiadomość e-mail. W aplikacji widoczny jest dodatkowy opis połączonych użytkowników.",
    image: `${BASE_PATH}/4.png`,
  },
  {
    title: "Kontakt użytkowników ",
    text: "Po połączeniu, możliwy jest kontakt mailowy lub telefoniczny użytkowników w celu omówienia szczegółów.",
    image: `${BASE_PATH}/5.png`,
  },
  {
    title: "Potwierdzenie lub odrzucenie oferty",
    text: "Ostatnim krokiem jest potwierdzenie lub odrzucenie oferty w aplikacji. Jeśli oferta zostanie odrzucona, ogłoszenia wracają do puli dostępnych ogłoszeń.",
    image: `${BASE_PATH}/6.png`,
  },
];
