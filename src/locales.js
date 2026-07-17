import { images } from "./assets";
import {
  alienScenes as plAlienScenes,
  depositSteps as plDepositSteps,
  faq as plFaq,
  highlights as plHighlights,
  navItems as plNavItems,
  reviews as plReviews,
  slotCatalog as plSlotCatalog,
  supportedSlotScenes as plSupportedSlotScenes
} from "./content";

export const localizedVariants = {
  "ie-01": {
    locale: "ie",
    title: "Trino Casino Ireland: 400% up to EUR 5,000 + 500 FS",
    subtitle:
      "A polished VIP route for Irish players, with a four-deposit welcome package, familiar games and quick access on mobile.",
    hero: images.heroVip,
    heroFocus: "center",
    bonus: "400%",
    spins: "500 FS",
    cashback: "EUR 20",
    panelTitle: "Ireland VIP Experience",
    glassTitle: "Four deposits unlock the full Trino welcome package",
    glassText:
      "The offer combines up to EUR 5,000 in deposit bonuses with 500 free spins. Each stage is shown clearly, so Irish players can check the package before opening the casino."
  },
  "ie-02": {
    locale: "ie",
    title: "Trino Casino bonus for Ireland: 400% + 500 free spins",
    subtitle:
      "A cinematic casino edition with adventure games, an easy four-deposit bonus path and a full guide for players in Ireland.",
    hero: images.heroAdventure,
    heroFocus: "center",
    bonus: "400%",
    spins: "500 FS",
    cashback: "EUR 20",
    panelTitle: "Cosmic Book Bonus",
    glassTitle: "An Ireland casino bonus built across four deposits",
    glassText:
      "Start with the largest first-deposit step, continue through three extra stages and use the game catalogue to explore slots connected with the welcome package."
  },
  "ie-03": {
    locale: "ie",
    title: "Trino Casino on your phone",
    subtitle:
      "Games, payments, bonus details and popular slots in a bright mobile casino layout created for players across Ireland.",
    hero: images.whitePhoneClean2026,
    heroFocus: "center",
    isLight: true,
    bonus: "400%",
    spins: "500 FS",
    cashback: "EUR 20",
    panelTitle: "Mobile Bonus Room",
    glassTitle: "A clear mobile casino bonus for Ireland",
    glassText:
      "The bright Trino edition keeps the EUR 5,000 package, 500 free spins, payments and slot catalogue within easy reach on desktop or mobile."
  },
  "de-01": {
    locale: "de",
    title: "Trino Casino Deutschland: 400% bis 5.000 EUR + 500 Freispiele",
    subtitle:
      "Eine elegante VIP-Version mit vier Bonus-Einzahlungen, bekannten Spielautomaten und einem schnellen Einstieg fuer Spieler in Deutschland.",
    hero: images.darkSlotBoard2026,
    heroFocus: "center",
    bonus: "400%",
    spins: "500 FS",
    cashback: "20 EUR",
    panelTitle: "Deutschland VIP Club",
    glassTitle: "Das Trino Willkommenspaket fuer vier Einzahlungen",
    glassText:
      "Bis zu 5.000 EUR Bonus und 500 Freispiele werden auf vier Schritte verteilt. So lassen sich Betrag, Spiele und Bedingungen vor der Registrierung schnell vergleichen."
  },
  "de-02": {
    locale: "de",
    title: "Trino Casino Bonus: 400% + 500 Freispiele",
    subtitle:
      "Eine dunkle Abenteuerwelt mit Bonusspielen, transparenten Einzahlungsstufen und einem umfangreichen Casino-Ratgeber fuer Deutschland.",
    hero: images.heroAdventure,
    heroFocus: "center",
    bonus: "400%",
    spins: "500 FS",
    cashback: "20 EUR",
    panelTitle: "Cosmic Book Bonus",
    glassTitle: "Vier Einzahlungen und 500 Freispiele",
    glassText:
      "Der erste Schritt bietet den groessten Einzelbonus. Drei weitere Einzahlungen vervollstaendigen das Paket und fuehren direkt zu beliebten Trino Spielen."
  },
  "de-03": {
    locale: "de",
    title: "Trino Casino auf dem Smartphone",
    subtitle:
      "Bonus, Zahlungen und beliebte Slots in einer hellen mobilen Version fuer Spieler aus Deutschland.",
    hero: images.whiteSlotBoard2026,
    heroFocus: "center",
    isLight: true,
    bonus: "400%",
    spins: "500 FS",
    cashback: "20 EUR",
    panelTitle: "Mobile Bonus Lounge",
    glassTitle: "Trino mobil: Bonus und Spiele auf einen Blick",
    glassText:
      "Die helle Version verbindet den Bonus bis 5.000 EUR mit 500 Freispielen, klaren Zahlungsinfos und einem komfortablen Spielekatalog."
  }
};

