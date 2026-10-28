---
title: "无空 · PLC / WinCC Portfolio"
date: "2026-10-28"
lang: "en-US"
enableToc: true
---

<div class="portfolio-language"><a href="../index.md">简体中文 ↗</a></div>
<section class="portfolio-hero" aria-label="Portfolio introduction">
<p class="eyebrow">AUTOMATION · PERSONAL ENGINEERING PROJECT</p>
<h2>Powder conveying.<br>Control, built step by step.</h2>
<p class="hero-description">A PLC / WinCC practice project by 无空, developed from blank engineering projects: process analysis, control programming, HMI configuration and iterative debugging.</p>
<div class="hero-meta"><span>TIA Portal V16</span><span>WinCC Classic</span><span>Simulation + physical PLC</span></div>
<div class="hero-actions"><a class="portfolio-button" href="powder.md">Explore the project →</a><a class="portfolio-button secondary" href="#program-downloads">Download engineering files ↓</a></div>
</section>

<div class="section-heading"><h2 id="program-downloads">Engineering downloads</h2><a href="downloads.md">Versions & opening notes ↗</a></div>
<div class="program-grid">
<section class="program-card"><span class="card-index">01 / SIMULATION</span><h3>PLC · Simulation</h3><p>For simulated signals, control logic and WinCC integration.</p><span class="file-meta">ZIP · TIA Portal V16 · 1.1 MB</span><a class="download-link" href="../downloads/plc-simulation-v1.zip" download data-no-popover>Download project ↓</a></section>
<section class="program-card"><span class="card-index">02 / PHYSICAL PLC</span><h3>PLC · Physical</h3><p>For physical-PLC connections, variables and output-state checks.</p><span class="file-meta">ZIP · TIA Portal V16 · 1.2 MB</span><a class="download-link" href="../downloads/plc-physical-v1.zip" download data-no-popover>Download project ↓</a></section>
<section class="program-card"><span class="card-index">03 / HMI ENGINEERING</span><h3>WinCC · Full project</h3><p>Original screens, scripts, configuration and project databases.</p><span class="file-meta">RAR · WinCC Classic · 54.8 MB</span><a class="download-link" href="../downloads/wincc-project-20260918.rar" download data-no-popover>Download project ↓</a></section>
</div>
<nav class="supporting-links" aria-label="Supporting documents"><span>Supporting files</span><a href="../tables/powder-equipment-io.xlsx" download data-no-popover>Equipment & I/O table</a><a href="../downloads/process-understanding.txt" download data-no-popover>Original process note</a><a href="../downloads/powder-process.png" download data-no-popover>Process diagram</a></nav>

<figure class="process-figure"><a href="../downloads/powder-process.png" data-no-popover aria-label="View full-size process diagram"><img src="../downloads/powder-process.png" alt="Powder-conveying process: F01, S01–S03, T01, C01 and A01–A03" width="1742" height="976" loading="eager"></a><figcaption>Process reference supplied by the author · Open image for full-size labels.</figcaption></figure>

## Explore the implementation

<div class="topic-grid">
<a class="topic-card" href="powder.md"><strong>Process & control structure ↗</strong><span>Equipment coordination, automatic sequencing and the S01 signal path.</span></a>
<a class="topic-card" href="wincc.md"><strong>HMI configuration & popup reuse ↗</strong><span>Modular screens, tag prefixes and shared device popups.</span></a>
<a class="topic-card" href="debug-qv.md"><strong>Variable-display fault analysis ↗</strong><span>Tracing values, bindings and display formats.</span></a>
<a class="topic-card" href="debug-vbs.md"><strong>Script-interruption diagnosis ↗</strong><span>Narrowing failures with checkpoints and error handling.</span></a>
</div>

## Personal responsibilities

<ul class="contribution-list"><li>PLC project creation and programming: reusable control conditions and equipment coordination.</li><li>WinCC screens and scripts: main and system screens and device popups built progressively from blank screens.</li><li>Engineering documentation: equipment, I/O, alarm and archive-configuration tables.</li><li>Debugging and revision: simulation integration and scoped physical-PLC variable, output-LED and HMI checks.</li></ul>

<aside class="scope-note"><strong>Verification scope</strong><p>Physical PLC outputs were checked without external loads. Download integrity checks do not establish compilation, commissioning or full-system acceptance for these exact files.</p><a href="evidence.md">Evidence & scope →</a> · <a href="sources.md#s15">Construction statement</a></aside>

<p class="portfolio-footnote"><a href="knowledge.md">Technical concepts</a> · <a href="tables.md">Workbook previews</a> · <a href="wiring.md">Wiring practice</a> · <a href="learning.md">Learning progress</a> · <a href="sources.md">Sources & attribution</a><br>Chinese and English pages are linked; sidebar backlinks connect cases, concepts and evidence. · 2026-10-28</p>
