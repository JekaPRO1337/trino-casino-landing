import { images } from "./assets";

export const variants = {
  "pl-01": {
    title: "Trino Casino bonus 400% do 25 000 zl + 500 DS",
    subtitle:
      "Premium landing dla graczy z Polski: aktualny welcome pack na pierwsze cztery depozyty, nowe sloty bonusowe i szybka sciezka od rejestracji do gry.",
    hero: images.heroVip,
    heroFocus: "center",
    bonus: "400%",
    spins: "500 DS",
    cashback: "75 zl",
    panelTitle: "VIP Experience",
    glassTitle: "Pakiet Trino na pierwsze 4 depozyty",
    glassText:
      "Oferta jest pokazana jasno: 400% do 25 000 zl, 500 darmowych spinow, minimalny depozyt 75 zl i cztery osobne kroki bonusowe zamiast starej, nieaktualnej obietnicy."
  },
  "pl-02": {
    title: "Trino Casino bonus 400% do 25 000 zl + 500 DS",
    subtitle:
      "Wersja przygodowa zostaje ciemna, prestizowa i kasynowa, ale promuje juz aktualny bonus na cztery depozyty oraz sloty z welcome packa.",
    hero: images.heroAdventure,
    heroFocus: "center",
    bonus: "400%",
    spins: "500 DS",
    cashback: "75 zl",
    panelTitle: "Cosmic Book Bonus",
    glassTitle: "Cztery depozyty, 500 free spinow",
    glassText:
      "Trino prowadzi gracza przez prosty plan: pierwszy depozyt z najmocniejszym limitem, kolejne trzy dopelniaja pakiet, a katalog pokazuje gry z aktualnej puli bonusowej."
  },
  "pl-03": {
    title: "Trino Casino na telefonie",
    subtitle:
      "Gry, bonusy, platnosci i najpopularniejsze sloty w jednym mobilnym interfejsie. Biala wersja idzie w szklo, krysztaly i aktualny pakiet Trino.",
    hero: images.whitePhoneClean2026,
    heroFocus: "center",
    isLight: true,
    bonus: "400%",
    spins: "500 DS",
    cashback: "75 zl",
    panelTitle: "Mobile Bonus Room",
    glassTitle: "Bialy mobile bonus bez zaslaniania grafiki",
    glassText:
      "Ta wersja pokazuje aktualny pakiet Trino w jasnym, krystalicznym stylu: 400% do 25 000 zl, 500 DS, minimum 75 zl i katalog gier przygotowany pod welcome pack."
  }
};

export const navItems = [
  ["Bonus", "bonus"],
  ["Sloty", "sloty"],
  ["Promocje", "promocje"],
  ["Opinie", "opinie"],
  ["Poradnik", "poradnik"],
  ["FAQ", "faq"]
];

export const highlights = [
  ["4 depozyty", "Welcome pack jest rozpisany na pierwsze cztery wplaty, wiec gracz od razu rozumie strukture oferty."],
  ["500 DS", "Darmowe spiny ida w grach z pakietu: Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas i Sweet Bonanza."],
  ["Min. 75 zl", "Polska wersja pokazuje lokalna kwote minimalnego depozytu, a nie euro z briefu partnerskiego."],
  ["VIP i cashback", "Po pakiecie startowym zostaja cashback, misje, statusy i szybkie wejscie do katalogu."]
];

export const depositSteps = [
  ["1. depozyt", "100% do 10 000 zl + 200 DS"],
  ["2. depozyt", "100% do 5 000 zl + 100 DS"],
  ["3. depozyt", "75% do 5 000 zl + 50 DS"],
  ["4. depozyt", "125% do 5 000 zl + 150 DS"]
];

