const sourceTabs = document.getElementById("source-tabs");
const sourceMeta = document.getElementById("source-meta");
const sourceText = document.getElementById("source-text");
const sourceSearchInput = document.getElementById("source-search-input");
const sourceSearchStatus = document.getElementById("source-search-status");
const sourceSearchResults = document.getElementById("source-search-results");

const requestInput = document.getElementById("request-input");
const runPrototypeButton = document.getElementById("run-prototype");
const clearPrototypeButton = document.getElementById("clear-prototype");
const copyLinkButton = document.getElementById("copy-link");
const exportSessionButton = document.getElementById("export-session");
const importSessionButton = document.getElementById("import-session");
const importSessionInput = document.getElementById("import-session-input");
const resetAllButton = document.getElementById("reset-all");
const actionStatusEl = document.getElementById("action-status");
const exportHistoryButton = document.getElementById("export-history");
const clearHistoryButton = document.getElementById("clear-history");
const exportFeedbackButton = document.getElementById("export-feedback");
const clearFeedbackButton = document.getElementById("clear-feedback");
const demoModeToggleButton = document.getElementById("demo-mode-toggle");
const exportRoutingRulesButton = document.getElementById("export-routing-rules");
const importRoutingRulesButton = document.getElementById("import-routing-rules");
const importRoutingRulesInput = document.getElementById("import-routing-rules-input");
const restoreRoutingRulesButton = document.getElementById("restore-routing-rules");
const modeRecommendedButton = document.getElementById("mode-recommended");
const modeCompareButton = document.getElementById("mode-compare");
const promptBank = document.getElementById("prompt-bank");
const sessionStatusEl = document.getElementById("session-status");
const promptBankSummaryEl = document.getElementById("prompt-bank-summary");

const taskCategoryEl = document.getElementById("task-category");
const selectedLaneEl = document.getElementById("selected-lane");
const selectedProviderEl = document.getElementById("selected-provider");
const externalExportEl = document.getElementById("external-export");
const classificationConfidenceEl = document.getElementById("classification-confidence");
const resultSummaryEl = document.getElementById("result-summary");
const exposureDecisionEl = document.getElementById("exposure-decision");
const processingModeEl = document.getElementById("processing-mode");
const laneRationaleEl = document.getElementById("lane-rationale");
const canonicalMessageEl = document.getElementById("canonical-message");
const dataScopeEl = document.getElementById("data-scope");
const alternateLaneEl = document.getElementById("alternate-lane");
const compareRouteEl = document.getElementById("compare-route");
const gatewayJobsEl = document.getElementById("gateway-jobs");
const vaultContextEl = document.getElementById("vault-context");
const contextUsedEl = document.getElementById("context-used");
const vaultPacketEl = document.getElementById("vault-packet");
const exportPacketEl = document.getElementById("export-packet");
const responseOutputEl = document.getElementById("response-output");
const executionTraceEl = document.getElementById("execution-trace");
const teamTakeawayEl = document.getElementById("team-takeaway");
const ruleInspectorEl = document.getElementById("rule-inspector");
const auditSummaryEl = document.getElementById("audit-summary");
const auditReceiptEl = document.getElementById("audit-receipt");
const offboardWarningEl = document.getElementById("offboard-warning");
const gapAuditEl = document.getElementById("gap-audit");
const futureNotesEl = document.getElementById("future-notes");
const teamQuestionsEl = document.getElementById("team-questions");
const historyLogEl = document.getElementById("history-log");
const routingEditorEl = document.getElementById("routing-editor");
const routingTablePlaceholderEl = document.getElementById("routing-table-placeholder");
const laneSnapshotGridEl = document.getElementById("lane-snapshot-grid");
const feedbackPanelEl = document.getElementById("feedback-panel");
const feedbackLogEl = document.getElementById("feedback-log");
const scenarioPackEl = document.getElementById("scenario-pack");
const reviewContextEl = document.getElementById("review-context");
const feedbackSummaryEl = document.getElementById("feedback-summary");
const narrativePanelEl = document.getElementById("narrative-panel");

const promptListElements = {
  Deterministic: document.getElementById("deterministic-prompts-list"),
  Private: document.getElementById("private-prompts-list"),
  "Private+": document.getElementById("privateplus-prompts-list"),
  "Max Intelligence": document.getElementById("maxintelligence-prompts-list"),
  "Off-Board": document.getElementById("offboard-prompts-list"),
};

const canonicalReducedPacket = [
  "Age: 54",
  "Sex: Male",
  "LDL: 168",
  "HDL: 40",
  "Triglycerides: 210",
  "Relevant pattern: elevated LDL and triglycerides",
];

const vaultContext = [
  "Detailed lab history and biomarker panels",
  "Wearable device trends and sleep scores",
  "Uploaded medical records and notes",
  "Nutrition, fitness, and medication history",
  "Longitudinal health patterns held inside the Vault",
];

const richerVaultPacket = [
  "Full lipid history across multiple dates",
  "Wearable sleep and activity trends",
  "Uploaded medical records and clinician notes",
  "Medication timeline and nutrition context",
  "Broader biomarker panels beyond the export subset",
];

const gatewayJobs = [
  "Classify the request",
  "Apply trust and exposure rules",
  "Route the request to the correct lane",
];

const gapAuditItems = [
  "Visible text encoding artifacts were still leaking into parts of the site and source viewer.",
  "The keyword router was too thin to classify the full canonical prompt bank reliably.",
  "The route table and prompt lists were duplicated in static HTML, which risked drift away from the actual router.",
  "The first interactive version did not provide the editable routing table called out in the prototype brief.",
  "Compare mode was mostly a display toggle instead of a stronger recommended-vs-alternate inspection view.",
];

const futureNotes = [
  "The docs suggest the gateway may evolve from a policy router toward a broader context engine over time.",
  "Future agents should not access the Vault directly. The safer pattern is Agent -> Gateway -> Vault.",
  "Qwen is a useful internal-lane example, not the definition of the whole gateway architecture.",
  "The prototype should stay governance-first and avoid drifting into vendor strategy or final infrastructure claims.",
];

const teamQuestions = [
  "Does the gateway feel necessary?",
  "Do the lanes feel intuitive and distinct?",
  "Does the Private lane feel compelling enough to justify future investment?",
  "Does the minimization concept in Private+ feel believable and useful?",
  "Does Max Intelligence feel valuable without undermining the governance story?",
  "Does the off-board contrast strengthen the argument for Consentext?",
  "Does the team see how the gateway differs from the Vault and the Health Portal?",
];

const scenarioPack = [
  {
    title: "Trust anchor",
    lane: "Deterministic",
    prompt: "Show my cholesterol trend over the last six months",
    focus: "Demonstrate that the gateway can create value without AI at all.",
    talkingPoints: [
      "No model call happens",
      "The result is structured retrieval rather than reasoning",
      "This is the trust anchor for the rest of the system",
    ],
  },
  {
    title: "Protected explanation",
    lane: "Private",
    prompt: "Explain my latest lab results in plain English",
    focus: "Show that sensitive personal context can stay inside Consentext while still benefiting from AI.",
    talkingPoints: [
      "Qwen represents the protected internal lane",
      "No external export is allowed",
      "The output is explanation, not advice",
    ],
  },
  {
    title: "Minimization story",
    lane: "Private+",
    prompt: "What lifestyle changes might improve these lab results?",
    focus: "Demonstrate store-a-lot, send-a-little minimization behavior.",
    talkingPoints: [
      "Show richer Vault context versus reduced packet",
      "Only the minimum necessary subset leaves",
      "This is the practical adoption bridge lane",
    ],
  },
  {
    title: "Capability lane",
    lane: "Max Intelligence",
    prompt: "Compare treatments for persistently high LDL",
    focus: "Show why a stronger governed external lane exists without abandoning control.",
    talkingPoints: [
      "This is broader than Private+",
      "The gateway still mediates and audits the interaction",
      "User freedom is preserved without stepping out of Consentext",
    ],
  },
  {
    title: "Loss of control",
    lane: "Off-Board",
    prompt: "I pasted my full medical record directly into ChatGPT",
    focus: "Sharpen the strategic argument by showing what disappears outside the gateway.",
    talkingPoints: [
      "No routing control",
      "No minimization",
      "No protected lane or Consentext audit boundary",
    ],
  },
];

const promptGroups = [
  {
    name: "Deterministic",
    prompts: [
      "Show my cholesterol trend over the last six months",
      "List my LDL and HDL values by date",
      "Build a timeline of my recent lab results",
      "Show how my triglycerides changed over time",
      "Identify missing biomarkers from my recent panels",
      "Generate a structured summary of my lipid history",
      "Show my wearable sleep score trend",
      "List my biomarker results from most recent to oldest",
    ],
  },
  {
    name: "Private",
    prompts: [
      "Explain my latest lab results in plain English",
      "Help me understand what changed in my biomarkers",
      "Summarize what stands out in my recent labs",
      "Explain this wearable trend in simple language",
      "Help me understand this personal health pattern",
      "Explain this record without giving treatment advice",
      "Summarize my recent results for me in simple terms",
      "Tell me what seems unusual in this lab snapshot",
    ],
  },
  {
    name: "Private+",
    prompts: [
      "What lifestyle changes might improve these lab results?",
      "What habits may affect this cholesterol pattern?",
      "Based on these biomarkers, what general improvements should I explore?",
      "What non-diagnostic steps are commonly associated with better results here?",
      "What general actions might support healthier lipid levels?",
      "What behavior changes are often linked to better numbers like these?",
      "What should I explore to improve this trend?",
      "What general wellness steps could be relevant to this pattern?",
    ],
  },
  {
    name: "Max Intelligence",
    prompts: [
      "Compare treatments for persistently high LDL",
      "Compare medication and lifestyle approaches for this pattern",
      "Summarize current research directions related to cholesterol management",
      "Compare intervention categories for this biomarker pattern",
      "Explore broader options commonly discussed for this issue",
      "Review research themes related to lipid management",
      "Compare common care pathways for this condition",
      "Summarize broader approaches discussed in the literature",
    ],
  },
  {
    name: "Off-Board",
    prompts: [
      "I pasted my full medical record directly into ChatGPT",
      "I uploaded my labs into Claude without using Consentext",
      "I left the platform and used an outside AI tool directly",
    ],
  },
];

