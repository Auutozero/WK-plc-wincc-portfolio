---
title: "粉料输送设备清单与点位表"
date: "2026-10-27"
lang: "zh-CN"
enableToc: true
---

[English](../en/table-powder.md)

本页提供配套工作簿下载及关键列预览。原文件名：`001_点位表和设备清单表.xlsx`。来源：[S14](sources.md#s14)。

[下载 Excel 发布副本](../tables/powder-equipment-io.xlsx) · [表格目录](tables.md) · [关联案例](powder.md)

## 资料性质

工作簿用于设备、点位或组态配置的记录，未按当前 PLC 两版本逐项复核，不作为现场竣工或运行验收资料。发布副本保留原工作表、公式、保存值与格式，仅处理发布署名及本机保存路径元数据。文件属性中的历史日期不作为实际项目起始日期。

## 在线预览

预览按源工作表行号提取关键列，保留中文内容与变量标识，未重算公式。表中为文件保存值；无保存值的公式直接显示公式文本。合并单元格不作自动填充，全部列、原始格式及公式以 Excel 文件为准。列标题中的字母表示源列号。

### 设备清单

| 源行 | E · 代号 | C · 中文名称 | F · DI | G · DO | H · AI | I · AQ |
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

| 源行 | 信号类别 | E · 代号 | C · 中文名称 | F · 功能 | G · 变量名 | I · 地址 |
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

[资料对应与验证范围](evidence.md#e05)
