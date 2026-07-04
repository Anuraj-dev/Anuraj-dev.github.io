/* =========================================================================
   Anuraj Jit Saikia — portfolio
   Single project data array + card render + scroll reveal. No dependencies.
   ========================================================================= */

// --- Project data: the one place to edit projects ------------------------
const PROJECTS = [
  {
    title: "Tales of Veridia",
    pitch:
      "A 3D creature-collecting RPG that runs in the browser — sprites, world, and music are all procedurally generated at runtime.",
    tags: ["Three.js", "TypeScript", "Web Audio"],
    repo: "https://github.com/Anuraj-dev/pokemon",
  },
  {
    title: "Khata",
    pitch:
      "A UPI-aware personal finance PWA: it auto-logs spending straight from SMS, tracks udhaar ledgers, and splits trip costs.",
    tags: ["React 19", "Convex", "Capacitor"],
    repo: "https://github.com/Anuraj-dev/Khata",
    live: "https://khata.raja-dev.me",
  },
  {
    title: "Student ERP",
    pitch:
      "A Flask ERP backend covering admissions, fees, hostel and library — with JWT auth, a real-time dashboard, PDF+QR documents, and a pytest suite.",
    tags: ["Flask", "SQLAlchemy", "SocketIO"],
    repo: "https://github.com/Anuraj-dev/student_erp",
  },
  {
    title: "GoCareer",
    pitch:
      "AI career guidance built for rural Indian students — Gemini-powered, with an offline fallback for patchy connectivity.",
    tags: ["Node.js", "Express", "Gemini API"],
    repo: "https://github.com/Anuraj-dev/GoCareer",
  },
  {
    title: "AI Usage Monitor",
    pitch:
      "A local dashboard that tracks token usage and cost across the AI CLIs I run every day.",
    tags: ["Python", "FastAPI", "SQLite"],
    repo: "https://github.com/Anuraj-dev/ai-usage-monitor",
  },
  {
    title: "MonkeyType for Terminal",
    pitch:
      "A curses-based typing trainer for the terminal, with live WPM and accuracy analytics.",
    tags: ["Python"],
    repo: "https://github.com/Anuraj-dev/MonkeyType-for-terminal",
  },
];

// --- Render project cards ------------------------------------------------
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const frag = document.createDocumentFragment();

  PROJECTS.forEach((p, i) => {
    const li = document.createElement("li");
    li.className = "project-card reveal";

    const idx = String(i + 1).padStart(2, "0");
    const liveBadge = p.live
      ? `<span class="pc-live">live</span>`
      : "";

    const tags = p.tags
      .map((t) => `<li>${t}</li>`)
      .join("");

    const liveLink = p.live
      ? `<a class="live-link" href="${p.live}" target="_blank" rel="noopener">
           live demo <span aria-hidden="true">↗</span>
         </a>`
      : "";

    li.innerHTML = `
      <div class="pc-top">
        <span class="pc-index">${idx}</span>
        ${liveBadge}
      </div>
      <h3 class="pc-title">
        <a href="${p.repo}" target="_blank" rel="noopener">${p.title}</a>
      </h3>
      <p class="pc-pitch">${p.pitch}</p>
      <ul class="pc-tags">${tags}</ul>
      <div class="pc-links">
        <a href="${p.repo}" target="_blank" rel="noopener">
          <span aria-hidden="true">›_</span> repo
        </a>
        ${liveLink}
      </div>
    `;

    // Pointer glow follows cursor (progressive enhancement)
    li.addEventListener("pointermove", (e) => {
      const r = li.getBoundingClientRect();
      li.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    });

    frag.appendChild(li);
  });

  grid.appendChild(frag);
}

// --- Scroll reveal via IntersectionObserver ------------------------------
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => io.observe(el));
}

// --- Boot ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  // project cards are added after initial reveal scan, so mark them too
  initReveal();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
