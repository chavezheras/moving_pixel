---
title: ISSA Workshop 2 ― North West Film Archive
draft: False
tags:
  - event
  - workshop
  - Archives
  - AI
date: 5 November 2026
date_created: 13 November 2026
date_modified: 13 November 2026
pinned: true
banner: assets/images/ISSA/NWFA_WS2_group_photo.jpg
---
---

[Workshop 2 ― North West Film Archive](https://github.com/kingsdigitallab/issa/wiki/Workshop-2-%E2%80%95-North-West-Film-Archive) was held **5 November 2026** at the [School of Digital Arts, Manchester Metropolitan University](https://www.mmu.ac.uk/soda). This was the second workshop in the [[../Projects/ISSA|ISSA]] AIMS (AI for Media Sandbox) series, designed in collaboration with the [North West Film Archive](https://www.mmu.ac.uk/north-west-film-archive) to carry the conversation from the previous workshop around the concept of a *machine-cultivated archive*: a first layer of AI-generated annotation produced at scale, which screen-heritage professionals can then refine, correct and enrich with their expertise. The aim was to explore, on NWFA's own material, if there is an appetite for AI use in their workflows, and to establish a baseline for where — and how much — of this requires human judgement.

![[../assets/images/ISSA/NWFA_WS2_group_photo.jpg]]
The ISSA and NWFA teams at the School of Digital Arts, Manchester Metropolitan University.

## What we covered
We started with a data audit of the two batches shared by NWFA and the label mismatch problem, then walked through the processing pipeline, including the specific models, tools and hardware, and the results of the full run: 398 of the 400 files processed; 365 separators detected and 590 programmes and 3,290 timecoded segments proposed; a prose description for essentially every programme. The prompt targets NWFA's own controlled vocabulary directly: 183 of the 197 Film & Video films (92.9%) share at least one subject term with the catalogue. We then did a joint deep-dive qualitative review of individual files — clip, catalogue record and machine-generated annotation — in a side-by-side review interface built on NLS's [Paratext](https://github.com/nls-lst/paratext/tree/main) metadata evaluation tool. NWFA colleagues facilitated a session on AI ethics in the screen archive, and we closed with an ideation session on downstream opportunities and a handover of the processed material.

## Key takeaways
- The error in tape labelling is measurable — and repairable at scale.
- Outer segmentation works; the inner segmentation unit works too but is likely best defined _ad hoc_ by the archive.
- The best results are likely at the intersection between human and machine annotation; however, each introduces its own kind of noise, bias and error.
- Perceived quality of the machine-generated outputs is consistently 'OK' but in all cases subject to human review.
- The proposed processing pipeline is seen by NWFA as an option to tackle volume work and born-digital material, rather than carefully curated film and video collections.
- The conversation about AI ethics was rich and engaging; in my view, the most valuable exchanges in the room were between the archive's own young and senior staff, prompted by working with the generated output. Past, present and future of the archive were represented in the discussion, each bringing their perspective on the pressing issues of labour displacement and qualitative transformation of the job in the context of a changing screen archive. It was especially valuable for me to hear the points of view and questions of the two young interns; they are closest in age to my students and will be the most affected by how AI is deployed in their future workplaces. Big thanks to Nick for including them in the workshop.

To dive straight into the technical setup, see the [WS2 README](https://github.com/kingsdigitallab/issa/tree/main/workshops/ws2), and for an interactive audit of everything that was processed — inputs, label matching, segmentation, metadata and the annotation results — see [this page](https://kingsdigitallab.github.io/issa/workshops/ws2/issa_ws2_nwfa.html).

## Thanks
Many thanks to the [NWFA](https://www.mmu.ac.uk/north-west-film-archive) team: Nick Gladden, Will McTaggart, Rachel Conroy, Una Phillips, Abbie Brennan, Nicole Peeters, Geoff Senior, Will Crumpton and Mia Turgoose — to our hosts at the School of Digital Arts, Manchester Metropolitan University (Chris Daniels), and to Digital Library Services (Emily Shields, David Haigh). And to my King's Digital Lab colleagues [Paul Caton](https://www.kcl.ac.uk/people/paul-caton-1) and [Geoffroy Noël](https://www.kcl.ac.uk/people/geoffroy-noel).
