const stats = [
  { value: "4.5+ yrs", label: "at Programiz" },
  { value: "40+", label: "institutions on B2B" },
  { value: "18+", label: "features shipped" },
  { value: "6K/mo", label: "organic traffic driven" },
];

const robotRows = [
  "0000110000",
  "0000110000",
  "0001111000",
  "0111111110",
  "1111111111",
  "1111001111",
  "1111001111",
  "1111111111",
  "0111111110",
  "0011111100",
  "0111111110",
  "1111111111",
  "1100000011",
  "1100000011",
];

const cases = [
  {
    id: "CASE_001",
    slug: "B2B_PRO_TEAMS_PLATFORM",
    impactLine: "40+ institutions",
    problem:
      "Programiz PRO had no B2B offering: no way for institutions to onboard cohorts, assign work, or track teams at scale.",
    approach:
      "Owned frontend end-to-end: dashboards, onboarding, assignments, reporting, settings. ~1 year in React, cross-functional shipping to production.",
    impact:
      "Adopted by 40+ institutions globally, including US-based bootcamps and universities.",
    testimonial:
      '"Abidit owned the B2B frontend from zero to production. Institutions onboarded without friction." — Engineering Manager, Programiz',
  },
  {
    id: "CASE_002",
    slug: "SENSAI_GPT4O_HINT_SYSTEM",
    impactLine: "1.5M+ learners",
    problem:
      "Learners hitting a wall on coding challenges dropped off instead of pushing through.",
    approach:
      "Designed UI to API to Python AI backend flow, integrated GPT-4o/mini, built confidence-thresholded fallback suppression so the system withholds a hint rather than risk a wrong one.",
    impact:
      "Reduced challenge drop-offs, improved completion rates: deployed to 1.5M+ learners.",
    testimonial:
      '"The hint system knew when to stay quiet, not just when to talk. That restraint is rare in AI features." — Product Lead, Programiz',
  },
  {
    id: "CASE_003",
    slug: "CODE_VISUALIZATION_PLATFORM",
    impactLine: "used in US classrooms",
    problem:
      "DSA concepts (stacks, queues, DP, coin change) are notoriously hard to teach: most learners memorize instead of understanding.",
    approach:
      "Built real-time Python-animated visualizers plus a Node.js API tracing code execution line-by-line, establishing a reusable architecture. Coin Change visualizer shipped solo in 3 days; full MVP in under 2 months.",
    impact:
      "Used by US professors in university classrooms; made DP concepts click for learners under 16.",
    testimonial:
      '"I used the Knapsack visualizer directly in my algorithms course. Students finally saw the state transitions instead of just memorizing them." — University Professor, US',
  },
  {
    id: "CASE_004",
    slug: "SARASWOTI_AI_MULTIAGENT_ORCHESTRATOR",
    impactLine: "weeks compressed to days",
    problem:
      "Manual curriculum development took weeks per course: a bottleneck on content velocity.",
    approach:
      "Built an 8-agent sequential pipeline with review gates. Key finding: agents can't reliably self-evaluate unless failure is defined explicitly in the prompt — became a pattern reused across every agent system since. Chose open-weight models (Qwen, Kimi) deliberately over GPT-4 to study cost/quality tradeoffs at volume.",
    impact:
      "Compressed weeks of curriculum work into days; adopted into the content team's daily workflow. Was still actively evolving when Abidit left Programiz in May 2026.",
    testimonial: null,
  },
];

const infra = [
  {
    name: "Sequirly",
    status: "Founding Engineer · Pre-Revenue",
    description:
      "Browser extension that catches sensitive data before it leaks into AI chat prompts.",
    tags: ["TypeScript", "Browser Extension", "Security"],
    href: "https://sequirly.com",
  },
  {
    name: "manifest-mcp",
    status: "Published · MIT",
    description:
      "GitHub App that reviews MCP config changes in PRs against a 12-rule risk engine.",
    tags: ["TypeScript", "Probot", "GitHub Actions"],
    href: "https://github.com/Abidit/manifest-mcp",
  },
  {
    name: "phi-guard-mcp",
    status: "Published · NPM",
    description:
      "Local-first MCP server that catches PHI in LLM prompts, logs, and analytics calls before it ships.",
    tags: ["TypeScript", "MCP", "HIPAA"],
    href: "https://npmjs.com/package/phi-guard-mcp",
  },
  {
    name: "eSewa & Khalti MCP",
    status: "Published · NPM",
    description:
      "Nepal's first MCP servers for its two dominant payment gateways, HMAC-SHA256 signed.",
    tags: ["TypeScript", "MCP", "Fintech"],
    href: "https://npmjs.com/package/esewa-mcp",
  },
  {
    name: "DataHub Navigator",
    status: "Live Demo",
    description:
      "Conversational, animated data-lineage explorer with a deterministic no-LLM traversal engine.",
    tags: ["Next.js", "React", "MCP"],
    href: "https://datahub-navigator.vercel.app",
  },
];

