"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CaseRail from "@/components/case/CaseRail";
import { caseStudyCss } from "@/content/case-study-styles";

/**
 * VirtuBox Kiosk case study.
 *
 * Reuses the shared case-study template verbatim: the same frozen stylesheet
 * (`caseStudyCss`), the same `CaseRail`, the same DOM shell, breadcrumb and
 * horizontal meta row. Only the content and the content-level media layout
 * (single figures with a lightbox, paired figures, an inline demo video) live
 * here, through one additive page-local stylesheet (`virtuboxExtrasCss`) that
 * copies the CLM case study's media classes so the two pages read the same.
 * The structure follows the steps taken on this project, not the CLM skeleton.
 * The shared template files and the other case studies are not touched. Copy is
 * Shanica's source document, transcribed verbatim.
 */

// ---------------------------------------------------------------------------
// Content model
// ---------------------------------------------------------------------------

type Figure = { src: string; alt: string; caption?: string };
type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | ({ t: "figure" } & Figure)
  | { t: "figpair"; items: [Figure, Figure] }
  | { t: "video"; src: string; poster: string; caption?: string };
type Section = { id: string; label: string; heading: string; blocks: Block[] };

const IMG = "/projects/virtubox";

// Overview area (above the sections): the cover, then the horizontal meta row,
// Role / Timeline / Product on the first line, Scope / Team on the second.
const META: { label: string; value: string; scope?: boolean }[] = [
  { label: "Role", value: "UI/UX Designer (contract)" },
  { label: "Timeline", value: "6 months, 2020" },
  { label: "Product", value: "Self-service wayfinding kiosk for shopping malls" },
  { label: "Scope", value: "Research, product priorities and end-to-end design, from brief to shipped product", scope: true },
  { label: "Team", value: "Me as the only designer, a product manager, product team members and developers", scope: true },
];