const commonSlotImages = [
  ["luck-tiger", "Luck Of Tiger", "NetGame", images.slotLuckTiger, images.collabLuckTiger, images.whiteSlotBoard2026, "96.20%", "4.9"],
  ["le-viking", "Le Viking", "Hacksaw Gaming", images.slotLeViking, images.collabLeViking, images.whiteAlienPhone2026, "96.30%", "4.8"],
  ["ze-zeus", "Ze Zeus", "Hacksaw Gaming", images.slotZeZeus, images.slotZeZeus, images.whiteOlympusBook, "96.10%", "4.9"],
  ["big-bass-vegas", "Big Bass Vegas Double Down Deluxe", "Pragmatic Play", images.slotBigBassVegas, images.collabBigBassVegas, images.whiteAlienPhone2026, "96.71%", "4.8"],
  ["sweet-bonanza", "Sweet Bonanza", "Pragmatic Play", images.slotSweet, images.promoSweet, images.whiteCandy, "96.48%", "4.9"],
  ["le-bandit", "Le Bandit", "Hacksaw Gaming", images.slotLeBandit, images.collabLeBandit, images.whiteSlotBoard2026, "96.00%", "4.8"],
  ["olympus", "Gates of Olympus", "Pragmatic Play", images.slotOlympusWide, images.promoOlympus, images.whiteOlympusBook, "96.50%", "5.0"]
];

function makeSlots(language) {
  const copy = {
    ie: [
      ["Welcome game", "A colourful opening choice for players who want to explore the Trino welcome package and its free-spin selection."],
      ["Viking feature", "A Norse-themed slot that brings a darker adventure mood to the catalogue and works well beside the Trino cosmic artwork."],
      ["Mythology slot", "Lightning, multipliers and a bold mythological theme make Ze Zeus a natural option for bonus hunters in Ireland."],
      ["Bonus buy", "The Vegas edition adds quick rounds and a familiar fishing theme, supported by a large Trino preview after selection."],
      ["Free spins", "Bright candy symbols and cascading wins make Sweet Bonanza one of the most recognisable free-spin games in the lobby."],
      ["Bonus slot", "Le Bandit changes the pace with compact bonus action and a distinctive character-driven look."],
      ["High multipliers", "Gates of Olympus remains a player favourite with tumbling symbols, multipliers and a powerful Zeus theme."]
    ],
    de: [
      ["Willkommensspiel", "Ein farbstarker Einstieg in das Trino Willkommenspaket mit klarer Bonusmechanik und einer grossen Spielvorschau."],
      ["Wikinger-Bonus", "Nordische Motive und ein dunkler Abenteuerstil bringen Abwechslung in den deutschen Trino Spielekatalog."],
      ["Mythologie-Slot", "Blitze, Multiplikatoren und ein markantes Zeus-Thema machen dieses Spiel zur passenden Bonusauswahl."],
      ["Bonus Buy", "Die Vegas-Variante verbindet schnelle Bonusrunden mit einem bekannten Angelthema und grossem Trino-Artwork."],
      ["Freispiele", "Bunte Symbole und Kaskadengewinne machen Sweet Bonanza zu einem der bekanntesten Freispiele-Slots."],
      ["Bonusspiel", "Le Bandit bietet kompakte Action, einen eigenen Charakterstil und eine weitere Option im Willkommenspaket."],
      ["Multiplikatoren", "Gates of Olympus kombiniert Tumble-Gewinne, starke Multiplikatoren und das bekannte Zeus-Motiv."]
    ]
  }[language];

  return commonSlotImages.map(([id, title, provider, thumb, art, artLight, rtp, rating], index) => ({
    id,
    title,
    provider,
    category: copy[index][0],
    rtp,
    rating,
    thumb,
    thumbFit: "cover",
    art,
    artLight,
    artFit: id === "ze-zeus" ? "contain" : undefined,
    description: copy[index][1]
  }));
}

const ieAlienScenes = [
  ["Trino Ireland VIP room", "premium casino", images.heroVip, images.whiteHostesses, "A full casino scene introduces the Trino brand with premium lighting, hosts and a clear Ireland casino atmosphere."],
  ["Four-deposit bonus lobby", "welcome package", images.darkSlotBoard2026, images.whiteSlotBoard2026, "The slot board connects the 400% package with familiar games and keeps the 500 free spins close to the catalogue."],
  ["Mobile casino Ireland", "play on mobile", images.darkPhoneLobby2026, images.whitePhoneClean2026, "The phone view keeps games, payments and bonus details easy to reach across Dublin, Cork, Galway and beyond."],
  ["Luck Of Tiger feature", "player favourite", images.collabLuckTiger, images.whiteCandy, "A bright tiger scene adds a different visual rhythm and a recognisable welcome-game option."],
  ["Le Viking adventure", "bonus game", images.collabLeViking, images.whiteOlympusBook, "The Viking artwork gives the dark editions a richer adventure theme without repeating the hero image."],
  ["Crystal casino access", "secure route", images.collabLeBandit, images.whiteAlienPhone2026, "A dedicated mobile scene closes the visual story with a direct route to the live Trino lobby."]
].map(([title, label, image, lightImage, text]) => ({ title, label, image, lightImage, text }));

