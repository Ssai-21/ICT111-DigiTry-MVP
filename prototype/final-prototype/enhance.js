/* ============================================================
   SmartTimetable — presentation-layer enhancements
   Purely additive: count-up numbers on the admin dashboard only.
   Route rendering, the tab bar's active state, and all entrance
   motion are handled directly by script.js/style.css with no JS
   dependency, so this file being absent or failing to load can
   never break navigation or hide page content — it only means the
   stat numbers appear at their final value immediately instead of
   counting up.
   ============================================================ */

(function () {
  "use strict";

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initCountUp() {
    if (reducedMotion()) return;
    document.querySelectorAll("[data-countup]").forEach(el => {
      const raw = el.textContent.trim();
      const target = parseFloat(raw.replace(/[^0-9.-]/g, ""));
      if (Number.isNaN(target)) return;

      const decimals = (raw.split(".")[1] || "").length;
      const duration = 700;
      const start = performance.now();

      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = decimals ? val.toFixed(decimals) : String(Math.round(val));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      }
      el.textContent = decimals ? (0).toFixed(decimals) : "0";
      requestAnimationFrame(tick);
    });
  }

  window.Enhance = {
    afterRender() {
      initCountUp();
    }
  };
})();
