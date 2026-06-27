import { images } from "./assets";

export const variants = {
  "pl-01": {
    title: "Trino Casino bonus 500% + 500 darmowych spinów",
    subtitle:
      "Premium landing dla graczy z Polski: mocny bonus, kosmiczne grafiki Trino, katalog slotów i szybka ścieżka od rejestracji do gry.",
    hero: images.heroVip,
    heroFocus: "center",
    bonus: "500%",
    spins: "500 FS",
    cashback: "25%",
    panelTitle: "VIP Experience",
    glassTitle: "Loterie, misje i nagrody Trino",
    glassText:
      "Bilety za aktywność, turnieje slotowe, cashback i statusowe nagrody. Mechanika jest prosta: gracz widzi benefit od pierwszego ekranu, a szczegóły dostaje niżej."
  },
  "pl-02": {
    title: "Trino Casino bonus 600% + 600 darmowych spinów",
    subtitle:
      "Wersja przygodowa z klimatem księgi, Zeusa i dużych jackpotów. Hero sprzedaje atmosferę, a oferta jest mocnym szkłem na pierwszym planie.",
    hero: images.heroAdventure,
    heroFocus: "center",
    bonus: "600%",
    spins: "600 FS",
    cashback: "30%",
    panelTitle: "Cosmic Book Bonus",
    glassTitle: "Księga bonusowa i free spiny",
    glassText:
      "Trino prowadzi użytkownika przez motyw odkrywania nagród: najpierw pakiet startowy, potem katalog slotów, następnie zasady wypłat, FAQ i pełny opis SEO."
  },
  "pl-03": {
    title: "Trino Casino na telefonie",
    subtitle:
      "Gry, bonusy, płatności i najpopularniejsze sloty w jednym mobilnym interfejsie. Biała wersja idzie w szkło, kryształy i maskotkę Trino.",
    hero: images.whitePhoneHero,
    heroFocus: "center",
    isLight: true,
    bonus: "450%",
    spins: "700 FS",
    cashback: "20%",
    panelTitle: "Sweet Spins Room",
    glassTitle: "Słodkie free spiny i szybka aktywacja",
    glassText:
      "Ta wersja gra kolorem, lollipopami i slotowym tempem. Zamiast ciężkich pustych bloków używa obrazów, glass boxów i krótkich sekcji z konkretną obietnicą."
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
  ["Instant start", "CTA i pakiet startowy są widoczne od razu, bez ukrywania warunków w małym druku."],
  ["Free spiny", "Pakiet kręci się wokół darmowych spinów, slotów i szybkiego przejścia do gry."],
  ["VIP rewards", "Status, cashback, turnieje i misje dają graczowi powód, żeby wrócić."],
  ["Mobile first", "Każdy blok ma wersję mobilną: katalog, panel gry, FAQ i footer."]
];

export const slotCatalog = [
  {
    id: "dog-house",
    title: "Dog House",
    provider: "Pragmatic Play",
    category: "Megaways",
    rtp: "96.51%",
    rating: "4.8",
    thumb: images.slotDog,
    art: images.promoDog,
    artLight: images.promoDog,
    description:
      "Popularny slot z bonus buy, mnożnikami i lekkim klimatem. W Trino używamy go jako sekcji pod casualowych graczy, którzy lubią szybkie rundy bonusowe."
  },
  {
    id: "sweet-bonanza",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    category: "Free spiny",
    rtp: "96.48%",
    rating: "4.7",
    thumb: images.slotSweet,
    art: images.promoSweet,
    artLight: images.whiteCandy,
    description:
      "Cukierkowy slot z kaskadową mechaniką i świetnym kontekstem dla darmowych spinów. Dobrze działa w białym wariancie oraz w tabach bonusowych."
  },
  {
    id: "big-bass",
    title: "Big Bass Bonanza",
    provider: "Pragmatic Play",
    category: "Wysoki RTP",
    rtp: "96.71%",
    rating: "4.6",
    thumb: images.slotBass,
    art: images.bigBassFishing,
    artLight: images.bigBassFishing,
    description:
      "Rozpoznawalny tytuł do katalogu, dobry jako prosta pozycja w rankingu. Kliknięcie może pokazać bardziej widowiskowy Trino-art w panelu po prawej."
  },
  {
    id: "olympus",
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    category: "Jackpot",
    rtp: "96.50%",
    rating: "4.9",
    thumb: images.slotOlympusWide,
    art: images.promoOlympus,
    artLight: images.whiteOlympusBook,
    description:
      "Mitologiczny slot z dużą energią wizualną. W Trino pasuje do sekcji jackpotów, mnożników i mocnego hero z błyskawicami."
  },
  {
    id: "book-of-ra",
    title: "Book of Ra Deluxe",
    provider: "Novomatic",
    category: "Book slot",
    rtp: "95.10%",
    rating: "4.5",
    thumb: images.slotBookWide,
    art: images.promoBook,
    artLight: images.promoBook,
    description:
      "Książkowy klasyk dla użytkowników szukających Book of Ra, Book of Sun i egipskich bonusów. Daje stronie SEO-szerokość poza samymi candy slots."
  }
];

export const alienScenes = [
  {
    title: "VIP sala Trino",
    label: "Little Alien + casino girls",
    image: images.heroVip,
    lightImage: images.whiteHostesses,
    text:
      "Duża scena z maskotką Trino i hostessami działa jak premium visual zamiast małej ozdoby w karcie."
  },
  {
    title: "Lucky charm w kasynie",
    label: "white premium",
    image: images.galleryOne,
    lightImage: images.whiteSpacesuit,
    text:
      "Biały wariant potrzebuje jasnych, czystych assetów, więc grafika ma dużo światła, szkła i złota."
  },
  {
    title: "Trino mobile lobby",
    label: "phone hero",
    image: images.galleryTwo,
    lightImage: images.whitePhoneHero,
    text:
      "Mobilny motyw łączy telefon, sloty i aliena bez wciskania treści afiliacyjnej w pierwszy ekran."
  },
  {
    title: "Free spins stage",
    label: "bonus energy",
    image: images.galleryThree,
    lightImage: images.whiteCandy,
    text:
      "Duże monety, światło i czytelny kadr pod sekcję bonusową. Bez obciętych głów i bez tekstu w grafice."
  },
  {
    title: "Sweet slot room",
    label: "candy world",
    image: images.galleryFour,
    lightImage: images.whiteOlympusBook,
    text:
      "Słodki wariant dla candy slots: dużo koloru, ale wciąż na czystym premium tle."
  },
  {
    title: "Book adventure",
    label: "adventure slots",
    image: images.galleryFive,
    lightImage: images.promoBook,
    text:
      "Scena pod książkowe i mitologiczne sloty, zostawiona jako duży moduł pod późniejszą podmianę."
  }
];

export const supportedSlotScenes = [
  {
    title: "Dog House",
    image: images.promoDog,
    lightImage: images.promoDog,
    text: "Wspieramy rozpoznawalne sloty Pragmatic Play, więc Dog House dostaje osobny duży art, nie tylko miniaturę."
  },
  {
    title: "Sweet Bonanza",
    image: images.promoSweet,
    lightImage: images.whiteCandy,
    text: "Candy sloty dobrze sprzedają free spiny. Duży obraz pod katalogiem robi więcej niż kolejna mała karta."
  },
  {
    title: "Book of Ra Deluxe",
    image: images.promoBook,
    lightImage: images.promoBook,
    text: "Książkowe sloty są mocne SEO-owo, dlatego mają własną scenę z Trino i bonusową atmosferą."
  },
  {
    title: "Gates of Olympus",
    image: images.promoOlympus,
    lightImage: images.whiteOlympusBook,
    text: "Mitologia, jackpoty i energia wysokich mnożników są pokazane jako pełny visual, bez ciasnego cropa."
  }
];

export const reviews = [
  ["Ksenia", "Warszawa", images.avatarKsenia, "Landing wygląda premium, a bonus nie ginie w tekście. Najbardziej podoba mi się katalog gier."],
  ["Denis", "Kraków", images.avatarDenis, "Klikasz slot i od razu widzisz większy art, RTP i opis. To dużo lepsze niż zwykłe kafelki."],
  ["Marina", "Poznań", images.avatarMarina, "Glass boxy i ciemny styl pasują do kasyna. Strona wygląda drożej i bardziej Trino."],
  ["Artem", "Wrocław", images.avatarArtem, "Footer wreszcie wygląda jak część strony, a nie mały dopisek na samym dole."]
];

export const faq = [
  ["Czy Trino Casino ma bonus dla nowych graczy?", "Tak, każdy wariant PL pokazuje mocny pakiet startowy z procentem bonusowym i darmowymi spinami. Oficjalne warunki trzeba potwierdzić u operatora."],
  ["Czy pokazujecie dane partnerskie graczom?", "Nie. Gracz widzi benefit: bonus, free spiny, cashback, VIP i jasną instrukcję. Dane kampanii nie są częścią landing page."],
  ["Czy katalog slotów jest interaktywny?", "Tak. Lista pokazuje normalne miniatury slotów, a kliknięcie zmienia duży panel z wygenerowaną grafiką Trino i opisem gry."],
  ["Czy strona działa na telefonie?", "Tak. Układ ma mobile-first katalog, jeden CTA, glass boxy bez przepełnień i footer, który nie znika na małym ekranie."],
  ["Czy można dodać więcej slotów?", "Tak. Wystarczy dodać miniaturę i opis w katalogu. Panel po prawej może używać zwykłej miniatury albo osobnej wygenerowanej grafiki."],
  ["Czy to oficjalna strona operatora?", "To promocyjny landing informacyjny dla osób 18+. Przed grą należy sprawdzić regulamin bonusu, płatności, wypłaty i lokalne przepisy."]
];
