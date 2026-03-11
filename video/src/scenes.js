export const scenes = [
  {
    id: "intro",
    durationInFrames: 210,
    eyebrow: "Consentext | Team Walkthrough",
    title: "AI Gateway is the governed control layer for health AI",
    body:
      "This prototype shows how Consentext classifies requests, controls exposure, routes work to the right lane, and keeps an auditable boundary between personal health context and AI systems.",
    bullets: [
      "Not a generic chatbot wrapper",
      "Governance is visible product behavior",
      "Best used as a guided walkthrough"
    ],
    caption:
      "AI Gateway is the control layer between a user's health context and AI systems.",
    visualTitle: "What this website is",
    visualLines: [
      "Classify the request",
      "Apply trust and exposure rules",
      "Route the request to the correct lane",
      "Generate an audit receipt"
    ]
  },
  {
    id: "problem",
    durationInFrames: 240,
    eyebrow: "Why this product exists",
    title: "The website answers one core problem",
    body:
      "Users should not have to choose between strong privacy and useful AI. The gateway exists to prevent all-or-nothing tradeoffs by deciding what stays inside Consentext, what can be minimized, and what should never go off-board.",
    bullets: [
      "Trust design becomes understandable",
      "Minimization is shown instead of implied",
      "The off-board contrast becomes strategic"
    ],
    caption:
      "The gateway exists so privacy and intelligence do not have to be mutually exclusive.",
    visualTitle: "Trust problem",
    visualLines: [
      "All-or-nothing AI exposure is the problem",
      "Lane-based routing is the answer",
      "Auditability is the proof"
    ]
  },
  {
    id: "workflow",
    durationInFrames: 270,
    eyebrow: "Primary workflow",
    title: "The live prototype follows the same flow every time",
    body:
      "A reviewer enters a request or loads a canonical prompt, runs the gateway, and then reads the resulting task category, selected lane, provider, export state, confidence, packet behavior, and simulated output.",
    bullets: [
      "Free-text input and canonical prompt bank",
      "Recommended route and compare route modes",
      "Decision summary at the top of the result area"
    ],
    caption:
      "The basic workflow is request, classify, route, explain, and audit.",
    visualTitle: "Run flow",
    visualLines: [
      "1. Enter request",
      "2. Run gateway",
      "3. Review lane result",
      "4. Inspect packets and audit"
    ]
  },
  {
    id: "lanes",
    durationInFrames: 300,
    eyebrow: "Lane model",
    title: "The five lanes are the center of the product story",
    body:
      "Deterministic handles structured retrieval without a model call. Private keeps sensitive explanation inside Consentext. Private+ sends only a reduced export packet. Max Intelligence allows broader governed reasoning. Off-Board shows what is lost outside the gateway.",
    bullets: [
      "Deterministic is the trust anchor",
      "Private and Private+ show the adoption bridge",
      "Off-Board sharpens the strategic contrast"
    ],
    caption:
      "The lane model makes it clear that not every request should be treated the same way.",
    visualTitle: "Five lanes",
    visualLines: [
      "Deterministic",
      "Private",
      "Private+",
      "Max Intelligence",
      "Off-Board"
    ]
  },
  {
    id: "usage",
    durationInFrames: 270,
    eyebrow: "How to use the website",
    title: "The best team workflow is simple and repeatable",
    body:
      "Start on the live prototype, load a scenario or use the default request, run the gateway, read the decision summary first, then use compare mode, packet panels, and the audit receipt to explain why the route makes sense.",
    bullets: [
      "Use scenarios for repeatable demos",
      "Use compare mode when teaching the lane tradeoffs",
      "Use the source archive when challenged"
    ],
    caption:
      "Use the website as a guided demo, not as a passive brochure.",
    visualTitle: "Team workflow",
    visualLines: [
      "Open prototype",
      "Load scenario",
      "Run gateway",
      "Explain rationale",
      "Capture feedback"
    ]
  },
  {
    id: "minimization",
    durationInFrames: 270,
    eyebrow: "Highlight",
    title: "Private+ is where the minimization story becomes concrete",
    body:
      "The website shows richer vault context next to the reduced export packet so the audience can see the store-a-lot, send-a-little idea in action. This is one of the strongest features in the current build because it makes policy visible.",
    bullets: [
      "Richer vault context stays inside",
      "Only the minimum necessary packet leaves",
      "This is a practical trust bridge for adoption"
    ],
    caption:
      "Private+ turns minimization from a concept into a visible product moment.",
    visualTitle: "Packet behavior",
    visualLines: [
      "Vault context: internal and richer",
      "Export packet: reduced and governed",
      "Audit receipt records the decision"
    ]
  },
  {
    id: "proof",
    durationInFrames: 270,
    eyebrow: "Governance proof",
    title: "The site provides more than a route label",
    body:
      "Execution trace, audit summary, audit receipt, interaction history, and all-lanes compare snapshots make it possible to explain what the gateway did and why. That matters because invisible trust claims are weak in front of real stakeholders.",
    bullets: [
      "Execution trace explains the path",
      "Audit receipt records the result",
      "History and share links support review"
    ],
    caption:
      "The prototype proves governance with receipts, traces, and comparison views.",
    visualTitle: "Proof surfaces",
    visualLines: [
      "Execution trace",
      "Audit receipt",
      "Interaction history",
      "Shareable state"
    ]
  },
  {
    id: "review",
    durationInFrames: 240,
    eyebrow: "Team review tools",
    title: "This website also helps the team evaluate the concept",
    body:
      "Founder-ready scenarios, feedback capture, lane sentiment rollup, editable routing rules, and the source archive make the site useful for internal review, not only presentation. That gives the team a place to test the product story itself.",
    bullets: [
      "Scenario pack for guided walkthroughs",
      "Feedback log for reviewer reactions",
      "Source search for grounding and traceability"
    ],
    caption:
      "The site is both a demo surface and an evaluation tool for the team.",
    visualTitle: "Review tools",
    visualLines: [
      "Scenario pack",
      "Founder feedback",
      "Lane sentiment",
      "Source browser"
    ]
  },
  {
    id: "state",
    durationInFrames: 240,
    eyebrow: "Current state",
    title: "This project is an interactive concept-review prototype today",
    body:
      "It is strong enough for investor walkthroughs, internal alignment, and partner conversations, but it is still a prototype. It simulates routing behavior, packet handling, and audit output rather than connecting to production systems or live health data.",
    bullets: [
      "Good for storytelling and validation",
      "Not a production gateway yet",
      "A strong base for the next product conversation"
    ],
    caption:
      "The current build is a polished prototype for explanation and concept validation.",
    visualTitle: "Where the project stands",
    visualLines: [
      "Interactive prototype",
      "Investor-ready walkthrough",
      "Internal review tool",
      "Not production infrastructure"
    ]
  },
  {
    id: "next",
    durationInFrames: 240,
    eyebrow: "Next steps",
    title: "The next work is product validation, governance hardening, and go-to-market use",
    body:
      "The team should use the prototype to validate whether the lane model feels necessary, clarify the real governance boundaries behind each route, and turn the strongest walkthroughs into investor, advisor, design partner, and clinical collaboration demos.",
    bullets: [
      "Validate the lane model with real reviewers",
      "Translate the simulated controls into real policy",
      "Use the walkthrough as a repeatable sales-support asset"
    ],
    caption:
      "The next phase is to validate the lane model and turn the prototype story into durable product direction.",
    visualTitle: "What comes next",
    visualLines: [
      "Validate lanes",
      "Harden governance rules",
      "Expand demo use cases",
      "Connect to real system design"
    ]
  },
  {
    id: "close",
    durationInFrames: 210,
    eyebrow: "Team takeaway",
    title: "The clearest way to use this website is as a guided explanation of governed AI",
    body:
      "When the site is presented as a walkthrough, it explains the product, the trust boundary, the live features, and the strategic value of Consentext more clearly than a static page ever could.",
    bullets: [
      "Open the walkthrough page",
      "Run the live prototype",
      "Use the video for async onboarding"
    ],
    caption:
      "Use the walkthrough page for humans and the video for repeatable onboarding.",
    visualTitle: "Recommended rollout",
    visualLines: [
      "Walkthrough page for teams",
      "Live prototype for demos",
      "Video for async onboarding"
    ]
  }
];

export const totalDurationInFrames = scenes.reduce(
  (sum, scene) => sum + scene.durationInFrames,
  0
);
