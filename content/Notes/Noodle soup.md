---
title: Noodle soup
draft: false
tags:
  - interface
  - programming
  - code
  - stableDifusion
  - LLMs
  - LVM
date: 
date_modified: 14 February 2025
aliases: 
date_created: 30 January 2025
---
---

I have been on a research fellowship and now on sabbatical. During this time, I've been working on new and existing projects, some of which have been successfully funded! I have also been invited to do a few talks and events about [[../Cinema and Machine Vision|Cinema and Machine Vision]]. The other day at one of these, someone asked about the images around this website, like this one on the main page:

![[../assets/images/research_4.jpg|250]]

Most non-photographs in these notes were produced using image generation models, specifically [Stable Diffusion](https://stability.ai/stable-image) (1.5 and XL at the time) and [ComfyUI](https://github.com/comfyanonymous/ComfyUI). I have been following AI image generation for a while now, and things have changed dramatically since the days when I designed [a book cover](https://academic.oup.com/book/43085) using VQGANs in a Jupyter notebook only a few years ago. There is now a lot happening in terms of GUIs for LLMs, LVMs, LMMs, and all the ems. But I still like Comfy and similar "noodle soup" interfaces, for example [Langflow](https://github.com/langflow-ai/langflow) and [WebGL studio](https://github.com/jagenjo/webglstudio.js).

I had good conversations about this at [VL/HCC PPIG](https://conf.researchr.org/home/vlhcc-2024) last year. I remember for example the project DeckFlow, by [Gregory Croisdale](https://g.regory.dev/), a sort of infinite canvas of connected nodes for text and image generation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wkg4wS4uH_g?si=uZia8HYY9Qw9wUc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Connecting nodes seems like a good compromise for thinking in space and in time, meaning a visual way to design in space how a program flows as a sequence of steps; something that sits half-way between, say, the Python REPL and an Illustrator or Inkscape canvas. In other words, something that might be familiar to both programmers and visual designers.  For generative media this is a good middle ground for collaborative iteration and quick testing of ideas, but also a way for newcomers to programming to learn about checkpoints, filters, LORAs, prompts, seeds; how they can and cannot be connected, when they flow or fail to flow in a programmed run.

One very nice feature of images generated via ComfyUI is that they can include the workflow used to generate them as metadata in the image itself. If you drag them back into Comfy the workflow is loaded, including prompts, custom modules and settings!

For example, if you drag the image below into Comfy's canvas:

![[../assets/images/Noodle soup/colossus.png]]

You'll see something like this:

![[../assets/images/Noodle soup/Pasted image 20250214105058.png]]

Under the hood, the `PNG` image is injected with `JSON` that is then used to reconstruct the workflow. This is very convenient for collaborative iteration, as one only needs to share/load the image and others in a given community can reproduce it modify it and share it again. It enables images to disseminate through a distributed network of users that are loosely connected with each other but can nevertheless cooperate to solve technical problems and towards common aesthetic goals. I wonder if and how far these interfaces can be used in a similar way as research tools. Anyone who uses Comfy in their research or wants to explore this idea, do [[../Contact|get in touch!]]

Note: Sometimes modifying the PNG will strip it from the injected JSON. For the example image above the original high-resolution PNG can be downloaded [[content/assets/images/Noodle soup/ComfyUI_00007_.png|here]] (26MB).