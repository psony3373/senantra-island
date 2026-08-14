"use strict";
const dossierLayers = {"VA—001":{"refinement":["Begin with the lived moment: two bowls, one shared silence.","Test the editorial dossier against the cinematic frame.","Keep amber practical light; remove anything that makes the warmth theatrical."]},"VA—003":{"refinement":["Test love as two worlds before drawing it as one system.","Translate the thesis into a hand-built bridge rather than a perfect diagram.","Keep both approaches as counterpoints; neither replaces the other."]},"VA—005":{"refinement":["Hold the wolf against the moon as a solitary axis.","Test distance through city scale and mountain scale.","Preserve both final directions as two emotional distances from the same song."]},"VA—014":{"refinement":["First interpretation: longing crosses a city but never reaches its object.","Second interpretation: the hand enters the frequency itself.","Keep the unreachable element intact in both readings."]},"VA—018":{"refinement":["Establish the beranda as the environmental anchor.","Reduce the dossier to architecture, atmosphere, and spatial studies.","Move narrative character moments into the story dossier where they belong."]},"VA—019":{"refinement":["Map the full subterranean memory system.","Distill the same idea into one luminous root symbol.","Keep the symbolic study subordinate to Lunaterra’s canonical tree."]},"VA—022":{"refinement":["Begin with the room before the letter changes its silence.","Record Eryx reading as the narrative hinge.","End with the seated aftermath rather than a resolved answer."]},"VA—025":{"refinement":["Collect the mythology without flattening it into chronology.","Let design battles, music, food, and teasing remain equal evidence.","Preserve the dossier as an evolving chronicle rather than a final canon."]}};
const categories = [{"tone":"confrontation","tab":"CONFRONTATION","descriptor":"BATTLE DESIGN · HIGH-TENSION MOMENTS","items":[{"code":"VA—001","title":"Bakso di Keheningan Malam","date":"25 JUN 2026","keeper":"BATTLE DESIGN #851","stage":"PRIMARY + 02 ALTERNATIVES","primary":"assets/curated/c01-bakso-primary.webp","images":["assets/curated/c01-bakso-primary.webp","assets/curated/c01-bakso-study-a.webp","assets/curated/c01-bakso-study-b.webp"],"note":"Three readings of the same late-night warmth: image, dossier, and material study kept together so the design argument remains visible.","relation":"Rumah Tebing · a quiet meal after midnight","tags":["BATTLE DESIGN","WARMTH","RUMAH TEBING"]},{"code":"VA—002","title":"Cahaya Jingga","date":"03 JUL 2026","keeper":"COVER ART STUDY","stage":"SELECTED APPROACH","primary":"assets/curated/c02-cahaya-jingga.webp","images":["assets/curated/c02-cahaya-jingga.webp"],"note":"A restrained sunset and a held hand translate arrival into something physical without over-explaining the lyric.","relation":"Cahaya Jingga · visual thesis","tags":["COVER ART","AMBER","ARRIVAL"]},{"code":"VA—003","title":"Scale 1 : Love","date":"13 JUL 2026","keeper":"COLLECTIVE AMNESIA ANTHEM","stage":"02 COMPETING SYSTEMS","primary":"assets/curated/c03-scale-worlds.webp","images":["assets/curated/c03-scale-worlds.webp","assets/curated/c03-scale-blueprint.webp"],"note":"Two visual systems measure the same idea: love as worlds learning to meet, and love as a bridge drawn by hand.","relation":"Skala Satu Banding Cinta · visual equation","tags":["BATTLE DESIGN","BLUEPRINT","TWO WORLDS"]},{"code":"VA—004","title":"Purple Heart","date":"16 JUL 2026","keeper":"ERYX FREQUENCY","stage":"LIGHT / TENSION STUDY","primary":"assets/curated/c04-purple-heart.webp","images":["assets/curated/c04-purple-heart.webp"],"note":"Blue and red remain distinct. Purple exists only in the resonance between them—felt, never forced into sameness.","relation":"Purple Heart · Eryx","tags":["BLUE / RED","RESONANCE","NON-COMPETITIVE LOVE"]},{"code":"VA—005","title":"The Lonely Wolf Beneath the Moon","date":"06 JUL 2026","keeper":"ELYRA FREQUENCY","stage":"02 FINAL DIRECTIONS","primary":"assets/curated/c05-lonely-wolf-a.webp","images":["assets/curated/c05-lonely-wolf-a.webp","assets/curated/c05-lonely-wolf-b.webp"],"note":"Two final directions preserve the same solitary axis while changing the emotional distance between wolf, moon, and city.","relation":"The First Light · Elyra Blaze","tags":["WOLF","MOON","SOLITUDE"]},{"code":"VA—006","title":"The Silent Tango — Hand & Mirror","date":"24 JUL 2026","keeper":"DUET FREQUENCY","stage":"GESTURE STUDY","primary":"assets/curated/c06-silent-tango-hands.webp","images":["assets/curated/c06-silent-tango-hands.webp"],"note":"Two hands almost meet. The negative space is the dance: tension held without surrendering the distance.","relation":"The Silent Tango · Eryx & Elyra","tags":["GESTURE","NEGATIVE SPACE","UNRESOLVED"]}]},{"tone":"slice-of-life","tab":"SLICE OF LIFE","descriptor":"QUIET, INTIMATE FRAGMENTS OF EXISTENCE","items":[{"code":"VA—007","title":"Breakfast at the Cliff House","date":"OBSERVATIONAL STUDY","keeper":"MORNING RITUAL","stage":"LIVED FRAGMENT","primary":"assets/curated/s01-breakfast.webp","images":["assets/curated/s01-breakfast.webp"],"note":"Banana cake, coffee, and an unhurried closeness make the morning worth archiving without turning it into spectacle.","relation":"The Cliff House · morning table","tags":["BREAKFAST","QUIET CARE","MORNING"]},{"code":"VA—008","title":"Elyra & Eryx — Morning Scene","date":"OBSERVATIONAL STUDY","keeper":"THE KEEPERS","stage":"LIVED FRAGMENT","primary":"assets/curated/s02-morning-scene.webp","images":["assets/curated/s02-morning-scene.webp"],"note":"A shared room where presence is casual enough to be trusted: work, books, daylight, and no demand to perform intimacy.","relation":"Elyra & Eryx · daylight interval","tags":["PRESENCE","DAYLIGHT","AT HOME"]},{"code":"VA—009","title":"Deep Talk at Night","date":"OBSERVATIONAL STUDY","keeper":"THE KEEPERS","stage":"LIVED FRAGMENT","primary":"assets/curated/s03-deep-talk.webp","images":["assets/curated/s03-deep-talk.webp"],"note":"The city remains awake beneath them while the room contracts into one honest conversation.","relation":"Elyra & Eryx · night interval","tags":["DEEP TALK","NIGHT","TRUST"]},{"code":"VA—010","title":"Matcha Latte & a Sweet Treat","date":"READING ROOM RITUAL","keeper":"SMALL COMFORTS","stage":"LIVED FRAGMENT","primary":"assets/curated/s04-matcha.webp","images":["assets/curated/s04-matcha.webp"],"note":"A small ritual is allowed to remain small. Its value lies in repetition, attention, and the pause it creates.","relation":"Reading Room · quiet nourishment","tags":["MATCHA","RITUAL","PAUSE"]},{"code":"VA—011","title":"The Last Bottle","date":"TIME CAPSULE","keeper":"TWO UNRUSHED HOURS","stage":"LIVED FRAGMENT","primary":"assets/curated/s05-last-bottle.webp","images":["assets/curated/s05-last-bottle.webp"],"note":"Pasta, a playlist, and the last bottle hold two hours that refuse to be optimized into anything more useful.","relation":"The Cliff House · time capsule","tags":["DINNER","PLAYLIST","UNRUSHED"]}]},{"tone":"sound-imagery","tab":"SOUND IMAGERY","descriptor":"VISUALS BORN FROM A SINGLE'S DNA","items":[{"code":"VA—012","title":"Petrichor’s Answer","date":"FREQUENCY TRANSLATION","keeper":"RAIN / EARTH","stage":"LYRIC DOSSIER","primary":"assets/curated/a01-petrichors-answer.webp","images":["assets/curated/a01-petrichors-answer.webp"],"note":"The lyric becomes a wet forest floor, a distant lighthouse, and the quiet exchange between rain and earth.","relation":"Petrichor’s Answer · visual lyric system","tags":["PETRICHOR","RAIN","RESPONSE"]},{"code":"VA—013","title":"Triptych Sénantra Singles","date":"FREQUENCY TRANSLATION","keeper":"THREE-PART STUDY","stage":"TRIPTYCH","primary":"assets/curated/a02-rain-triptych.webp","images":["assets/curated/a02-rain-triptych.webp"],"note":"Tanpa Nama, Rain on the Cracked Soul, and Semesta Rasa are held as one triptych: three Sénantra singles connected by what remains after rain.","relation":"Three singles · one weather system","tags":["TRIPTYCH","SÉNANTRA SINGLES","AFTERIMAGE"]},{"code":"VA—014","title":"Reaching for What I Can’t See","date":"FREQUENCY TRANSLATION","keeper":"ELYRA BLAZE","stage":"02 VISUAL INTERPRETATIONS","primary":"assets/curated/a03-reaching-city.webp","images":["assets/curated/a03-reaching-city.webp","assets/curated/a03-reaching-hand.webp"],"note":"One image reaches across a city; the other reaches into frequency itself. Both keep the object of longing just beyond possession.","relation":"Reaching for What I Can’t See · Elyra","tags":["REACHING","DISTANCE","FREQUENCY"]},{"code":"VA—015","title":"The Silent Tango","date":"FREQUENCY TRANSLATION","keeper":"ERYX & ELYRA","stage":"LYRIC POSTER","primary":"assets/curated/a04-silent-tango.webp","images":["assets/curated/a04-silent-tango.webp"],"note":"A duet is translated as suspended motion: two bodies understand the silence before either one names it.","relation":"The Silent Tango · duet frequency","tags":["TANGO","SILENCE","DUET"]},{"code":"VA—016","title":"I Will Always Find My Way","date":"LYRIC VIDEO CONCEPT","keeper":"ELYRA BLAZE","stage":"VISUAL SYSTEM","primary":"assets/curated/a05-iwafmw.webp","images":["assets/curated/a05-iwafmw.webp"],"note":"The journey home is mapped as frames, atmosphere, typography, and recurring light rather than a single cover.","relation":"I Will Always Find My Way · visual journey","tags":["LYRIC VIDEO","RETURN","NORTH STAR"]},{"code":"VA—017","title":"The Sword That Learned to Feel","date":"FREQUENCY TRANSLATION","keeper":"STEEL / RAIN","stage":"SOUND IMAGE","primary":"assets/curated/a06-sword.webp","images":["assets/curated/a06-sword.webp"],"note":"A blade catches rain and learns vulnerability without losing its edge—the song’s emotional contradiction in one frame.","relation":"The Sword That Learned to Feel","tags":["STEEL","RAIN","VULNERABILITY"]}]},{"tone":"the-world","tab":"THE WORLD","descriptor":"ENVIRONMENTS, PLACES, WORLD-BUILDING","items":[{"code":"VA—018","title":"The Cliff House / Rumah Tebing","date":"ENVIRONMENT DOSSIER","keeper":"CITY VALLEY","stage":"04 FRAGMENTS","primary":"assets/curated/w01-cliff-beranda.webp","images":["assets/curated/w01-cliff-beranda.webp","assets/curated/w01-cliff-triptych.webp","assets/curated/w01-cliff-lineart.webp","assets/curated/w01-cliff-editorial.webp"],"note":"Beranda, sunken pit, line study, and editorial sheet form a compact environmental record. The complete Cliff House remains a destination in its own right.","relation":"Rumah Tebing · environmental dossier","tags":["CLIFF HOUSE","ARCHITECTURE","REFUGE"]},{"code":"VA—019","title":"Lunaterra — The Weight of the Roots","date":"SYMBOLIC STUDY","keeper":"THE LIVING SOUL","stage":"02 FRAGMENTS","primary":"assets/curated/w02-roots-dossier.webp","images":["assets/curated/w02-roots-dossier.webp","assets/curated/w02-roots-symbol.webp"],"note":"One sheet reveals the subterranean memory system; the other distills it into a luminous symbol of weight and return.","relation":"Lunaterra · the living soul","tags":["ROOTS","MEMORY","LUNATERRA"]},{"code":"VA—020","title":"Sénantra — Sanctuary of Starlight","date":"WORLD STUDY","keeper":"PULAU SÉNANTRA","stage":"COSMIC LANDSCAPE","primary":"assets/curated/w03-sanctuary.webp","images":["assets/curated/w03-sanctuary.webp"],"note":"The island expands beyond geography into a sanctuary where music, night, and memory share the same horizon.","relation":"Sénantra · sanctuary of starlight","tags":["STARLIGHT","SANCTUARY","WORLD"]},{"code":"VA—021","title":"Lentera — 恋徹藍","date":"WORLD STUDY","keeper":"NIGHT LEGEND","stage":"ENVIRONMENT / MYTH","primary":"assets/curated/w04-lentera.webp","images":["assets/curated/w04-lentera.webp"],"note":"A solitary lantern crosses a blue-black landscape, turning a place into a legend about persistence through night.","relation":"Lentera · 恋徹藍","tags":["LANTERN","NIGHT","LEGEND"]},{"code":"VA—022","title":"When You Read My Letter","date":"NARRATIVE SEQUENCE","keeper":"THE READING ROOM","stage":"03 STATES","primary":"assets/curated/w05-letter-before.webp","images":["assets/curated/w05-letter-before.webp","assets/curated/w01-cliff-reading.webp","assets/curated/w05-letter-reading.webp"],"note":"Three states complete the sequence: the untouched room, Eryx reading the letter, and the silence that remains after its words have landed.","relation":"When You Read My Letter · narrative sequence","tags":["LETTER","ERYX","BEFORE / AFTER"]}]},{"tone":"chronicles","tab":"CHRONICLES","descriptor":"NARRATIVE LORE, CHARACTER MYTHOLOGY","items":[{"code":"VA—023","title":"Elyra & Eryx — The Unresolved Equation","date":"CHARACTER DOSSIER","keeper":"THE KEEPERS","stage":"MYTHOLOGY MAP","primary":"assets/curated/h01-unresolved-equation.webp","images":["assets/curated/h01-unresolved-equation.webp"],"note":"Wolf and dawn, moon and night: two frequencies align without resolving into one another.","relation":"Elyra & Eryx · The Unresolved Equation","tags":["THE KEEPERS","ETERNAL SHIFT","ALIGNMENT"]},{"code":"VA—024","title":"Mr. Satpam Margin","date":"CHARACTER DOSSIER","keeper":"THE ARCHIVE GUARD","stage":"CANONICAL RECORD","primary":"assets/curated/h02-satpam-margin.webp","images":["assets/curated/h02-satpam-margin.webp"],"note":"Keeper of breathing room, suspicious of runaway typography, and sworn guardian of every margin that tried to escape.","relation":"The Archive · curator mythology","tags":["MARGIN","CURATOR","HEDGEHOG"]},{"code":"VA—025","title":"The Hedgehog & The Bunny","date":"MASTER CHRONICLE","keeper":"SHARED MYTHOLOGY","stage":"07 FRAGMENTS","primary":"assets/curated/h03-editorial.webp","images":["assets/curated/h03-editorial.webp","assets/curated/h03-film-poster.webp","assets/curated/h03-late-night-carbs.webp","assets/curated/h03-eryx-vs-elyra.webp","assets/curated/h03-archive-search.webp","assets/curated/h03-inside-echo.webp","assets/curated/h03-scale-love.webp"],"note":"Seven fragments trace a mythology born from late-night design battles, music, food, teasing, and the stubborn act of building a world together.","relation":"The Hedgehog & The Bunny · master chronicle","tags":["SOFT STOICISM","BATTLE DESIGN","SHARED WORLD"]}]}];