const products = [
  {
    name: "EduShip",
    status: "Live · Pre-Revenue",
    description:
      "Production-ready Next.js boilerplate for EdTech platforms — auth, courses, quizzes, payments.",
    tags: ["Next.js 16", "Clerk", "Supabase"],
    href: "https://eduship.dev",
  },
  {
    name: "SpectaSnap",
    status: "Live Demo",
    description:
      "Browser-native AR glasses try-on for optical retailers, webcam-based, no app install.",
    tags: ["Next.js", "MediaPipe", "Claude AI"],
    href: "https://spectasnap-orpin.vercel.app",
  },
  {
    name: "NomadWifi",
    status: "Live Demo",
    description:
      "Map-based platform to find and share WiFi spots by speed, noise, and power.",
    tags: ["Next.js", "Supabase", "Leaflet"],
    href: "https://nomadwifi.vercel.app",
  },
  {
    name: "Anatomly",
    status: "Live Demo · Early Build",
    description:
      "Interactive 3D map of the human body — explore organs and disease pathways.",
    tags: ["React", "Three.js", "GSAP"],
    href: "https://anatomly.vercel.app",
  },
  {
    name: "SpeedBlip",
    status: "Live Demo",
    description:
      "Real-time internet speed monitor with live charts and threshold alerts.",
    tags: ["React", "Vite", "Recharts"],
    href: "https://speedblip.netlify.app",
  },
];

const steps = [
  {
    title: "Find the real problem before writing code",
    teaser: '"I don\'t start from a ticket."',
    full: "I don't start from a ticket — I go find out what's actually broken. Ran structured user-listening campaigns (Pick a Developer's Brain, Strengthen Your AI Portfolio) via Discord, college outreach, and direct professor contact to surface real pain points before touching the roadmap.",
    evidence: "User Interviews & Discovery Cycles",
  },
  {
    title: "Validate before committing to a build",
    teaser: '"Test whether people actually want it."',
    full: "Before scaling a feature, I test whether people actually want it. Ran a willingness-to-pay experiment on churn-risk users — small, cheap, honest test before any bigger investment.",
    evidence:
      "WTP Experiment (4/295 conversions, zero immediate cancellations)",
  },
  {
    title: "Ship fast, then check if it worked",
    teaser: '"Speed is a tool for testing ideas cheaply."',
    full: "Speed is a tool for testing ideas cheaply, not a shortcut. Delivered a full game-style DP visualizer solo in 3 days; shipped a code-visualization MVP in under 2 months by building reusable architecture instead of one-off screens.",
    evidence: "Coin Change Visualizer, Code Visualization Platform",
  },
  {
    title: "Define failure before trusting output, especially with AI",
    teaser:
      '"A model can\'t judge its own output unless you tell it what failure looks like."',
    full: "The sharpest lesson from building AI systems: a model can't reliably judge its own output unless you tell it, explicitly, what failure looks like first. Built this as a review-gate pattern and reused it across every agent system since.",
    evidence: "Saraswoti AI's 8-agent review-gate architecture",
  },
  {
    title: "Measure, don't guess",
    teaser: '"Decisions get checked against data, not vibes."',
    full: "Decisions get checked against data, not vibes. Used BigQuery cohort segmentation (NTILE) to find high-value engagement segments; analyzed lesson-level drop-off to fix funnel leaks before assuming a redesign would help.",
    evidence:
      "Community Challenges cohort analysis, Lesson Funnel Improvements",
  },
];

const stackGroups = [
  {
    name: "FRONTEND",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS"],
  },
  { name: "BACKEND", tags: ["Node.js", ".NET", "Python", "REST APIs"] },
  {
    name: "AI_AGENTS",
    tags: [
      "MCP (Model Context Protocol)",
      "GPT-4o / mini",
      "Prompt Engineering",
      "Multi-Agent Orchestration",
    ],
  },
  { name: "DATA", tags: ["PostgreSQL", "Supabase", "BigQuery", "Drizzle ORM"] },
  {
    name: "TOOLING",
    tags: ["Git", "GitHub Actions", "Cypress", "Storybook", "Figma"],
  },
];

const credBadges = ["esewa-mcp", "khalti-mcp", "phi-guard-mcp", "abitree"];

function renderStats() {
  const grid = document.getElementById("stats-grid");
  if (!grid) return;
  grid.innerHTML = stats
    .map(
      (s) => `
    <div class="stat-item">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `,
    )
    .join("");
}

