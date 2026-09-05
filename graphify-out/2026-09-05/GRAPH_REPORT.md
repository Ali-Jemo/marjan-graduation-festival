# Graph Report - marjan-graduation-festival  (2026-09-05)

## Corpus Check
- 2 files · ~153,807 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 61 nodes · 115 edges · 13 communities (8 shown, 5 thin omitted)
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
- fireConfetti
- homeViewTemplate
- homeViewTemplate

## God Nodes (most connected - your core abstractions)
1. `renderApp()` - 19 edges
2. `attachGlobalEvents()` - 8 edges
3. `logUiEvent()` - 5 edges
4. `installUiEventListeners()` - 5 edges
5. `initNvHeader()` - 5 edges
6. `initHomeMotion()` - 5 edges
7. `sanitizeValue()` - 4 edges
8. `pruneBuffer()` - 4 edges
9. `switchView()` - 4 edges
10. `scrollToSection()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `formatArg()` --calls--> `sanitizeValue()`  [EXTRACTED]
  client/public/__manus__/debug-collector.js → client/public/__manus__/debug-collector.js  _Bridges community 3 → community 8_
- `installUiEventListeners()` --calls--> `logUiEvent()`  [EXTRACTED]
  client/public/__manus__/debug-collector.js → client/public/__manus__/debug-collector.js  _Bridges community 3 → community 1_
- `renderApp()` --calls--> `attachGlobalEvents()`  [EXTRACTED]
  client/src/main.js → client/src/main.js  _Bridges community 2 → community 5_
- `renderApp()` --calls--> `fireConfetti()`  [EXTRACTED]
  client/src/main.js → client/src/main.js  _Bridges community 2 → community 9_
- `renderApp()` --calls--> `homeViewTemplate()`  [EXTRACTED]
  client/src/main.js → client/src/main.js  _Bridges community 2 → community 12_

## Import Cycles
- None detected.

## Communities (13 total, 5 thin omitted)

### Community 0 - "main.js"
Cohesion: 0.22
Nodes (7): app, BOT_FAQS, confettiParticles, FAQS, GALLERY_PHOTOS, ICONS, TRACKS

### Community 1 - "debug-collector.js"
Cohesion: 0.46
Nodes (7): compactText(), describeElement(), elText(), getInputValueSafe(), installUiEventListeners(), isSensitiveField(), shouldIgnoreTarget()

### Community 2 - "renderApp"
Cohesion: 0.18
Nodes (13): applyViewTemplate(), faqChatWidgetTemplate(), initCountdown(), initHomeMotion(), initInteractiveTracks(), initSchedule(), initScrollReveal(), initStarCanvas() (+5 more)

### Community 3 - "logUiEvent"
Cohesion: 0.47
Nodes (5): logUiEvent(), pruneBuffer(), reportLogs(), sanitizeValue(), tryParseJson()

### Community 4 - "applyViewTemplate"
Cohesion: 0.67
Nodes (3): applyTheme(), getPreferredTheme(), initThemeToggle()

### Community 5 - "initHomeMotion"
Cohesion: 0.36
Nodes (8): attachGlobalEvents(), closeMobileNav(), initNvHeader(), openFaqQuestion(), scrollToSection(), selectTrackAndScroll(), setupFaqChatEvents(), toggleFaqChat()

### Community 7 - "initGlobalMotion"
Cohesion: 0.67
Nodes (3): initConfettiEngine(), initGlobalMotion(), initProgressBar()

## Knowledge Gaps
- **7 isolated node(s):** `app`, `ICONS`, `TRACKS`, `GALLERY_PHOTOS`, `FAQS` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `renderApp()` connect `renderApp` to `main.js`, `initHomeMotion`, `initThemeToggle`, `initGlobalMotion`, `fireConfetti`, `homeViewTemplate`, `homeViewTemplate`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `attachGlobalEvents()` connect `initHomeMotion` to `main.js`, `renderApp`, `applyViewTemplate`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `logUiEvent()` connect `logUiEvent` to `debug-collector.js`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `app`, `ICONS`, `TRACKS` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._