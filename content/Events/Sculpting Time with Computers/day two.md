---
title: "day two"
date: 17 Jul 2023
draft: false
tags: STC workshop
date_created: 11 April 2024
date_modified: 02 May 2024
---
---

## 7 July

### Fast prototyping session
On day two, we gathered again to decide what ideas we could put to the test and fast-prototype. We examined two datasets: [[../../../../public_notes/Sculpting Time with Computers/Mila Oiva|Mila's]] soviet newsreels and this publicly available sample from [BBC Archives](https://archive-downloader.bbcrewind.co.uk/). We decided to focus on the newsreels, which have richer metadata. The idea was to test two methods that map to our discussions of [[public_notes/Sculpting Time with Computers/historical time|historical time]] and meaningful objects, and [[public_notes/Sculpting Time with Computers/cinematic time|cinematic time]] and fast/slow editing. We tested on the newsreels:

- [Open clip](https://github.com/mlfoundations/open_clip) --> an open source implementation of CLIP pretrained on the LAION 2B dataset. The core idea behind CLIP is to have text and images in a shared representational space that allows calculations of proximity between them. This can then be used for analysis and retrieval.

![[../../../public/assets/images/open_clip.png]]


- [Cinescale](https://cinescale.github.io/) --> a shot scale classification model trained on a set of manually annotated frames from 124 films. The goal is to classify different shots by their scale: close-up, medium shot, long shot, etc. In [[public_notes/Creanalytics|this paper]] I tried shot classification without annotations using face detection, but that approach is of course limited to faces, whereas the Cinescale library can in principle pick up close-ups of objects for example.

![](https://cinescale.github.io/img/shottype.jpg)


We know these techniques have limitations, as explored during [[day one|day one]] of the workshop. But we also think that, combined, these methods complement each other and can be useful for the analysis of temporal dynamics in large collections of moving images, for example as a way to detect editing patterns and co-relate them to themes and known historical time frames.

Testing this combination against the newsreel data set is helpful because thanks to [[../../../../public_notes/Sculpting Time with Computers/Mila Oiva|Mila's]] sustained work on these reels, we know something about their local as well as global structures, so we can apply the methods to the collection of images and use the collection of images as a way to test the the methods. This approach reminded me of the notion of "[predicting the past](http://www.digitalhumanities.org/dhq/vol/12/2/000377/000377.html)" by the wonderful [Tobias Blanke](https://tobias-blanke.net/). 

During the [[High-dimensional Cinema|panel on high-dimensional cinema]], I referred to this back and forth between modalities of inquiry as building "aesthetically sensitive systems", and in our discussion the day after [[Nanne van Noord|Nanne]] suggested "aesthetically sensitive retrieval" as an applied version of this idea. We wrapped up the day with some [[ideas and next steps|ideas and next steps]] along these lines.

[[../../../../public_notes/Sculpting Time with Computers/Mila Oiva|Mila]] and [[Andrea Farina|Andrea]] also sampled the news reels and produced an [[Annotation guidelines|annotation guidelines]] document for possible future human annotation, and that directly informs editing style detection and open CLIP queries. 

![[../../../public/assets/images/20230707_170101.jpg]]

Thanks to [James Graham](https://www.kcl.ac.uk/people/james-graham) and [Matt Penn](https://www.kcl.ac.uk/people/matt-penn) from the e-research team at KCL, who helped us setup ad-hoc VMs to  run these tests in the CREATE HPC cluster from the Digital Humanities Computer Lab (pictured above).