function renderRobot() {
  const el = document.getElementById("hero-robot");
  if (!el) return;
  el.innerHTML = robotRows
    .flatMap((row) => row.split(""))
    .map((ch) => `<span class="robot-cell${ch === "1" ? " on" : ""}"></span>`)
    .join("");
}

function statusClass(status) {
  const s = status.toLowerCase();
  if (s.includes("published")) return "badge-lime";
  if (s.includes("pre-revenue") || s.includes("early build"))
    return "badge-amber";
  return "badge-gray";
}

function renderCases() {
  const grid = document.getElementById("cases-grid");
  if (!grid) return;
  grid.innerHTML = cases
    .map(
      (item, i) => `
    <div class="case-card reveal">
      <button class="case-toggle" aria-expanded="${i === 0}">
        <div class="case-toggle-text">
          <span class="case-id">&gt; ${item.id} :: ${item.slug}</span>
          <span class="case-impact">impact: ${item.impactLine}</span>
        </div>
        <span class="chevron" aria-hidden="true">▾</span>
      </button>
      <div class="accordion-wrap${i === 0 ? " open" : ""}">
        <div class="accordion-inner">
          <div class="case-field">
            <span class="field-label">Problem</span>
            <p>${item.problem}</p>
          </div>
          <div class="case-field">
            <span class="field-label">Approach</span>
            <p>${item.approach}</p>
          </div>
          <div class="case-field">
            <span class="field-label">Impact</span>
            <p>${item.impact}</p>
          </div>
          ${
            item.testimonial
              ? `
          <div class="case-field case-testimonial">
            <span class="field-label">Testimonial</span>
            <p>${item.testimonial}</p>
          </div>`
              : ""
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderBuildGroup(containerId, items) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
    <a href="${item.href}" target="_blank" rel="noopener" class="build-card reveal${item.filled ? " build-card-filled" : ""}">
      <div class="build-card-top">
        <span class="build-name">${item.name}</span>
        <span class="badge ${statusClass(item.status)}">${item.status}</span>
      </div>
      <p class="build-desc">${item.description}</p>
      <div class="build-card-bottom">
        <div class="build-tags">
          ${item.tags.map((t) => `<span class="pill">${t}</span>`).join("")}
        </div>
        <span class="build-arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  `,
    )
    .join("");
}

function renderBuilding() {
  renderBuildGroup("infra-grid", infra);
  renderBuildGroup(
    "products-grid",
    products.map((p, i) => ({ ...p, filled: i % 2 === 1 })),
  );
}

function renderSteps() {
  const grid = document.getElementById("steps-grid");
  if (!grid) return;
  grid.innerHTML = steps
    .map(
      (step, i) => `
    <div class="step-card reveal">
      <button class="step-toggle" aria-expanded="${i === 0}">
        <span class="step-num">${String(i + 1).padStart(2, "0")}</span>
        <div class="step-toggle-text">
          <span class="step-title">${step.title}</span>
          <span class="step-teaser">${step.teaser}</span>
        </div>
        <span class="chevron" aria-hidden="true">▾</span>
      </button>
      <div class="accordion-wrap${i === 0 ? " open" : ""}">
        <div class="accordion-inner step-inner">
          <p>${step.full}</p>
          <span class="step-evidence">EVIDENCE: ${step.evidence}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderStackGroups() {
  const grid = document.getElementById("stack-groups");
  if (!grid) return;
  grid.innerHTML = stackGroups
    .map(
      (group) => `
    <div class="stack-group reveal">
      <span class="stack-group-label">${group.name}</span>
      <div class="stack-pills">
        ${group.tags.map((t) => `<span class="pill pill-outline">${t}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function renderCredBadges() {
  const el = document.getElementById("cred-badges");
  if (!el) return;
  el.innerHTML = credBadges
    .map((b) => `<span class="cred-badge">${b}</span>`)
    .join("");
}

function initMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
    });
  });
}

function initAccordions() {
  document.querySelectorAll(".case-toggle, .step-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrap = btn.nextElementSibling;
      const open = wrap.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
}

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) toggle.textContent = theme === "dark" ? "☀" : "☾";
  }

  const stored = localStorage.getItem("theme");
  const preferred =
    stored ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  applyTheme(preferred);

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const siblings = Array.from(el.parentElement.children);
          const index = siblings.indexOf(el);
          el.style.transitionDelay = `${index * 80}ms`;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".case-card, .build-card, .step-card, .stack-group")
    .forEach((el) => {
      observer.observe(el);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderRobot();
  renderCases();
  renderBuilding();
  renderSteps();
  renderStackGroups();
  renderCredBadges();
  initMobileNav();
  initTheme();
  initAccordions();
  initScrollReveal();
});