const deAlienScenes = [
  ["Trino Premium-Lounge", "casino deutschland", images.darkSlotBoard2026, images.whiteSlotBoard2026, "Eine grosse Casino-Szene verbindet die Trino Spielewelt mit Bonus, Freispielen und einem hochwertigen Auftritt."],
  ["Mobiles Trino Casino", "smartphone", images.darkPhoneLobby2026, images.whitePhoneClean2026, "Auf dem Smartphone bleiben Spiele, Bonusbedingungen und Zahlungen schnell erreichbar."],
  ["VIP Casino Nacht", "premium club", images.heroVip, images.whiteHostesses, "Dunkles Licht, Gold und Casino-Atmosphaere geben der deutschen Version einen eigenstaendigen VIP-Charakter."],
  ["Le Bandit Bonus", "schnelle runden", images.collabLeBandit, images.whiteAlienPhone2026, "Le Bandit bringt einen anderen Spielstil und mehr Abwechslung in die lange Trino Seite."],
  ["Zeus und Freispiele", "mythologie", images.promoOlympus, images.whiteOlympusBook, "Die Mythologie-Szene begleitet Gates of Olympus und Ze Zeus mit einer starken grossen Vorschau."],
  ["Sweet Bonanza Welt", "freispiele", images.promoSweet, images.whiteCandy, "Die helle Candy-Welt setzt einen farbigen Gegenpunkt zu den dunklen Casino-Bereichen."]
].map(([title, label, image, lightImage, text]) => ({ title, label, image, lightImage, text }));

const ieSupported = [
  ["Luck Of Tiger", images.collabLuckTiger, images.whiteSlotBoard2026, "A colourful welcome game with a large preview, clear RTP and quick access to the Trino lobby."],
  ["Le Viking", images.collabLeViking, images.whiteAlienPhone2026, "Norse adventure visuals bring variety to a catalogue that also includes modern mobile slots."],
  ["Big Bass Vegas", images.collabBigBassVegas, images.whitePhoneClean2026, "The familiar fishing series receives a full-width Trino scene rather than a small cropped tile."],
  ["Le Bandit", images.collabLeBandit, images.whiteSpacesuit, "Fast bonus action and a distinctive character make Le Bandit easy to spot in the game list."],
  ["Sweet Bonanza", images.promoSweet, images.whiteCandy, "One of Ireland's best-known colourful slots, with cascades and free-spin rounds."],
  ["Gates of Olympus", images.promoOlympus, images.whiteOlympusBook, "Zeus, tumbling wins and multipliers complete the Trino player-favourites selection."]
].map(([title, image, lightImage, text]) => ({ title, image, lightImage, text }));

const deSupported = [
  ["Gates of Olympus", images.promoOlympus, images.whiteOlympusBook, "Zeus, Tumble-Gewinne und Multiplikatoren gehoeren zu den bekanntesten Motiven im Trino Katalog."],
  ["Sweet Bonanza", images.promoSweet, images.whiteCandy, "Der farbenfrohe Klassiker bietet Kaskaden und eine beliebte Freispiele-Runde."],
  ["Luck Of Tiger", images.collabLuckTiger, images.whiteSlotBoard2026, "Ein kraftvolles Tiger-Motiv und eine klare Spielvorschau fuer den Einstieg in das Bonuspaket."],
  ["Le Viking", images.collabLeViking, images.whiteAlienPhone2026, "Nordische Abenteuer schaffen einen starken Kontrast zu Candy- und Mythologie-Slots."],
  ["Big Bass Vegas", images.collabBigBassVegas, images.whitePhoneClean2026, "Die Vegas-Ausgabe der Angelserie wird mit grossem Artwork und RTP-Angabe vorgestellt."],
  ["Le Bandit", images.collabLeBandit, images.whiteSpacesuit, "Kurze Bonusrunden und eine eigenstaendige Optik ergaenzen die deutsche Spieleauswahl."]
].map(([title, image, lightImage, text]) => ({ title, image, lightImage, text }));