export const slotCatalog = [
  {
    id: "luck-tiger",
    title: "Luck Of Tiger",
    provider: "NetGame",
    category: "Welcome pack",
    rtp: "96.20%",
    rating: "4.9",
    thumb: images.slotLuckTiger,
    thumbFit: "cover",
    art: images.collabLuckTiger,
    artLight: images.whiteSlotBoard2026,
    description:
      "Nowy slot z welcome packa Trino. Tygrys, mocny kolor i bonusowy klimat dobrze pasuja pod pierwszy ekran po kliknieciu w katalog."
  },
  {
    id: "le-viking",
    title: "Le Viking",
    provider: "Hacksaw Gaming",
    category: "Viking bonus",
    rtp: "96.30%",
    rating: "4.8",
    thumb: images.slotLeViking,
    thumbFit: "cover",
    art: images.collabLeViking,
    artLight: images.whiteAlienPhone2026,
    description:
      "Wikingowy slot z puli bonusowej. Daje sekcji ciemniejszy, przygodowy akcent i ladnie laczy sie z Trino-artem."
  },
  {
    id: "ze-zeus",
    title: "Ze Zeus",
    provider: "Hacksaw Gaming",
    category: "Zeus slot",
    rtp: "96.10%",
    rating: "4.9",
    thumb: images.slotZeZeus,
    thumbFit: "cover",
    art: images.slotZeZeus,
    artLight: images.whiteOlympusBook,
    artFit: "contain",
    description:
      "Zeus w aktualnym pakiecie jest dobry pod frazy mitologiczne, darmowe spiny i sekcje z wysokimi mnoznikami."
  },
  {
    id: "big-bass-vegas",
    title: "Big Bass Vegas Double Down Deluxe",
    provider: "Pragmatic Play",
    category: "Bonus buy",
    rtp: "96.71%",
    rating: "4.8",
    thumb: images.slotBigBassVegas,
    thumbFit: "cover",
    art: images.collabBigBassVegas,
    artLight: images.whiteAlienPhone2026,
    description:
      "Big Bass zostaje w katalogu, ale teraz w wariancie Vegas Double Down Deluxe z normalna miniatura i wiekszym Trino-artem po kliknieciu."
  },
  {
    id: "sweet-bonanza",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    category: "Free spiny",
    rtp: "96.48%",
    rating: "4.9",
    thumb: images.slotSweet,
    art: images.promoSweet,
    artLight: images.whiteCandy,
    description:
      "Cukierkowy slot z kaskadowa mechanika i dobrym kontekstem dla darmowych spinow. Dziala w ciemnych i bialych wersjach strony."
  },
  {
    id: "le-bandit",
    title: "Le Bandit",
    provider: "Hacksaw Gaming",
    category: "Bonus slot",
    rtp: "96.00%",
    rating: "4.8",
    thumb: images.slotLeBandit,
    thumbFit: "cover",
    art: images.collabLeBandit,
    artLight: images.whiteSlotBoard2026,
    description:
      "Le Bandit dodaje inny rytm do listy: mniej mitologii, wiecej szybkiej akcji i kolejny tytul z welcome packa."
  },
  {
    id: "olympus",
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    category: "Jackpot",
    rtp: "96.50%",
    rating: "5.0",
    thumb: images.slotOlympusWide,
    art: images.promoOlympus,
    artLight: images.whiteOlympusBook,
    description:
      "Mitologiczny slot z duza energia wizualna. Zostaje jako uniwersalny rozpoznawalny tytul obok nowych slotow z pakietu."
  }
];

export const alienScenes = [
  {
    title: "VIP sala Trino",
    label: "premium casino",
    image: images.heroVip,
    lightImage: images.whiteHostesses,
    text:
      "Duza scena z maskotka Trino i kasynowym premium visualem dziala jako mocny modul, nie mala ozdoba w rogu."
  },
  {
    title: "Trino bonus pack",
    label: "bonus slots",
    image: images.darkSlotBoard2026,
    lightImage: images.whiteSlotBoard2026,
    text:
      "Aktualne sloty z pakietu bonusowego sa pokazane na duzym obrazie: Luck Of Tiger, Big Bass Vegas, Ze Zeus, Le Bandit i Sweet Bonanza."
  },
  {
    title: "Mobile lobby",
    label: "phone hero",
    image: images.darkPhoneLobby2026,
    lightImage: images.whiteAlienPhone2026,
    text:
      "Telefon z grami zostaje mocnym motywem mobilnym, ale kazdy wariant dostaje odpowiednia wersje kolorystyczna."
  },
  {
    title: "Luck Of Tiger stage",
    label: "welcome slot",
    image: images.collabLuckTiger,
    lightImage: images.whiteCandy,
    text:
      "Tygrys dodaje do strony inny kolor i nowy slot z welcome packa, bez powtarzania tych samych grafik w kazdej karcie."
  },
  {
    title: "Le Viking arena",
    label: "viking slot",
    image: images.collabLeViking,
    lightImage: images.whiteOlympusBook,
    text:
      "Wikingowa scena pasuje do ciemnych wariantow i robi z katalogu bardziej prestizowy blok pod SEO."
  },
  {
    title: "Crystal mobile bonus",
    label: "white phone",
    image: images.collabLeBandit,
    lightImage: images.whitePhoneClean2026,
    text:
      "Bialy wariant uzywa jasnego telefonu i krysztalow, ciemne warianty dostaja osobne, kasynowe grafiki."
  }
];

