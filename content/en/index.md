---
title: "English Portfolio"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../index.md)

Prepared for junior PLC / electrical-control roles, this portfolio documents process understanding, overall automatic logic, WinCC configuration, supporting engineering workbooks and fault analysis from a powder-conveying learning project.

## Portfolio Contents

| Area | Scope | Reference |
| --- | --- | --- |
| Powder-conveying control | Process equipment, control structure, personal contribution and the S01 signal path | [Project description](powder.md) |
| PLC variants | Simulation and field variants with their verification boundaries | [Variant documentation](versions.md) |
| WinCC configuration | Shared screens, tag prefixes and device-popup reuse | [Technical topic](wincc.md) |
| Fault analysis | Q_V display issue and interrupted Operation script | [Display issue](debug-qv.md), [script interruption](debug-vbs.md) |
| Engineering workbooks | Equipment, I/O, alarms and archive variables; three Excel files with online previews | [Workbook directory](tables.md) |
| Supporting practice | Training-board wiring, pressure-control and Modbus learning progress | [Wiring](wiring.md), [learning progress](learning.md) |

The WinCC topic belongs to the same powder-conveying project. Pressure-control and Modbus content is identified as source material and ongoing learning.

## Personal Responsibilities

The author built the project step by step from blank engineering projects, creating programs, screens, scripts and supporting workbooks, with iterative debugging and revision. [Construction statement](sources.md#s15)

- PLC project creation and control-program development, including repeated start conditions encapsulated in an FB and device coordination.
- Progressive construction of WinCC main, login and system screens and device popups from blank screens, with associated scripts and language switching.
- Preparation of equipment, I/O, alarm and archive-configuration tables linking devices, tags and configuration documents.
- Simulation work and scoped physical-PLC variable, output-LED and HMI-state checks.

Responsibilities and testing experience derive from recorded personal accounts. Physical outputs had no external loads; details appear in the [evidence index](evidence.md). Address and alarm tables are design/configuration documents, not as-built or runtime acceptance records.

## Documentation and Attribution

Cases, [technical concepts](knowledge.md), [workbooks](tables.md) and [verification evidence](evidence.md) use reciprocal relative links. Chinese and English pages correspond individually. Project construction and implementation, technical learning references and AI-assisted documentation are identified separately in the [source and attribution notes](sources.md).

This public edition contains technical documentation, workbooks and six original process screenshots. Complete TIA/WinCC projects are excluded. Prepared on 2026-10-27.
