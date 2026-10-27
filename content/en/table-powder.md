---
title: "Powder Equipment and I/O Documentation"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/table-powder.md)

This page provides the workbook publication copy and selected-column previews. Original filename: `001_点位表和设备清单表.xlsx`. Source: [S14](sources.md#s14).

[Download Excel publication copy](../tables/powder-equipment-io.xlsx) · [Workbook directory](tables.md) · [Related case](powder.md)

## Document Status

The workbook records equipment, I/O or HMI configuration. It has not been reconciled against both current PLC variants and is not designated as-built or runtime acceptance documentation. Worksheets, formulas, saved values and formatting are preserved; author metadata uses the public handle 无空, and local-save-path metadata is removed where present. Historical file-property dates do not establish the project start date.

## Online Preview

Previews extract selected columns with source row numbers, retaining original Chinese content and tag identifiers. Formulas are not recalculated. Stored values are shown; formulas without stored values appear as formula text. Merged cells are not filled automatically. The Excel file remains authoritative for complete columns, formatting and formulas. Letters in headings identify source columns.

### 设备清单

| Source row | E · Identifier | C · Original description | F · DI | G · DO | H · AI | I · AQ |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | F01 | 集尘风机 | 1 | 1 |  |  |
| 3 | S01 | 螺旋输送机 | 2 | 1 |  |  |
| 4 | S02 | 螺旋输送机 | 2 | 1 |  |  |
| 5 | S03 | 螺旋输送机 | 2 | 1 |  |  |
| 6 | T01 | 提升机 | 2 | 1 |  |  |
| 7 | C01 | 分配器 | 4 | 1 |  |  |
| 8 | A01 | 料仓 | 3 |  |  |  |
| 9 | A02 | 料仓 | 3 |  |  |  |
| 10 | A03 | 料仓 | 3 |  |  |  |

### 点位表

| Source row | Signal group | E · Identifier | C · Original description | F · Function | G · Tag | I · Address |
| --- | --- | --- | --- | --- | --- | --- |
| 3 | DI | F01 | 集尘风机 | Running | F01_Running | I0.0 |
| 4 | DI | S01 | 螺旋输送机 | Running | S01_Running | I0.1 |
| 5 | DI | S01 | 螺旋输送机 | Block | S01_Block | I0.2 |
| 6 | DI | S02 | 螺旋输送机 | Running | S02_Running | I0.3 |
| 7 | DI | S02 | 螺旋输送机 | Block | S02_Block | I0.4 |
| 8 | DI | S03 | 螺旋输送机 | Running | S03_Running | I0.5 |
| 9 | DI | S03 | 螺旋输送机 | Block | S03_Block | I0.6 |
| 10 | DI | T01 | 提升机 | Running | T01_Running | I0.7 |
| 11 | DI | T01 | 提升机 | Block | T01_Block | I1.0 |
| 12 | DI | C01 | 分配器 | Sel_A01 | C01_Sel_A01 | I1.1 |
| 13 | DI | C01 | 分配器 | Sel_A02 | C01_Sel_A02 | I1.2 |
| 14 | DI | C01 | 分配器 | Sel_A03 | C01_Sel_A03 | I1.3 |
| 15 | DI | C01 | 分配器 | Running | C01_Running | I1.4 |
| 16 | DI | A01 | 料仓 | Sel_Btn | A01_Sel_Btn | I1.5 |
| 17 | DI | A01 | 料仓 | Sel_HighLv | A01_Sel_HighLv | I1.6 |
| 18 | DI | A01 | 料仓 | Sel_LowLv | A01_Sel_LowLv | I1.7 |
| 19 | DI | A02 | 料仓 | Sel_Btn | A02_Sel_Btn | I2.0 |
| 20 | DI | A02 | 料仓 | Sel_HighLv | A02_Sel_HighLv | I2.1 |
| 21 | DI | A02 | 料仓 | Sel_LowLv | A02_Sel_LowLv | I2.2 |
| 22 | DI | A03 | 料仓 | Sel_Btn | A03_Sel_Btn | I2.3 |
| 23 | DI | A03 | 料仓 | Sel_HighLv | A03_Sel_HighLv | I2.4 |
| 24 | DI | A03 | 料仓 | Sel_LowLv | A03_Sel_LowLv | I2.5 |
| 29 | DO | F01 | 集尘风机 | Run | F01_Run | Q0.0 |
| 30 | DO | S01 | 螺旋输送机 | Run | S01_Run | Q0.1 |
| 31 | DO | S02 | 螺旋输送机 | Run | S02_Run | Q0.2 |
| 32 | DO | S03 | 螺旋输送机 | Run | S03_Run | Q0.3 |
| 33 | DO | T01 | 提升机 | Run | T01_Run | Q0.4 |
| 34 | DO | C01 | 分配器 | Run | C01_Run | Q0.5 |

[Document relationship and verification scope](evidence.md#e05)