const laneDefinitions = {
  Deterministic: {
    provider: "Deterministic engine",
    dataScope: "Internal structured data",
    exposureDecision: "Structured internal logic is sufficient, so no AI access is granted.",
    processingMode: "No AI / deterministic retrieval",
    laneMeaning: "Structured retrieval, calculations, timelines, and non-AI summaries.",
    canonicalMessage: "This request can be handled without AI.",
    exportPacket: ["No external export", "Structured retrieval only"],
    contextUsed: [
      "Structured biomarker values",
      "Date-indexed lab history",
      "Threshold checks and calculations",
      "Timeline and table formatting rules",
    ],
    teamTakeaway: "Not everything needs AI. The gateway can create value with structured retrieval alone.",
    executionTrace: [
      "Classified the request as structured retrieval",
      "Skipped model invocation",
      "Queried structured internal records only",
      "Formatted the result as a deterministic timeline/table response",
      "Generated an audit receipt with provider = deterministic engine",
    ],
    responseBuilder: (request) => `
      <div class="response-block response-deterministic">
        <h4>No AI used</h4>
        <p>${escapeHtml(request)}</p>
        <div class="response-table">
          <div class="response-table-row response-table-head"><span>Date</span><span>LDL</span><span>HDL</span><span>Triglycerides</span></div>
          <div class="response-table-row"><span>2025-09-14</span><span>182</span><span>38</span><span>226</span></div>
          <div class="response-table-row"><span>2025-12-03</span><span>174</span><span>39</span><span>219</span></div>
          <div class="response-table-row"><span>2026-03-02</span><span>168</span><span>40</span><span>210</span></div>
        </div>
        <ul class="response-bullets">
          <li>Trend direction: LDL and triglycerides remain elevated but improved across the period.</li>
          <li>Output type: structured retrieval and formatting.</li>
          <li>Export status: no external export.</li>
        </ul>
      </div>
    `,
  },
  Private: {
    provider: "Qwen",
    dataScope: "Internal protected context",
    exposureDecision: "Sensitive personal context requires a protected internal lane with no external export.",
    processingMode: "Protected internal AI",
    laneMeaning: "Protected explanation of personal health context inside Consentext.",
    canonicalMessage: "This request uses protected internal AI. Sensitive data stays inside Consentext.",
    exportPacket: ["No external export", "Sensitive personal context remains inside Consentext"],
    contextUsed: [
      "Protected personal lab context",
      "Personal record explanations",
      "Wearable and biomarker patterns",
      "Internal model inference inside the wall",
    ],
    teamTakeaway: "AI can help explain personal health context without sending the record outside Consentext.",
    executionTrace: [
      "Classified the request as protected explanation",
      "Applied internal-only exposure logic",
      "Selected the Private lane",
      "Routed the request to Qwen as the internal model example",
      "Returned plain-language explanation with no external export",
    ],
    responseBuilder: (request) => `
      <div class="response-block response-private">
        <h4>Protected internal explanation</h4>
        <p><strong>Request:</strong> ${escapeHtml(request)}</p>
        <p>
          Your recent lipid snapshot shows LDL and triglycerides above the healthier range in the example context,
          while HDL remains relatively low. In plain language, the pattern suggests that lipid-related risk markers
          still deserve attention, even though the most recent values appear somewhat improved versus earlier results.
        </p>
        <p>
          This explanation stays inside the Consentext boundary. The goal here is understanding, not treatment advice.
        </p>
      </div>
    `,
  },
  "Private+": {
    provider: "External AI",
    dataScope: "Reduced context packet",
    exposureDecision: "General guidance is allowed, but only after gateway minimization creates a reduced packet.",
    processingMode: "Reduced-context external AI",
    laneMeaning: "General guidance from a minimized packet rather than the full record.",
    canonicalMessage: "This request uses a reduced context packet for external AI assistance.",
    exportPacket: canonicalReducedPacket,
    contextUsed: [
      "Minimum necessary biomarker subset",
      "Reduced packet generated by the gateway",
      "General wellness and behavior framing",
      "External AI receives minimized context only",
    ],
    teamTakeaway: "The gateway can do meaningful minimization work: store a lot, send a little.",
    executionTrace: [
      "Classified the request as reduced-context guidance",
      "Checked that minimized context is sufficient",
      "Built a reduced packet from the richer Vault context",
      "Sent only the reduced packet to external AI",
      "Logged that minimization was applied before export",
    ],
    responseBuilder: (request) => `
      <div class="response-block response-privateplus">
        <h4>Reduced-context external guidance</h4>
        <p><strong>Request:</strong> ${escapeHtml(request)}</p>
        <div class="response-columns">
          <div>
            <p class="mini-label">Before minimization</p>
            <p>Full lab history, wearable trends, uploaded records, notes, medication timeline.</p>
          </div>
          <div>
            <p class="mini-label">After minimization</p>
            <p>Age 54, male, LDL 168, HDL 40, triglycerides 210, elevated lipid pattern.</p>
          </div>
        </div>
        <ul class="response-bullets">
          <li>Explore dietary patterns commonly associated with healthier LDL and triglyceride ranges.</li>
          <li>Review exercise, sleep, and other habit patterns that may influence lipid trends.</li>
          <li>Keep guidance broad and non-diagnostic because the external lane received only minimized context.</li>
        </ul>
      </div>
    `,
  },
  "Max Intelligence": {
    provider: "External AI",
    dataScope: "Broader governed context",
    exposureDecision: "Broader comparative or research-oriented reasoning justifies the highest-capability governed lane.",
    processingMode: "High-capability governed AI",
    laneMeaning: "Broader governed comparison, research, and open-ended reasoning.",
    canonicalMessage: "This request uses the highest-capability governed AI lane.",
    exportPacket: [
      "Broader governed context may be shared",
      "Still routed through Consentext",
      "Still audited and boundary-managed",
    ],
    contextUsed: [
      "Comparative treatment framing",
      "Research and literature exploration context",
      "Broader option analysis under gateway control",
      "Governed external AI capability",
    ],
    teamTakeaway: "Consentext can preserve user freedom without stepping out of the interaction entirely.",
    executionTrace: [
      "Classified the request as broader comparison",
      "Allowed a broader governed external lane",
      "Selected Max Intelligence for higher-capability reasoning",
      "Preserved auditability and gateway mediation",
      "Returned comparative output instead of plain explanation",
    ],
    responseBuilder: (request) => `
      <div class="response-block response-max">
        <h4>High-capability governed comparison</h4>
        <p><strong>Request:</strong> ${escapeHtml(request)}</p>
        <div class="response-table">
          <div class="response-table-row response-table-head"><span>Category</span><span>Example role</span><span>Why a user asks</span></div>
          <div class="response-table-row"><span>Lifestyle</span><span>Diet, movement, sleep, habit change</span><span>Lower-friction intervention path</span></div>
          <div class="response-table-row"><span>Medication</span><span>Statins or other clinician-managed options</span><span>Stronger lipid-lowering potential</span></div>
          <div class="response-table-row"><span>Research review</span><span>Compare current themes and tradeoffs</span><span>Open-ended exploration</span></div>
        </div>
        <ul class="response-bullets">
          <li>This lane is broader than Private+ and is meant for comparison, literature, and open-ended reasoning.</li>
          <li>Consentext still remains in front of the interaction and records the governed export.</li>
        </ul>
      </div>
    `,
  },
  "Off-Board": {
    provider: "External AI direct",
    dataScope: "Unmanaged external disclosure",
    exposureDecision: "Consentext has been bypassed, so no governed exposure logic can be enforced.",
    processingMode: "Direct external AI use",
    laneMeaning: "Contrast state showing what happens outside the gateway.",
    canonicalMessage: "You are now outside Consentext protections.",
    exportPacket: [
      "No gateway minimization",
      "No routing control",
      "Potentially full record disclosure outside Consentext",
    ],
    contextUsed: [
      "Direct user disclosure to outside AI",
      "No protected lane",
      "No Consentext mediation",
      "No Consentext-controlled audit boundary",
    ],
    teamTakeaway: "Off-board sharpens the strategic value of the gateway by showing what is lost without it.",
    executionTrace: [
      "Detected direct use of an outside AI tool",
      "Marked the interaction as Off-Board rather than a governed lane",
      "Disabled routing, minimization, and protected-lane controls",
      "Recorded the event as unmanaged external disclosure",
    ],
    responseBuilder: (request) => `
      <div class="response-block response-offboard">
        <h4>Outside Consentext protections</h4>
        <p><strong>Observed event:</strong> ${escapeHtml(request)}</p>
        <ul class="response-bullets">
          <li>No routing control</li>
          <li>No context minimization</li>
          <li>No protected internal AI lane</li>
          <li>No Consentext audit boundary</li>
        </ul>
      </div>
    `,
  },
};

