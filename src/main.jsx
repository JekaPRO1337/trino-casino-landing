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
import { variants as plVariants } from "./content";
import { localeConfigs, localizedVariants } from "./locales";

const fallbackVariant = "pl-01";
const variants = { ...plVariants, ...localizedVariants };

function getVariantId() {
  const envVariant = import.meta.env.VITE_VARIANT;
  if (envVariant && variants[envVariant]) return envVariant;
  if (window.TRINO_VARIANT && variants[window.TRINO_VARIANT]) return window.TRINO_VARIANT;
  const match = window.location.pathname.toLowerCase().match(/(?:pl|ie|de)-0[1-3]/);
  return match && variants[match[0]] ? match[0] : fallbackVariant;
}

function Logo({ light = false }) {
  return (
    <a href="#top" className="trino-logo" aria-label="Trino Casino">
      <img src={light ? images.logoLight : images.logoDark} alt="Trino" className={`trino-logo-img ${light ? "is-light" : ""}`} />
    </a>
  );
}

function Header({ variant, locale }) {
  const light = variant.isLight;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${light ? "border-slate-200 bg-white/[.92]" : "border-white/10 bg-[#070718]/[.82]"}`}>
      <div className="mx-auto flex h-[72px] w-[min(1440px,calc(100%-32px))] items-center justify-between gap-6">
        <Logo light={light} />
        <nav className="hidden items-center gap-2 lg:flex" aria-label={locale.ui.navigationLabel}>
          {locale.navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} className={light ? "nav-pill-light" : "nav-pill"}>
              {label}
            </a>
          ))}
        </nav>
        <a href={locale.affiliateLink} className={`${light ? "btn-blue-solid" : "btn-yellow"} hidden min-w-36 lg:inline-flex`}>
          {locale.ui.playNow}
        </a>
      </div>
    </header>
  );
}

function Hero({ variant, locale }) {
  const { ui } = locale;
  if (variant.isLight) {
    return (
      <section id="top" className="relative min-h-[860px] overflow-hidden border-b border-white/70 bg-[#eef6ff] pt-[72px] text-slate-950">
        <img src={variant.hero} alt={variant.panelTitle} className="hero-light-bg absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(238,246,255,.72)_0%,rgba(238,246,255,.34)_37%,rgba(238,246,255,.02)_73%)]" />
        <div className="hero-logo-veil" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#eaf3ff]/90 to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[788px] w-[min(1920px,calc(100%-32px))] grid-cols-1 items-end gap-10 pb-14 pt-16 lg:grid-cols-[minmax(0,500px)_1fr]">
          <div className="frost-hero-panel max-w-[500px]">
            <span className="geo-badge is-light">{locale.flag} {locale.country}</span>
            <h1 className="font-display text-[44px] leading-[.95] text-slate-950 md:text-[58px] xl:text-[62px]">
              {variant.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 md:text-2xl">{variant.subtitle}</p>
            <div className="frost-offer-grid mt-8">
              <div className="border-b border-white/70 p-6 md:border-b-0 md:border-r">
                <span className="text-sm font-black uppercase text-slate-500">{ui.starterPackage}</span>
                <strong className="mt-2 block text-4xl font-black">{variant.bonus}</strong>
              </div>
              <div className="p-6">
                <span className="text-sm font-black uppercase text-slate-500">{ui.freeSpins}</span>
                <strong className="mt-2 block text-4xl font-black">{variant.spins}</strong>
              </div>
            </div>
            <a href={locale.affiliateLink} className="mt-7 inline-flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-xl font-black text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-700">
              {ui.playBrand} <ChevronRight className="h-6 w-6" />
            </a>
            <div className="mt-7 flex flex-wrap gap-6 text-sm font-black text-slate-700">
              <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-blue-600" /> {ui.safeConnection}</span>
              <span className="flex items-center gap-2"><Clock3 className="h-5 w-5 text-blue-600" /> {ui.support}</span>
              <span className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-blue-600" /> {ui.adults}</span>
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
      <div className="hero-dark-content relative z-10 ml-[clamp(16px,5vw,140px)] mr-4 grid w-[min(720px,calc(100%-32px))] grid-cols-1 items-end gap-10 pb-20 pt-32">
        <div className="glass-panel max-w-[560px] p-7 md:p-9">
          <span className="geo-badge">{locale.flag} {locale.country}</span>
          <h1 className="font-display text-[40px] leading-[.95] text-white md:text-[56px] 2xl:text-[64px]">
            {variant.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90">{variant.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={locale.affiliateLink} className="btn-yellow">
              {ui.claimBonus}
            </a>
            <a href="#sloty" className="btn-dark">
              {ui.viewSlots}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatStrip({ variant, locale }) {
  const light = variant.isLight;
  const stats = [
    [variant.bonus, locale.ui.statLabels[0]],
    [variant.spins, locale.ui.statLabels[1]],
    [variant.cashback, locale.ui.statLabels[2]],
    ["24/7", locale.ui.statLabels[3]]
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

function BonusShowcase({ variant, locale }) {
  const light = variant.isLight;
  const lightFeatureImage = images.whiteAlienPhone2026;
  const cards = locale.depositSteps;
  const highlightIcons = [Trophy, Gift, ShieldCheck, Zap];
  return (
    <section id="bonus" className={`section-space overflow-hidden ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto min-w-0 w-[min(1180px,calc(100%-32px))]">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className={`${light ? "light-premium-panel" : "premium-panel"} min-w-0 p-7 md:p-10`}>
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
              {locale.ui.catalogueCta} <ChevronRight className="h-5 w-5" />
            </a>
          </div>
          <div className="grid min-w-0 gap-4">
            {light ? (
              <article className="frost-card overflow-hidden p-0">
                <div className="frost-media-tall">
                  <img src={lightFeatureImage} alt={locale.ui.featureTitle} className="h-full w-full object-cover object-center" />
                </div>
                <div className="p-5">
                  <span className="label-blue">{locale.ui.featureLabel}</span>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{locale.ui.featureTitle}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{locale.ui.featureText}</p>
                </div>
            </article>
            ) : null}
            {locale.highlights.map(([title, text], index) => {
              const Icon = highlightIcons[index] || Sparkles;
              return (
              <article key={title} className={`${light ? "frost-card" : "glass-card"} flex gap-4 p-5`}>
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-black ${light ? "bg-blue-600 text-white" : "bg-trino-yellow text-slate-950"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className={`text-xl font-black ${light ? "text-slate-950" : "text-white"}`}>{title}</h3>
                  <p className={`mt-2 leading-7 ${light ? "text-slate-600" : "text-slate-300"}`}>{text}</p>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideTabs({ variant, locale }) {
  const light = variant.isLight;
  const panels = locale.guidePanels;
  const [active, setActive] = useState(0);
  const activePanel = panels[active];
  const activeArt = light && activePanel.lightArt ? activePanel.lightArt : activePanel.darkArt || activePanel.art;
  return (
    <section id="poradnik" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto grid w-[min(1320px,calc(100%-32px))] gap-8 lg:grid-cols-[.76fr_1.24fr]">
        <div>
          <p className="section-kicker">{locale.ui.guideKicker}</p>
          <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>
            {locale.ui.guideTitle}
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
              <h3 className={`text-2xl font-black ${light ? "text-slate-950" : "text-white"}`}>{activePanel.label} · Trino Casino</h3>
              <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-200"}`}>{activePanel.text}</p>
              <div className="mt-5 grid gap-2">
                {locale.guideChips.map((item) => (
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

function AlienGallery({ variant, locale }) {
  const light = variant.isLight;

  return (
    <section id="wizualnie" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="section-kicker">{locale.ui.galleryKicker}</p>
            <h2 className={`font-display text-5xl leading-tight md:text-7xl ${light ? "text-slate-950" : "text-white"}`}>
              {locale.ui.galleryTitle}
            </h2>
          </div>
          <p className={`text-xl leading-9 ${light ? "text-slate-600" : "text-slate-300"}`}>
            {locale.ui.galleryIntro}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {locale.alienScenes.map((scene, index) => (
            (() => {
              const sceneImage = light && scene.lightImage ? scene.lightImage : scene.image;
              return (
            <article
              key={scene.title}
              className={`${light ? "frost-card" : "glass-card"} overflow-hidden ${index === 0 ? "xl:col-span-2" : ""}`}
            >
              <div className={`alien-media ${light ? "is-light" : ""} ${index === 0 ? "is-wide" : ""}`}>
                <img src={sceneImage} alt={scene.title} className="h-full w-full object-cover object-top" />
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

function SlotCatalog({ variant, locale }) {
  const light = variant.isLight;
  const slotCatalog = locale.slotCatalog;
  const [selectedId, setSelectedId] = useState(slotCatalog[0].id);
  const selected = useMemo(() => slotCatalog.find((slot) => slot.id === selectedId) || slotCatalog[0], [selectedId, slotCatalog]);
  const selectedArt = light && selected.artLight ? selected.artLight : selected.art;

  return (
    <section id="sloty" className={`section-space overflow-hidden ${light ? "bg-white text-slate-950" : "section-bg text-white"}`}>
      <div className="mx-auto min-w-0 w-[min(1380px,calc(100%-32px))]">
        <div className="mb-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_430px]">
          <div className="min-w-0">
            <p className="mb-4 flex items-center gap-2 text-sm font-black uppercase text-blue-600">
              <Gamepad2 className="h-5 w-5" /> {locale.ui.catalogueKicker}
            </p>
            <h2 className={`font-display text-5xl leading-tight md:text-7xl ${light ? "text-slate-950" : "text-white"}`}>{locale.ui.catalogueTitle}</h2>
          </div>
          <p className={`self-end text-2xl leading-10 ${light ? "text-slate-600" : "text-slate-300"}`}>
            {locale.ui.catalogueIntro}
          </p>
        </div>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_390px]">
          <div className={`overflow-hidden rounded-[28px] ${light ? "frost-card" : "glass-card"}`}>
            <div className={`grid grid-cols-[70px_1fr_120px_120px_70px] items-center border-b px-5 py-4 text-sm font-black max-lg:hidden ${light ? "border-white/70 bg-white/35 text-slate-500" : "border-white/10 bg-white/[.04] text-slate-400"}`}>
              <span>#</span>
              <span>{locale.ui.game}</span>
              <span>{locale.ui.type}</span>
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
                  <img
                    src={slot.thumb}
                    alt={slot.title}
                    className={`h-20 w-36 min-w-36 max-w-none shrink-0 rounded-xl bg-slate-950/5 shadow-lg ${slot.thumbFit === "contain" ? "object-contain p-1" : "object-cover object-center"}`}
                  />
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
              <img
                src={selectedArt}
                alt={selected.title}
                className={`h-80 w-full ${selected.artFit === "contain" ? "object-contain p-4" : "object-cover"} object-top`}
              />
              <span className="absolute bottom-5 left-5 rounded-xl bg-slate-950/80 px-4 py-3 text-sm font-black uppercase text-white backdrop-blur">
                {selected.category}
              </span>
            </div>
            <p className="mt-7 text-sm font-black uppercase text-blue-600">{locale.ui.editorsChoice}</p>
            <h3 className={`mt-3 text-4xl font-semibold ${light ? "text-slate-950" : "text-white"}`}>{selected.title}</h3>
            <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>{selected.description}</p>
            <div className={`mt-7 grid grid-cols-2 border-y ${light ? "border-white/70" : "border-white/10"}`}>
              <div className={`border-r py-4 ${light ? "border-white/70" : "border-white/10"}`}>
                <span className="block text-xs uppercase text-slate-400">{locale.ui.provider}</span>
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
            <a href={locale.affiliateLink} className="mt-6 flex h-16 items-center justify-center gap-3 rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-600/25">
              {locale.ui.playNow} <ChevronRight />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SupportedSlots({ variant, locale }) {
  const light = variant.isLight;

  return (
    <section className={`section-space overflow-hidden ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto min-w-0 w-[min(1380px,calc(100%-32px))]">
        <div className="mb-9 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-end">
          <div className="min-w-0">
            <p className="section-kicker">{locale.ui.supportedKicker}</p>
            <h2 className={`font-display text-5xl leading-tight md:text-7xl ${light ? "text-slate-950" : "text-white"}`}>
              {locale.ui.supportedTitle}
            </h2>
          </div>
          <p className={`text-xl leading-9 ${light ? "text-slate-600" : "text-slate-300"}`}>
            {locale.ui.supportedIntro}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {locale.supportedSlotScenes.map((scene) => (
            (() => {
              const sceneImage = light && scene.lightImage ? scene.lightImage : scene.image;
              return (
                <article key={scene.title} className={`${light ? "frost-card" : "glass-card"} overflow-hidden`}>
                  <div className={`supported-media ${light ? "is-light" : ""}`}>
                    <img src={sceneImage} alt={scene.title} className="h-full w-full object-cover object-top" />
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

function PromoMosaic({ variant, locale }) {
  const light = variant.isLight;
  const promoIcons = [Gift, Sparkles, WalletCards, BadgeHelp];
  return (
    <section id="promocje" className={`section-space ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="section-kicker">{locale.ui.promoKicker}</p>
            <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>
              {locale.ui.promoTitle}
            </h2>
            <p className={`mt-6 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>
              {locale.ui.promoIntro}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {locale.promoTiles.map(([title, text], index) => {
              const Icon = promoIcons[index] || Sparkles;
              return (
              <article key={title} className={light ? "premium-small-light" : "premium-small"}>
                <Icon className="h-7 w-7 text-trino-cyan" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews({ variant, locale }) {
  const light = variant.isLight;
  return (
    <section id="opinie" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">{locale.ui.reviewsKicker}</p>
            <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>{locale.ui.reviewsTitle}</h2>
          </div>
          <div className={`${light ? "light-card" : "glass-card"} w-full p-5 lg:w-64`}>
            <strong className={`block font-display text-4xl ${light ? "text-blue-600" : "text-trino-yellow"}`}>4.8/5</strong>
            <span className={`text-sm font-black ${light ? "text-slate-600" : "text-slate-300"}`}>{locale.ui.averageRating}</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {locale.reviews.map(([name, city, avatar, text]) => (
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

function SeoContent({ variant, locale }) {
  const light = variant.isLight;
  return (
    <section id="poradnik-seo" className={`section-space ${light ? "bg-[#eef3fb] text-slate-950" : "bg-[#050612]"}`}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <p className="section-kicker">{locale.ui.seoKicker}</p>
        <h2 className={`mb-8 max-w-3xl font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>
          {locale.ui.seoTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {locale.seoBlocks.map(([title, text]) => (
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

function Faq({ variant, locale }) {
  const light = variant.isLight;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className={`section-space ${light ? "bg-white text-slate-950" : "section-bg"}`}>
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="section-kicker">{locale.ui.faqKicker}</p>
          <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-slate-950" : "text-white"}`}>{locale.ui.faqTitle}</h2>
          <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-600" : "text-slate-300"}`}>
            {locale.ui.faqIntro}
          </p>
        </div>
        <div className="grid gap-3">
          {locale.faq.map(([question, answer], index) => (
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

function Footer({ variant, locale }) {
  const { ui } = locale;
  return (
    <footer className="bg-[#03040b] py-12 text-white">
      <div className="mx-auto w-[min(1380px,calc(100%-32px))]">
        <div className="border-y border-white/[.12] py-10">
          <div className="grid gap-8 lg:grid-cols-[110px_1fr_180px] lg:items-center">
            <div className="grid h-20 w-20 place-items-center rounded-xl border border-trino-yellow text-3xl font-black text-trino-yellow">
              18+
            </div>
            <div>
              <h3 className="text-3xl font-black">{ui.responsibleTitle}</h3>
              <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-200">
                {ui.responsibleText}
              </p>
            </div>
            <a href="#faq" className="font-black uppercase text-lime-300">
              {ui.playerHelp} →
            </a>
          </div>
        </div>
        <div className="grid gap-10 border-b border-white/[.12] py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Logo light={variant.isLight} />
            <p className="mt-5 max-w-sm text-lg leading-8 text-slate-300">
              {ui.footerText}
            </p>
          </div>
          <div>
            <h4 className="footer-title">{ui.navigation}</h4>
            <div className="footer-list">
              {locale.navItems.map(([label, target]) => (
                <a key={target} href={`#${target}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-title">{ui.information}</h4>
            <div className="footer-list">
              {ui.footerInfo.map((item) => (
                <a key={item} href="#faq">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-title">{ui.methods}</h4>
            <div className="flex flex-wrap gap-3">
              {locale.payments.map((item) => (
                <span key={item} className="rounded-lg border border-white/[.16] bg-white/5 px-4 py-3 font-black">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-slate-400 md:flex-row">
          <span>© 2026 Trino Casino · {locale.country}.</span>
          <span>{ui.legal}</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const variant = variants[getVariantId()] || variants[fallbackVariant];
  const locale = localeConfigs[variant.locale || "pl"];
  document.documentElement.lang = locale.lang;
  return (
    <div className={variant.isLight ? "bg-white text-slate-950" : "bg-[#050612] text-white"}>
      <Header variant={variant} locale={locale} />
      <main>
        <Hero variant={variant} locale={locale} />
        <StatStrip variant={variant} locale={locale} />
        <BonusShowcase variant={variant} locale={locale} />
        <GuideTabs variant={variant} locale={locale} />
        <AlienGallery variant={variant} locale={locale} />
        <SlotCatalog variant={variant} locale={locale} />
        <SupportedSlots variant={variant} locale={locale} />
        <PromoMosaic variant={variant} locale={locale} />
        <Reviews variant={variant} locale={locale} />
        <SeoContent variant={variant} locale={locale} />
        <Faq variant={variant} locale={locale} />
      </main>
      <Footer variant={variant} locale={locale} />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = window.__TRINO_ROOT || createRoot(rootElement);
window.__TRINO_ROOT = root;
root.render(<App />);
