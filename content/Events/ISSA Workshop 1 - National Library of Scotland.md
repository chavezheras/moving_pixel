---
title: ISSA Workshop 1 ― National Library of Scotland
draft: False
tags:
  - event
  - workshop
  - Archives
  - AI
date: 25 September 2026
date_created: 28 September 2026
date_modified: 28 September 2026
pinned: true
banner: assets/images/NLS_WS1_group_photo.jpg
---
---

[Workshop 1 ― National Library of Scotland](https://github.com/kingsdigitallab/issa/wiki/Workshop-1-%E2%80%95-National-Library-of-Scotland) was held **25 September 2026** at Kelvin Hall, Glasgow. This was the first workshop in the [[../Projects/ISSA|ISSA]] AIMS (AI for Media Sandbox) series, designed together with the [National Library of Scotland](https://www.nls.uk/) to discuss the results of the first round of outputs from the [[../Projects/DEERIN|DEERIN]] prototype.

![[../assets/images/NLS_WS1_group_photo.jpg]]
The ISSA and NLS teams at Kelvin Hall, Glasgow.

## What we covered
We walked through the project's objectives and segmentation tasks, then dug into the actual outputs: 385 files (≈240 hours of video) processed into 1,975 programmes and 9,015 segments, plus targeted metadata fields. We presented the processing pipeline itself — models, tools, hardware, and a ~0.72 ratio to real time — and did a deep-dive qualitative review of five specific video files against the existing and predicted segments and metadata. NLS colleagues presented their Moving Image Archive controlled vocabulary and their metadata enrichment evaluation tool, including entity detection and geo-location. We closed with a handover of the processed materials and a discussion of next steps.

## What we learned
The local-first, open-weights approach to video-language models holds up at scale: the pipeline can plausibly process the project's target of ~1000 files across five archives in around 500 GPU hours, though getting there requires real up-front investment in tuning hardware, models, and pre-processing. Byproducts like transcriptions and subtitles turned out to be useful in their own right, if unbudgeted for in storage terms. And a recurring theme across the day: human cataloguing drifts meaningfully over time in ways that carry historical value, while machine-generated metadata is consistent and can be richer at volume — these aren't substitutes for each other, and figuring out how they complement one another (including learning from *how* the system fails, not just whether it does) is where a lot of the real work is.

For the full technical write-up see the [WS1 README](https://github.com/kingsdigitallab/issa/tree/main/workshops/ws1), and for an interactive analysis of the outputs see [this page](https://kingsdigitallab.github.io/issa/workshops/ws1/issa_ws1.html).

## Thanks
Many thanks to our hosts at [NLS](https://www.nls.uk/): Alistair Bell (Head of Moving Image, Sound and Music), Rob Cawston, Alison Stevenson, Mike Saunders, Ann Cameron, Liam Paterson, Kay Foubister, and Gordon Nicol — and to my KCL colleagues [Geoffroy Noël](https://www.kcl.ac.uk/people/geoffroy-noel) and [Paul Caton](https://www.kcl.ac.uk/people/paul-caton-1) from King's Digital Lab, who did the heavy lifting on the pipeline.