const SECTIONS: Section[] = [
  {
    id: "brief",
    label: "The brief",
    heading: "The brief",
    blocks: [
      { t: "p", text: "In 2020 I joined VirtuBox Infotech on a six-month contract as the only designer on a new product: a self-service kiosk that helps shopping mall visitors find their way and get help. I designed it end to end, from research to every screen, and everything I designed shipped." },
      { t: "p", text: "VirtuBox Infotech is a SaaS company that builds platforms for apps, websites and kiosks. Businesses buy the platform and build their own solutions on it. The kiosk was a new product line." },
      { t: "p", text: "The brief was a kiosk that helps mall visitors with anything they need, with navigation inside the mall as its main job. There was also a business need from the start. A kiosk is expensive hardware that visitors use for free, so it had to earn something back through leads, offers and ads. Every decision had to work for the visitor and for the business at the same time." },
      { t: "p", text: "I worked day to day with the product manager, who I reported to. I also joined daily calls with developers and other members of the product team who worked on VirtuBox's other products. I took my ideas and decisions to the product manager, and we discussed the trade-offs together." },
      { t: "figure", src: `${IMG}/team-working-session.webp`, alt: "A working session with the VirtuBox team in a conference room", caption: "A working session with the VirtuBox team." },
    ],
  },
  {
    id: "where-i-started",
    label: "Where I started",
    heading: "Where I started",
    blocks: [
      { t: "p", text: "When I joined, the team had a rough mock-up of the kiosk, not a designed product. It listed everything the mall had as small icons spread across the screen, all the same size. It looked like a keyboard." },
      { t: "p", text: "Three things stood out to me. Nothing told the visitor what mattered most, so every option competed for attention. The icons were small for a screen people stand in front of and tap with their whole hand. And it had no washroom option at all." },
      { t: "p", text: "I looked for other kiosks to learn from. In 2020 there were hardly any interactive mall kiosks in India, so I studied videos and information about kiosks in other countries, mostly the US. There was very little to go on. Most of the product's decisions would have to come from what visitors told me." },
    ],
  },
  {
    id: "interviews",
    label: "Interviews",
    heading: "Interviews",
    blocks: [
      { t: "p", text: "I interviewed friends and other people about problems they had faced in shopping malls. The interviews were qualitative and open: I asked people what problems they had faced in malls in the past. The answers were specific." },
      {
        t: "ul",
        items: [
          "In large malls, people got lost and could not work out how to find what they wanted.",
          "People sometimes needed a washroom urgently and could not find one.",
          "People with little time who knew exactly what they wanted, such as a pair of Nike shoes, still spent a long time finding which floor the store was on.",
          "People did not know where they were in the mall at that moment, or where the entry, exit and nearest washroom were.",
          "Once people walked away from a map, they could not remember what they had seen on it.",
        ],
      },
      { t: "p", text: "Most of what I heard was about navigation: being lost, not knowing the floor, not knowing where you are, and not knowing how far something is or how long it takes to reach." },
    ],
  },
  {
    id: "visitor-journey",
    label: "Visitor journey",
    heading: "Visitor journey",
    blocks: [
      { t: "p", text: "Laid out as a visit, the findings show a pain point at every stage, from arriving at the mall to leaving it. Each one needed its own answer on the kiosk." },
      { t: "figure", src: `${IMG}/visitor-journey.webp`, alt: "Visitor journey through a mall: five stages from arriving to heading out, with what the visitor is doing, the pain point from the interviews and what the kiosk does at each stage", caption: "Visitor journey, mapped for this case study from the interview findings." },
      { t: "h3", text: "What I took into the design" },
      { t: "p", text: "The research confirmed navigation as the kiosk's main job, and it changed the brief in three ways. Urgent needs like the washroom and the exit had to be one tap away, not buried among the stores. Every location had to come with distance and walking time, not just a position on a map. And the kiosk's help could not end when the visitor walked away from it." },
      { t: "p", text: "That left two problems to solve together. Visitors get lost and lose time because they do not know where they are, which floor a store is on, or where the nearest washroom is, and a kiosk can only help while they stand at it. The business needed a kiosk that visitors use for free to generate leads and revenue." },
    ],
  },
  {
    id: "user-flows",
    label: "User flows",
    heading: "User flows",
    blocks: [
      { t: "p", text: "I organised the product around visitors' situations rather than the mall's directory. The first four flows came from the interviews, and the fifth from the brief's aim of solving any problem a visitor has. Each starts on the home screen and ends with the visitor knowing where to go or getting help." },
      {
        t: "ol",
        items: [
          "**Urgent need.** A visitor who needs a washroom or the exit taps it on the home screen and sees the nearest one, with distance, walking time and directions.",
          "**Known store.** A visitor who knows the store's name searches for it, opens the store's details and gets directions from the kiosk.",
          "**Known need.** A visitor who only knows what they need, like shoes or food, searches by that need and sees the matching places, nearest first.",
          "**Lost.** A visitor who does not know where they are opens their location and sees the wing, the floor and what is close by.",
          "**Help.** A visitor who is stuck asks the help assistant or calls the help desk, and can share the kiosk screen with support.",
        ],
      },
      { t: "p", text: "Flows that end in directions can also end with the visitor sending the map to their phone, so the directions go with them." },
      { t: "figure", src: `${IMG}/core-user-flows.webp`, alt: "Core user flows: five visitor situations, from the home screen to the destination, with the send map to phone step where the visitor leaves the kiosk", caption: "Core user flows, redrawn for this case study." },
    ],
  },
  {
    id: "home-screen",
    label: "Home screen",
    heading: "Home screen",
    blocks: [
      { t: "p", text: "The starting mock-up treated every option the same: small icons for everything in the mall, all at one size. A visitor had to scan the whole screen to find anything, and the washroom was not there at all." },
      { t: "p", text: "I replaced the flat grid with a hierarchy. The options visitors need most, and the urgent ones, became larger and sit first. Less frequent options became smaller or moved one level down. I added the washroom, which the mock-up did not have, and made it and the exit one-tap shortcuts on the home screen, because the interviews showed these needs are urgent." },
      { t: "p", text: "The trade-off was that some options lost space and now take an extra tap. I accepted that, because a visitor looking for a washroom urgently cannot afford to scan a grid of small icons. My manager adopted this version of the home screen." },
    ],
  },
  {
    id: "search-and-wayfinding",
    label: "Search and wayfinding",
    heading: "Search and wayfinding",
    blocks: [
      { t: "h3", text: "Search by name and by need" },
      { t: "p", text: "The interviews showed that finding a specific store was one of the biggest problems. But visitors search in two different ways. Some know the store's name. Others remember only what they need, such as shoes or food, and have forgotten the brand or restaurant name." },
      { t: "p", text: "A search that only matched names would fail the second group. Searching \"food\" would return nothing, because no restaurant is called Food. So I designed search to work both ways: by name, alphabetically, and by need." },
      { t: "p", text: "A search by need returns every matching place, sorted by distance from the kiosk. Places on the visitor's floor show first, then the rest. Filters let visitors narrow results to stores, categories, dining or services. I worked through how search should behave in discussions with the team." },
      { t: "figure", src: `${IMG}/kiosk-search.webp`, alt: "Kiosk search screen: results grouped into categories and stores as the visitor types, with filters for stores, categories, dining and services" },
      { t: "h3", text: "Store pages" },
      { t: "p", text: "Every store and food place has its own page. It shows where the place is, which floor it is on, and the contact number and email of the store manager or owner. From the store page, the visitor gets directions from the kiosk: where they are now, where the place is, how long it will take to get there, and whether it is on the same floor." },
      { t: "h3", text: "You are here" },
      { t: "p", text: "A kiosk is not a phone. It has no GPS and cannot follow the visitor. It only knows its own position, which the mall sets for each kiosk during installation. So I designed every wayfinding screen to start from the kiosk." },
      { t: "p", text: "\"You are here\" shows the kiosk's wing, floor and nearest landmark. The location screen also shows how far the nearest escalator and lifts are. Every distance is measured from the kiosk and comes with a walking time, because time is easier to judge than metres. Visitors in the interviews asked both questions: how far is it, and how long will it take." },
      { t: "h3", text: "Restrooms" },
      { t: "p", text: "The restroom screen shows the nearest restroom first, with distance, walking time and a route on the map. Below it, it lists the other restrooms on the floor with their own distance and time, and a floor switcher lets visitors check other floors. The floor map is colour-coded by wing: West, Central and East." },
      {
        t: "figpair",
        items: [
          { src: `${IMG}/kiosk-my-location.webp`, alt: "My Location screen: you are here, with the wing, floor and nearest escalator and lifts on a colour-coded floor map" },
          { src: `${IMG}/kiosk-restrooms.webp`, alt: "Restrooms screen: the nearest restroom with distance, walking time and a route, plus other restrooms on the floor" },
        ],
      },
    ],
  },
  {
    id: "sending-the-map",
    label: "Sending the map",
    heading: "Sending the map",
    blocks: [
      { t: "p", text: "This was the most important problem in the project. Every distance the kiosk shows is only true while the visitor is standing at it. The interviews showed that once people walk away from a map, they forget what they saw. A visitor who walks off can be lost again." },
      { t: "p", text: "My idea was a \"Send the map to your phone\" option. The visitor enters their details, and the kiosk sends the map by SMS as a link that opens the map as an image or PDF. If the visitor also gives an email address, the map goes there too." },
      { t: "p", text: "This was also where the kiosk could generate leads. The details a visitor enters become a lead. The phone number lets the business call later about mall offers, sell products and bring customers back, and the email is used for newsletters. One feature closed the visitor's biggest gap and gave the business the leads it needed." },
      { t: "p", text: "**Why the phone number was required.** I made the phone number the required field and email optional. My reasoning was that an SMS reaches a phone without mobile data, while an email needs an internet connection to arrive. A visitor with a working connection could have opened a map app instead." },
      { t: "p", text: "**The privacy trade-off.** On a public screen, anyone nearby can see what a visitor types. We discussed the privacy of typing a phone number there. Some visitors would not be comfortable doing that, and would decide they do not need the map. I kept the phone number required for three reasons: it is the only way to deliver the map, the map is free and the number is a fair return for it, and a visitor who walks away without the map costs the business nothing more than one who never asked." },
      { t: "figure", src: `${IMG}/send-map-to-phone.webp`, alt: "Send the map to your phone: the visitor's path from kiosk directions to the map on their phone, the walk-away trade-off, and the lead reaching the business", caption: "Send the map to your phone, redrawn for this case study." },
    ],
  },
  {
    id: "help-desk",
    label: "Help desk",
    heading: "Help desk",
    blocks: [
      { t: "p", text: "The brief asked for a kiosk that solves any problem a visitor has, so help had to go beyond navigation. The help screen gives visitors a help assistant for common questions, with ready answers for things like where to eat, the nearest exit, wheelchair access and the luggage store. Quick topics cover restrooms, lifts and escalators, parking and the food court. Visitors can type or speak a question." },
      { t: "p", text: "When the assistant is not enough, \"Need a person?\" connects the visitor to the live help desk on a video call." },
      { t: "p", text: "That raised a problem. When a visitor has a technical issue with the kiosk, the kiosk's camera faces the visitor. Support can see the person, but not the screen they are stuck on. On a phone you would switch to the back camera, but a kiosk does not have one." },
      { t: "p", text: "I designed the camera switch to share the kiosk screen instead. Support sees exactly what the visitor sees and guides them through the fix during the call. Support can see the shared screen but cannot control the kiosk." },
      { t: "figure", src: `${IMG}/kiosk-help-assistant.webp`, alt: "Help assistant screen: chat with ready answers, quick topics, type or speak input, and a call to the live help desk" },
    ],
  },
  {
    id: "idle-screen",
    label: "Idle screen",
    heading: "Idle screen",
    blocks: [
      { t: "p", text: "My manager asked for moving content that would catch visitors' attention from a distance and draw them over to explore. So the kiosk never goes dark. When no one is using it, it shows offers and ads in an attractive way, which also turns idle time into revenue for the business." },
      { t: "p", text: "The kiosk also resets to the home screen after a period of no use. On a shared public screen, this means the next visitor starts fresh and does not see the last visitor's search or the phone number they typed." },
    ],
  },
  {
    id: "testing-at-real-size",
    label: "Testing at real size",
    heading: "Testing at real size",
    blocks: [
      { t: "p", text: "I had been designing at web scale. On the kiosk screen, the design did not read correctly at the distance people stand from it. People also tap a kiosk with their whole hand, not a fingertip." },
      { t: "p", text: "My manager suggested viewing my designs on a TV to judge the real size. Seeing them at that size, I redesigned the entire interface to fit the screen." },
      { t: "p", text: "My manager also asked me to research standing distance and accessibility for kiosks. What I found shaped the accessibility of the whole product." },
    ],
  },
  {
    id: "accessibility",
    label: "Accessibility",
    heading: "Accessibility",
    blocks: [
      { t: "p", text: "A mall kiosk is used by everyone who walks past it, standing or seated, local or visiting. I applied what I found across the product." },
      {
        t: "ul",
        items: [
          "**Touch targets sized for a whole hand.** People tap a kiosk with their whole hand, not a fingertip, so every control is large.",
          "**Controls within reach.** Key controls sit low enough for shorter visitors and wheelchair users to reach.",
          "**Scale for viewing distance.** The interface is sized for the distance people stand from the screen, checked on a TV at real size.",
          "**Time, not just distance.** Every distance comes with a walking time.",
          "**More than one way to ask.** Visitors can type or speak a question to the help assistant, and wheelchair access is one of the ready answers.",
        ],
      },
      { t: "h3", text: "Languages" },
      { t: "p", text: "I did not include multiple languages at first. I then got feedback that many visitors to luxury malls are tourists, and the kiosk had to work for them too. I added multiple languages, with the language switch in the header of every screen." },
    ],
  },
  {
    id: "information-architecture",
    label: "Information architecture",
    heading: "Information architecture",
    blocks: [
      { t: "p", text: "The final structure puts the visitor's situation first and the mall's directory second. Urgent needs sit one tap from home, search and categories lead to store details, and every route can end with the map on the visitor's phone." },
      { t: "figure", src: `${IMG}/information-architecture.webp`, alt: "Information architecture: attract screen, home, urgent shortcuts, search, categories, my location, help and language, leading to restrooms, store details, directions and send the map to your phone", caption: "Information architecture, redrawn for this case study." },
    ],
  },
  {
    id: "what-shipped",
    label: "What shipped",
    heading: "What shipped",
    blocks: [
      // Demo video (virtubox-demo.mp4) goes here once supplied.
      { t: "p", text: "Everything I designed shipped. I designed it in Adobe XD in 2020. In 2023, before I stopped using Adobe XD, I rebuilt the screens in Figma to keep them, without changing the design. The screens in this case study are that rebuild." },
      { t: "p", text: "Each problem from the interviews has a direct answer on the kiosk:" },
      {
        t: "ul",
        items: [
          "Lost in the mall: \"You are here\", with the wing, the floor and what is nearby.",
          "An urgent washroom: one tap from home, with the nearest one, its distance and its walking time.",
          "A specific store on an unknown floor: search by name and directions from the kiosk.",
          "A forgotten store name: search by need, nearest places first.",
          "Forgetting the map after walking away: the map sent to the visitor's phone.",
        ],
      },
      { t: "p", text: "For the business, every map sent to a phone captured a lead, and the idle screen carried offers and ads. I do not have post-launch figures such as usage or leads collected." },
    ],
  },
  {
    id: "at-the-airport",
    label: "At the airport",
    heading: "At the airport",
    blocks: [
      { t: "p", text: "Years later, I came across VirtuBox Digital Guide kiosks at Kempegowda International Airport in Bengaluru. These are set up for travellers, with a shop finder, amenities and facilities, and boarding gates." },
      // Single image (airport-digital-guide) + its caption go here once supplied.
      {
        t: "figpair",
        items: [
          { src: `${IMG}/airport-shop-finder.webp`, alt: "The VirtuBox logo and shop finder on the airport kiosk screen, with my passport in hand" },
          { src: `${IMG}/airport-kiosk-stand.webp`, alt: "The airport kiosk from the side, with its angled screen on a stand" },
        ],
      },
    ],
  },
  {
    id: "looking-back",
    label: "Looking back",
    heading: "Looking back",
    blocks: [
      { t: "p", text: "Seeing my designs on a TV at real size showed me that the scale of a physical product cannot be judged on a desktop screen." },
      { t: "p", text: "Adding languages after feedback showed me that a public product serves more people than the ones I interviewed, including tourists." },
      { t: "p", text: "The hardest constraint was that the kiosk cannot move. The answer was to send the directions to the device that goes with the visitor: their phone." },
    ],
  },
];