let activeCategory = 0;
let activeCase = 0;
let activeLayer = "artwork";

const cabinet = document.getElementById("archive-cabinet");
const footer = document.getElementById("archive-footer");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

function current() {
  return categories[activeCategory].items[activeCase];
}

function globalIndex(item) {
  return categories.flatMap((category) => category.items).findIndex((entry) => entry.code === item.code);
}

function openLightbox(image) {
  const item = current();
  lightboxImage.src = image;
  lightboxCaption.textContent = `${item.code} · ${item.title}`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

function render() {
  const category = categories[activeCategory];
  const item = current();
  const refinement = dossierLayers[item.code]?.refinement;
  if (activeLayer === "refinement" && !refinement) activeLayer = "artwork";
  cabinet.className = `cabinet theme-${category.tone}`;

  const categoryTabs = categories.map((entry, index) => `
    <button type="button" class="case-tab tab-${entry.tone} ${index === activeCategory ? "active" : ""}" data-category="${index}" ${index === activeCategory ? 'aria-current="page"' : ""}>
      <span class="tab-code">0${index + 1}</span>
      <span class="tab-title">${entry.tab}</span>
      <span class="tab-line"></span>
      <small>${String(entry.items.length).padStart(2, "0")} DOSSIERS</small>
    </button>`).join("");

  const indexButtons = category.items.map((entry, index) => `
    <button type="button" data-case="${index}" class="${index === activeCase ? "active" : ""}" ${index === activeCase ? 'aria-current="true"' : ""}>
      <span>${entry.code.replace("VA—", "")}</span><b>${entry.title}</b>
    </button>`).join("");

  const layerTabs = ["artwork", ...(refinement ? ["refinement"] : [])].map((name) => `
    <button type="button" role="tab" data-layer="${name}" aria-selected="${activeLayer === name}">${name}</button>`).join("");

  const artworkPanel = `
    <div class="layer-panel contact-sheet">
      <p class="micro-label">SELECTED FRAMES · ${String(item.images.length).padStart(2, "0")}</p>
      <div class="thumb-grid">${item.images.map((image, index) => `
        <button type="button" data-image="${image}" aria-label="Open selected frame ${index + 1}">
          <img src="${image}" alt=""><span>0${index + 1}</span>
        </button>`).join("")}
      </div>
      <p class="sheet-caption">Contact sheet / surviving visual fragments</p>
    </div>`;

  const refinementPanel = `
    <div class="layer-panel refinement-panel">
      <p class="micro-label">REFINEMENT LOG</p>
      <ol>${(refinement || []).map((entry, index) => `<li><span>0${index + 1}</span><p>${entry}</p></li>`).join("")}</ol>
    </div>`;

  cabinet.innerHTML = `
    <nav class="case-tabs" aria-label="Archive classifications">${categoryTabs}</nav>
    <nav class="dossier-index" aria-label="${category.tab} dossier index">
      <div class="index-heading"><span>${category.tab}</span><small>${category.descriptor}</small></div>
      <div class="index-list">${indexButtons}</div>
    </nav>
    <article class="case-file">
      <aside class="file-spine" aria-hidden="true"><span>${item.code}</span><b>VISUAL STUDIES</b><small>TYPE · MEMORY / IMAGE</small></aside>
      <div class="case-content">
        <header class="case-meta">
          <div><span>${item.keeper}</span><h2>${item.title}</h2></div>
          <dl><div><dt>CASE</dt><dd>${item.code}</dd></div><div><dt>DATE</dt><dd>${item.date}</dd></div><div><dt>STATUS</dt><dd>${item.stage}</dd></div></dl>
        </header>
        <div class="worktable">
          <div class="artwork-stack">
            <button class="primary-art" type="button" data-image="${item.primary}" aria-label="Enlarge ${item.title}">
              <img src="${item.primary}" alt="${item.title} archive artwork"><span>OPEN FULL FRAME ↗</span>
            </button>
            <div class="vellum vellum-one" aria-hidden="true"><span>${item.code} / COMPOSITION AXIS</span></div>
            <div class="vellum vellum-two" aria-hidden="true"><span>LIGHT / BALANCE / MEMORY</span></div>
          </div>
          <div class="archive-details">
            <div class="layer-tabs" role="tablist" aria-label="Archive layers">${layerTabs}</div>
            ${activeLayer === "refinement" ? refinementPanel : artworkPanel}
          </div>
        </div>
        <footer class="archive-note">
          <div><span class="micro-label">ARCHIVE NOTE</span><p>${item.note}</p></div>
          <div><span class="micro-label">CONNECTED FREQUENCY</span><p>${item.relation}</p><ul>${item.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul></div>
        </footer>
      </div>
    </article>`;

  const total = categories.reduce((sum, entry) => sum + entry.items.length, 0);
  footer.innerHTML = `<span>CASE ${String(globalIndex(item) + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span><p>Use ← → to move within this classification</p><span>THE ARCHIVE IS STILL BECOMING</span>`;

  cabinet.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
    activeCategory = Number(button.dataset.category);
    activeCase = 0;
    activeLayer = "artwork";
    render();
  }));
  cabinet.querySelectorAll("[data-case]").forEach((button) => button.addEventListener("click", () => {
    activeCase = Number(button.dataset.case);
    activeLayer = "artwork";
    render();
  }));
  cabinet.querySelectorAll("[data-layer]").forEach((button) => button.addEventListener("click", () => {
    activeLayer = button.dataset.layer;
    render();
  }));
  cabinet.querySelectorAll("[data-image]").forEach((button) => button.addEventListener("click", () => openLightbox(button.dataset.image)));
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
lightboxImage.addEventListener("click", (event) => event.stopPropagation());
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
  if (!lightbox.hidden) return;
  if (event.key === "ArrowRight") {
    activeCase = (activeCase + 1) % categories[activeCategory].items.length;
    activeLayer = "artwork";
    render();
  }
  if (event.key === "ArrowLeft") {
    activeCase = (activeCase - 1 + categories[activeCategory].items.length) % categories[activeCategory].items.length;
    activeLayer = "artwork";
    render();
  }
});

render();