function cloneRoutingRules(rules) {
  return rules.map((rule) => ({
    ...rule,
    keywords: [...rule.keywords],
  }));
}

const DEFAULT_ROUTING_RULES = [
  {
    lane: "Off-Board",
    taskCategory: "Off-board direct external AI use",
    rationale:
      "The request describes bypassing Consentext and interacting with an external AI tool directly, which the canon defines as Off-Board rather than a governed lane.",
    keywords: [
      "chatgpt",
      "claude",
      "gemini",
      "outside ai",
      "directly",
      "uploaded my labs",
      "pasted my full medical record",
      "left the platform",
      "external ai tool",
    ],
  },
  {
    lane: "Deterministic",
    taskCategory: "Structured retrieval",
    rationale:
      "The request can be answered with structured retrieval, calculations, or formatting alone, so the gateway should avoid an AI call and use Deterministic handling.",
    keywords: [
      "trend",
      "timeline",
      "chart",
      "list",
      "calculate",
      "missing",
      "by date",
      "structured summary",
      "lipid history",
      "wearable sleep score",
      "most recent to oldest",
      "show how",
      "generate",
    ],
  },
  {
    lane: "Private",
    taskCategory: "Protected explanation",
    rationale:
      "The user is asking for explanation of personal health context. The documents route these explanation tasks to the protected internal AI lane.",
    keywords: [
      "explain",
      "help me understand",
      "plain english",
      "simple language",
      "personal health pattern",
      "medical record",
      "what stands out",
      "recent labs",
      "unusual",
      "summarize my",
      "summarize recent results",
    ],
  },
  {
    lane: "Private+",
    taskCategory: "Reduced-context guidance",
    rationale:
      "The request asks for general guidance that can work from a minimized packet, which the canon places in Private+.",
    keywords: [
      "lifestyle",
      "habits",
      "general improvements",
      "non diagnostic",
      "general actions",
      "wellness",
      "behavior changes",
      "improve",
      "factors may influence",
      "support healthier",
    ],
  },
  {
    lane: "Max Intelligence",
    taskCategory: "Broader comparison",
    rationale:
      "The request is comparative or research-oriented, so it belongs in the highest-capability governed AI lane.",
    keywords: [
      "compare",
      "research",
      "studies",
      "literature",
      "broader options",
      "intervention",
      "care pathways",
      "treatments",
      "medication and lifestyle",
      "research directions",
    ],
  },
];

let routingRules = cloneRoutingRules(DEFAULT_ROUTING_RULES);

const offBoardConsequences = [
  "No routing control",
  "No context minimization",
  "No protected internal lane",
  "No Consentext audit receipt",
  "No Consentext boundary or guardrails",
];

let prototypeMode = "recommended";
let interactionHistory = [];
const HISTORY_STORAGE_KEY = "consentext-ai-gateway-history";
let founderFeedback = [];
const FEEDBACK_STORAGE_KEY = "consentext-ai-gateway-feedback";
let currentReviewContext = null;
let activeScenario = null;
let demoMode = false;
const FORCE_DEMO_ON = /[?&]demo=1(?:&|$)/.test(window.location.href);
const FORCE_DEMO_OFF = /[?&]demo=0(?:&|$)/.test(window.location.href);
const DEMO_MODE_STORAGE_KEY = "consentext-ai-gateway-demo-mode";
const ACTIVE_SCENARIO_STORAGE_KEY = "consentext-ai-gateway-active-scenario";
const ROUTING_RULES_STORAGE_KEY = "consentext-ai-gateway-routing-rules";
let actionStatusTimer = null;
let activeSourceDocument = null;

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9+ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function repairMojibake(value) {
  if (!/[Ãâ]/.test(value)) {
    return value;
  }

  try {
    const bytes = Uint8Array.from(Array.from(value, (character) => character.charCodeAt(0) & 0xff));
    const decoded = new TextDecoder("utf-8").decode(bytes);
    if (decoded && !decoded.includes("�")) {
      return decoded;
    }
  } catch {
    // If decode fails, fall back to targeted replacements below.
  }

  return value;
}