// Inline markup: **bold** -> <strong>.
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    /^\*\*[^*]+\*\*$/.test(p) ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>
  );
}

export default function VirtuboxCaseStudy() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const railSections = SECTIONS.map((s) => ({ id: s.id, label: s.label }));

  const close = useCallback(() => setLightbox(null), []);
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close]);

  // A real image, clickable to open full size in the lightbox. A div (not a
  // <button>) so it never sizes to the image's intrinsic width. Caption shows
  // only when the source document gives one. No radius, no shadow.
  const renderFigure = (fig: Figure, key: string | number) => {
    const open = () => setLightbox({ src: fig.src, alt: fig.alt });
    return (
      <figure key={key} className="cs-fig">
        <div
          className="cs-fig-btn"
          role="button"
          tabIndex={0}
          onClick={open}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              open();
            }
          }}
          aria-label={`Open full size: ${fig.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fig.src} alt={fig.alt} loading="lazy" decoding="async" />
          <span className="cs-fig-zoom" aria-hidden>
            Click to enlarge
          </span>
        </div>
        {fig.caption ? <figcaption>{fig.caption}</figcaption> : null}
      </figure>
    );
  };

  const renderBlock = (b: Block, key: number) => {
    switch (b.t) {
      case "p":
        return (
          <div key={key} className="cs-body">
            <p>{renderInline(b.text)}</p>
          </div>
        );
      case "h3":
        return (
          <h3 key={key} className="cs-h3">
            {b.text}
          </h3>
        );
      case "ul":
        return (
          <ul key={key} className="cs-ul">
            {b.items.map((it, i) => (
              <li key={i}>{renderInline(it)}</li>
            ))}
          </ul>
        );
      case "ol":
        return (
          <ol key={key} className="cs-ol">
            {b.items.map((it, i) => (
              <li key={i}>{renderInline(it)}</li>
            ))}
          </ol>
        );
      case "figure":
        return renderFigure(b, key);
      case "figpair":
        return (
          <div key={key} className="cs-pair">
            {renderFigure(b.items[0], 0)}
            {renderFigure(b.items[1], 1)}
          </div>
        );
      case "video":
        return (
          <figure key={key} className="cs-fig">
            <video className="cs-video" src={b.src} poster={b.poster} controls playsInline preload="metadata" />
            {b.caption ? <figcaption>{b.caption}</figcaption> : null}
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: caseStudyCss }} />
      <style dangerouslySetInnerHTML={{ __html: virtuboxExtrasCss }} />
      <main className="cs" id="main">
        <div className="cs-page">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#work" className="cs-bc-link">
              <svg className="cs-bc-arrow" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M19 12H5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Work
            </Link>
            <span className="cs-bc-sep" aria-hidden>
              /
            </span>
            <span className="cs-bc-current">VirtuBox</span>
          </nav>

          <CaseRail sections={railSections} />

          <div className="cs-content">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cs-logo"
              src="/hero/virtubox-v2.svg"
              alt="VirtuBox"
              width={24}
              height={24}
              style={{ "--logo-w": "24" } as CSSProperties}
            />
            <h1 className="cs-h1">VirtuBox Kiosk Design</h1>

            <video className="cs-hero" src="/projects/virtubox-cover.mp4" autoPlay muted loop playsInline aria-hidden />

            <hr className="cs-div cs-div-hero" />

            <div className="cs-meta">
              {META.map((m) => (
                <div key={m.label} className={`cs-meta-item${m.scope ? " scope" : ""}`}>
                  <div className="cs-meta-label">{m.label}</div>
                  <div className="cs-meta-value">{m.value}</div>
                </div>
              ))}
            </div>

            <hr className="cs-div cs-div-meta" />

            <div className="cs-sections">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="cs-section">
                  <h2 className="cs-h2">{s.heading}</h2>
                  {s.blocks.map((b, i) => renderBlock(b, i))}
                </section>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-footerwrap">
          <Footer />
        </div>
      </main>

      {lightbox ? (
        <div className="cs-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={close}>
          <button type="button" className="cs-lightbox-close" onClick={close} aria-label="Close">
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}

// ---------------------------------------------------------------------------
// Page-local additive styles, copied from the CLM case study so the two pages
// render media identically. New `.cs-*` classes only; nothing here overrides a
// shared template rule or affects any other case study. Every content element
// is capped at the body text column (var(--col)) and never wider.
// ---------------------------------------------------------------------------
const virtuboxExtrasCss = `
.cs{ --body: var(--body-inter); }

/* ---- body lists (markers at the column's left edge) ---- */
.cs-ul, .cs-ol{ margin:16px 0 0; padding-left:0; max-width:var(--col); font-family:var(--body); font-size:16px; line-height:1.33; letter-spacing:normal; color:#464646; list-style-position:inside; }
.cs-ul{ list-style-type:disc; }
.cs-ol{ list-style-type:decimal; }
.cs-ul li, .cs-ol li{ margin:0; padding-left:0; }
.cs-ul li::marker{ color:#b4a4d2; }
.cs-ul li + li, .cs-ol li + li{ margin-top:8px; }
.cs-ul strong, .cs-ul b, .cs-ol strong, .cs-ol b{ font-weight:600; }

/* ---- figures / diagrams (capped at the body column; scale down, aspect kept) ---- */
.cs-fig{ margin:28px 0 0; width:100%; max-width:var(--col); }
.cs-fig-btn{ display:block; width:100%; max-width:100%; min-width:0; padding:0; border:1px solid var(--divider); border-radius:0; background:#fff; cursor:zoom-in; overflow:hidden; position:relative; }
.cs-fig-btn:hover{ border-color:#cdbdea; }
.cs-fig-btn:focus-visible{ outline:2px solid var(--accent); outline-offset:3px; }
.cs-fig-btn img{ display:block; width:100%; max-width:100%; height:auto; }
.cs-fig-zoom{ position:absolute; right:12px; bottom:12px; font-family:var(--inter); font-size:12px; font-weight:500; color:#5b5b5b; background:rgba(255,255,255,0.92); border:1px solid var(--divider); border-radius:999px; padding:5px 11px; opacity:0; transition:opacity .15s; pointer-events:none; }
.cs-fig-btn:hover .cs-fig-zoom, .cs-fig-btn:focus-visible .cs-fig-zoom{ opacity:1; }
.cs-fig figcaption{ margin-top:10px; font-family:var(--inter); font-size:13px; line-height:1.45; color:#8c8c8c; }

/* ---- inline demo video: body column, zero radius, with controls and a poster ---- */
.cs-video{ display:block; width:100%; max-width:100%; height:auto; border:1px solid var(--divider); border-radius:0; background:#000; }

/* ---- paired media: two equal items side by side inside the body column; stack on mobile ---- */
.cs-pair{ margin:28px 0 0; max-width:var(--col); display:grid; grid-template-columns:1fr 1fr; gap:16px; align-items:stretch; }
.cs-pair .cs-fig{ margin:0; max-width:none; align-self:start; }

@media (max-width:767px){
  .cs-ul{ font-size:16px; }
  .cs-pair{ grid-template-columns:1fr; }
}

/* ---- lightbox ---- */
.cs-lightbox{ position:fixed; inset:0; z-index:100; background:rgba(20,20,22,0.82); display:flex; align-items:center; justify-content:center; padding:32px; }
.cs-lightbox img{ max-width:min(1400px, 95vw); max-height:92vh; width:auto; height:auto; border-radius:0; background:#fff; cursor:default; }
.cs-lightbox-close{ position:fixed; top:18px; right:22px; width:40px; height:40px; border:0; border-radius:999px; background:rgba(255,255,255,0.14); color:#fff; font-size:26px; line-height:1; cursor:pointer; }
.cs-lightbox-close:hover{ background:rgba(255,255,255,0.26); }
.cs-lightbox-close:focus-visible{ outline:2px solid #fff; outline-offset:2px; }
`;
