---
title: Focal length classifier
draft: false
tags:
  - project
  - MachineVision
  - MachineLearning
  - Photography
  - ComputerVision
date_created: 13 April 2020
date_modified: 02 May 2024
date: 13 April 2020
---
---

![[Pasted image 20240502104822.png]]

Does computer vision apprehend the world through a specific lens? And if so, which one? In this project I set out to design a deep learning classifier that is **purposefully blind** to what photographs are _of_; a type of machine vision that cares nothing about recognising objects, people or scenes, and is instead programmed to learn only about how photographs were made, more specifically the lenses used in their making.

This project uses [Flickr](https://www.flickr.com/ "Flickr Homepage") IDs from the [Visual Genome](https://visualgenome.org/ "Visual Genome Homepage") dataset (used in [[Made by Machine]]), and extracts their [EXIF](https://en.wikipedia.org/wiki/Exif/ "What is EXIF?") metadata through [Flickr's API](https://github.com/alexis-mignon/python-flickr-api/). The model was trained using a PyTorch implementation of a vanilla VGGNet. This is how EXIF info looks on Flickr:

![[Pasted image 20240502104852.png]]

This is an (abbreviated) example of Flickr's API response:

```
[
 { 'label': 'Make',
    'raw': {'_content': 'Canon'},
    'tag': 'Make',
    'tagspace': 'IFD0',
    'tagspaceid': 0},
  { 'label': 'Model',
    'raw': {'_content': 'Canon EOS REBEL T5i'},
    'tag': 'Model',
    'tagspace': 'IFD0',
    'tagspaceid': 0},
  { 'clean': {'_content': '50 mm'},
    'label': 'Focal Length',
    'raw': {'_content': '50.0 mm'},
    'tag': 'FocalLength',
    'tagspace': 'ExifIFD',
    'tagspaceid': 0},
  { 'label': 'Lens Model',
    'raw': {'_content': 'EF50mm f/1.8 II'},
    'tag': 'LensModel',
    'tagspace': 'ExifIFD',
    'tagspaceid': 0},
]
```

And this is an example of the resulting dataframe:

|Camera manufacturer|Camera model|Exposure|Aperture|Focal Length|
|---|:-:|--:|---|---|
|Canon|Canon PowerShot S2 IS|1/640|f4|72mm|
|Panasonic|DMC-FX9|1/640|f3.6|10mm|
|Canon|Canon EOS 20D|1/1200|f11|560mm|
|Nikon|NIKON D50|1/250|f5|125mm|
|Canon|Canon PowerShot SD600|1/800|f2.8|5.8mm|
|...|...|...|...|...|

This proof of concept was published as part of the article [_On Machine Vision and Photographic Imagination_](https://link.springer.com/article/10.1007/s00146-020-01091-y) (with [Tobias Blanke](https://www.uva.nl/en/profile/b/l/t.blanke/t.blanke.html)) in the journal _AI & Society_. 
See [[../Publications/All publications|my other publications]].

![[Pasted image 20240502110339.png]]

🖥️ Code and 💾 data for this project are available in [this repository](https://gitlab.com/chavezheras/shape_of_computervision).