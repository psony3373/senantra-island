(() => {
  if (window.__senantraNavigationMounted) return;
  window.__senantraNavigationMounted = true;

  const scriptUrl = new URL(document.currentScript.src, window.location.href);
  const siteRoot = new URL("../", scriptUrl);
  const destinations = [
    { id: "polaris", index: "01", label: "Polaris", note: "The first light", path: "index.html" },
    { id: "lighthouse", index: "02", label: "Lighthouse", note: "The threshold", path: "lighthouse.html" },
    { id: "music-vault", index: "03", label: "Music Vault", note: "Living frequencies", path: "music-vault/" },
    { id: "the-keepers", index: "04", label: "The Keepers", note: "Two flames, one memory", path: "the-keepers.html" },
    { id: "lunaterra", index: "05", label: "Lunaterra", note: "The living soul", path: "lunaterra.html" },
    { id: "visual-archives", index: "06", label: "Visual Archives", note: "The memory of making", path: "visual-archives/" }
  ];

  const cleanPath = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
  const currentId = cleanPath.includes("lighthouse") ? "lighthouse"
    : cleanPath.includes("music-vault") ? "music-vault"
    : cleanPath.includes("the-keepers") ? "the-keepers"
    : cleanPath.includes("lunaterra") ? "lunaterra"
    : cleanPath.includes("visual-archives") ? "visual-archives"
    : cleanPath.includes("fruits-of-wisdom") ? "fruits-of-wisdom"
    : "polaris";

  const trigger = document.createElement("button");
  trigger.className = "sn-nav-trigger";
  trigger.type = "button";
  trigger.setAttribute("aria-label", "Open Sénantra destinations");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", "senantra-destinations");
  trigger.innerHTML = `
    <span class="sn-nav-trigger-copy">Show map</span>
    <span class="sn-nav-trigger-line" aria-hidden="true"></span>`;

  const layer = document.createElement("div");
  layer.className = "sn-nav-layer";
  layer.id = "senantra-destinations";
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = `
    <button class="sn-nav-scrim" type="button" aria-label="Close Sénantra destinations"></button>
    <div class="sn-nav-dialog" role="dialog" aria-modal="true" aria-labelledby="sn-nav-title">
      <div class="sn-nav-shell">
        <p class="sn-nav-kicker">The Island Atlas · Direct Passage</p>
        <div class="sn-nav-heading">
          <h2 id="sn-nav-title">Choose your passage.</h2>
          <p>The journey remains yours. Return to the ritual—or step directly into the place that calls.</p>
        </div>
        <nav class="sn-nav-grid" aria-label="Sénantra destinations">
          ${destinations.map((item) => `
            <a class="sn-nav-card" data-destination="${item.id}" href="${new URL(item.path, siteRoot).href}"${item.id === currentId ? ' aria-current="page"' : ""}>
              <span class="sn-nav-index">${item.index}</span>
              <span><strong>${item.label}</strong><small>${item.note}</small></span>
              <span class="sn-nav-card-arrow" aria-hidden="true">→</span>
            </a>`).join("")}
        </nav>
        <p class="sn-nav-footnote">Press Esc or touch outside the atlas to return</p>
      </div>
    </div>`;

  document.body.append(trigger, layer);
  document.body.classList.add("senantra-nav-ready");

  const dialog = layer.querySelector(".sn-nav-dialog");
  const scrim = layer.querySelector(".sn-nav-scrim");
  const triggerCopy = trigger.querySelector(".sn-nav-trigger-copy");
  let lastFocus = null;

  const focusable = () => [...layer.querySelectorAll("a[href], button:not([disabled])")]
    .filter((element) => element !== scrim && element.offsetParent !== null);

  const open = () => {
    lastFocus = document.activeElement;
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Close Sénantra destinations");
    triggerCopy.textContent = "Hide map";
    document.body.classList.add("sn-nav-locked");
    window.setTimeout(() => {
      const active = layer.querySelector('[aria-current="page"]') || focusable()[0];
      if (active) active.focus();
    }, 80);
  };

  const close = () => {
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open Sénantra destinations");
    triggerCopy.textContent = "Show map";
    document.body.classList.remove("sn-nav-locked");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  trigger.addEventListener("click", () => layer.classList.contains("is-open") ? close() : open());
  scrim.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!layer.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== "Tab") return;
    const items = focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
