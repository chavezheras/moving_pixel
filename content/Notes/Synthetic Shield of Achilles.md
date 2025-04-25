---
title: Synthetic Shield of Achilles
draft: false
tags:
  - AIart
  - image_generation
  - text-to-image
  - FLUX
  - publication
  - interface
date: 
date_modified: 25 April 2025
aliases: 
date_created: 25 April 2025
---
---

In [[../Cinema and Machine Vision|Cinema and Machine Vision]] I write about the concept of _computational ekphrasis_:

>[!quote] p170
>In philosophy, there is a term to describe the intersemiotic correspondence between words and images: _ekphrasis_, from the Greek _ek_ meaning “out” and _phrásis_ meaning “speak.” In ancient Greece, ekphrasis was taught as a rhetorical technique consisting of rich verbal descriptions designed to conjure vivid images in the reader’s mind—a literary form of description that could “paint a picture with words.” Through ekphrasis, the reader could be prompted to imagine absent or impossible objects, the classic example being Homer’s elaborate description of Achilles’s shield in _The Iliad_ ([Heffernan 2004](https://press.uchicago.edu/ucp/books/book/chicago/M/bo3684066.html), 10) \[...] In the wake of generative AI systems, words and images find novel forms of fluid permutation and latency in a shared representational space, albeit in high-dimensional space that is not directly interpretable to humans. We can call this _computational ekphrasis_: 'calculation from/out of speech'.

I developed this into a book chapter in an edited volume called [_The Aesthetics of Machine Vision: Critical Terms and Ideas_](https://forskning.ruc.dk/en/publications/the-aesthetics-of-machine-vision-critical-terms-and-ideas), edited by Kathrin Maurer, Rikke Munck Petersen, Dominique Routhier, Kassandra Wellendorf, and Kristin Veel, coming out with MIT Press in 2025. And some of these ideas are also in a conference presentation I did for [PPIG VL/HCC 2024](https://ppig.org/workshops/2024-annual-workshop/keynote/), see abstract [[Computational Ekphrasis|here]].

Since I make reference to the classic example of ekphrasis given by Heffernan, and in keeping with designs for previous publications, [[Movie Barcodes|mine]] and [others](https://academic.oup.com/book/43085), I made an image of the [Shield of Achilles](https://en.wikipedia.org/wiki/Shield_of_Achilles) to be included in the book:

![[../assets/images/The Synthetic Shield of Achilles/ComfyUI_00020_.png|Synthetic Shield of Achilles ― my humble contribution to ekphrastic art]]

There are many other renditions of the famous shield, from an illustration in Pope's translation of the Iliad from 1720 shown below, to [Angelo Monticelli's interpretation](https://en.wikipedia.org/wiki/Shield_of_Achilles#/media/File:Angelo_monticelli_shield-of-achilles.jpg)from 1820, to the [1917 version by John Flaxman](https://www.rct.uk/collection/51266/shield-of-achilles), to a [contemporary reconstruction](https://theshieldofachilles.net/) (and book) by Kathleen Vail. To my knowledge, the one above is the first one to be AI generated.

![[../assets/images/The Synthetic Shield of Achilles/51569e5785a986ccd4637b86a9b0c9ad_MD5.png| Image from page 171 of volume 5 of The Iliad of Homer. Translated by Mr. Pope, by Homer. Original held and digitized by the British Library.]]

In the book chapter I go into details about why I think ekphrasis is a useful concept to help us make sense a world inundated with synthetic imagery. But I thought some might be curious to know more details about how I made the synthetic Shield of Achilles. I generated the image by passing some of Homer's original description of the shield to a text-to-image model. Here are the lines I used in my prompt (minus the page numbers) from Wikipedia:

1. The Earth, sky and sea, the sun, the moon and the [constellations](https://en.wikipedia.org/wiki/Constellation "Constellation"): [Pleiades](https://en.wikipedia.org/wiki/Pleiades "Pleiades"), [Hyades](https://en.wikipedia.org/wiki/Hyades_\(star_cluster\) "Hyades (star cluster)"), [Orion](https://en.wikipedia.org/wiki/Orion_\(constellation\) "Orion (constellation)"), and [Ursa Major](https://en.wikipedia.org/wiki/Ursa_Major "Ursa Major") (484–89)
2. "Two beautiful cities full of people": in one a wedding and a law case are taking place (490–508); the other city is besieged by one feuding army and the shield shows an ambush and a battle (509–40)
3. A field being plowed for the third time (541–49)
4. A king's estate where the harvest is being reaped (550–60)
5. A vineyard with grape pickers and children (561–72)
6. A "herd of straight-horned cattle"; the lead bull has been attacked by a pair of savage lions which the herdsmen and their dogs are trying to beat off (573–86)
7. A picture of a sheep farm (587–89)
8. A dancing floor where young men and women are dancing and courting (590–606)
9. The great stream of [Ocean](https://en.wikipedia.org/wiki/Oceanus "Oceanus") (607–609)

I used the [FLUX.1 \[schnell\] model](https://huggingface.co/black-forest-labs/FLUX.1-schnell) by [Black Forest Labs](https://github.com/black-forest-labs/flux), a 12 billion parameter model running locally in my laptop (8GB VRAM), through ComfyUI. I also used three [LORAs](https://research.ibm.com/blog/LoRAs-explained) to approximate the style of a historical artefact. Besides text above, the prompt has a lot more description including trigger words for the LORAs.

Here is [[Noodle soup|a longer post about interfaces like Comfy]] where I go into detail about how dragging PNG images into the interface loads the workflows used (under certain conditions). If you really want to recplicate all the workflow, feel free to take my image above.


