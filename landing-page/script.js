/* SmartTimetable — landing page interactions
   Keeps the same "no real backend" philosophy as /prototype/script.js:
   CTA interest is tracked with localStorage only, never sent anywhere.
   See /docs/technical-architecture.md for the platform decision this follows. */

(function () {
  "use strict";

  /* ---------- Smooth scroll for in-page nav links ---------- */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- Scroll-reveal for feature/problem/solution cards ---------- */

  const prefersReducedMotion = typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards = document.querySelectorAll(".card");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach(c => c.classList.add("in-view"));
  } else {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in-view"), i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(c => observer.observe(c));
  }

  /* ---------- CTA interest tracking (simulated — localStorage only) ----------
     Every CTA click is logged locally so the team can see, during a demo,
     how many times each button was actually used. Nothing is sent to a
     server; this is purely a client-side simulation of an analytics event,
     matching how /prototype/script.js simulates its own backend. */

  const CTA_LOG_KEY = "st_landing_cta_clicks";

  function logCtaClick(source) {
    let log = [];
    try {
      log = JSON.parse(localStorage.getItem(CTA_LOG_KEY)) || [];
    } catch (e) {
      log = [];
    }
    log.push({ source, timestamp: new Date().toISOString() });
    localStorage.setItem(CTA_LOG_KEY, JSON.stringify(log));
    return log.length;
  }

  const ctaNote = document.getElementById("ctaNote");

  document.querySelectorAll("[data-cta]").forEach(btn => {
    btn.addEventListener("click", () => {
      const total = logCtaClick(btn.dataset.cta);
      if (ctaNote && btn.dataset.cta === "final") {
        ctaNote.textContent = "Opening the prototype\u2026";
        // Every click is logged locally; `total` is available here if the
        // team wants to surface a running count during a demo.
        void total;
      }
      // Real navigation still happens via the anchor's href — this only adds
      // the local log, it never blocks or delays the link.
    });
  });
})();
