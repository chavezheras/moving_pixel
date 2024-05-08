---
title: "subjective time"
date: 17 Jul 2023
draft: false
tags: STC workshop
---
---

Time not only as duration, but as perceived through subjective experience, by audiences and by characters on screen. [[Belén Vidal|Belén]] pointed our attention to the relation between time as duration, e.g. a performer's age in years, and subjective time, e.g. a character's age on screen. This was later discussed as one strand of encoding time using computational methods in the first and second ideation sessions, and alongside [[historical time]] and [[cinematic time]].

For the refinement session, we considered possible methods to analyse age and ageing on screen, including character age, performer age, and the gap in between. Here is how this table looked during this refinement stage:

![[assets/images/20230706_151508.jpg]]

As a starting point, we considered what it would take to get the difference between performer age and performed age, split by gender. Performer age as a duration can be calculated by identifying the date of birth of performer, e.g. Sean Connery (1930), and their approximate age at a given performance, e.g. _Diamonds are Forever (1971)_, which means he was ~41 at the time of filming.

Performed age is much more difficult. We discussed possible methods for performed age detection, including extracted features from faces, speech and even gestures ―all of which are we thought tended to be noisy/inaccurate/biased. We also considered text sources such as synopses, where main characters are sometimes given age descriptors such as "ten-year-old Finnegan" or relational such as "her mother Estella". Other sources include scripts, which can be more accurate but as [[Jake Berger|Jake]] reminded us are also less publicly available, and in some cases also the original literary sources of film adaptations (I think it was [[Andrea Farina|Andrea]] who mentioned this).

In terms of gender, [[Mila Oiva|Mila]] and [[Isadora Campregher|Isadora]] referred to their experience with gender detection by name, and [[Stephen McConnachie|Stephen]] was in touch later to contribute the [INA speech segmenter with gender identification](https://github.com/ina-foss/inaSpeechSegmenter), and his project on [gender inference by first name](https://www.nesta.org.uk/blog/women-in-film-what-does-the-data-say/).