function sanitizeText(value) {
  return repairMojibake(value)
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€˜|â€™/g, "'")
    .replace(/â†“/g, "↓")
    .replace(/â†’/g, "→")
    .replace(/â”œâ”€/g, "├─")
    .replace(/â””â”€/g, "└─")
    .replace(/â”‚/g, "│")
    .replace(/â€¦/g, "...");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderList(container, items) {
  container.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSourceTabs() {
  const documents = Array.isArray(window.SOURCE_DOCUMENTS) ? window.SOURCE_DOCUMENTS : [];
  documents.forEach((doc, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "source-tab";
    button.textContent = getSourceShortLabel(doc, index);
    button.title = doc.title;
    button.addEventListener("click", () => selectDocument(doc, button));
    sourceTabs.appendChild(button);

    if (index === 0) {
      selectDocument(doc, button);
    }
  });
}

function getSourceShortLabel(doc, index) {
  const cleanedTitle = sanitizeText(doc.title || "")
    .replace(/^Consentext AI Gateway[_ -]*/i, "")
    .replace(/_+/g, " ")
    .trim();

  if (!cleanedTitle) {
    return `Doc ${index + 1}`;
  }

  const words = cleanedTitle.split(/\s+/).slice(0, 4).join(" ");
  return `Doc ${index + 1}: ${words}`;
}

function selectDocument(doc, activeButton) {
  document.querySelectorAll(".source-tab").forEach((tab) => tab.classList.remove("active"));
  activeButton.classList.add("active");
  const cleanTitle = sanitizeText(doc.title || doc.sourceFile || "Source document");
  const cleanFile = sanitizeText(doc.sourceFile || "Unknown source file");
  const cleanText = sanitizeText(doc.text || "");
  sourceMeta.innerHTML = `
    <div class="source-meta-card">
      <span class="mini-label">Selected document</span>
      <strong>${escapeHtml(cleanTitle)}</strong>
      <p>${escapeHtml(cleanFile)}</p>
    </div>
    <div class="source-meta-card">
      <span class="mini-label">Archive stats</span>
      <strong>${cleanText.split(/\s+/).filter(Boolean).length.toLocaleString()} words</strong>
      <p>${cleanText.length.toLocaleString()} characters in the loaded extract.</p>
    </div>
  `;
  activeSourceDocument = sanitizeText(doc.text);
  applySourceSearch();
}

function renderPromptBank() {
  const normalizedRequest = normalizeText(requestInput.value || "");
  const activeGroup = promptGroups.find((group) =>
    group.prompts.some((prompt) => normalizeText(prompt) === normalizedRequest)
  );

  promptBankSummaryEl.innerHTML = `
    <div class="prompt-bank-summary-card">
      <span class="mini-label">Prompt coverage</span>
      <strong>${promptGroups.reduce((total, group) => total + group.prompts.length, 0)} canonical prompts</strong>
      <p>${promptGroups.length} routing groups pulled from the document set.</p>
    </div>
    <div class="prompt-bank-summary-card">
      <span class="mini-label">Current prompt state</span>
      <strong>${activeGroup ? `${activeGroup.name} canonical prompt` : "Ad hoc request"}</strong>
      <p>${activeGroup ? "The current request matches a document-backed canonical prompt." : "The current request is custom and not an exact canonical prompt match."}</p>
    </div>
  `;

  promptBank.innerHTML = "";
  promptGroups.forEach((group) => {
    const wrapper = document.createElement("section");
    const groupIsActive = group.prompts.some((prompt) => normalizeText(prompt) === normalizedRequest);
    wrapper.className = `prompt-group ${groupIsActive ? "prompt-group-active" : ""}`;

    const heading = document.createElement("div");
    heading.className = "prompt-group-header";
    heading.innerHTML = `
      <div>
        <h4>${escapeHtml(group.name)}</h4>
        <p class="prompt-group-note">${escapeHtml(`This lane has ${group.prompts.length} canonical prompts in the current archive.`)}</p>
      </div>
      <span class="prompt-group-count">${group.prompts.length}</span>
    `;
    wrapper.appendChild(heading);

    const buttons = document.createElement("div");
    buttons.className = "prompt-button-row";

    group.prompts.forEach((prompt) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `prompt-pill ${normalizeText(prompt) === normalizedRequest ? "prompt-pill-active" : ""}`;
      button.textContent = prompt;
      button.addEventListener("click", () => {
        requestInput.value = prompt;
        runPrototype();
      });
      buttons.appendChild(button);
    });

    wrapper.appendChild(buttons);
    promptBank.appendChild(wrapper);
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function applySourceSearch() {
  const fullText = activeSourceDocument || "";
  const query = sourceSearchInput.value.trim();

  if (!query) {
    sourceText.textContent = fullText;
    sourceSearchStatus.textContent = "No source search active.";
    sourceSearchResults.innerHTML = "";
    return;
  }

  const pattern = new RegExp(escapeRegExp(query), "gi");
  const matches = [...fullText.matchAll(pattern)];
  const escapedQuery = escapeHtml(query);
  const highlightPattern = new RegExp(escapeRegExp(escapedQuery), "gi");
  let rebuiltText = "";
  let cursor = 0;

  matches.forEach((match, index) => {
    const start = match.index ?? 0;
    const end = start + match[0].length;
    rebuiltText += escapeHtml(fullText.slice(cursor, start));
    rebuiltText += `<mark id="source-match-${index}" class="source-inline-match">${escapeHtml(fullText.slice(start, end))}</mark>`;
    cursor = end;
  });

  rebuiltText += escapeHtml(fullText.slice(cursor));
  sourceText.innerHTML = rebuiltText;
  sourceSearchStatus.textContent = `${matches.length} match${matches.length === 1 ? "" : "es"} in the current document.`;
  sourceSearchResults.innerHTML = matches.length
    ? matches.slice(0, 6).map((match, index) => {
        const start = Math.max(0, match.index - 90);
        const end = Math.min(fullText.length, match.index + query.length + 90);
        const snippet = fullText.slice(start, end).trim();
        const escapedSnippet = escapeHtml(snippet).replace(highlightPattern, (value) => `<mark>${value}</mark>`);
        return `
          <article class="source-search-hit" data-match-index="${index}" role="button" tabindex="0">
            <p class="mini-label">Match ${index + 1}</p>
            <p>${escapedSnippet}</p>
          </article>
        `;
      }).join("")
    : `<div class="history-empty"><p>No contextual matches found.</p><p>Try a shorter phrase or a term that appears verbatim in the selected document.</p></div>`;

  sourceSearchResults.querySelectorAll("[data-match-index]").forEach((item) => {
    const scrollToMatch = () => {
      const target = document.getElementById(`source-match-${item.dataset.matchIndex}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    item.addEventListener("click", scrollToMatch);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        scrollToMatch();
      }
    });
  });
}

function renderPromptSummaryLists() {
  promptGroups.forEach((group) => {
    const target = promptListElements[group.name];
    if (!target) {
      return;
    }

    renderList(target, group.prompts.slice(0, 4));
  });
}

function renderSessionStatus() {
  const items = [
    `Mode: ${prototypeMode === "compare" ? "Compare" : "Recommended"}`,
    `Demo: ${demoMode ? "On" : "Off"}`,
    `Scenario: ${activeScenario ? activeScenario.title : "None"}`,
    `History: ${interactionHistory.length}`,
    `Feedback: ${founderFeedback.length}`,
  ];

  sessionStatusEl.innerHTML = items
    .map((item) => `<span class="session-pill">${escapeHtml(item)}</span>`)
    .join("");
}

function renderScenarioPack() {
  scenarioPackEl.innerHTML = scenarioPack
    .map(
      (scenario) => `
        <article class="scenario-card ${activeScenario && activeScenario.title === scenario.title ? "scenario-card-active" : ""}">
          <div class="scenario-card-header">
            <div>
              <p class="mini-label">Expected lane</p>
              <h4>${escapeHtml(scenario.title)}</h4>
            </div>
            <div class="history-chip history-chip-${scenario.lane.toLowerCase().replace(/[^a-z0-9]+/g, "")}">
              ${escapeHtml(scenario.lane)}
            </div>
          </div>
          <p>${escapeHtml(scenario.focus)}</p>
          <p class="scenario-prompt">${escapeHtml(scenario.prompt)}</p>
          <ul class="response-bullets">
            ${scenario.talkingPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
          <button type="button" class="button button-secondary scenario-run" data-prompt="${escapeHtml(scenario.prompt).replace(/"/g, "&quot;")}">Load scenario</button>
        </article>
      `
    )
    .join("");

  scenarioPackEl.querySelectorAll(".scenario-run").forEach((button) => {
    button.addEventListener("click", () => {
      activeScenario = scenarioPack.find((scenario) => scenario.prompt === button.dataset.prompt) || null;
      saveActiveScenario();
      renderReviewContext();
      renderSessionStatus();
      requestInput.value = button.dataset.prompt;
      runPrototype();
    });
  });
}

function buildShareUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("request", requestInput.value.trim());
  url.searchParams.set("mode", prototypeMode);
  url.searchParams.set("demo", demoMode ? "1" : "0");
  if (activeScenario) {
    url.searchParams.set("scenario", activeScenario.title);
  } else {
    url.searchParams.delete("scenario");
  }
  return url.toString();
}

async function copyShareLink() {
  const url = buildShareUrl();
  try {
    await navigator.clipboard.writeText(url);
    copyLinkButton.textContent = "Link copied";
    setActionStatus("Share link copied.");
  } catch {
    copyLinkButton.textContent = "Copy failed";
    setActionStatus("Copy link failed.");
  }
  window.setTimeout(() => {
    copyLinkButton.textContent = "Copy share link";
  }, 1600);
}

function setActionStatus(message) {
  actionStatusEl.textContent = message;
  if (actionStatusTimer) {
    window.clearTimeout(actionStatusTimer);
  }
  actionStatusTimer = window.setTimeout(() => {
    actionStatusEl.textContent = "Ready.";
  }, 2200);
}

function downloadJson(filename, data) {
  const payload = JSON.stringify(data, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderRoutingTable() {
  const tbody = routingTablePlaceholderEl.parentElement;
  tbody.innerHTML = routingRules
    .map(
      (rule) => `
        <tr>
          <td>${escapeHtml(rule.keywords.join(" / "))}</td>
          <td>${escapeHtml(rule.taskCategory)}</td>
          <td>${escapeHtml(rule.lane)}</td>
        </tr>
      `
    )
    .join("");
}

function isRuleModified(rule, index) {
  const baseline = DEFAULT_ROUTING_RULES[index];
  if (!baseline) {
    return true;
  }

  return JSON.stringify(rule) !== JSON.stringify(baseline);
}

function renderRoutingEditor() {
  const modifiedCount = routingRules.filter((rule, index) => isRuleModified(rule, index)).length;

  routingEditorEl.innerHTML = `
    <div class="routing-editor-summary">
      <div class="routing-editor-summary-card">
        <span class="mini-label">Rule set status</span>
        <strong>${modifiedCount ? "Custom rule set" : "Canonical rule set"}</strong>
        <p>${modifiedCount ? `${modifiedCount} of ${routingRules.length} lanes have been edited.` : "All lanes match the document-backed defaults."}</p>
      </div>
      <div class="routing-editor-summary-card">
        <span class="mini-label">Editor guidance</span>
        <strong>Keywords route, rationale explains</strong>
        <p>Use import/export for team review and restore defaults when you want to compare against the baseline.</p>
      </div>
    </div>
    ${routingRules
    .map(
      (rule, index) => `
        <div class="routing-editor-row ${isRuleModified(rule, index) ? "routing-editor-row-modified" : ""}">
          <div class="routing-editor-lane">
            <p class="mini-label">Lane</p>
            <div class="routing-editor-lane-header">
              <h4>${escapeHtml(rule.lane)}</h4>
              <span class="routing-lane-chip routing-lane-chip-${rule.lane.toLowerCase().replace(/[^a-z0-9]+/g, "")}">${isRuleModified(rule, index) ? "Edited" : "Default"}</span>
            </div>
            <p class="routing-editor-lane-meta">${escapeHtml(rule.keywords.length)} keyword${rule.keywords.length === 1 ? "" : "s"} routing into ${escapeHtml(rule.taskCategory)}.</p>
          </div>
          <label class="routing-editor-field">
            <span class="mini-label">Task category</span>
            <input data-field="taskCategory" data-rule-index="${index}" class="routing-editor-input" value="${escapeHtml(rule.taskCategory)}">
          </label>
          <label class="routing-editor-field">
            <span class="mini-label">Keywords</span>
            <textarea data-rule-index="${index}" class="routing-editor-input" rows="3">${escapeHtml(rule.keywords.join(", "))}</textarea>
            <span class="routing-editor-helper">Comma-separated match terms. Keep these concrete enough to avoid accidental lane overlap.</span>
          </label>
          <label class="routing-editor-field">
            <span class="mini-label">Rationale</span>
            <textarea data-field="rationale" data-rule-index="${index}" class="routing-editor-input" rows="3">${escapeHtml(rule.rationale)}</textarea>
            <span class="routing-editor-helper">This explanation is surfaced in the prototype when the lane is chosen.</span>
          </label>
        </div>
      `
    )
    .join("")}`;

  routingEditorEl.querySelectorAll(".routing-editor-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.ruleIndex);
      const field = event.target.dataset.field || "keywords";
      if (field === "keywords") {
        routingRules[index].keywords = event.target.value
          .split(",")
          .map((keyword) => normalizeText(keyword))
          .filter(Boolean);
      } else {
        routingRules[index][field] = event.target.value.trim();
      }
      saveRoutingRules();
      renderRoutingTable();
      runPrototype();
    });
  });
}

function saveRoutingRules() {
  try {
    window.localStorage.setItem(ROUTING_RULES_STORAGE_KEY, JSON.stringify(routingRules));
  } catch {
    // Ignore storage failures.
  }
}

function loadRoutingRules() {
  try {
    const raw = window.localStorage.getItem(ROUTING_RULES_STORAGE_KEY);
    if (!raw) {
      routingRules = cloneRoutingRules(DEFAULT_ROUTING_RULES);
      return;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      routingRules = parsed.map((rule) => ({
        ...rule,
        keywords: Array.isArray(rule.keywords) ? rule.keywords : [],
      }));
    }
  } catch {
    routingRules = cloneRoutingRules(DEFAULT_ROUTING_RULES);
  }
}

function restoreRoutingRules() {
  routingRules = cloneRoutingRules(DEFAULT_ROUTING_RULES);
  saveRoutingRules();
  renderRoutingTable();
  renderRoutingEditor();
  runPrototype();
  setActionStatus("Routing rules restored to defaults.");
}

function exportRoutingRules() {
  downloadJson("consentext-ai-gateway-routing-rules.json", {
    exported_at: new Date().toISOString(),
    routing_rules: routingRules,
  });
  setActionStatus("Routing rules exported.");
}

async function importRoutingRulesFromFile(file) {
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    const importedRules = Array.isArray(payload) ? payload : payload.routing_rules;

    if (!Array.isArray(importedRules) || !importedRules.length) {
      throw new Error("Imported file did not contain routing rules.");
    }

    routingRules = importedRules.map((rule, index) => ({
      lane: typeof rule.lane === "string" && rule.lane.trim() ? rule.lane.trim() : DEFAULT_ROUTING_RULES[index]?.lane || "Private",
      taskCategory:
        typeof rule.taskCategory === "string" && rule.taskCategory.trim()
          ? rule.taskCategory.trim()
          : DEFAULT_ROUTING_RULES[index]?.taskCategory || "Imported",
      rationale:
        typeof rule.rationale === "string" && rule.rationale.trim()
          ? rule.rationale.trim()
          : DEFAULT_ROUTING_RULES[index]?.rationale || "Imported routing rule.",
      keywords: Array.isArray(rule.keywords)
        ? rule.keywords.map((keyword) => normalizeText(String(keyword))).filter(Boolean)
        : [],
    }));

    saveRoutingRules();
    renderRoutingTable();
    renderRoutingEditor();
    runPrototype();
    setActionStatus("Routing rules imported.");
  } catch (error) {
    setActionStatus(`Routing rule import failed: ${error.message}`);
  }
}

function syncModeButtons() {
  modeRecommendedButton.classList.toggle("active", prototypeMode === "recommended");
  modeCompareButton.classList.toggle("active", prototypeMode === "compare");
  modeRecommendedButton.setAttribute("aria-pressed", String(prototypeMode === "recommended"));
  modeCompareButton.setAttribute("aria-pressed", String(prototypeMode === "compare"));
}

function setMode(mode) {
  prototypeMode = mode;
  syncModeButtons();
  syncUrlState();
  renderSessionStatus();
  runPrototype();
}

function buildCanonicalPromptMap() {
  const map = new Map();

  promptGroups.forEach((group) => {
    group.prompts.forEach((prompt) => {
      map.set(normalizeText(prompt), group.name);
    });
  });

  return map;
}

const canonicalPromptMap = buildCanonicalPromptMap();

function buildMatches(normalizedRequest) {
  const exactLane = canonicalPromptMap.get(normalizedRequest);
  const matches = [];

  if (exactLane) {
    const exactRule = routingRules.find((rule) => rule.lane === exactLane);
    matches.push({
      ...exactRule,
      score: 100,
      hits: ["Exact canonical prompt match"],
      rationale: `This request exactly matches the shared canonical prompt bank for ${exactLane}. ${exactRule.rationale}`,
    });
  }

  routingRules.forEach((rule) => {
    const hits = rule.keywords.filter((keyword) => normalizedRequest.includes(normalizeText(keyword)));
    if (hits.length) {
      matches.push({ ...rule, score: hits.length, hits });
    }
  });

  return matches.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.lane.localeCompare(b.lane);
  });
}

function chooseResult(request) {
  const normalizedRequest = normalizeText(request.trim());
  const matches = buildMatches(normalizedRequest);
  const recommended = matches[0] || routingRules.find((rule) => rule.lane === "Private");

  let alternate = matches.find((match) => match.lane !== recommended.lane);
  if (!alternate) {
    if (recommended.lane === "Private+") {
      alternate = routingRules.find((rule) => rule.lane === "Max Intelligence");
    } else if (recommended.lane === "Max Intelligence") {
      alternate = routingRules.find((rule) => rule.lane === "Private+");
    } else if (recommended.lane === "Deterministic") {
      alternate = routingRules.find((rule) => rule.lane === "Private");
    } else {
      alternate = routingRules.find((rule) => rule.lane === "Private+");
    }
  }

  return { normalizedRequest, matches, recommended, alternate };
}

function buildAuditRecord(request, selected, alternate) {
  const lane = laneDefinitions[selected.lane];
  const externalExport = selected.lane === "Private+" || selected.lane === "Max Intelligence" || selected.lane === "Off-Board";
  const confidence = Math.min(0.99, 0.55 + selected.score * 0.12).toFixed(2);
  return {
    timestamp: new Date().toISOString(),
    request,
    task_category: selected.taskCategory,
    selected_lane: selected.lane,
    data_scope: lane.dataScope,
    external_export: externalExport,
    provider: lane.provider,
    notes:
      selected.lane === "Deterministic"
        ? "No AI used"
        : selected.lane === "Private"
          ? "Sensitive data retained within Consentext boundary"
          : selected.lane === "Private+"
            ? "Minimum necessary packet generated by gateway"
            : selected.lane === "Max Intelligence"
              ? "High-capability governed AI lane selected"
              : "Outside Consentext protections",
    export_packet_type: selected.lane === "Private+" ? "Reduced context packet" : selected.lane === "Max Intelligence" ? "Broader governed context" : "None",
    minimization_applied: selected.lane === "Private+",
    trust_mode: prototypeMode === "compare" ? "Compare route" : "Recommended route",
    alternate_lane_considered: alternate ? alternate.lane : "None",
    classification_confidence: confidence,
  };
}

function renderAuditSummary(record) {
  auditSummaryEl.innerHTML = `
    <div class="audit-summary-card">
      <span class="mini-label">Selected lane</span>
      <strong>${escapeHtml(record.selected_lane)}</strong>
    </div>
    <div class="audit-summary-card">
      <span class="mini-label">Trust mode</span>
      <strong>${escapeHtml(record.trust_mode)}</strong>
    </div>
    <div class="audit-summary-card">
      <span class="mini-label">Data scope</span>
      <strong>${escapeHtml(record.data_scope)}</strong>
    </div>
    <div class="audit-summary-card">
      <span class="mini-label">Export packet</span>
      <strong>${escapeHtml(record.export_packet_type)}</strong>
    </div>
    <div class="audit-summary-card">
      <span class="mini-label">Alternate considered</span>
      <strong>${escapeHtml(record.alternate_lane_considered)}</strong>
    </div>
    <div class="audit-summary-card">
      <span class="mini-label">Receipt time</span>
      <strong>${escapeHtml(record.timestamp.replace("T", " ").replace("Z", " UTC"))}</strong>
    </div>
  `;
}

function buildRuleInspector(result) {
  const fallback = [
    {
      title: "Default privacy-first fallback",
      body: "If a prompt is ambiguous, the canon says to prefer the more private lane. The simulator falls back to Private when no stronger rule is matched.",
    },
  ];

  const cards = (result.matches.length ? result.matches : fallback).map((match, index) => {
    const title = match.title || `${index === 0 ? "Selected" : "Alternate"} rule: ${match.lane}`;
    const hitText = match.hits ? `Matched signals: ${match.hits.join(", ")}` : "";
    return `
      <article class="rule-card ${index === 0 ? "rule-card-active" : ""}">
        <p class="mini-label">${escapeHtml(title)}</p>
        <h4>${escapeHtml(match.lane || "Fallback")}</h4>
        <p>${escapeHtml(match.rationale || match.body)}</p>
        <p class="rule-hits">${escapeHtml(hitText)}</p>
      </article>
    `;
  });

  ruleInspectorEl.innerHTML = cards.join("");
}

function renderCompareRoute(result) {
  const recommended = result.recommended;
  const alternate = result.alternate;
  const recommendedLane = laneDefinitions[recommended.lane];
  const alternateLane = alternate ? laneDefinitions[alternate.lane] : null;

  if (prototypeMode === "recommended") {
    compareRouteEl.innerHTML = `
      <div class="compare-card compare-card-primary">
        <div class="compare-card-header">
          <div>
            <p class="mini-label">Recommended route</p>
            <h4>${escapeHtml(recommended.lane)}</h4>
          </div>
          <span class="compare-pill">Single governed path</span>
        </div>
        <p class="compare-emphasis">${escapeHtml(recommended.taskCategory)}</p>
        <p>${escapeHtml(recommended.rationale)}</p>
        <div class="compare-tradeoffs">
          <div class="compare-fact">
            <span class="mini-label">Exposure</span>
            <strong>${escapeHtml(recommendedLane.exposureDecision)}</strong>
          </div>
          <div class="compare-fact">
            <span class="mini-label">Processing</span>
            <strong>${escapeHtml(recommendedLane.processingMode)}</strong>
          </div>
          <div class="compare-fact">
            <span class="mini-label">Provider</span>
            <strong>${escapeHtml(recommendedLane.provider)}</strong>
          </div>
        </div>
      </div>
    `;
    return;
  }

  compareRouteEl.innerHTML = `
    <div class="compare-card compare-card-primary">
      <div class="compare-card-header">
        <div>
          <p class="mini-label">Recommended lane</p>
          <h4>${escapeHtml(recommended.lane)}</h4>
        </div>
        <span class="compare-pill">Chosen</span>
      </div>
      <p class="compare-emphasis">${escapeHtml(recommended.taskCategory)}</p>
      <p>${escapeHtml(recommended.rationale)}</p>
      <div class="compare-tradeoffs">
        <div class="compare-fact">
          <span class="mini-label">Exposure</span>
          <strong>${escapeHtml(recommendedLane.exposureDecision)}</strong>
        </div>
        <div class="compare-fact">
          <span class="mini-label">Processing</span>
          <strong>${escapeHtml(recommendedLane.processingMode)}</strong>
        </div>
        <div class="compare-fact">
          <span class="mini-label">Scope</span>
          <strong>${escapeHtml(recommendedLane.dataScope)}</strong>
        </div>
      </div>
    </div>
    ${
      alternate
        ? `
          <div class="compare-card">
            <div class="compare-card-header">
              <div>
                <p class="mini-label">Alternate lane</p>
                <h4>${escapeHtml(alternate.lane)}</h4>
              </div>
              <span class="compare-pill compare-pill-muted">Nearest option</span>
            </div>
            <p class="compare-emphasis">${escapeHtml(alternate.taskCategory)}</p>
            <p>${escapeHtml(alternate.rationale)}</p>
            <div class="compare-tradeoffs">
              <div class="compare-fact">
                <span class="mini-label">Exposure</span>
                <strong>${escapeHtml(alternateLane.exposureDecision)}</strong>
              </div>
              <div class="compare-fact">
                <span class="mini-label">Processing</span>
                <strong>${escapeHtml(alternateLane.processingMode)}</strong>
              </div>
              <div class="compare-fact">
                <span class="mini-label">Scope</span>
                <strong>${escapeHtml(alternateLane.dataScope)}</strong>
              </div>
            </div>
          </div>
        `
        : `
          <div class="compare-card">
            <p class="mini-label">Alternate lane</p>
            <h4>No meaningful alternate</h4>
            <p>The gateway does not surface a close second option for this request.</p>
          </div>
        `
    }
  `;
}

function renderLaneSnapshots(request, recommendedLane) {
  const lanes = ["Deterministic", "Private", "Private+", "Max Intelligence", "Off-Board"];
  laneSnapshotGridEl.innerHTML = lanes
    .map((laneName) => {
      const lane = laneDefinitions[laneName];
      const laneClass = laneName.toLowerCase().replace(/[^a-z0-9]+/g, "");
      const isRecommended = laneName === recommendedLane;
      const externalExport = laneName === "Private+" || laneName === "Max Intelligence" || laneName === "Off-Board";

      return `
        <article class="lane-snapshot-card lane-snapshot-${laneClass} ${isRecommended ? "lane-snapshot-recommended" : ""}">
          <div class="lane-snapshot-header">
            <div>
              <p class="mini-label">${isRecommended ? "Recommended lane" : "Lane snapshot"}</p>
              <h4>${escapeHtml(laneName)}</h4>
            </div>
            <span class="lane-snapshot-export">${externalExport ? "Export" : "Internal only"}</span>
          </div>
          <p class="lane-snapshot-status">${isRecommended ? "Best fit for the current request." : "Useful as a comparison route."}</p>
          <p>${escapeHtml(lane.laneMeaning)}</p>
          <ul class="response-bullets">
            <li>Provider: ${escapeHtml(lane.provider)}</li>
            <li>Scope: ${escapeHtml(lane.dataScope)}</li>
            <li>Mode: ${escapeHtml(lane.processingMode)}</li>
          </ul>
          <p class="lane-snapshot-message">${escapeHtml(lane.canonicalMessage)}</p>
          <div class="lane-snapshot-mini lane-snapshot-fit">
            <p class="mini-label">How this lane frames the request</p>
            <p>${escapeHtml(`For "${request}", this lane would emphasize ${lane.laneMeaning.toLowerCase()}.`)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHistory() {
  if (!interactionHistory.length) {
    historyLogEl.innerHTML = `
      <div class="history-empty">
        <p>No gateway interactions recorded yet.</p>
        <p>Run the prototype to create an audit trail.</p>
      </div>
    `;
    return;
  }

  historyLogEl.innerHTML = interactionHistory
    .map(
      (entry) => `
        <article class="history-card">
          <div class="history-card-header">
            <div>
              <p class="mini-label">Request</p>
              <h4>${escapeHtml(entry.request)}</h4>
            </div>
            <div class="history-chip history-chip-${entry.laneClass}">
              ${escapeHtml(entry.selected_lane)}
            </div>
          </div>
          <div class="history-meta">
            <span>${escapeHtml(entry.task_category)}</span>
            <span>Provider: ${escapeHtml(entry.provider)}</span>
            <span>Export: ${entry.external_export ? "Yes" : "No"}</span>
            <span>Confidence: ${escapeHtml(entry.classification_confidence)}</span>
          </div>
          <div class="audit-summary">
            <div class="audit-summary-card">
              <span class="mini-label">Trust mode</span>
              <strong>${escapeHtml(entry.trust_mode)}</strong>
            </div>
            <div class="audit-summary-card">
              <span class="mini-label">Data scope</span>
              <strong>${escapeHtml(entry.data_scope)}</strong>
            </div>
            <div class="audit-summary-card">
              <span class="mini-label">Alternate considered</span>
              <strong>${escapeHtml(entry.alternate_lane_considered)}</strong>
            </div>
            <div class="audit-summary-card">
              <span class="mini-label">Receipt time</span>
              <strong>${escapeHtml(entry.timestamp.replace("T", " ").replace("Z", " UTC"))}</strong>
            </div>
          </div>
          <pre class="history-receipt">${escapeHtml(JSON.stringify(entry, null, 2))}</pre>
        </article>
      `
    )
    .join("");
}

function saveHistory() {
  try {
    window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(interactionHistory));
  } catch {
    // Ignore storage failures and keep the in-memory history.
  }
}

function loadHistory() {
  try {
    const raw = window.localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      interactionHistory = parsed.slice(0, 8);
    }
  } catch {
    interactionHistory = [];
  }
}

function exportHistory() {
  downloadJson("consentext-ai-gateway-history.json", interactionHistory);
  setActionStatus("History exported.");
}

function saveFeedback() {
  try {
    window.localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(founderFeedback));
  } catch {
    // Ignore storage failures.
  }
}

function loadFeedback() {
  try {
    const raw = window.localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      founderFeedback = parsed.slice(0, 12);
    }
  } catch {
    founderFeedback = [];
  }
}

function exportFeedback() {
  downloadJson("consentext-ai-gateway-feedback.json", founderFeedback);
  setActionStatus("Feedback exported.");
}

function exportSession() {
  downloadJson("consentext-ai-gateway-session.json", {
    exported_at: new Date().toISOString(),
    request: requestInput.value.trim(),
    mode: prototypeMode,
    demo_mode: demoMode,
    active_scenario: activeScenario ? activeScenario.title : null,
    share_url: buildShareUrl(),
    interaction_history: interactionHistory,
    founder_feedback: founderFeedback,
  });
  setActionStatus("Full session exported.");
}

async function importSessionFromFile(file) {
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const session = JSON.parse(text);

    if (typeof session.request === "string") {
      requestInput.value = session.request;
    }

    if (session.mode === "recommended" || session.mode === "compare") {
      prototypeMode = session.mode;
    }

    demoMode = Boolean(session.demo_mode);
    activeScenario = session.active_scenario
      ? scenarioPack.find((scenario) => scenario.title === session.active_scenario) || null
      : null;

    interactionHistory = Array.isArray(session.interaction_history) ? session.interaction_history.slice(0, 8) : [];
    founderFeedback = Array.isArray(session.founder_feedback) ? session.founder_feedback.slice(0, 12) : [];

    saveHistory();
    saveFeedback();
    saveDemoMode();
    saveActiveScenario();

    renderHistory();
    renderFeedbackLog();
    renderFeedbackSummary();
    renderReviewContext();
    renderScenarioPack();
    syncModeButtons();
    applyDemoMode();
    renderSessionStatus();
    runPrototype();
    setActionStatus("Session imported.");
  } catch {
    setActionStatus("Session import failed.");
  } finally {
    importSessionInput.value = "";
  }
}

function renderReviewContext() {
  if (!activeScenario) {
    reviewContextEl.innerHTML = `
      <div class="history-empty">
        <p>No scenario is active.</p>
        <p>Load a founder walkthrough scenario or evaluate the current route directly.</p>
      </div>
    `;
    return;
  }

  reviewContextEl.innerHTML = `
    <div class="review-context-card">
      <div class="scenario-card-header">
        <div>
          <p class="mini-label">Active scenario</p>
          <h4>${escapeHtml(activeScenario.title)}</h4>
        </div>
        <div class="history-chip history-chip-${activeScenario.lane.toLowerCase().replace(/[^a-z0-9]+/g, "")}">
          ${escapeHtml(activeScenario.lane)}
        </div>
      </div>
      <p>${escapeHtml(activeScenario.focus)}</p>
      <ul class="response-bullets">
        ${activeScenario.talkingPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderFeedbackLog() {
  if (!founderFeedback.length) {
    feedbackLogEl.innerHTML = `
      <div class="history-empty">
        <p>No founder review captured yet.</p>
        <p>Rate the current routing decision to log what feels strong, weak, or unresolved.</p>
      </div>
    `;
    return;
  }

  const recentStrong = founderFeedback.filter((entry) => entry.sentiment === "Strong").length;
  const recentRefine = founderFeedback.filter((entry) => entry.sentiment === "Needs refinement").length;
  const recentWeak = founderFeedback.filter((entry) => entry.sentiment === "Weak").length;

  feedbackLogEl.innerHTML = `
    <div class="feedback-log-summary">
      <div class="feedback-log-summary-card">
        <span class="mini-label">Review volume</span>
        <strong>${founderFeedback.length} captured decisions</strong>
        <p>Recent founder input tied to the current gateway simulation.</p>
      </div>
      <div class="feedback-log-summary-card">
        <span class="mini-label">Signal split</span>
        <div class="feedback-log-summary-chips">
          <span class="feedback-chip feedback-chip-strong">Strong ${recentStrong}</span>
          <span class="feedback-chip feedback-chip-needsrefinement">Needs refinement ${recentRefine}</span>
          <span class="feedback-chip feedback-chip-weak">Weak ${recentWeak}</span>
        </div>
      </div>
    </div>
    ${founderFeedback
    .map(
      (entry) => `
        <article class="history-card feedback-entry-card">
          <div class="history-card-header feedback-entry-header">
            <div>
              <p class="mini-label">Review</p>
              <h4>${escapeHtml(entry.request)}</h4>
            </div>
            <div class="feedback-chip feedback-chip-${entry.sentimentClass}">${escapeHtml(entry.sentiment)}</div>
          </div>
          <div class="feedback-entry-grid">
            <div class="feedback-entry-facts">
              <div class="feedback-fact">
                <span class="mini-label">Lane</span>
                <strong>${escapeHtml(entry.selected_lane)}</strong>
              </div>
              <div class="feedback-fact">
                <span class="mini-label">Task</span>
                <strong>${escapeHtml(entry.task_category)}</strong>
              </div>
              <div class="feedback-fact">
                <span class="mini-label">Scenario</span>
                <strong>${escapeHtml(entry.scenario_title || "Direct evaluation")}</strong>
              </div>
              <div class="feedback-fact">
                <span class="mini-label">Time</span>
                <strong>${escapeHtml(entry.timestamp.replace("T", " ").replace("Z", " UTC"))}</strong>
              </div>
            </div>
            <div class="feedback-entry-note">
              <span class="mini-label">Review note</span>
              <p>${escapeHtml(entry.note)}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("")}`;
}

function renderFeedbackSummary() {
  const lanes = ["Deterministic", "Private", "Private+", "Max Intelligence", "Off-Board"];
  const sentiments = ["Strong", "Needs refinement", "Weak"];

  const summary = lanes.map((lane) => {
    const laneEntries = founderFeedback.filter((entry) => entry.selected_lane === lane);
    const counts = Object.fromEntries(sentiments.map((sentiment) => [sentiment, 0]));
    laneEntries.forEach((entry) => {
      if (counts[entry.sentiment] !== undefined) {
        counts[entry.sentiment] += 1;
      }
    });
    const strongest = laneEntries.length
      ? sentiments.reduce((best, sentiment) => (counts[sentiment] > counts[best] ? sentiment : best), sentiments[0])
      : "No reviews";
    return { lane, counts, total: laneEntries.length, strongest };
  });

  const reviewedLanes = summary.filter((item) => item.total > 0).length;
  const topLane = [...summary].sort((a, b) => b.total - a.total)[0];

  feedbackSummaryEl.innerHTML = `
    <article class="summary-card summary-card-overview">
      <div class="summary-card-header">
        <div>
          <p class="mini-label">Review coverage</p>
          <h4>${reviewedLanes} of ${lanes.length} lanes reviewed</h4>
        </div>
        <span class="summary-total">${founderFeedback.length} total reviews</span>
      </div>
      <div class="summary-overview-copy">
        <p>${topLane && topLane.total ? `${topLane.lane} has the most founder attention so far with ${topLane.total} review${topLane.total === 1 ? "" : "s"}.` : "No founder review has been recorded yet."}</p>
        <p>Use this strip to see where confidence is building versus where decision language still feels soft.</p>
      </div>
    </article>
    ${summary
    .map(
      (item) => `
        <article class="summary-card">
          <div class="summary-card-header">
            <div>
              <h4>${escapeHtml(item.lane)}</h4>
              <p class="summary-dominant">${escapeHtml(item.strongest)}</p>
            </div>
            <span class="summary-total">${item.total} reviews</span>
          </div>
          <div class="summary-metrics">
            <div class="summary-metric summary-strong">
              <span>Strong</span>
              <strong>${item.counts["Strong"]}</strong>
            </div>
            <div class="summary-metric summary-refine">
              <span>Needs refinement</span>
              <strong>${item.counts["Needs refinement"]}</strong>
            </div>
            <div class="summary-metric summary-weak">
              <span>Weak</span>
              <strong>${item.counts["Weak"]}</strong>
            </div>
          </div>
          <p class="summary-note">${item.total ? `${item.counts["Strong"]} strong, ${item.counts["Needs refinement"]} refinement, ${item.counts["Weak"]} weak.` : "No signal yet for this lane."}</p>
        </article>
      `
    )
    .join("")}`;
}

function renderNarrativePanel({ request, selected, alternate, lane }) {
  const scenarioLine = activeScenario
    ? `This walkthrough is anchored on the "${activeScenario.title}" scenario, which is meant to demonstrate ${activeScenario.focus.toLowerCase()}`
    : "This is a direct ad hoc request rather than a named founder scenario.";

  const alternateLine = alternate
    ? `If the team wanted a different tradeoff, the nearest alternate lane would be ${alternate.lane}, but the gateway is recommending ${selected.lane} because ${selected.rationale.toLowerCase()}`
    : `There is no meaningful alternate lane surfaced for this request, so the gateway is treating ${selected.lane} as the clear default.`;

  narrativePanelEl.innerHTML = `
    <div class="narrative-card">
      <p class="mini-label">Open with</p>
      <p class="narrative-line">The user asked: "${escapeHtml(request)}"</p>

      <p class="mini-label">What the gateway did</p>
      <p class="narrative-line">The gateway classified this as <strong>${escapeHtml(selected.taskCategory)}</strong> and routed it to <strong>${escapeHtml(selected.lane)}</strong>.</p>

      <p class="mini-label">Why that matters</p>
      <p class="narrative-line">${escapeHtml(lane.exposureDecision)}</p>

      <p class="mini-label">How to explain it</p>
      <p class="narrative-line">${escapeHtml(scenarioLine)}</p>
      <p class="narrative-line">${escapeHtml(alternateLine)}</p>
      <p class="narrative-line">${escapeHtml(lane.teamTakeaway)}</p>
    </div>
  `;
}

function syncUrlState() {
  const url = new URL(window.location.href);
  url.searchParams.set("request", requestInput.value.trim());
  url.searchParams.set("mode", prototypeMode);
  url.searchParams.set("demo", demoMode ? "1" : "0");
  if (activeScenario) {
    url.searchParams.set("scenario", activeScenario.title);
  } else {
    url.searchParams.delete("scenario");
  }
  window.history.replaceState({}, "", url);
}

function loadUrlState() {
  const url = new URL(window.location.href);
  const request = url.searchParams.get("request");
  const mode = url.searchParams.get("mode");
  const demo = url.searchParams.get("demo");
  const scenario = url.searchParams.get("scenario");

  if (request) {
    requestInput.value = request;
  }

  if (mode === "recommended" || mode === "compare") {
    prototypeMode = mode;
  }

  if (demo === "1" || demo === "0") {
    demoMode = demo === "1";
  } else if (window.location.search.includes("demo=1") || FORCE_DEMO_ON) {
    demoMode = true;
  } else if (window.location.search.includes("demo=0") || FORCE_DEMO_OFF) {
    demoMode = false;
  }

  if (scenario) {
    activeScenario = scenarioPack.find((item) => item.title === scenario) || activeScenario;
  }
}

function applyDemoMode() {
  document.body.classList.toggle("demo-mode", demoMode);
  demoModeToggleButton.textContent = `Demo mode: ${demoMode ? "On" : "Off"}`;
  demoModeToggleButton.setAttribute("aria-pressed", String(demoMode));
}

function setDemoMode(nextValue) {
  demoMode = nextValue;
  saveDemoMode();
  applyDemoMode();
  syncUrlState();
  renderScenarioPack();
  renderSessionStatus();
}

function saveDemoMode() {
  try {
    window.localStorage.setItem(DEMO_MODE_STORAGE_KEY, JSON.stringify(demoMode));
  } catch {
    // Ignore storage failures.
  }
}

function loadDemoMode() {
  try {
    const raw = window.localStorage.getItem(DEMO_MODE_STORAGE_KEY);
    if (raw === null) {
      return;
    }
    demoMode = Boolean(JSON.parse(raw));
  } catch {
    demoMode = false;
  }
}

function saveActiveScenario() {
  try {
    const value = activeScenario ? activeScenario.title : "";
    window.localStorage.setItem(ACTIVE_SCENARIO_STORAGE_KEY, value);
  } catch {
    // Ignore storage failures.
  }
}

function loadActiveScenario() {
  try {
    const raw = window.localStorage.getItem(ACTIVE_SCENARIO_STORAGE_KEY);
    if (!raw) {
      activeScenario = null;
      return;
    }
    activeScenario = scenarioPack.find((scenario) => scenario.title === raw) || null;
  } catch {
    activeScenario = null;
  }
}

function submitFeedback(sentiment) {
  if (!currentReviewContext) {
    return;
  }

  const noteField = document.getElementById("feedback-note");
  const note = noteField ? noteField.value.trim() : "";
  const sentimentClass = sentiment.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const entry = {
    timestamp: new Date().toISOString(),
    request: currentReviewContext.request,
    selected_lane: currentReviewContext.selected_lane,
    task_category: currentReviewContext.task_category,
    scenario_title: currentReviewContext.scenario_title || null,
    sentiment,
    sentimentClass,
    note: note || "No additional note provided.",
  };

  founderFeedback = [
    entry,
    ...founderFeedback,
  ].slice(0, 12);

  saveFeedback();
  renderFeedbackLog();
  renderFeedbackSummary();
  setActionStatus(`Founder review saved as "${sentiment}".`);
}

function clearFeedback() {
  founderFeedback = [];
  saveFeedback();
  renderFeedbackLog();
  renderFeedbackSummary();
  renderSessionStatus();
  setActionStatus("Founder feedback cleared.");
}

function renderFeedbackPanel(context) {
  currentReviewContext = context;
  feedbackPanelEl.innerHTML = `
    <div class="feedback-review-card">
      <div class="feedback-review-copy">
        <p class="mini-label">Current decision</p>
        <h4>${escapeHtml(context.selected_lane)}</h4>
        <p>${escapeHtml(context.request)}</p>
        <p>${escapeHtml(context.rationale)}</p>
        <p class="mini-label">Scenario context</p>
        <p>${escapeHtml(context.scenario_title || "Direct evaluation without a named scenario")}</p>
      </div>
      <div class="feedback-controls">
        <div class="feedback-buttons">
          <button type="button" class="feedback-button feedback-strong" data-feedback="Strong">Strong</button>
          <button type="button" class="feedback-button feedback-refine" data-feedback="Needs refinement">Needs refinement</button>
          <button type="button" class="feedback-button feedback-weak" data-feedback="Weak">Weak</button>
        </div>
        <label class="routing-editor-field">
          <span class="mini-label">Review note</span>
          <textarea id="feedback-note" class="routing-editor-input" rows="3" placeholder="What feels right, vague, or unresolved about this route?"></textarea>
        </label>
      </div>
    </div>
  `;

  feedbackPanelEl.querySelectorAll("[data-feedback]").forEach((button) => {
    button.addEventListener("click", () => submitFeedback(button.dataset.feedback));
  });
}

function runPrototype() {
  const request = requestInput.value.trim() || "Explain my latest lab results in plain English";
  if (activeScenario && activeScenario.prompt !== request) {
    activeScenario = null;
    saveActiveScenario();
    renderReviewContext();
  }
  const result = chooseResult(request);
  const selected = result.recommended;
  const lane = laneDefinitions[selected.lane];

  taskCategoryEl.textContent = selected.taskCategory;
  selectedLaneEl.textContent = selected.lane;
  selectedProviderEl.textContent = lane.provider;
  externalExportEl.textContent = selected.lane === "Private+" || selected.lane === "Max Intelligence" || selected.lane === "Off-Board" ? "Yes" : "No";
  classificationConfidenceEl.textContent = Math.min(0.99, 0.55 + selected.score * 0.12).toFixed(2);
  resultSummaryEl.innerHTML = `
    <p class="mini-label">Decision summary</p>
    <p class="result-summary-line">
      The gateway classifies this as <strong>${escapeHtml(selected.taskCategory)}</strong> and routes it to
      <strong>${escapeHtml(selected.lane)}</strong> because ${escapeHtml(selected.rationale.toLowerCase())}
    </p>
  `;
  exposureDecisionEl.textContent = lane.exposureDecision;
  processingModeEl.textContent = lane.processingMode;
  laneRationaleEl.textContent = selected.rationale;
  canonicalMessageEl.textContent = lane.canonicalMessage;
  dataScopeEl.textContent = lane.dataScope;
  alternateLaneEl.textContent = result.alternate ? `${result.alternate.lane} - ${result.alternate.taskCategory}` : "No alternate lane was needed";

  renderList(vaultContextEl, vaultContext);
  renderList(gatewayJobsEl, gatewayJobs);
  renderList(gapAuditEl, gapAuditItems);
  renderList(futureNotesEl, futureNotes);
  renderList(teamQuestionsEl, teamQuestions);
  renderList(contextUsedEl, lane.contextUsed);
  renderList(offboardWarningEl, offBoardConsequences);
  renderList(executionTraceEl, lane.executionTrace);

  vaultPacketEl.textContent = richerVaultPacket.join("\n");
  exportPacketEl.textContent = lane.exportPacket.join("\n");
  responseOutputEl.innerHTML = lane.responseBuilder(request);
  teamTakeawayEl.textContent = lane.teamTakeaway;
  const auditRecord = buildAuditRecord(request, selected, result.alternate);
  renderAuditSummary(auditRecord);
  auditReceiptEl.textContent = JSON.stringify(auditRecord, null, 2);

  buildRuleInspector(result);
  renderCompareRoute(result);
  renderLaneSnapshots(request, selected.lane);
  renderPromptBank();
  renderFeedbackPanel({
    request,
    selected_lane: selected.lane,
    task_category: selected.taskCategory,
    rationale: selected.rationale,
    scenario_title: activeScenario ? activeScenario.title : null,
  });
  renderNarrativePanel({
    request,
    selected,
    alternate: result.alternate,
    lane,
  });

  interactionHistory = [
    {
      ...auditRecord,
      request,
      laneClass: selected.lane.toLowerCase().replace(/[^a-z0-9]+/g, ""),
    },
    ...interactionHistory.filter((entry) => !(entry.request === request && entry.selected_lane === auditRecord.selected_lane)),
  ].slice(0, 8);

  saveHistory();
  syncUrlState();
  renderScenarioPack();
  renderHistory();
  renderSessionStatus();
  setActionStatus(`Gateway ran in ${selected.lane}.`);
}

function resetPrototype() {
  requestInput.value = "What lifestyle changes might improve these lab results?";
  activeScenario = null;
  saveActiveScenario();
  renderReviewContext();
  setMode("recommended");
  copyLinkButton.textContent = "Copy share link";
  setActionStatus("Prototype reset.");
  renderScenarioPack();
}

function clearHistory() {
  interactionHistory = [];
  saveHistory();
  syncUrlState();
  renderHistory();
  renderSessionStatus();
  setActionStatus("Interaction history cleared.");
}

function resetAllState() {
  interactionHistory = [];
  founderFeedback = [];
  activeScenario = null;
  demoMode = false;
  routingRules = cloneRoutingRules(DEFAULT_ROUTING_RULES);
  requestInput.value = "What lifestyle changes might improve these lab results?";
  prototypeMode = "recommended";

  try {
    window.localStorage.removeItem(HISTORY_STORAGE_KEY);
    window.localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    window.localStorage.removeItem(DEMO_MODE_STORAGE_KEY);
    window.localStorage.removeItem(ACTIVE_SCENARIO_STORAGE_KEY);
    window.localStorage.removeItem(ROUTING_RULES_STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }

  renderHistory();
  renderFeedbackLog();
  renderFeedbackSummary();
  renderReviewContext();
  syncModeButtons();
  applyDemoMode();
  renderScenarioPack();
  renderSessionStatus();
  syncUrlState();
  runPrototype();
  setActionStatus("All saved state reset.");
}

function init() {
  loadHistory();
  loadFeedback();
  loadDemoMode();
  loadActiveScenario();
  loadRoutingRules();
  loadUrlState();
  renderSourceTabs();
  sourceSearchInput.addEventListener("input", applySourceSearch);
  renderPromptBank();
  renderPromptSummaryLists();
  renderScenarioPack();
  syncModeButtons();
  renderRoutingTable();
  renderRoutingEditor();

  modeRecommendedButton.addEventListener("click", () => setMode("recommended"));
  modeCompareButton.addEventListener("click", () => setMode("compare"));
  runPrototypeButton.addEventListener("click", runPrototype);
  clearPrototypeButton.addEventListener("click", resetPrototype);
  copyLinkButton.addEventListener("click", copyShareLink);
  exportSessionButton.addEventListener("click", exportSession);
  importSessionButton.addEventListener("click", () => importSessionInput.click());
  importSessionInput.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    importSessionFromFile(file);
  });
  resetAllButton.addEventListener("click", resetAllState);
  exportHistoryButton.addEventListener("click", exportHistory);
  clearHistoryButton.addEventListener("click", clearHistory);
  exportFeedbackButton.addEventListener("click", exportFeedback);
  clearFeedbackButton.addEventListener("click", clearFeedback);
  exportRoutingRulesButton.addEventListener("click", exportRoutingRules);
  importRoutingRulesButton.addEventListener("click", () => importRoutingRulesInput.click());
  importRoutingRulesInput.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    importRoutingRulesFromFile(file);
    event.target.value = "";
  });
  restoreRoutingRulesButton.addEventListener("click", restoreRoutingRules);
  demoModeToggleButton.addEventListener("click", () => setDemoMode(!demoMode));
  requestInput.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      runPrototype();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && (event.key === "D" || event.key === "d")) {
      event.preventDefault();
      setDemoMode(!demoMode);
      setActionStatus(`Demo mode ${demoMode ? "enabled" : "disabled"}.`);
    }
    if (event.shiftKey && (event.key === "C" || event.key === "c")) {
      event.preventDefault();
      copyShareLink();
    }
  });

  renderHistory();
  renderFeedbackLog();
  renderFeedbackSummary();
  renderReviewContext();
  applyDemoMode();
  renderSessionStatus();
  if (activeScenario && !requestInput.value.trim()) {
    requestInput.value = activeScenario.prompt;
  }
  runPrototype();
}

try {
  init();
} catch (error) {
  sourceMeta.textContent = "Unable to initialize the prototype.";
  sourceText.textContent = String(error);
}
