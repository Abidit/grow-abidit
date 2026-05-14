const stats = [
  { value: '4+', label: 'years at Programiz' },
  { value: '40+', label: 'institutions on B2B' },
  { value: '18+', label: 'features shipped' },
  { value: '6K/mo', label: 'organic traffic driven' }
];

const timeline = [
  {
    year: '2022',
    theme: 'Foundation',
    items: [
      {
        title: 'Joined Programiz',
        desc: 'Stepped into a live platform used by millions of learners.'
      },
      {
        title: 'SQL Editor Integration',
        desc: 'Built a standalone SQL editor as a reusable platform entity. Ended up part of one of the top 5 most-used courses on the platform.'
      },
      {
        title: 'JavaScript DOM Challenge Infrastructure',
        desc: 'Built execution and verification infrastructure for browser-based JS challenges — foundation for interactive challenge workflows.'
      },
      {
        title: 'Lesson Funnel Improvements',
        desc: 'Mapped user drop-off across lesson flows and iterated on UX to improve progression.'
      }
    ]
  },
  {
    year: '2023',
    theme: 'Platform & Scale',
    items: [
      {
        title: 'DataMentor Homepage Revamp',
        desc: '1-day sprint alongside the CEO. Result: ~6K organic visits/month, 56% from the US.'
      },
      {
        title: 'B2B Pro Teams — Frontend Owner',
        desc: '6 months owning the B2B product end-to-end: dashboards, team onboarding, assignments, reporting, settings. Adopted by 40+ institutions globally.'
      },
      {
        title: 'Sales & Payments Infrastructure (Paddle)',
        desc: 'Built admin dashboards and campaign logic for Paddle plans, coupons, and sale events — enabled rapid revenue experiments.'
      },
      {
        title: 'Storybook & Shared Components',
        desc: 'Standardized UI with a shared component system and Storybook — cut duplication, raised dev velocity.'
      }
    ]
  },
  {
    year: '2024',
    theme: 'Data & AI',
    items: [
      {
        title: 'Willingness-to-Pay Experiment',
        desc: 'Identified 295 churn-risk users from behavior analytics, offered targeted discounts. Converted 4 to annual plans. Zero immediate cancellations.'
      },
      {
        title: 'Community Challenges (HackerRank-style)',
        desc: 'Built challenge APIs, leaderboards, and XP systems. Ran BigQuery NTILE cohort segmentation to identify high-value engagement segments.'
      },
      {
        title: 'SensAI — AI Hints & Code Explanations',
        desc: 'Integrated GPT-4o (gpt-4o-2024-08-06) into the challenge flow with a UI → API → Python backend pipeline. Reduced challenge drop-offs.'
      },
      {
        title: 'Cypress E2E Testing',
        desc: 'Introduced end-to-end test coverage across critical flows. Significantly reduced regressions in a fast-shipping environment.'
      }
    ]
  },
  {
    year: '2025',
    theme: 'Visualizers & Ecosystem',
    items: [
      {
        title: 'Code Visualization Platform',
        desc: 'Built real-time Stack & Queue visualizers — Python execution tracing API (Node.js), playback controls, reusable animation architecture. MVP in under 2 months.'
      },
      {
        title: 'Algorithm Visualizers (Knapsack & Coin Change)',
        desc: 'Step-by-step DP visualizations used by US professors. Coin Change visualizer (sprites, animated storytelling) delivered in 3 working days.'
      },
      {
        title: 'User Interviews & Discovery Cycles',
        desc: 'Ran structured listening programs via Discord, email, and US professor outreach. Directly influenced roadmap decisions.'
      },
      {
        title: 'Guided Projects Ecosystem (Co-Owner)',
        desc: 'Co-designed and shipped the builder-first ecosystem: task-check infrastructure, project scaffolding, full platform rollout. Shifted users from passive learners to portfolio builders.'
      },
      {
        title: 'Internal Hackathon',
        desc: 'Organized company-wide hackathon end-to-end. 15+ participants across technical and non-technical teams.'
      }
    ]
  }
];

