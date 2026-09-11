// ---------------------------------------------------------------------------
// APPLIED AI PRACTICE — the Case Check section of the home page.
// Copy comes from the redesign brief and the reference prototype, verbatim.
// Every [TODO] marks prototype copy that could not be read from the supplied
// screenshots (only step 06 and the Test set tab were captured) — Shanica
// fills those in; nothing may be invented.
// ---------------------------------------------------------------------------

export const appliedAI = {
  eyebrow: "02 / Applied AI Practice",
  heading: "What I'm building now: Case Check.",
  intro:
    "A narrow portfolio-review agent that makes its plan, evidence, uncertainty, and limits visible. This section shows the decisions already documented, not invented performance.",
  status: [
    "Build in progress",
    "Product contract v0.1",
    "Evaluation protocol locked",
    "Results not yet published",
  ],

  contract: {
    eyebrow: "The Product Contract",
    headline:
      "Find the weakest part of one case study, and the report says what it could not judge.",
    rows: [
      { label: "For", value: "Junior-to-mid UX designers preparing a portfolio" },
      {
        label: "Not for",
        value: "Hiring decisions, deep visual critique, or accessibility and legal audits",
      },
      {
        label: "Source of judgment",
        value: "The UXPective case-study storytelling framework and my own review criteria",
      },
      {
        label: "Data boundary",
        value: "Portfolio content is held only for the run unless the designer opts in to save it",
      },
    ],
  },

  flow: {
    eyebrow: "Interaction Study 01",
    heading: "The six-step review flow",
    tag: "Click any step",
    steps: [
      {
        name: "Fetch",
        short: "Read the source",
        label: "Step 01 · [TODO]",
        tag: "[TODO]",
        headline: "[TODO: one-line headline for the fetch step.]",
        paragraph: "[TODO: how Case Check reads the source before anything is judged.]",
        show: "[TODO]",
        primitive: "[TODO]",
      },
      {
        name: "Classify",
        short: "Resolve ambiguity",
        label: "Step 02 · [TODO]",
        tag: "[TODO]",
        headline: "[TODO: one-line headline for the classify step.]",
        paragraph: "[TODO: how ambiguity about the input is resolved.]",
        show: "[TODO]",
        primitive: "[TODO]",
      },
      {
        name: "Plan",
        short: "Show checks first",
        label: "Step 03 · [TODO]",
        tag: "[TODO]",
        headline: "[TODO: one-line headline for the plan step.]",
        paragraph: "[TODO: why the checks are shown before they run.]",
        show: "[TODO]",
        primitive: "[TODO]",
      },
      {
        name: "Run checks",
        short: "Text + vision",
        label: "Step 04 · [TODO]",
        tag: "[TODO]",
        headline: "[TODO: one-line headline for the run-checks step.]",
        paragraph: "[TODO: how the text and vision checks execute.]",
        show: "[TODO]",
        primitive: "[TODO]",
      },
      {
        name: "Self-verify",
        short: "Recheck every claim",
        label: "Step 05 · [TODO]",
        tag: "[TODO]",
        headline: "[TODO: one-line headline for the self-verify step.]",
        paragraph: "[TODO: how every claim is rechecked before the report.]",
        show: "[TODO]",
        primitive: "[TODO]",
      },
      {
        // Verbatim from the prototype.
        name: "Report",
        short: "One finding + one fix",
        label: "Step 06 · Structured Handoff",
        tag: "One priority",
        headline: "Return one weakest part and one fix the designer can make.",
        paragraph:
          "The final output is structured into weakest part, why it matters, one concrete fix, confidence, and what could not be judged. Secondary notes remain visibly secondary.",
        show: "Pinned finding · why · one-week fix · confidence · limits",
        primitive: "Typed report + source-linked annotations",
      },
    ],
  },

  failures: {
    eyebrow: "Designed Failure States",
    heading: "The agent asks or stops instead of guessing.",
    cells: [
      {
        title: "Multiple cases",
        body: "Ask which case to review, or state why the first is being used.",
      },
      {
        title: "Partial load",
        body: "Let the designer choose whether to continue on incomplete evidence.",
      },
      {
        title: "Images only",
        body: "Use vision when possible; refuse when there is too little readable content.",
      },
      {
        title: "Login or dead link",
        body: "Name what failed and give a concrete route forward.",
      },
    ],
  },

  evaluation: {
    eyebrow: "Interaction Study 02",
    heading: "The evaluation is defined before the first score.",
    tag: "No results yet",
    stats: [
      { value: "40", label: "Test set", note: "permitted cases and problem inputs" },
      { value: "7", label: "Scored dimensions", note: "0–2 points each; 14 maximum" },
      { value: "7", label: "Hard failures", note: "logged separately from the score" },
      { value: "—", label: "Current result", note: "evaluation has not been published" },
    ],
    tabs: [
      {
        name: "Test set",
        eyebrow: "Test Set · Target 40",
        headline: "Test the judgment across strong, average, weak, and broken inputs.",
        paragraph:
          "The planned mix includes 8 strong cases, 14 with one clear weak point, 8 weak cases, 4 framework-heavy cases with real thinking, and 6 problem inputs.",
        rows: [
          {
            label: "Ground truth",
            value:
              "Shanica records her weakest-part verdict before the run; 2–3 mentored designers grade a blind subset of 15.",
          },
        ],
      },
      {
        name: "Rubric",
        eyebrow: "Rubric",
        headline: "[TODO: rubric headline from the prototype.]",
        paragraph: "[TODO: rubric copy from the prototype.]",
        rows: [],
      },
      {
        name: "Hard failures",
        eyebrow: "Hard Failures",
        headline: "[TODO: hard-failures headline from the prototype.]",
        paragraph: "[TODO: hard-failures copy from the prototype.]",
        rows: [],
      },
      {
        name: "What gets published",
        eyebrow: "What Gets Published",
        headline: "[TODO: publication headline from the prototype.]",
        paragraph: "[TODO: publication copy from the prototype.]",
        rows: [],
      },
    ],
    footnote:
      "No percentage will appear here until the full run is graded. The write-up will include the distribution, disagreements, hard failures, the worst examples, the design change they caused, and the re-run.",
  },

  limit: {
    label: "Current limit",
    text: "Case Check evaluates the narrative of a case study. It does not decide whether someone is hireable, and its first version will not claim deep visual-craft judgment. Full craft evaluation is deliberately deferred.",
  },

  link: { label: "Read the full Case Check study", href: "/work/case-check" },
} as const;
