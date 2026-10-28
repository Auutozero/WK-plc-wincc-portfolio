---
title: "Engineering Downloads and Opening Notes"
date: "2026-10-28"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/downloads.md)

Files supplied for reviewing the author’s powder-conveying project. PLC variants are separate engineering projects; the WinCC file is the complete original archive.

## Programs and supporting files

| File | Format / size | Download |
| --- | --- | --- |
| PLC simulation | ZIP · 1.07 MB | [Download](../downloads/plc-simulation-v1.zip) |
| PLC physical | ZIP · 1.16 MB | [Download](../downloads/plc-physical-v1.zip) |
| Complete WinCC project | RAR · 54.79 MB | [Download](../downloads/wincc-project-20260918.rar) |
| Equipment and I/O workbook | XLSX · 0.01 MB | [Download](../tables/powder-equipment-io.xlsx) |
| Original process-understanding note | TXT · 0.00 MB | [Download](../downloads/process-understanding.txt) |
| Process reference diagram | PNG · 0.38 MB | [Download](../downloads/powder-process.png) |

## Opening the projects

- **PLC:** use TIA Portal V16. Extract the ZIP first, then open its root `.ap16` project. Each ZIP preserves the current root project and associated files; the nested `2026.6.21` historical project is excluded. System and Vci data are retained. The ZIP is a folder copy, not a TIA-generated `.zap16` archive.
- **WinCC:** extract the complete RAR and open it in a compatible WinCC Classic environment. The author’s previous environment was V7.5 SP2; compatibility and restoration of this exact package have not been retested. The original archive includes engineering and Runtime databases, logs, and computer-specific configuration. Environment paths or machine associations may require adjustment.
- **Workbook:** the existing public XLSX preserves worksheet contents, formulas and formatting; author metadata uses 无空.
- **Process note:** the TXT download preserves the original author wording. The [process-reading page](process.md) presents the same process in formal prose.

## Version identification

The simulation descriptor is named `001_Powder_Conveying_System_Simmod_1.0.ap16`, with internal name `001_Powder_Conveying_System_2026.10.24`. The physical descriptor is `001_Powder_Conveying_System_realmod_1.0.ap16`. Both declare compatibility version `16.0.0.0`.

The WinCC archive retains the original `20260918` filename label. Its supplied file was last modified on 2026-10-27 and inspected on 2026-10-28; the filename alone does not prove the dates of all internal changes or compatibility with either PLC variant.

## Publication and verification

The author confirmed this is a private learning project, with practice-only login accounts and passwords not reused elsewhere. The complete WinCC archive is preserved unchanged, including its computer names, historical asset paths and runtime records. This is an original engineering archive; it is not represented as a fully anonymized export.

ZIP integrity and per-file hashes were checked. The full RAR was read through the archive reader and its copy hash verified. TIA/WinCC reopening, compilation and Runtime testing were not performed on these exact download copies. Physical-PLC experience remains limited to checks without external loads, as described in the [evidence index](evidence.md).

## SHA-256

The checksums identify these exact download files; they are not runtime acceptance results.

- `plc-simulation-v1.zip`

  `2612b1e6fd2a9e837c9e40c37f8b0b7376ea68a520522dc24f39577499c89e1d`

- `plc-physical-v1.zip`

  `d05141fc229e9dd649b7e0366f77e3eae225b4bc2ce3ea881a331b0f7c4320ae`

- `wincc-project-20260918.rar`

  `1fb68d084b15928f7bcb413cfabf47a738da3314376f8fb5f73abecadf90d105`

- `process-understanding.txt`

  `e214a0a5024b0332a2ebbbdb0e8022094ecfc3574f62341c8adc11fa0ef2698b`

- `powder-process.png`

  `bcd32b4a15548bb5802030b140dddc3b52d196ba513d888081eefab8b1cc054c`

- `powder-equipment-io.xlsx`

  `f0925bb2d0ee97bdc5f401ba0f92471274877ff35f209df38f813b46e98c3b57`

Related: [Home](index.md) · [Project](powder.md) · [PLC variants](versions.md) · [Sources](sources.md#s16)
