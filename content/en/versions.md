---
title: "PLC Engineering Variants and Supporting Material"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/versions.md)

## Variant Purposes

On 2026-10-27, the PLC material was confirmed to contain simulation and field variants. Each is registered by intended use; nested historical projects are tracked separately. [S02](sources.md#s02)

| Item | Simulation variant | Field variant |
| --- | --- | --- |
| Directory identifier | `001_Powder_Conveying_System_Simmod_1.0` | `001_Powder_Conveying_System_realmod_1.0` |
| Intended use | Simulated signals and PLC/WinCC logic integration | Physical-PLC connection and field use |
| Recorded checks | Personal report of Sim operating with WinCC, not tied to current fingerprints | Variables, output LEDs and HMI states, without external loads |
| Details to confirm | Signal simulation, current blocks and instance calls | Physical I/O, wiring and differences between variants |

“Field variant” denotes purpose. Its verification scope is specified in [evidence E03](evidence.md#e03).

## File Identification

The following metadata was read from `.ap16` project-description XML. Fingerprints identify description files only, not complete engineering content, code differences or runtime acceptance.

| Variant | Description file | Internal project name | Compatibility |
| --- | --- | --- | --- |
| simulation | `001_Powder_Conveying_System_Simmod_1.0.ap16` | `001_Powder_Conveying_System_2026.10.24` | `16.0.0.0` |
| field | `001_Powder_Conveying_System_realmod_1.0.ap16` | `001_Powder_Conveying_System_realmod_1.0` | `16.0.0.0` |

## Relationship to Supporting Workbooks

The [powder equipment and I/O workbook](table-powder.md) is supporting project material. Its addresses have not been matched to the current mappings of both PLC variants; it is therefore not designated an as-built field I/O list. The [WinCC alarm and archive workbook](table-wincc.md) documents configuration rather than execution results.

## Historical Material and Future Engineering Release

Both PLC directories contain a historical `001_Powder_Conveying_System_2026.6.21` subproject, with an additional `old` directory. The historical WinCC archive `001_Powder_Conveying_System_20260918.rar` contains screens, runtime databases and logs. Its current project pairing remains unconfirmed. [S12](sources.md#s12)

A complete engineering release requires separate block, tag and hardware-configuration exports for each variant, with export dates and associated test results. A standalone `.ap16` description is not a complete program delivery.

Related: [powder case](powder.md) · [evidence](evidence.md) · [workbook directory](tables.md)

## Website downloads

The two PLC folder copies exclude nested historical projects while preserving associated files. The current original WinCC RAR is also available. These copies have not been natively reopened or run; see [engineering downloads](downloads.md).