const plUi = {
  navigationLabel: "Nawigacja", playNow: "Zagraj teraz", starterPackage: "Pakiet startowy", freeSpins: "Free spiny", playBrand: "Graj w Trino",
  safeConnection: "Bezpieczne połączenie", support: "Wsparcie 24/7", adults: "18+", claimBonus: "Odbierz bonus", viewSlots: "Zobacz sloty",
  statLabels: ["bonus do depozytów", "darmowych spinów", "minimalny depozyt", "kasyno na mobile"], catalogueCta: "Przejdź do katalogu",
  featureLabel: "Kryształowy bonus room", featureTitle: "Szkło, sloty i kosmiczny Trino", featureText: "Obraz prowadzi sekcję, a nie siedzi jako mała dekoracja w rogu.",
  guideKicker: "DUŻO TREŚCI, ALE WIZUALNIE", guideTitle: "Poradnik gracza bez pustych ścian tekstu", galleryKicker: "DUŻE ARTY TRINO",
  galleryTitle: "Alien ma być bohaterem, nie miniaturą", galleryIntro: "Duże grafiki Trino łączą maskotkę, sloty, hostessy, telefon i kasynowe sceny.",
  catalogueKicker: "Katalog", catalogueTitle: "Sloty, od których zaczyna gracz", catalogueIntro: "Normalna lista gier po lewej, duży Trino-art i opis po prawej.",
  game: "Gra", type: "Typ", editorsChoice: "Wybór redakcji", provider: "Provider", supportedKicker: "WSPIERANE SLOTY",
  supportedTitle: "Duże sceny pod gry, które gracz rozpoznaje", supportedIntro: "Pełne obrazy popularnych gier bez ciasnego kadrowania.",
  promoKicker: "PROMOCJE I ZAUFANIE", promoTitle: "Mniej pustki, więcej kasynowego świata", promoIntro: "Każdy blok ma obraz, glass-surface albo konkretny element katalogu.",
  reviewsKicker: "OPINIE GRACZY", reviewsTitle: "Nie tylko bonus. Ma wyglądać wiarygodnie.", averageRating: "średnia ocena strony",
  seoKicker: "TRINO CASINO POLSKA", seoTitle: "Trino Casino opinie, bonusy, sloty i wypłaty", faqKicker: "FAQ I SZYBKIE ODPOWIEDZI",
  faqTitle: "Najkrótsza droga do decyzji", faqIntro: "Bonus, free spiny, katalog, mobile, 18+ i odpowiedzialna gra.",
  responsibleTitle: "Graj odpowiedzialnie", responsibleText: "Strona jest materiałem promocyjnym. Nie przyjmuje zakładów, nie prowadzi kont graczy i nie przetwarza płatności. Bonusy, limity, KYC i wypłaty sprawdzaj w regulaminie operatora.",
  playerHelp: "Pomoc graczom", footerText: "Niezależny przewodnik Trino Casino dla graczy 18+. Kliknięcia mogą prowadzić do strony operatora.", navigation: "Nawigacja", information: "Informacje", methods: "Metody", legal: "18+ · materiał promocyjny",
  footerInfo: ["Warunki bonusu", "Ranking slotów", "Opinie", "Płatności", "Odpowiedzialna gra"]
};

const ieUi = {
  navigationLabel: "Main navigation", playNow: "Play now", starterPackage: "Welcome package", freeSpins: "Free spins", playBrand: "Play at Trino",
  safeConnection: "Secure route", support: "Support 24/7", adults: "18+ only", claimBonus: "Claim Ireland bonus", viewSlots: "See games",
  statLabels: ["welcome bonus", "free spins package", "minimum deposit", "mobile casino access"], catalogueCta: "Explore the game catalogue",
  featureLabel: "Ireland mobile casino", featureTitle: "Crystal lounge and mobile slots", featureText: "A bright casino scene keeps the bonus, payments and games within easy reach.",
  guideKicker: "A COMPLETE PLAYER GUIDE", guideTitle: "Everything to check before opening Trino", galleryKicker: "TRINO CASINO IRELAND",
  galleryTitle: "A richer casino world for Irish players", galleryIntro: "Premium hosts, mobile games and large slot scenes give every Trino Ireland edition a distinctive visual rhythm.",
  catalogueKicker: "Game catalogue", catalogueTitle: "Popular Trino slots for Ireland", catalogueIntro: "Compare provider, RTP and game style, then open a large preview before visiting the casino.",
  game: "Game", type: "Style", editorsChoice: "Featured game", provider: "Provider", supportedKicker: "PLAYER FAVOURITES",
  supportedTitle: "Games Irish players already recognise", supportedIntro: "From Sweet Bonanza to Gates of Olympus, each title receives a full casino scene and a useful description.",
  promoKicker: "BONUS, PAYMENTS AND TRUST", promoTitle: "More than a welcome offer", promoIntro: "Trino combines slot discovery, mobile access, payment guidance and responsible-play information in one place.",
  reviewsKicker: "REVIEWS FROM IRELAND", reviewsTitle: "What players like about the Trino experience", averageRating: "average reader rating",
  seoKicker: "TRINO CASINO IRELAND", seoTitle: "Ireland casino bonus, free spins and mobile play", faqKicker: "TRINO CASINO FAQ",
  faqTitle: "Quick answers before you play", faqIntro: "Check the welcome bonus, free spins, payments, game access and responsible-play details.",
  responsibleTitle: "Play responsibly", responsibleText: "This is promotional information for adults. The site does not accept bets, manage player accounts or process payments. Check bonus terms, limits, verification and withdrawals with the operator.",
  playerHelp: "Player help", footerText: "An independent Trino Casino guide for adults in Ireland. Buttons may lead to the operator's promotional page.", navigation: "Navigation", information: "Information", methods: "Payments", legal: "18+ · promotional information",
  footerInfo: ["Bonus terms", "Game catalogue", "Reviews", "Payments", "Responsible play"]
};