export const supportedSlotScenes = [
  {
    title: "Luck Of Tiger",
    image: images.collabLuckTiger,
    lightImage: images.whiteSlotBoard2026,
    text: "Luck Of Tiger jest w welcome packu, wiec dostaje osobny duzy modul zamiast malej miniatury."
  },
  {
    title: "Le Viking",
    image: images.collabLeViking,
    lightImage: images.whiteAlienPhone2026,
    text: "Le Viking daje kasynowy, przygodowy akcent i rozbija strone wizualnie po ciemnych sekcjach."
  },
  {
    title: "Big Bass Vegas Double Down Deluxe",
    image: images.collabBigBassVegas,
    lightImage: images.whiteAlienPhone2026,
    text: "Big Bass Vegas zostaje pokazany jako duzy Trino-art, a nie obcieta miniatura z katalogu."
  },
  {
    title: "Le Bandit",
    image: images.collabLeBandit,
    lightImage: images.whiteSlotBoard2026,
    text: "Le Bandit jest kolejnym tytulem z paczki i daje stronie wiecej roznorodnosci niz same Zeus/Sweet."
  },
  {
    title: "Sweet Bonanza",
    image: images.promoSweet,
    lightImage: images.whiteCandy,
    text: "Sweet Bonanza nadal dobrze sprzedaje free spiny, dlatego zostaje w katalogu i sekcjach SEO."
  },
  {
    title: "Gates of Olympus",
    image: images.promoOlympus,
    lightImage: images.whiteOlympusBook,
    text: "Gates of Olympus zostaje rozpoznawalnym tytulem wspierajacym mitologiczny klimat strony."
  }
];

export const reviews = [
  ["Ksenia", "Warszawa", images.avatarKsenia, "Landing wyglada premium, a bonus 400% do 25 000 zl jest jasny od pierwszego ekranu."],
  ["Denis", "Krakow", images.avatarDenis, "Lista slotow ma normalne miniatury, RTP i duzy art po kliknieciu. To wyglada jak ranking, nie przypadkowa galeria."],
  ["Marina", "Poznan", images.avatarMarina, "Podoba mi sie, ze sa nowe gry z pakietu: Luck Of Tiger, Le Viking, Ze Zeus i Big Bass Vegas."],
  ["Artem", "Wroclaw", images.avatarArtem, "Footer, FAQ i platnosci sa czytelne, a strona nie wyglada jak tabelka afiliacyjna."]
];

export const faq = [
  ["Jaki jest aktualny bonus Trino Casino?", "Aktualny komunikat dla Polski to 400% do 25 000 zl i 500 darmowych spinow na pierwsze cztery depozyty. Minimalny depozyt w polskiej wersji to 75 zl."],
  ["Jak rozpisany jest pakiet na cztery depozyty?", "1. depozyt: 100% do 10 000 zl + 200 DS. 2. depozyt: 100% do 5 000 zl + 100 DS. 3. depozyt: 75% do 5 000 zl + 50 DS. 4. depozyt: 125% do 5 000 zl + 150 DS."],
  ["Jakie sloty sa w welcome packu?", "W briefie pojawiaja sie m.in. Luck Of Tiger, Le Viking, Le King, Gates Of Olympus, Le Pharaoh, Ze Zeus, Big Bass Vegas Double Down Deluxe, Sweet Bonanza, Le Bandit i Resurrecting Riches."],
  ["Czy katalog slotow jest interaktywny?", "Tak. Lista pokazuje miniatury slotow, RTP, typ gry i panel z duzym obrazem po kliknieciu. To jest wygodniejsze niz zwykla siatka kart."],
  ["Czy strona dziala na telefonie?", "Tak. Uklad ma mobile-first katalog, jeden wyrazny CTA, sekcje z obrazami, FAQ i footer z informacja 18+."],
  ["Czy to oficjalna strona operatora?", "To promocyjny landing informacyjny dla osob 18+. Przed gra nalezy sprawdzic regulamin bonusu, platnosci, wyplaty i lokalne przepisy."]
];
