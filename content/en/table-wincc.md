---
title: "WinCC Alarm and Archive Configuration"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/table-wincc.md)

This page provides the workbook publication copy and selected-column previews. Original filename: `WinCC报警表.xlsx`. Source: [S14](sources.md#s14).

[Download Excel publication copy](../tables/wincc-alarm-archive.xlsx) · [Workbook directory](tables.md) · [Related case](wincc.md)

## Document Status

The workbook records equipment, I/O or HMI configuration. It has not been reconciled against both current PLC variants and is not designated as-built or runtime acceptance documentation. Worksheets, formulas, saved values and formatting are preserved; author metadata uses the public handle 无空, and local-save-path metadata is removed where present. Historical file-property dates do not establish the project start date.

## Online Preview

Previews extract selected columns with source row numbers, retaining original Chinese content and tag identifiers. Formulas are not recalculated. Stored values are shown; formulas without stored values appear as formula text. Merged cells are not filled automatically. The Excel file remains authoritative for complete columns, formatting and formulas. Letters in headings identify source columns.

### 报警

| Source row | A | B | H | I | L |
| --- | --- | --- | --- | --- | --- |
| 1 | 100000 | S01_AI_CUR_Q_ALM_LL | 错误 | 报警 | S01 电流低低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 2 | 100001 | S01_AI_CUR_Q_ALM_HH | 错误 | 报警 | S01 电流高高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 3 | 100002 | S02_AI_CUR_Q_ALM_LL | 错误 | 报警 | S02 电流低低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 4 | 100003 | S02_AI_CUR_Q_ALM_HH | 错误 | 报警 | S02 电流高高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 5 | 100004 | S03_AI_CUR_Q_ALM_LL | 错误 | 报警 | S03 电流低低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 6 | 100005 | S03_AI_CUR_Q_ALM_HH | 错误 | 报警 | S03 电流高高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 7 | 100006 | T01_AI_TEMP_Q_ALM_LL | 错误 | 报警 | T01 温度低低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 8 | 100007 | T01_AI_TEMP_Q_ALM_HH | 错误 | 报警 | T01 温度高高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 9 | 100008 | A01_Q_CL | 错误 | 报警 | A01满料 |
| 10 | 100009 | A02_Q_CL | 错误 | 报警 | A02满料 |
| 11 | 100010 | A03_Q_CL | 错误 | 报警 | A03满料 |

### 警告

| Source row | A | B | H | I | L |
| --- | --- | --- | --- | --- | --- |
| 1 | 110000 | S01_AI_CUR_Q_ALM_L | 错误 | 警告 | S01 电流低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 2 | 110001 | S01_AI_CUR_Q_ALM_H | 错误 | 警告 | S01 电流高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 3 | 110002 | S02_AI_CUR_Q_ALM_L | 错误 | 警告 | S02 电流低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 4 | 110003 | S02_AI_CUR_Q_ALM_H | 错误 | 警告 | S02 电流高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 5 | 110004 | S03_AI_CUR_Q_ALM_L | 错误 | 警告 | S03 电流低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 6 | 110005 | S03_AI_CUR_Q_ALM_H | 错误 | 警告 | S03 电流高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 7 | 110006 | T01_AI_TEMP_Q_ALM_L | 错误 | 警告 | T01 温度低限报警 设定值： @1%.2f@        实际值：@2%.2f@  |
| 8 | 110007 | T01_AI_TEMP_Q_ALM_H | 错误 | 警告 | T01 温度高限报警 设定值： @1%.2f@        实际值：@2%.2f@  |

### 故障

| Source row | A | B | H | I | L |
| --- | --- | --- | --- | --- | --- |
| 1 | 120000 | F01_Q_Alarm | 错误 | 故障 | F01运行故障 |
| 2 | 120001 | S01_Q_Alarm | 错误 | 故障 | S01运行故障 |
| 3 | 120002 | S02_Q_Alarm | 错误 | 故障 | S02运行故障 |
| 4 | 120003 | S03_Q_Alarm | 错误 | 故障 | S03运行故障 |
| 5 | 120004 | T01_Q_Alarm | 错误 | 故障 | T01运行故障 |
| 6 | 120005 | A01_Q_CL | 错误 | 故障 | A01满料 |

### 归档变量-AI

| Source row | A | B | C | F | J | L |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | S01_AI_CUR_Q_V | 模拟量 | S01_AI_CUR_Q_V | 周期 - 连续 | 1 second | 1 second |
| 2 | S02_AI_CUR_Q_V | 模拟量 | S02_AI_CUR_Q_V | 周期 - 连续 | 1 second | 1 second |
| 3 | S03_AI_CUR_Q_V | 模拟量 | S03_AI_CUR_Q_V | 周期 - 连续 | 1 second | 1 second |
| 4 | T01_AI_TEMP_Q_V | 模拟量 | T01_AI_TEMP_Q_V | 周期 - 连续 | 1 second | 1 second |

[Document relationship and verification scope](evidence.md#e05)