const deUi = {
  navigationLabel: "Hauptnavigation", playNow: "Jetzt spielen", starterPackage: "Willkommenspaket", freeSpins: "Freispiele", playBrand: "Bei Trino spielen",
  safeConnection: "Sicherer Zugang", support: "Support rund um die Uhr", adults: "Nur 18+", claimBonus: "Bonus ansehen", viewSlots: "Spiele entdecken",
  statLabels: ["Willkommensbonus", "Freispiele im Paket", "Mindesteinzahlung", "mobil erreichbar"], catalogueCta: "Zum Spielekatalog",
  featureLabel: "Mobiles Casino", featureTitle: "Kristall-Lounge und Trino Spiele", featureText: "Bonus, Zahlungen und Spiele bleiben auf Smartphone und Desktop klar erreichbar.",
  guideKicker: "RATGEBER FÜR SPIELER", guideTitle: "Trino Bonus, Spiele und Zahlungen erklärt", galleryKicker: "TRINO CASINO DEUTSCHLAND",
  galleryTitle: "Casino-Atmosphäre mit eigenem Charakter", galleryIntro: "Grosse Spielmotive, VIP-Szenen und mobile Ansichten geben jeder deutschen Trino Version eine eigene Bildsprache.",
  catalogueKicker: "Spielekatalog", catalogueTitle: "Beliebte Trino Slots in Deutschland", catalogueIntro: "Anbieter, RTP und Spielstil vergleichen und danach eine grosse Vorschau des ausgewählten Slots öffnen.",
  game: "Spiel", type: "Kategorie", editorsChoice: "Empfohlenes Spiel", provider: "Anbieter", supportedKicker: "BELIEBTE SPIELE",
  supportedTitle: "Slots mit bekannten Themen und Bonusfunktionen", supportedIntro: "Jedes Spiel erhält eine grosse Szene, eine Beschreibung und einen direkten Weg zum Casino.",
  promoKicker: "BONUS UND SICHERHEIT", promoTitle: "Mehr Orientierung vor dem ersten Spiel", promoIntro: "Der Ratgeber verbindet Bonusdetails, mobile Nutzung, Zahlungen und verantwortungsvolles Spielen.",
  reviewsKicker: "ERFAHRUNGEN AUS DEUTSCHLAND", reviewsTitle: "Was Spielern an Trino besonders gefällt", averageRating: "durchschnittliche Bewertung",
  seoKicker: "TRINO CASINO DEUTSCHLAND", seoTitle: "Casino Bonus, Freispiele und Trino Spiele", faqKicker: "HÄUFIGE FRAGEN",
  faqTitle: "Schnelle Antworten vor der Registrierung", faqIntro: "Bonus, Freispiele, Spiele, Zahlungen und verantwortungsvolles Spielen verständlich erklärt.",
  responsibleTitle: "Verantwortungsvoll spielen", responsibleText: "Diese Seite bietet Werbeinformationen für Erwachsene. Sie nimmt keine Einsätze an, verwaltet keine Spielerkonten und verarbeitet keine Zahlungen. Bedingungen, Limits, Verifizierung und Auszahlungen bitte beim Anbieter prüfen.",
  playerHelp: "Spielerhilfe", footerText: "Unabhängiger Trino Casino Ratgeber für Erwachsene in Deutschland. Schaltflächen können zur Aktionsseite des Anbieters führen.", navigation: "Navigation", information: "Informationen", methods: "Zahlungen", legal: "18+ · Werbeinformationen",
  footerInfo: ["Bonusbedingungen", "Spieleübersicht", "Erfahrungen", "Zahlungen", "Spielerschutz"]
};

const plGuidePanels = [
  ["Bonus", "Aktualny pakiet obejmuje 400% do 25 000 zł, 500 DS i pierwsze cztery depozyty.", images.darkSlotBoard2026, images.whiteSlotBoard2026],
  ["Automaty", "Katalog pokazuje Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas, Sweet Bonanza i Le Bandit.", images.darkPhoneLobby2026, images.whiteAlienPhone2026],
  ["VIP", "Cashback, misje, turnieje i nagrody statusowe są opisane w czytelnych blokach.", images.heroVip, images.whiteHostesses],
  ["Mobile", "Na telefonie sekcje idą w jedną kolumnę, a przyciski pozostają łatwo dostępne.", images.darkPhoneLobby2026, images.whitePhoneClean2026],
  ["Płatności", "BLIK, karty, portfele i krypto są zebrane razem z informacją o odpowiedzialnej grze.", images.collabLeBandit, images.whiteSpacesuit]
];