const achievements = [
  {
    statValue: '40+',
    statLabel: 'institutions globally',
    title: 'B2B Pro Teams',
    what: 'Owned frontend for Programiz\'s B2B product — dashboards, team onboarding, assignments, reporting, settings over ~6 months.',
    impact: 'Adopted by 40+ institutions globally including US-based bootcamps, universities, and training programs.'
  },
  {
    statValue: 'Co-owned',
    statLabel: 'full rollout',
    title: 'Guided Projects Ecosystem',
    what: 'Co-designed and built the builder-first ecosystem enabling learners to ship real, portfolio-ready projects instead of just completing courses.',
    impact: 'Shifted the platform\'s value proposition from "lesson consumer" to "project builder" — shipped to every user on Programiz PRO.'
  },
  {
    statValue: '<2mo',
    statLabel: 'MVP shipped',
    title: 'Code Visualization Platform',
    what: 'Built real-time Stack & Queue visualizers with Python execution tracing, Node.js API, and playback controls. Established a reusable architecture for future visualizers.',
    impact: 'Enabled playable learning experiences for beginners and career switchers. Multiple follow-on visualizers built on the same foundation.'
  },
  {
    statValue: 'GPT-4o',
    statLabel: 'integrated',
    title: 'SensAI — AI Hints',
    what: 'Designed and shipped an AI hint and code explanation system: React UI → web API → Python backend using gpt-4o-2024-08-06 and gpt-4o-mini.',
    impact: 'Reduced challenge drop-offs. Improved completion rates.'
  },
  {
    statValue: 'BigQuery',
    statLabel: 'cohort analysis',
    title: 'Community Challenges',
    what: 'Built HackerRank-style challenge infrastructure — APIs, UI, leaderboards, XP. Ran NTILE cohort segmentation in BigQuery to identify high-value user segments.',
    impact: 'Established challenges as a new acquisition channel. Validated the engagement-to-monetization link with BigQuery.'
  },
  {
    statValue: '0',
    statLabel: 'immediate cancellations',
    title: 'WTP Experiment',
    what: 'Identified 295 churn-risk users via behavior analytics. Offered targeted annual plan discounts as a save experiment.',
    impact: 'Converted 4 users (~1.36%) to annual plans with zero immediate cancellations. Validated willingness-to-pay signal for future pricing experiments.'
  },
  {
    statValue: '3 days',
    statLabel: 'Coin Change delivered',
    title: 'Algorithm Visualizers',
    what: 'Built Knapsack (step-by-step DP state transitions) and Coin Change (sprite-based animated storytelling) visualizers.',
    impact: 'Used by US professors in university classrooms. Coin Change makes advanced concepts accessible to learners under 16.'
  },
  {
    statValue: '6K/mo',
    statLabel: 'organic visits',
    title: 'DataMentor Revamp',
    what: '1-day sprint revamping the DataMentor homepage on a legacy Drupal codebase, alongside the CEO.',
    impact: '~6K organic visits/month, 56% US traffic. Traffic value ~$1.1K/month. Strengthened SEO presence for R-language learning.'
  }
];

const projects = [
  {
    name: 'SpectaSnap',
    desc: 'Browser-native AR glasses try-on for optical retailers. No app install — shoppers try frames via webcam, store owners get analytics and AI-powered style recommendations.',
    tech: ['Next.js', 'MediaPipe', 'Three.js', 'Claude AI'],
    url: 'https://spectasnap-orpin.vercel.app',
    status: 'Live'
  },
  {
    name: 'NomadWifi',
    desc: 'Map-based platform to find and share WiFi spots. Filter by speed, noise level, and power availability.',
    tech: ['Next.js', 'Supabase', 'Leaflet'],
    url: 'https://nomadwifi.vercel.app',
    status: 'Live'
  },
  {
    name: 'Anatomly',
    desc: 'Interactive 3D map of the human body. Explore organs, understand diseases, and see how medicines heal.',
    tech: ['React', 'Three.js', 'GSAP'],
    url: 'https://anatomly.vercel.app',
    status: 'Live'
  },
  {
    name: 'SpeedBlip',
    desc: 'Real-time internet speed monitor for developers. Live download/upload/ping charts, threshold alerts, auto-scheduler. PWA.',
    tech: ['React', 'Vite', 'Recharts'],
    url: 'https://speedblip.netlify.app',
    status: 'Live'
  }
];

const stack = {
  'Frontend': ['React', 'TypeScript', 'JavaScript', 'Storybook'],
  'Backend': ['Python', 'Node.js', 'REST APIs'],
  'Data & Analytics': ['BigQuery', 'Product Analytics', 'Cohort Analysis'],
  'AI': ['GPT-4o', 'Prompt Engineering'],
  'Testing': ['Cypress', 'E2E Testing'],
  'Platform': ['SaaS', 'Paddle', 'Drupal']
};

function renderStats() {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  grid.innerHTML = stats.map(s => `
    <div class="stat-item">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  container.innerHTML = timeline.map(block => `
    <div class="timeline-block reveal">
      <div class="timeline-block-header">
        <span class="timeline-year">${block.year}</span>
        <span class="timeline-theme">${block.theme}</span>
        <div class="timeline-rule"></div>
      </div>
      <div class="timeline-block-items">
        ${block.items.map(item => `
          <div class="timeline-item">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderWins() {
  const grid = document.getElementById('wins-grid');
  if (!grid) return;
  grid.innerHTML = achievements.map(w => `
    <div class="win-card reveal">
      <div class="win-stat">
        <span class="win-stat-value">${w.statValue}</span>
        <span class="win-stat-label">${w.statLabel}</span>
      </div>
      <h3 class="win-title">${w.title}</h3>
      <div class="win-what">
        <span class="label">What</span>
        <p>${w.what}</p>
      </div>
      <div class="win-impact">
        <span class="label">Impact</span>
        <p>${w.impact}</p>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener" class="project-card reveal">
      <div class="project-card-top">
        <span class="project-status">${p.status}</span>
        <svg class="project-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="pill">${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

function renderStack() {
  const grid = document.getElementById('stack-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(stack).map(([category, pills]) => `
    <div class="stack-category reveal">
      <span class="stack-cat-label">${category}</span>
      <div class="stack-pills">
        ${pills.map(p => `<span class="pill">${p}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function initMobileNav() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = Array.from(el.parentElement.children);
        const index = siblings.indexOf(el);
        el.style.transitionDelay = `${index * 80}ms`;
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-block, .win-card, .stack-category, .project-card').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderTimeline();
  renderWins();
  renderProjects();
  renderStack();
  initMobileNav();
  initScrollReveal();
});
