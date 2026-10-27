---
title: "Pressure-Control Equipment and I/O Documentation"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/table-pressure.md)

This page provides the workbook publication copy and selected-column previews. Original filename: `002点位表和设备清单表.xlsx`. Source: [S14](sources.md#s14).

[Download Excel publication copy](../tables/pressure-equipment-io.xlsx) · [Workbook directory](tables.md) · [Related case](learning.md)

## Document Status

The workbook records equipment, I/O or HMI configuration. It has not been reconciled against both current PLC variants and is not designated as-built or runtime acceptance documentation. Worksheets, formulas, saved values and formatting are preserved; author metadata uses the public handle 无空, and local-save-path metadata is removed where present. Historical file-property dates do not establish the project start date.

## Online Preview

Previews extract selected columns with source row numbers, retaining original Chinese content and tag identifiers. Formulas are not recalculated. Stored values are shown; formulas without stored values appear as formula text. Merged cells are not filled automatically. The Excel file remains authoritative for complete columns, formatting and formulas. Letters in headings identify source columns.

### 设备清单

| Source row | E · Identifier | C · Original description | F · DI | G · DO | H · AI | I · AQ |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | C01 | 变频风机 |  |  | 1 | 1 |
| 3 | V01 | 阀门 | 2 | 1 |  |  |
| 4 | V02 | 阀门 | 2 | 1 |  |  |
| 5 | V03 | 阀门 | 2 | 1 |  |  |
| 6 | P01 | 压力计 |  |  | 1 |  |

### 点位表

| Source row | Signal group | E · Identifier | C · Original description | F · Function | G · Tag | I · Address |
| --- | --- | --- | --- | --- | --- | --- |
| 3 | DI | V01 | 阀门 | FB_OP | V01_FB_OP | I0.0 |
| 4 | DI | V01 | 阀门 | FB_CL | V01_FB_CL | I0.1 |
| 5 | DI | V02 | 阀门 | FB_OP | V02_FB_OP | I0.2 |
| 6 | DI | V02 | 阀门 | FB_CL | V02_FB_CL | I0.3 |
| 7 | DI | V03 | 阀门 | FB_OP | V03_FB_OP | I0.4 |
| 8 | DI | V03 | 阀门 | FB_CL | V03_FB_CL | I0.5 |
| 12 | DO | V01 | 阀门 | Run | V01_Run | Q0.0 |
| 13 | DO | V02 | 阀门 | Run | V02_Run | Q0.1 |
| 14 | DO | V03 | 阀门 | Run | V03_Run | Q0.2 |
| 18 | AI | P01 | 压力计 | Press_Act | P01_Press_Act | IW100 |
| 19 | AI | C01 | 变频风机 | Curr_Act | C01_Curr_Act | IW102 |
| 23 | AQ | C01 | 变频风机 | Freq_Run | C01_Freq_Run | QW100 |

[Document relationship and verification scope](evidence.md#e05)
