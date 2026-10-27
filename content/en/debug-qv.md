---
title: "Fault Analysis: PLC Value Present with a Zero WinCC Display"
date: "2026-10-27"
lang: "en-US"
enableToc: true
---

[简体中文](../zh/debug-qv.md)

## Observed Condition

TIA monitoring showed `AI_SCALE.Q_V = 4.861835`, while the WinCC editor displayed `0.000`. The original dynamic dialog used an analog range configuration with a single “Other → 0” mapping. [S06](sources.md#s06)

![Recorded PLC-side Q_V value](../assets/qv-plc-value.png)

![Original dynamic range mapping](../assets/qv-original-mapping.png)

## Investigation and Corrective Actions

| Step | Action or observation | Assessment |
| --- | --- | --- |
| 1 | Confirm a PLC-side calculation result | Prioritize display configuration and observation environment |
| 2 | Retain `S01_AI_CUR_Q_V` and select Direct | Remove the original Other-to-zero mapping |
| 3 | Zero remains in the editor | An editor value is insufficient to assess runtime behavior |
| 4 | Save the screen and enter Runtime | Personal feedback confirms a displayed value |

![Direct use of the tag value](../assets/qv-direct-value.png)

## Findings and Evidence Limits

The record contains two factors: the original mapping and observation in the editor. Retaining the original mapping while starting Runtime alone was not tested separately, so the effects of the two actions cannot be fully isolated.

The original note retains personal confirmation of a successful runtime display but no final success screenshot. `4.862` is a calculated three-decimal illustration based on the earlier value, not a final observed reading. No retest was performed during preparation.

The investigation sequence is to establish the observation environment, inspect property dynamics, verify Runtime behavior, and then check tag connections and addresses for any remaining issue.

Related: [editor and Runtime](concepts/runtime.md) · [WinCC topic](wincc.md) · [evidence E01](evidence.md#e01)
