---
title: "Streaming Video Model"
date: 25 Apr 2023
draft: false
tags:
- Machine Vision
date_created: 15 November 2024
date_modified: 15 November 2024
---
---

[Interesting video model](https://arxiv.org/abs/2303.17228#) that accounts for frames and sequences in a unified model. 

Abstract:

> Video understanding tasks have traditionally been modeled by two separate architectures, specially tailored for two distinct tasks. Sequence-based video tasks, such as action recognition, use a video backbone to directly extract spatiotemporal features, while frame-based video tasks, such as multiple object tracking (MOT), rely on single fixed-image backbone to extract spatial features. In contrast, we propose to unify video understanding tasks into one novel streaming video architecture, referred to as Streaming Vision Transformer (S-ViT). S-ViT first produces frame-level features with a memory-enabled temporally-aware spatial encoder to serve the frame-based video tasks. Then the frame features are input into a task-related temporal decoder to obtain spatiotemporal features for sequence-based tasks. The efficiency and efficacy of S-ViT is demonstrated by the state-of-the-art accuracy in the sequence-based action recognition task and the competitive advantage over conventional architecture in the frame-based MOT task. We believe that the concept of streaming video model and the implementation of S-ViT are solid steps towards a unified deep learning architecture for video understanding. 

> Code will be available at [this URL](https://github.com/yuzhms/Streaming-Video-Model).

See [[Streaming Video Model]] for full literature note.