---
title: "PLC 工程版本与配套资料"
date: "2026-10-27"
lang: "zh-CN"
enableToc: true
---

[English](../en/versions.md)

## 版本用途

本人于 2026-10-27 确认 PLC 工程包含模拟仿真版和现场版。两者按用途分别登记，历史嵌套工程另行记录。[S02](sources.md#s02)

| 项目 | 模拟仿真版 | 现场版 |
| --- | --- | --- |
| 目录标识 | `001_Powder_Conveying_System_Simmod_1.0` | `001_Powder_Conveying_System_realmod_1.0` |
| 工程用途 | 模拟信号与 PLC／WinCC 逻辑联调 | 实体 PLC 连接与现场用途 |
| 已记录验证 | 本人反馈 Sim 与 WinCC 联调运行正常，未对应本次文件指纹 | 变量、输出指示灯及 WinCC 状态检查，未接外设负载 |
| 待核对内容 | 模拟信号来源、当前块与实例调用 | 物理 I/O、接线关系及两版本程序差异 |

“现场版”为用途名称，其验证范围以[证据 E03](evidence.md#e03)为准。

## 文件识别结果

下表来自 `.ap16` 项目描述 XML。文件指纹仅识别项目描述文件，不代表完整工程、程序差异或运行验收结果。

| 用途 | 描述文件名 | 内部项目名 | 兼容版本 |
| --- | --- | --- | --- |
| simulation | `001_Powder_Conveying_System_Simmod_1.0.ap16` | `001_Powder_Conveying_System_2026.10.24` | `16.0.0.0` |
| field | `001_Powder_Conveying_System_realmod_1.0.ap16` | `001_Powder_Conveying_System_realmod_1.0` | `16.0.0.0` |

## 表格与工程的对应关系

[粉料设备清单与点位表](table-powder.md)属于项目配套资料。本次未核对其地址与两个 PLC 工程的最新映射关系，因此不将表格标为现场竣工点表。WinCC 的[报警与归档表](table-wincc.md)用于展示配置内容，不替代运行记录。

## 历史工程与后续发布要求

两份 PLC 目录均包含 `001_Powder_Conveying_System_2026.6.21` 历史子工程，另有 `old` 目录。WinCC 历史包 `001_Powder_Conveying_System_20260918.rar` 含画面、运行数据库及日志，其当前配套关系尚待确认。[S12](sources.md#s12)

后续完整工程发布需分别导出两版本的程序块、变量表及硬件配置，记录导出时间并关联测试结果。单独 `.ap16` 描述文件不足以交付完整程序。

关联：[粉料主案例](powder.md) · [证据索引](evidence.md) · [表格资料目录](tables.md)

## 当前网站下载

本次两个工程目录各自排除嵌套旧工程后封装为 ZIP，原始关联文件予以保留；WinCC 提供本次指定的完整原始 RAR。下载副本尚未原生重开或运行，详见[工程下载与打开说明](downloads.md)。