const ieGuidePanels = [
  ["Bonus", "The full welcome package reaches 400% up to EUR 5,000 plus 500 free spins across the first four deposits.", images.darkSlotBoard2026, images.whiteSlotBoard2026],
  ["Games", "Browse Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas, Sweet Bonanza, Le Bandit and Gates of Olympus.", images.darkPhoneLobby2026, images.whiteAlienPhone2026],
  ["VIP", "Explore cashback, missions and loyalty rewards after checking the current terms in the live casino.", images.heroVip, images.whiteHostesses],
  ["Mobile", "The Trino mobile casino keeps games, payments and support accessible on phones and tablets.", images.darkPhoneLobby2026, images.whitePhoneClean2026],
  ["Payments", "Cards, wallets, PayPal, Revolut and selected crypto options are grouped in one practical overview.", images.collabLeBandit, images.whiteSpacesuit]
];

const deGuidePanels = [
  ["Bonus", "Das Willkommenspaket umfasst 400% bis 5.000 EUR und 500 Freispiele auf die ersten vier Einzahlungen.", images.darkSlotBoard2026, images.whiteSlotBoard2026],
  ["Spiele", "Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas, Sweet Bonanza, Le Bandit und Gates of Olympus stehen im Fokus.", images.darkPhoneLobby2026, images.whiteAlienPhone2026],
  ["VIP", "Cashback, Missionen und Treuevorteile können nach dem Willkommenspaket im Casino geprüft werden.", images.heroVip, images.whiteHostesses],
  ["Mobil", "Die mobile Ansicht hält Spiele, Bonusdetails, Support und Zahlungen auf kleinen Displays erreichbar.", images.darkPhoneLobby2026, images.whitePhoneClean2026],
  ["Zahlungen", "Karten, Klarna, Sofort, Paysafecard, Wallets und ausgewählte Kryptowährungen im Überblick.", images.collabLeBandit, images.whiteSpacesuit]
];

function panelsFrom(rows) {
  return rows.map(([label, text, darkArt, lightArt]) => ({ label, text, darkArt, lightArt }));
}

const plPromoTiles = [
  ["Bonus room", "Bonus, free spiny i promocje widoczne bez szukania."], ["Popularne sloty", "Rozpoznawalne gry z RTP i dużą grafiką."],
  ["Szybkie płatności", "Karty, portfele i krypto w jednym miejscu."], ["Pomoc i FAQ", "Odpowiedzi o bonusie, mobile i wypłatach."]
];
const iePromoTiles = [
  ["Ireland welcome offer", "Four deposit stages and 500 free spins in one clear package."], ["Popular casino games", "Recognisable titles with provider, RTP and a large preview."],
  ["Flexible payments", "Cards, wallets, PayPal, Revolut and selected crypto methods."], ["Player support", "Useful answers about bonus terms, mobile play and withdrawals."]
];
const dePromoTiles = [
  ["Willkommensbonus", "Vier Einzahlungsstufen und 500 Freispiele klar zusammengefasst."], ["Bekannte Spielautomaten", "Beliebte Titel mit Anbieter, RTP und grosser Vorschau."],
  ["Flexible Zahlungen", "Karten, Klarna, Sofort, Wallets und ausgewählte Krypto-Optionen."], ["Hilfe und Spielerschutz", "Antworten zu Bedingungen, Mobilgeräten und Auszahlungen."]
];

