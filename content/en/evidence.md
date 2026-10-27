---
title: "Project Evidence and Verification Scope"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/evidence.md)

This index distinguishes process material, personal confirmation and outstanding evidence. Preparation did not include PLC execution, WinCC Runtime or new hardware tests.

<a id="e01"></a>
## E01 Numeric-Display Issue

Three screenshots document the PLC value, original mapping and revised setting. Personal feedback confirms that a value appeared in Runtime; a final success screenshot is unavailable. The calculated three-decimal value is not a final observed reading. See the [investigation](debug-qv.md). Source: [S06](sources.md#s06).

<a id="e02"></a>
## E02 Operation Script Interruption

Included material covers entry code, an early Runtime prompt and the suspect assignment area. Personal confirmation identifies prompt ⑥, the absence of ⑦/⑧, and the spelling issue. A 2026-10-12 follow-up confirms normal behavior after correction. The complete misspelling, post-fix audit screenshot and an executed Err-template record are unavailable. See the [investigation](debug-vbs.md). Sources: [S07](sources.md#s07), [S04](sources.md#s04).

<a id="e03"></a>
## E03 Physical-PLC Checks

| Item | Recorded scope |
| --- | --- |
| Communication and display | PC/physical-PLC communication and PLC values displayed in WinCC |
| Commands and states | Corresponding TIA variable, physical output-LED and HMI-state changes |
| Input conditions | Watch-table changes or forcing; physical input-button testing is not claimed |
| Output conditions | No external loads; motor or full-machine operation not verified |
| Evidence type | Existing interview record and reconfirmation on 2026-10-27; no paired recording from the same test |

Sources: [S04](sources.md#s04), [PLC variants](versions.md).

<a id="e04"></a>
## E04 Simulation and WinCC Progress

Personal records from 2026-10-24 and 2026-10-26 support reports of simulation and Sim/WinCC operation. These records are not linked to acceptance of the currently fingerprinted engineering files. Source: [S10](sources.md#s10).

<a id="e05"></a>
## E05 Supporting Workbooks

Three workbooks and summaries of eight worksheets cover equipment, I/O planning, alarms and archive-variable configuration. They are design/configuration material, not substitutes for wiring-continuity, runtime-alarm or control-performance tests. See the [workbook directory](tables.md).

## Asset Classification

Six original troubleshooting screenshots retain their existing content and are shared between language editions. Process and popup diagrams are redrawn illustrations. Workbook publication copies use 无空 as the author and remove local-save-path metadata where present, preserving worksheets, formulas, values and formatting. See [source and asset notes](sources.md#reuse).

Related: [powder case](powder.md) · [WinCC topic](wincc.md) · [wiring practice](wiring.md)
