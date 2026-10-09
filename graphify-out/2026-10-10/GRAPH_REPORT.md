# Graph Report - marjan-graduation-festival-main  (2026-10-10)

## Corpus Check
- 2 files · ~159,766 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 68 nodes · 130 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- main.js
- debug-collector.js
- renderApp
- logUiEvent
- applyViewTemplate
- initHomeMotion
- initThemeToggle
- initGlobalMotion
- formatArg

## God Nodes (most connected - your core abstractions)
1. `renderApp()` - 20 edges
2. `attachGlobalEvents()` - 8 edges
3. `initHomeMotion()` - 7 edges
4. `logUiEvent()` - 5 edges
5. `installUiEventListeners()` - 5 edges
6. `initNvHeader()` - 5 edges
7. `initGalleryLightbox()` - 5 edges
8. `sanitizeValue()` - 4 edges
9. `pruneBuffer()` - 4 edges
10. `switchView()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `renderApp()` --calls--> `attachGlobalEvents()`  [EXTRACTED]
  src/main.js → src/main.js  _Bridges community 1 → community 3_
- `renderApp()` --calls--> `fireConfetti()`  [EXTRACTED]
  src/main.js → src/main.js  _Bridges community 1 → community 8_
- `renderApp()` --calls--> `initGlobalMotion()`  [EXTRACTED]
  src/main.js → src/main.js  _Bridges community 1 → community 7_
- `renderApp()` --calls--> `initHomeMotion()`  [EXTRACTED]
  src/main.js → src/main.js  _Bridges community 1 → community 4_
- `renderApp()` --calls--> `successViewTemplate()`  [EXTRACTED]
  src/main.js → src/main.js  _Bridges community 1 → community 0_

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 0 - "main.js"
Cohesion: 0.20
Nodes (9): app, BOT_FAQS, confettiParticles, FAQS, formatIQD(), GALLERY_PHOTOS, ICONS, successViewTemplate() (+1 more)

### Community 1 - "debug-collector.js"
Cohesion: 0.15
Nodes (14): applyViewTemplate(), faqChatWidgetTemplate(), galleryLightboxTemplate(), homeViewTemplate(), initCountdown(), initInteractiveTracks(), initSchedule(), initSponsorsMotion() (+6 more)

### Community 2 - "renderApp"
Cohesion: 0.25
Nodes (14): compactText(), describeElement(), elText(), formatArg(), formatArgs(), getInputValueSafe(), installUiEventListeners(), isSensitiveField() (+6 more)

### Community 3 - "logUiEvent"
Cohesion: 0.36
Nodes (8): attachGlobalEvents(), closeMobileNav(), initNvHeader(), openFaqQuestion(), scrollToSection(), selectTrackAndScroll(), setupFaqChatEvents(), toggleFaqChat()

### Community 4 - "applyViewTemplate"
Cohesion: 0.40
Nodes (5): initGalleryStagger(), initHomeMotion(), initScrollReveal(), initStarCanvas(), initTiltCards()

### Community 5 - "initHomeMotion"
Cohesion: 0.50
Nodes (5): closeGalleryLightbox(), initGalleryLightbox(), openGalleryLightbox(), renderGalleryLightbox(), stepGalleryLightbox()

### Community 6 - "initThemeToggle"
Cohesion: 0.67
Nodes (3): applyTheme(), getPreferredTheme(), initThemeToggle()

### Community 7 - "initGlobalMotion"
Cohesion: 0.67
Nodes (3): initConfettiEngine(), initGlobalMotion(), initProgressBar()

## Knowledge Gaps
- **7 isolated node(s):** `app`, `ICONS`, `TRACKS`, `GALLERY_PHOTOS`, `FAQS` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `renderApp()` connect `debug-collector.js` to `main.js`, `logUiEvent`, `applyViewTemplate`, `initGlobalMotion`, `formatArg`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `attachGlobalEvents()` connect `logUiEvent` to `main.js`, `debug-collector.js`, `initThemeToggle`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `initHomeMotion()` connect `applyViewTemplate` to `main.js`, `debug-collector.js`, `initHomeMotion`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `app`, `ICONS`, `TRACKS` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._