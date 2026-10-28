---
title: "工程下载与打开说明"
date: "2026-10-28"
lang: "zh-CN"
enableToc: true
---

[English](../en/downloads.md)

以下资料用于查看本人粉料输送项目的工程实现。两个 PLC 版本分别提供工程副本；WinCC 提供本人确认可公开的原始完整工程包。

## 程序与配套资料

| 文件 | 格式／大小 | 下载 |
| --- | --- | --- |
| PLC 仿真版 | ZIP · 1.07 MB | [下载](../downloads/plc-simulation-v1.zip) |
| PLC 实体版 | ZIP · 1.16 MB | [下载](../downloads/plc-physical-v1.zip) |
| WinCC 完整工程 | RAR · 54.79 MB | [下载](../downloads/wincc-project-20260918.rar) |
| 设备清单与 I/O 点位表 | XLSX · 0.01 MB | [下载](../tables/powder-equipment-io.xlsx) |
| 本人工艺理解原文 | TXT · 0.00 MB | [下载](../downloads/process-understanding.txt) |
| 项目工艺参考图 | PNG · 0.38 MB | [下载](../downloads/powder-process.png) |

## 打开方式

- **PLC 工程**：使用 TIA Portal V16。先解压 ZIP，再打开根目录中的 `.ap16` 文件。每份 ZIP 保留当前主工程及关联文件，排除嵌套的 `2026.6.21` 旧工程；System、Vci 等数据予以保留。该 ZIP 为工程目录副本，并非 TIA 生成的 `.zap16` 归档。
- **WinCC 工程**：先完整解压 RAR，再使用兼容的 WinCC Classic 环境打开。本人此前使用的环境为 V7.5 SP2，本次未对当前包重新验证兼容性及工程恢复。原包包含工程与 Runtime 数据库、日志及与计算机有关的配置，打开时可能需要调整环境路径或计算机关联。
- **Excel 点位表**：使用既有公开副本，保留工作表内容、公式与格式，作者属性署名为“无空”。
- **工艺理解**：TXT 下载保留本人原文；[工艺理解页面](process.md)以书面语言说明同一流程。

## 版本识别

仿真版主工程描述文件为 `001_Powder_Conveying_System_Simmod_1.0.ap16`，内部工程名为 `001_Powder_Conveying_System_2026.10.24`。实体版主文件为 `001_Powder_Conveying_System_realmod_1.0.ap16`。两者均声明兼容版本 `16.0.0.0`。

WinCC 原包保留 `20260918` 文件名标识，所提供文件的修改日期为 2026-10-27，本次核查日期为 2026-10-28。文件名不能单独证明内部各项修改时间，也不能据此认定与两个 PLC 版本完全对应。

## 公开范围与验证说明

本人确认该项目为私人学习项目，工程登录账号仅用于练习，密码未在其他账户复用。WinCC 完整原包保持原样，其中保留计算机名、历史素材路径和运行记录；该下载属于原始工程档案，不标注为已完成全面匿名化的导出版本。

两份 ZIP 已完成档案完整性和逐文件哈希核对；RAR 已通过档案读取器全量读取并核对副本哈希。本次未对这些下载副本执行 TIA／WinCC 原生重开、编译及 Runtime 测试。既有实体 PLC 实践限于未接外设负载的检查，详见[证据索引](evidence.md)。

## SHA-256 校验值

以下指纹用于识别当前下载文件，不代表运行验收结果。

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

关联：[首页](../index.md) · [粉料主案例](powder.md) · [PLC 版本](versions.md) · [来源记录](sources.md#s16)
