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
We walked through the project's objectives and segmentation tasks, then dug into the first batch of outputs on 385 files (≈240 hours of video). We presented the processing pipeline itself — models, tools and hardware, performance and limitations. We then did a joint deep-dive qualitative review of five specific video files against the existing and predicted segments and metadata. NLS colleagues presented on the controlled vocabulary for the screen archive and their [Paratext tool](https://github.com/nls-lst/paratext/tree/main). We closed with a handover of the processed materials and a discussion of next steps.

## What we learned
The local-first, open-weights approach to video-language models holds up at scale: the pipeline can plausibly process the project's target of ~1000 files across five archives in around 500 GPU hours, though getting there requires real up-front investment in tuning hardware, models, and pre-processing. Byproducts like transcriptions and subtitles turned out to be useful in their own right. And a recurring theme across the day: human cataloguing drifts meaningfully over time in ways that carry historical value, while machine-generated metadata is consistent and can be richer at volume. Different kinds of value, not mutually exclusive, but also not immediately easy to reconcile.

To dive straight into the technical setup, see the [WS1 README](https://github.com/kingsdigitallab/issa/tree/main/workshops/ws1), and for an interactive analysis of the first batch of outputs see [this page](https://kingsdigitallab.github.io/issa/workshops/ws1/issa_ws1.html).

## Thanks
Many thanks to our hosts at [NLS](https://www.nls.uk/): Alistair Bell, Alison Stevenson, Rob Cawston, Mike Saunders, Ann Cameron, Liam Paterson, Kay Foubister, and Gordon Nicol — and to my King's Digital Lab colleagues [Paul Caton](https://www.kcl.ac.uk/people/paul-caton-1) who among other things contributed detailed close readings of the videos and [Geoffroy Noël](https://www.kcl.ac.uk/people/geoffroy-noel) who did the all the heavy lifting on the pipeline and supervision of the processing.
