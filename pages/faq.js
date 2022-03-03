import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { Text, StyleSheet, View } from "react-native";

export default function App(props) {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <h1>FAQ</h1>
        <h2>Do czego służy ten portal?</h2>
        <Text>
          Portal jest bazą ogłoszeń o noclegach i pomocy oferowanych przez
          Polaków uchodźcom z Ukrainy, którzy przybywają do Polski.
        </Text>
        <h2>Kto stworzył ten portal?</h2>
        <Text>
          Portal jest oddolną inicjatywą ludzi dobrej woli, którzy postanowili
          bezpłatnie i wspólnymi siłami stworzyć platformę pozwalającą realnie
          nieść pomoc ludziom, których dotknęła wojna w Ukrainie.
        </Text>
        <h2>Jak założyć konto?</h2>
        <Text>
          Aby założyć konto, wypełnij formularz zgłoszeniowy i podaj adres
          mailowy, na który zostanie wysłany link aktywacyjny.
        </Text>
        <h2>Czy muszę podawać moje dane osobowe?</h2>
        <Text>
          Aby poprawnie się zarejestrować, wystarczy podać swój adres mailowy.
          Wpisz swoje imię lub nick, by ułatwić komunikację między stronami.
        </Text>
        <h2>Jak wygląda polityka prywatności i RODO?</h2>
        <Text>
          Aby zapoznać się z polityką prywatności, wejdź w zakładkę „Polityka
          prywatności” oraz w zakładkę „RODO”.
        </Text>
        <h2>Jak usnunać konto</h2>
        <Text>
          Aby usunąć konto wejdz w ustawienie swojego konta i kliknij "usuń
          konto".
        </Text>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  comming: {
    textAlign: "center",
    marginTop: "30vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
