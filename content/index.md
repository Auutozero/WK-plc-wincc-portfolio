---
title: "无空 · PLC / WinCC 技术实践"
date: "2026-10-28"
lang: "zh-CN"
enableToc: true
---

<div class="portfolio-language"><a href="en/index.md">English ↗</a></div>
<section class="portfolio-hero" aria-label="作品集介绍">
<p class="eyebrow">AUTOMATION · PERSONAL ENGINEERING PROJECT</p>
<h2>粉料输送系统<br>PLC / WinCC 控制实践</h2>
<p class="hero-description">由无空从空白工程逐步搭建，围绕工艺分析、控制编程、上位机组态与调试记录，呈现一项自动化项目的实现过程。</p>
<div class="hero-meta"><span>TIA Portal V16</span><span>WinCC Classic</span><span>仿真联调 · 实体 PLC 检查</span></div>
<div class="hero-actions"><a class="portfolio-button" href="zh/powder.md">查看项目说明 →</a><a class="portfolio-button secondary" href="#program-downloads">获取工程程序 ↓</a></div>
</section>

<div class="section-heading"><h2 id="program-downloads">工程程序下载</h2><a href="zh/downloads.md">版本与打开说明 ↗</a></div>
<div class="program-grid">
<section class="program-card"><span class="card-index">01 / SIMULATION</span><h3>PLC 仿真版</h3><p>用于模拟信号、控制逻辑与 WinCC 联调。</p><span class="file-meta">ZIP · TIA Portal V16 · 1.1 MB</span><a class="download-link" href="downloads/plc-simulation-v1.zip" download data-no-popover>下载工程 ↓</a></section>
<section class="program-card"><span class="card-index">02 / PHYSICAL PLC</span><h3>PLC 实体版</h3><p>用于实体 PLC 连接及变量、输出状态检查。</p><span class="file-meta">ZIP · TIA Portal V16 · 1.2 MB</span><a class="download-link" href="downloads/plc-physical-v1.zip" download data-no-popover>下载工程 ↓</a></section>
<section class="program-card"><span class="card-index">03 / HMI ENGINEERING</span><h3>WinCC 完整工程</h3><p>保留原始画面、脚本、组态与项目数据库。</p><span class="file-meta">RAR · WinCC Classic · 54.8 MB</span><a class="download-link" href="downloads/wincc-project-20260918.rar" download data-no-popover>下载工程 ↓</a></section>
</div>
<nav class="supporting-links" aria-label="配套资料"><span>配套资料</span><a href="tables/powder-equipment-io.xlsx" download data-no-popover>设备清单与点位表</a><a href="downloads/process-understanding.txt" download data-no-popover>工艺理解原文</a><a href="downloads/powder-process.png" download data-no-popover>流程图原图</a></nav>

<figure class="process-figure"><a href="downloads/powder-process.png" data-no-popover aria-label="查看完整流程图"><img src="downloads/powder-process.png" alt="粉料输送系统流程图：F01风机、S01至S03螺旋输送机、T01提升机、C01分配器与三个料仓" width="1742" height="976" loading="eager"></a><figcaption>项目工艺参考图 · 点击查看原图；控制实现与本人承担工作见项目说明。</figcaption></figure>

## 项目实现与技术专题

<div class="topic-grid">
<a class="topic-card" href="zh/powder.md"><strong>控制结构与工艺逻辑 ↗</strong><span>设备关系、总体自动逻辑及 S01 信号链路。</span></a>
<a class="topic-card" href="zh/wincc.md"><strong>WinCC 组态与弹窗复用 ↗</strong><span>模块化画面、变量前缀和通用设备弹窗。</span></a>
<a class="topic-card" href="zh/debug-qv.md"><strong>变量显示异常分析 ↗</strong><span>从变量值、绑定关系与数据格式逐步定位问题。</span></a>
<a class="topic-card" href="zh/debug-vbs.md"><strong>脚本执行中断排查 ↗</strong><span>使用检查点与错误捕获缩小故障范围。</span></a>
</div>

## 本人承担工作

<ul class="contribution-list"><li>PLC 工程创建与程序编写：封装重复控制条件，组织设备运行与启停关系。</li><li>WinCC 画面与脚本实现：从空白画面逐步搭建主界面、系统页与设备弹窗。</li><li>配套资料编制：设备清单、I/O 点位以及报警、归档配置表。</li><li>调试与修订：仿真联调，以及有限实体 PLC 变量、输出指示灯与上位机状态检查。</li></ul>

<aside class="scope-note"><strong>验证范围</strong><p>实体 PLC 输出未接外设负载。此次下载文件核对不代表已对当前文件完成原生编译、带负载联调或完整系统验收。</p><a href="zh/evidence.md">查看验证证据 →</a> · <a href="zh/sources.md#s15">项目构建归属</a></aside>

<p class="portfolio-footnote"><a href="zh/knowledge.md">技术概念</a> · <a href="zh/tables.md">表格预览</a> · <a href="zh/wiring.md">接线实践</a> · <a href="zh/learning.md">学习进展</a> · <a href="zh/sources.md">来源与贡献说明</a><br>中英文页面逐页对应，侧栏双链关联案例、概念与证据。 · 2026-10-28</p>
