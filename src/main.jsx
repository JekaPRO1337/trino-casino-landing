import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BadgeHelp,
  ChevronRight,
  Clock3,
  Gamepad2,
  Gift,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  WalletCards,
  Zap
} from "lucide-react";
import "./styles.css";
import { images } from "./assets";
import { alienScenes, faq, highlights, navItems, reviews, slotCatalog, supportedSlotScenes, variants } from "./content";

const fallbackVariant = "pl-01";
const AFFILIATE_LINK = 'https://www.figma.com/design/2EAYvzW7KAX413UqTPq5ox/SpellWin?node-id=0-1&p=f&t=YjDRagqBDGflPuds-0';

function getVariantId() {
  if (window.TRINO_VARIANT && variants[window.TRINO_VARIANT]) return window.TRINO_VARIANT;
  const match = window.location.pathname.match(/pl-0[1-3]/);
  return match && variants[match[0]] ? match[0] : fallbackVariant;
}

function Logo({ light = false }) {
  return (
    <a href="#top" className="trino-logo" aria-label="Trino Casino">
      <img src={light ? images.logoLight : images.logoDark} alt="Trino" className={`trino-logo-img ${light ? "is-light" : ""}`} />
    </a>
  );
}

function Header({ variant }) {
  const light = variant.isLight;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${light ? "border-slate-200 bg-white/[.92]" : "border-white/10 bg-[#070718]/[.82]"}`}>
      <div className="mx-auto flex h-[72px] w-[min(1440px,calc(100%-32px))] items-center justify-between gap-6">
        <Logo light={light} />
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Nawigacja">
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} className={light ? "nav-pill-light" : "nav-pill"}>
              {label}
            </a>
          ))}
        </nav>
        <a href={AFFILIATE_LINK} className={`${light ? "btn-blue-solid" : "btn-yellow"} hidden min-w-36 lg:inline-flex`}>
          Zagraj teraz
        </a>
      </div>
    </header>
  );
}

function Hero({ variant }) {
  if (variant.isLight) {
    return (
      <section id="top" className="relative min-h-[860px] overflow-hidden border-b border-white/70 bg-[#eef6ff] pt-[72px] text-slate-950">
        <img src={variant.hero} alt={variant.panelTitle} className="hero-light-bg absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(238,246,255,.72)_0%,rgba(238,246,255,.34)_37%,rgba(238,246,255,.02)_73%)]" />
        <div className="hero-logo-veil" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#eaf3ff]/90 to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[788px] w-[min(1920px,calc(100%-32px))] grid-cols-1 items-end gap-10 pb-14 pt-16 lg:grid-cols-[minmax(0,500px)_1fr]">
          <div className="frost-hero-panel max-w-[500px]">
            <h1 className="font-display text-[44px] leading-[.95] text-slate-950 md:text-[58px] xl:text-[62px]">
              {variant.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 md:text-2xl">{variant.subtitle}</p>
            <div className="frost-offer-grid mt-8">
              <div className="border-b border-white/70 p-6 md:border-b-0 md:border-r">
                <span className="text-sm font-black uppercase text-slate-500">Pakiet startowy</span>
                <strong className="mt-2 block text-4xl font-black">{variant.bonus}</strong>
              </div>
              <div className="p-6">
                <span className="text-sm font-black uppercase text-slate-500">Free spiny</span>
                <strong className="mt-2 block text-4xl font-black">{variant.spins}</strong>
              </div>
            </div>
            <a href={AFFILIATE_LINK} className="mt-7 inline-flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-xl font-black text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-700">
              Graj w Trino <ChevronRight className="h-6 w-6" />
            </a>
            <div className="mt-7 flex flex-wrap gap-6 text-sm font-black text-slate-700">
              <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-blue-600" /> Bezpieczne połączenie</span>
              <span className="flex items-center gap-2"><Clock3 className="h-5 w-5 text-blue-600" /> Wsparcie 24/7</span>
              <span className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-blue-600" /> 18+</span>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>
    );
  }

  return (
    <section id="top" className="hero-dark-section relative overflow-hidden border-b border-white/10 bg-[#070718]">
      <img
        src={variant.hero}
        alt={variant.panelTitle}
        className="hero-dark-bg absolute inset-0 h-full w-full object-cover opacity-100"
        style={{ objectPosition: variant.heroFocus }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,20,.58)_0%,rgba(5,6,20,.28)_42%,rgba(5,6,20,.04)_72%,rgba(5,6,20,.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08081b] to-transparent" />
      <div className="hero-dark-content relative z-10 mx-auto grid w-[min(1440px,calc(100%-32px))] grid-cols-1 items-end gap-10 pb-20 pt-32 xl:grid-cols-[minmax(0,780px)_1fr]">
        <div className="glass-panel max-w-[800px] p-7 md:p-9">
          <h1 className="font-display text-[40px] leading-[.95] text-white md:text-[64px] xl:text-[76px]">
            {variant.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90">{variant.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={AFFILIATE_LINK} className="btn-yellow">
              Odbierz bonus
            </a>
            <a href="#sloty" className="btn-dark">
              Zobacz sloty
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatStrip({ variant }) {
  const light = variant.isLight;
  const stats = [
    [variant.bonus, "bonus do depozytów"],
    [variant.spins, "darmowych spinów"],
    [variant.cashback, "cashback dla aktywnych"],
    ["24/7", "kasyno na mobile"]
  ];
  return (
    <section className={`${light ? "bg-[#eef3fb]" : "bg-[#070718]"} py-7`}>
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <article key={label} className={light ? "light-stat" : "glass-stat"}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function BonusShowcase({ variant }) {
  const light = variant.isLight;
  const lightFeatureImage = images.whiteSpacesuit;
  const cards = [
    ["Format", "misje, turnieje, cashback i free spiny"],
    ["Nagrody", "bonusy pieniężne, status VIP i pakiety slotowe"],
    ["Udział", "rejestracja, pakiet startowy i pierwszy depozyt"],
    ["Ważne", "warunki, limity i obrót sprawdzaj przed grą"]
  ];
  return (
    <section id="bonus" className={`section-space ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className={`${light ? "light-premium-panel" : "premium-panel"} p-7 md:p-10`}>
            <div className={`mb-10 flex h-16 w-16 items-center justify-center rounded-3xl border ${light ? "border-blue-200 bg-blue-50 text-blue-600" : "border-trino-cyan/30 bg-white/[.06] text-trino-cyan"}`}>
              <Trophy className="h-8 w-8" />
            </div>
            <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>{variant.glassTitle}</h2>
            <p className={`mt-6 max-w-3xl text-lg leading-8 ${light ? "text-slate-600" : "text-slate-200"}`}>{variant.glassText}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {cards.map(([title, text]) => (
                <article key={title} className={light ? "inner-light" : "inner-glass"}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <a href="#sloty" className="btn-blue mt-8">
              Przejdź do katalogu <ChevronRight className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-4">
            {light ? (
              <article className="frost-card overflow-hidden p-0">
                <div className="frost-media-tall">
                  <img src={lightFeatureImage} alt="Trino astronaut bonus" className="h-full w-full object-cover object-center" />
                </div>
                <div className="p-5">
                  <span className="label-blue">Kryształowy bonus room</span>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">Szkło, sloty i kosmiczny Trino</h3>
                  <p className="mt-2 leading-7 text-slate-600">Obraz prowadzi sekcję, a nie siedzi jako mała dekoracja w rogu.</p>
                </div>
              </article>
            ) : null}
            {highlights.map(([title, text], index) => (
              <article key={title} className={`${light ? "frost-card" : "glass-card"} flex gap-4 p-5`}>
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-black ${light ? "bg-blue-600 text-white" : "bg-trino-yellow text-slate-950"}`}>
                  {["★", "◆", "✦", "●"][index]}
                </span>
                <div>
                  <h3 className={`text-xl font-black ${light ? "text-slate-950" : "text-white"}`}>{title}</h3>
                  <p className={`mt-2 leading-7 ${light ? "text-slate-600" : "text-slate-300"}`}>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideTabs({ variant }) {
  const light = variant.isLight;
  const panels = [
    {
      label: "Bonus",
      text: "Najważniejszy ekran prowadzi do bonusu, ale nie zakrywa grafiki. Oferta jest duża, czytelna i wygląda jak część kasyna, a nie tabelka afiliacyjna.",
      art: images.guideBonus,
      darkArt: images.guideBonusDark,
      lightArt: images.guideBonus
    },
    {
      label: "Automaty",
      text: "Katalog slotów ma normalne miniatury gier, rating, RTP i osobny panel po kliknięciu. To daje prostotę listy i premium efekt dużego artu.",
      art: images.guideSlots,
      darkArt: images.guideSlotsDark,
      lightArt: images.guideSlots
    },
    {
      label: "VIP",
      text: "Glass boxy opisują cashback, misje, turnieje i nagrody statusowe. Działają jako wizualne kotwice w długiej stronie SEO.",
      art: images.guideVip,
      darkArt: images.guideVipDark,
      lightArt: images.guideVip
    },
    {
      label: "Mobile",
      text: "Na telefonie sekcje idą w jedną kolumnę, przyciski nie uciekają, a CTA nie zasłania interaktywnych elementów.",
      art: images.guideMobile,
      darkArt: images.guideMobileDark,
      lightArt: images.guideMobile
    },
    {
      label: "Płatności",
      text: "Footer i sekcja trust pokazują BLIK, Visa, Mastercard, krypto, portfele i odpowiedzialną grę bez robienia pustego dołu strony.",
      art: images.guidePayments,
      darkArt: images.guidePaymentsDark,
      lightArt: images.guidePayments
    }
  ];
  const [active, setActive] = useState(0);
  const activePanel = panels[active];
  const activeArt = light && activePanel.lightArt ? activePanel.lightArt : activePanel.darkArt || activePanel.art;
  return (
    <section id="poradnik" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto grid w-[min(1320px,calc(100%-32px))] gap-8 lg:grid-cols-[.76fr_1.24fr]">
        <div>
          <p className="section-kicker">DUŻO TREŚCI, ALE WIZUALNIE</p>
          <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>
            Poradnik gracza bez pustych ścian tekstu
          </h2>
        </div>
        <div className={`${light ? "frost-card" : "glass-panel"} p-5`}>
          <div className="flex flex-wrap gap-2">
            {panels.map((panel, index) => (
              <button
                key={panel.label}
                type="button"
                className={index === active ? (light ? "tab-active-light" : "tab-active") : (light ? "tab-button-light" : "tab-button")}
                onClick={() => setActive(index)}
              >
                {panel.label}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(220px,.78fr)_minmax(420px,1.36fr)]">
            <div className={`${light ? "frost-inner" : "inner-glass"} min-h-64`}>
              <h3 className={`text-2xl font-black ${light ? "text-slate-950" : "text-white"}`}>{activePanel.label} Trino Casino</h3>
              <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-200"}`}>{activePanel.text}</p>
              <div className="mt-5 grid gap-2">
                {["bonus powitalny", "free spiny", "cashback", "szybki start"].map((item) => (
                  <span key={item} className={light ? "guide-chip is-light" : "guide-chip"}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={`image-stage hidden min-h-[360px] overflow-hidden rounded-3xl border lg:block ${light ? "is-light" : "is-dark-guide border-trino-cyan/20"}`}>
              <img src={activeArt} alt="" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlienGallery({ variant }) {
  const light = variant.isLight;

  return (
    <section id="wizualnie" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="section-kicker">DUŻE ARTY TRINO</p>
            <h2 className={`font-display text-5xl leading-tight md:text-7xl ${light ? "text-slate-950" : "text-white"}`}>
              Alien ma być bohaterem, nie miniaturą
            </h2>
          </div>
          <p className={`text-xl leading-9 ${light ? "text-slate-600" : "text-slate-300"}`}>
            Te bloki są przygotowane pod duże grafiki maskotki. Pliki można później podmienić na wersje w skafandrze, a układ zostanie ten sam.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {alienScenes.map((scene, index) => (
            (() => {
              const sceneImage = light && scene.lightImage ? scene.lightImage : scene.image;
              return (
            <article
              key={scene.title}
              className={`${light ? "frost-card" : "glass-card"} overflow-hidden ${index === 0 ? "xl:col-span-2" : ""}`}
            >
              <div className={`alien-media ${light ? "is-light" : ""} ${index === 0 ? "is-wide" : ""}`}>
                <img src={sceneImage} alt={scene.title} className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-5 md:p-6">
                <span className={light ? "label-blue" : "label-cyan"}>{scene.label}</span>
                <h3 className={`mt-3 text-3xl font-black ${light ? "text-slate-950" : "text-white"}`}>{scene.title}</h3>
                <p className={`mt-3 leading-7 ${light ? "text-slate-600" : "text-slate-300"}`}>{scene.text}</p>
              </div>
            </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}

function SlotCatalog({ variant }) {
  const light = variant.isLight;
  const [selectedId, setSelectedId] = useState(slotCatalog[1].id);
  const selected = useMemo(() => slotCatalog.find((slot) => slot.id === selectedId) || slotCatalog[0], [selectedId]);
  const selectedArt = light && selected.artLight ? selected.artLight : selected.art;

  return (
    <section id="sloty" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg text-white"}`}>
      <div className="mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_430px]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-black uppercase text-blue-600">
              <Gamepad2 className="h-5 w-5" /> Katalog
            </p>
            <h2 className={`font-display text-5xl leading-tight md:text-7xl ${light ? "text-slate-950" : "text-white"}`}>Sloty, od których zaczyna gracz</h2>
          </div>
          <p className={`self-end text-2xl leading-10 ${light ? "text-slate-600" : "text-slate-300"}`}>
            Normalna lista gier po lewej, wygenerowany Trino-art i opis po prawej. Prosto, czytelnie i dużo drożej niż zwykła siatka kart.
          </p>
        </div>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_390px]">
          <div className={`overflow-hidden rounded-[28px] ${light ? "frost-card" : "glass-card"}`}>
            <div className={`grid grid-cols-[70px_1fr_120px_120px_70px] items-center border-b px-5 py-4 text-sm font-black max-lg:hidden ${light ? "border-white/70 bg-white/35 text-slate-500" : "border-white/10 bg-white/[.04] text-slate-400"}`}>
              <span>#</span>
              <span>Gra</span>
              <span>Typ</span>
              <span>RTP</span>
              <span />
            </div>
            {slotCatalog.map((slot, index) => (
              <button
                key={slot.id}
                type="button"
                className={`slot-row ${light ? "" : "is-dark"} ${slot.id === selected.id ? "is-selected" : ""}`}
                onClick={() => setSelectedId(slot.id)}
              >
                <span className="hidden text-xl font-black text-slate-400 lg:block">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex items-center gap-5">
                  <img src={slot.thumb} alt={slot.title} className="h-20 w-36 rounded-xl bg-slate-950/5 object-cover shadow-lg" />
                  <span className="text-left">
                    <strong className={`block text-2xl ${light ? "text-slate-950" : "text-white"}`}>{slot.title}</strong>
                    <em className={`mt-1 block not-italic ${light ? "text-slate-500" : "text-slate-400"}`}>{slot.provider}</em>
                  </span>
                </span>
                <span className={`hidden font-black lg:block ${light ? "text-slate-600" : "text-slate-300"}`}>{slot.category}</span>
                <span className="hidden lg:block">
                  <em className="block not-italic text-xs uppercase text-slate-400">RTP</em>
                  <strong className="text-xl">{slot.rtp}</strong>
                </span>
                <ChevronRight className="ml-auto h-6 w-6 text-blue-600 lg:ml-0" />
              </button>
            ))}
          </div>
          <aside className={`sticky top-24 h-max rounded-[28px] p-5 ${light ? "frost-card" : "glass-card"}`}>
            <div className={`image-stage relative overflow-hidden rounded-2xl ${light ? "is-light" : ""}`}>
              <img src={selectedArt} alt={selected.title} className="h-80 w-full object-cover object-center" />
              <span className="absolute bottom-5 left-5 rounded-xl bg-slate-950/80 px-4 py-3 text-sm font-black uppercase text-white backdrop-blur">
                {selected.category}
              </span>
            </div>
            <p className="mt-7 text-sm font-black uppercase text-blue-600">Wybór redakcji</p>
            <h3 className={`mt-3 text-4xl font-semibold ${light ? "text-slate-950" : "text-white"}`}>{selected.title}</h3>
            <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>{selected.description}</p>
            <div className={`mt-7 grid grid-cols-2 border-y ${light ? "border-white/70" : "border-white/10"}`}>
              <div className={`border-r py-4 ${light ? "border-white/70" : "border-white/10"}`}>
                <span className="block text-xs uppercase text-slate-400">Provider</span>
                <strong>{selected.provider}</strong>
              </div>
              <div className="py-4 pl-4">
                <span className="block text-xs uppercase text-slate-400">RTP</span>
                <strong>{selected.rtp}</strong>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-blue-600">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
              <strong className={`ml-2 ${light ? "text-slate-950" : "text-white"}`}>{selected.rating}</strong>
            </div>
            <a href={AFFILIATE_LINK} className="mt-6 flex h-16 items-center justify-center gap-3 rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-600/25">
              Graj teraz <ChevronRight />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SupportedSlots({ variant }) {
  const light = variant.isLight;

  return (
    <section className={`section-space ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_460px] lg:items-end">
          <div>
            <p className="section-kicker">WSPIERANE SLOTY</p>
            <h2 className={`font-display text-5xl leading-tight md:text-7xl ${light ? "text-slate-950" : "text-white"}`}>
              Duże sceny pod gry, które gracz rozpoznaje
            </h2>
          </div>
          <p className={`text-xl leading-9 ${light ? "text-slate-600" : "text-slate-300"}`}>
            Lista zostaje prosta, a pod nią idą pełne obrazy: Dog House, Sweet Bonanza, Book of Ra i Gates of Olympus bez ciasnego kadrowania.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {supportedSlotScenes.map((scene) => (
            (() => {
              const sceneImage = light && scene.lightImage ? scene.lightImage : scene.image;
              return (
                <article key={scene.title} className={`${light ? "frost-card" : "glass-card"} overflow-hidden`}>
                  <div className={`supported-media ${light ? "is-light" : ""}`}>
                    <img src={sceneImage} alt={scene.title} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`text-3xl font-black ${light ? "text-slate-950" : "text-white"}`}>{scene.title}</h3>
                    <p className={`mt-3 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>{scene.text}</p>
                  </div>
                </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoMosaic({ variant }) {
  const light = variant.isLight;
  const tiles = [
    [Gift, "Bonus room", "Bonus, free spiny i promka widoczne bez szukania."],
    [Sparkles, "Visual hooks", "Book, candy, doghouse i Olympus jako osobne motywy."],
    [WalletCards, "Szybkie płatności", "BLIK, karty, portfele i krypto w pełnym footerze."],
    [BadgeHelp, "FAQ SEO", "Długie odpowiedzi dla gracza i indeksacji."]
  ];
  return (
    <section id="promocje" className={`section-space ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="section-kicker">PROMOCJE I ZAUFANIE</p>
            <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>
              Mniej pustki, więcej kasynowego świata
            </h2>
            <p className={`mt-6 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>
              Sekcje nie są już wielkimi pustymi panelami. Każdy blok ma obraz, glass-surface albo konkretny element katalogu.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {tiles.map(([Icon, title, text]) => (
              <article key={title} className={light ? "premium-small-light" : "premium-small"}>
                <Icon className="h-7 w-7 text-trino-cyan" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews({ variant }) {
  const light = variant.isLight;
  return (
    <section id="opinie" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">OPINIE GRACZY</p>
            <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>Nie tylko bonus. Ma wyglądać wiarygodnie.</h2>
          </div>
          <div className={`${light ? "light-card" : "glass-card"} w-full p-5 lg:w-64`}>
            <strong className={`block font-display text-4xl ${light ? "text-blue-600" : "text-trino-yellow"}`}>4.8/5</strong>
            <span className={`text-sm font-black ${light ? "text-slate-600" : "text-slate-300"}`}>średnia ocena strony</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map(([name, city, avatar, text]) => (
            <article key={name} className={`${light ? "light-card" : "glass-card"} p-5`}>
              <img src={avatar} alt={name} className="h-16 w-16 rounded-2xl object-cover" />
              <p className={`mt-5 min-h-28 leading-7 ${light ? "text-slate-600" : "text-slate-300"}`}>{text}</p>
              <strong className={`mt-4 block ${light ? "text-slate-950" : "text-white"}`}>{name}</strong>
              <span className={`text-sm font-black ${light ? "text-blue-600" : "text-trino-cyan"}`}>{city}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoContent({ variant }) {
  const light = variant.isLight;
  const blocks = [
    ["Trino Casino bonus dla graczy z Polski", "Landing pokazuje graczowi realny benefit: wysoki procent bonusowy, darmowe spiny, cashback i przejście do slotów. Dane kampanii zostają poza widokiem użytkownika, bo strona ma sprzedawać emocję i prosty start."],
    ["Dlaczego katalog slotów jest ważny?", "Zwykła siatka kart szybko wygląda tanio. Lista z miniaturami, RTP, typem gry i prawym panelem daje więcej informacji i wygląda jak redakcyjny ranking, a nie przypadkowa galeria."],
    ["Jak działa premium glass design?", "Ciemne tło, cienkie obramowania, półprzezroczyste panele i punktowe światło tworzą efekt drogiego kasyna. Ważne jest, żeby glass box miał treść i funkcję, a nie był pustą dekoracją."],
    ["Mobile i odpowiedzialna gra", "Na mobile użytkownik musi szybko zobaczyć CTA, bonus, sloty i FAQ. Footer zawiera 18+, pomoc graczom, płatności i informację, że strona jest materiałem promocyjnym."]
  ];
  return (
    <section id="poradnik-seo" className={`section-space ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <p className="section-kicker">SEO LONGFORM</p>
        <h2 className={`mb-8 max-w-3xl font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>
          Trino Casino opinie, bonusy, sloty i wypłaty
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map(([title, text]) => (
            <article key={title} className={`${light ? "light-card" : "glass-card"} p-6`}>
              <h3 className={`text-2xl font-black ${light ? "text-slate-950" : "text-white"}`}>{title}</h3>
              <p className={`mt-4 leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ variant }) {
  const light = variant.isLight;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="section-kicker">FAQ I SZYBKIE ODPOWIEDZI</p>
          <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>Najkrótsza droga do decyzji</h2>
          <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>
            FAQ domyka obiekcje: bonus, free spiny, katalog, mobile, 18+ i odpowiedzialna gra.
          </p>
        </div>
        <div className="grid gap-3">
          {faq.map(([question, answer], index) => (
            <article key={question} className={`${light ? "light-card" : "glass-card"} overflow-hidden`}>
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-5 p-5 text-left font-black ${light ? "text-slate-950" : "text-white"}`}
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
              >
                {question}
                <ChevronRight className={`h-5 w-5 transition ${open === index ? "rotate-90" : ""}`} />
              </button>
              {open === index ? <p className={`px-5 pb-5 leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>{answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const paymentLabels = ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Tether", "Apple Pay", "Google Pay", "BLIK"];
  return (
    <footer className="bg-[#03040b] py-12 text-white">
      <div className="mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="border-y border-white/[.12] py-10">
          <div className="grid gap-8 lg:grid-cols-[110px_1fr_180px] lg:items-center">
            <div className="grid h-20 w-20 place-items-center rounded-xl border border-trino-yellow text-3xl font-black text-trino-yellow">
              18+
            </div>
            <div>
              <h3 className="text-3xl font-black">Graj odpowiedzialnie</h3>
              <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-200">
                Strona jest materiałem promocyjnym i afiliacyjnym. Nie przyjmuje zakładów, nie prowadzi kont graczy i nie przetwarza płatności. Bonusy, free spiny, limity, KYC i wypłaty sprawdzaj w regulaminie operatora.
              </p>
            </div>
            <a href="#faq" className="font-black uppercase text-lime-300">
              Pomoc graczom →
            </a>
          </div>
        </div>
        <div className="grid gap-10 border-b border-white/[.12] py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-lg leading-8 text-slate-300">
              Niezależny landing Trino Casino dla graczy 18+. Kliknięcia mogą prowadzić do strony promocyjnej operatora.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Nawigacja</h4>
            <div className="footer-list">
              {navItems.map(([label, target]) => (
                <a key={target} href={`#${target}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-title">Informacje</h4>
            <div className="footer-list">
              {["Warunki bonusu", "Ranking slotów", "Opinie", "Płatności", "Odpowiedzialna gra"].map((item) => (
                <a key={item} href="#faq">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-title">Metody</h4>
            <div className="flex flex-wrap gap-3">
              {paymentLabels.map((item) => (
                <span key={item} className="rounded-lg border border-white/[.16] bg-white/5 px-4 py-3 font-black">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-slate-400 md:flex-row">
          <span>© 2026 Trino Casino affiliate landing PL.</span>
          <span>18+ · materiał promocyjny</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const variant = variants[getVariantId()] || variants[fallbackVariant];
  return (
    <div className={variant.isLight ? "bg-white text-slate-950" : "bg-[#050612] text-white"}>
      <Header variant={variant} />
      <main>
        <Hero variant={variant} />
        <StatStrip variant={variant} />
        <BonusShowcase variant={variant} />
        <GuideTabs variant={variant} />
        <AlienGallery variant={variant} />
        <SlotCatalog variant={variant} />
        <SupportedSlots variant={variant} />
        <PromoMosaic variant={variant} />
        <Reviews variant={variant} />
        <SeoContent variant={variant} />
        <Faq variant={variant} />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