export const localeConfigs = {
  pl: {
    lang: "pl", country: "Polska", flag: "🇵🇱", affiliateLink: "https://trackdep.com/click?o=3860&a=770&link_id=7387&sub_id1={sub1}&aff_click_id={clickID}", ui: plUi,
    navItems: plNavItems, highlights: plHighlights, depositSteps: plDepositSteps, slotCatalog: plSlotCatalog, alienScenes: plAlienScenes,
    supportedSlotScenes: plSupportedSlotScenes, reviews: plReviews, faq: plFaq, guidePanels: panelsFrom(plGuidePanels), guideChips: ["4 depozyty", "500 DS", "min. 75 zł", "szybki start"],
    promoTiles: plPromoTiles, payments: ["Visa", "Mastercard", "BLIK", "Przelewy24", "Apple Pay", "Google Pay", "Bitcoin", "Tether"],
    seoBlocks: [
      ["Trino Casino bonus dla graczy z Polski", "Aktualny pakiet obejmuje 400% do 25 000 zł i 500 darmowych spinów na cztery pierwsze depozyty. Przed grą warto sprawdzić obrót, limity stawek oraz listę gier."],
      ["Sloty z pakietu Trino", "Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas, Sweet Bonanza i Le Bandit tworzą szeroki katalog gier bonusowych."],
      ["Wpłaty i wypłaty", "Dostępność BLIK, kart, portfeli i kryptowalut może się zmieniać. Limity i czas wypłaty należy potwierdzić w kasynie."],
      ["Trino Casino na telefonie", "Mobilny katalog pozwala szybko sprawdzić bonus, RTP, gry, płatności i informacje o odpowiedzialnej grze."]
    ]
  },
  ie: {
    lang: "en-IE", country: "Ireland", flag: "🇮🇪", affiliateLink: "https://trackdep.com/click?o=3860&a=770&sub_id1={sub1}&aff_click_id={clickID}", ui: ieUi,
    navItems: [["Bonus", "bonus"], ["Games", "sloty"], ["Offers", "promocje"], ["Reviews", "opinie"], ["Guide", "poradnik"], ["FAQ", "faq"]],
    highlights: [
      ["4 deposit stages", "The welcome package is split across the first four deposits, making each bonus step easy to compare."],
      ["500 free spins", "Free spins connect the welcome offer with a broad mix of colourful, mythological and adventure slots."],
      ["EUR 20 minimum", "The Ireland offer starts from a EUR 20 qualifying deposit, subject to the live operator terms."],
      ["VIP and mobile", "Players can continue with loyalty rewards, missions and convenient mobile access after the welcome package."]
    ],
    depositSteps: [["1st deposit", "100% up to EUR 2,000 + 200 FS"], ["2nd deposit", "100% up to EUR 1,000 + 100 FS"], ["3rd deposit", "75% up to EUR 1,000 + 50 FS"], ["4th deposit", "125% up to EUR 1,000 + 150 FS"]],
    slotCatalog: makeSlots("ie"), alienScenes: ieAlienScenes, supportedSlotScenes: ieSupported,
    reviews: [
      ["Aoife", "Dublin", images.avatarIeAoife, "The bonus steps are easy to compare and the game list feels much more useful than a wall of promotional text."],
      ["Cian", "Cork", images.avatarIeCian, "I like being able to open a large game preview and check RTP before moving to the Trino casino."],
      ["Niamh", "Galway", images.avatarIeNiamh, "The bright mobile version is clean, fast to scan and keeps payments and free spins easy to find."],
      ["Liam", "Limerick", images.avatarIeLiam, "The Ireland guide answers the practical questions about deposits, games and responsible play without feeling crowded."]
    ],
    faq: [
      ["What is the Trino Casino bonus in Ireland?", "The welcome package offers 400% up to EUR 5,000 and 500 free spins across the first four deposits. A qualifying deposit starts from EUR 20; live terms apply."],
      ["How are the four deposit bonuses divided?", "The package is presented as 100% up to EUR 2,000 + 200 FS, 100% up to EUR 1,000 + 100 FS, 75% up to EUR 1,000 + 50 FS, and 125% up to EUR 1,000 + 150 FS."],
      ["Which Trino slots can I explore?", "The catalogue highlights Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas Double Down Deluxe, Sweet Bonanza, Le Bandit and Gates of Olympus."],
      ["Can I play Trino Casino on mobile?", "Yes. The casino route and this guide support modern phones and tablets, with games, bonus details and payments arranged for smaller screens."],
      ["Which payment methods are available in Ireland?", "Common options may include Visa, Mastercard, Apple Pay, Google Pay, PayPal, Revolut, Bitcoin and Tether. Check the live cashier for current availability."],
      ["Is this the official Trino Casino website?", "This is an independent promotional guide for adults. Registration and play take place with the operator, where all current terms and verification requirements must be checked."]
    ],
    guidePanels: panelsFrom(ieGuidePanels), guideChips: ["4 deposits", "500 FS", "min. EUR 20", "mobile ready"], promoTiles: iePromoTiles,
    payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay", "PayPal", "Revolut", "Bitcoin", "Tether"],
    seoBlocks: [
      ["Trino Casino Ireland welcome bonus", "Irish players can explore a four-deposit welcome package worth 400% up to EUR 5,000 plus 500 free spins. Wagering rules, eligible games and maximum stakes should always be checked before activation."],
      ["Popular online casino games in Ireland", "The Trino catalogue brings together colourful slots, mythology games and bonus-buy titles. Provider, RTP and game style are displayed to make comparison easier."],
      ["Mobile casino access and payments", "Trino Casino can be opened from modern mobile browsers. Irish players can review cards, wallets, PayPal, Revolut and selected crypto options in the live cashier."],
      ["Safe and responsible casino play", "Set a budget, use available limits and never treat casino games as income. Verification and withdrawal times depend on the operator's current procedures."]
    ]
  },
  de: {
    lang: "de", country: "Deutschland", flag: "🇩🇪", affiliateLink: "https://trackdep.com/click?o=3860&a=770&link_id=7388&sub_id1={sub1}&aff_click_id={clickID}", ui: deUi,
    navItems: [["Bonus", "bonus"], ["Spiele", "sloty"], ["Aktionen", "promocje"], ["Erfahrungen", "opinie"], ["Ratgeber", "poradnik"], ["FAQ", "faq"]],
    highlights: [
      ["4 Einzahlungen", "Das Willkommenspaket wird auf vier Einzahlungen verteilt und zeigt jeden Bonusschritt separat."],
      ["500 Freispiele", "Die Freispiele verbinden den Bonus mit bekannten Candy-, Abenteuer- und Mythologie-Slots."],
      ["Mindestens 20 EUR", "Die qualifizierende Einzahlung beginnt bei 20 EUR, vorbehaltlich der aktuellen Bedingungen im Casino."],
      ["VIP und Mobil", "Nach dem Startpaket können Treuevorteile, Missionen und der mobile Zugang geprüft werden."]
    ],
    depositSteps: [["1. Einzahlung", "100% bis 2.000 EUR + 200 FS"], ["2. Einzahlung", "100% bis 1.000 EUR + 100 FS"], ["3. Einzahlung", "75% bis 1.000 EUR + 50 FS"], ["4. Einzahlung", "125% bis 1.000 EUR + 150 FS"]],
    slotCatalog: makeSlots("de"), alienScenes: deAlienScenes, supportedSlotScenes: deSupported,
    reviews: [
      ["Lena", "Berlin", images.avatarDeLena, "Die vier Bonusstufen sind schnell verständlich und die Spiele lassen sich vor dem Casinobesuch gut vergleichen."],
      ["Jonas", "Hamburg", images.avatarDeJonas, "Grosse Vorschau, RTP und Anbieter direkt neben der Liste sind auf dem Smartphone besonders praktisch."],
      ["Sophie", "München", images.avatarDeSophie, "Mir gefällt die helle Version mit klaren Zahlungsinfos und bekannten Spielen wie Sweet Bonanza und Gates of Olympus."],
      ["Felix", "Köln", images.avatarDeFelix, "Der Ratgeber beantwortet Fragen zu Bonus, Einzahlung und Spielerschutz ohne unnötige Umwege."]
    ],
    faq: [
      ["Wie hoch ist der Trino Casino Bonus in Deutschland?", "Das Willkommenspaket bietet 400% bis zu 5.000 EUR und 500 Freispiele auf die ersten vier Einzahlungen. Die qualifizierende Einzahlung beginnt bei 20 EUR; aktuelle Bedingungen gelten."],
      ["Wie wird der Bonus auf vier Einzahlungen verteilt?", "Angezeigt werden 100% bis 2.000 EUR + 200 FS, 100% bis 1.000 EUR + 100 FS, 75% bis 1.000 EUR + 50 FS und 125% bis 1.000 EUR + 150 FS."],
      ["Welche Spiele gibt es bei Trino?", "Der Ratgeber zeigt Luck Of Tiger, Le Viking, Ze Zeus, Big Bass Vegas Double Down Deluxe, Sweet Bonanza, Le Bandit und Gates of Olympus."],
      ["Funktioniert Trino Casino auf dem Smartphone?", "Ja. Der Zugang unterstützt moderne Smartphones und Tablets. Bonus, Spiele, Zahlungen und Support bleiben auf kleinen Displays erreichbar."],
      ["Welche Zahlungsmethoden werden unterstützt?", "Mögliche Optionen sind Visa, Mastercard, Klarna, Sofort, Paysafecard, Apple Pay, Bitcoin und Tether. Die aktuelle Auswahl steht im Casino-Kassenbereich."],
      ["Ist dies die offizielle Trino Casino Webseite?", "Dies ist ein unabhängiger Werberatgeber für Erwachsene. Registrierung und Spiel erfolgen beim Anbieter; dort müssen Bedingungen und Verifizierung geprüft werden."]
    ],
    guidePanels: panelsFrom(deGuidePanels), guideChips: ["4 Einzahlungen", "500 FS", "min. 20 EUR", "mobil verfügbar"], promoTiles: dePromoTiles,
    payments: ["Visa", "Mastercard", "Klarna", "Sofort", "Paysafecard", "Apple Pay", "Bitcoin", "Tether"],
    seoBlocks: [
      ["Trino Casino Deutschland Bonus", "Das Willkommensangebot umfasst 400% bis zu 5.000 EUR und 500 Freispiele auf vier Einzahlungen. Umsatzanforderungen, Höchsteinsatz und berechtigte Spiele sollten vor der Aktivierung geprüft werden."],
      ["Beliebte Online Casino Spiele", "Der Trino Katalog verbindet Candy-Slots, Mythologie, Abenteuer und Bonus-Buy-Spiele. Anbieter, RTP und Spielstil helfen beim direkten Vergleich."],
      ["Trino Casino mobil und Zahlungen", "Der mobile Zugang funktioniert im Browser auf aktuellen Smartphones. Karten, Klarna, Sofort, Paysafecard, Wallets und Krypto-Optionen hängen vom Live-Kassenbereich ab."],
      ["Sicher und verantwortungsvoll spielen", "Ein festes Budget, Zeitlimits und Pausen helfen bei der Kontrolle. Casino-Spiele sind Unterhaltung und keine verlässliche Einnahmequelle."]
    ]
  }
};
