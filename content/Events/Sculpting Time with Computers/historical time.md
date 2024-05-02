---
title: "historical time"
date: 17 Jul 2023
draft: false
tags: STC workshop
---
---

This table was concerned with epochs or periods of time commonly used to describe, classify and retrieve moving images, using terms such as "Victorian", "post-war", "pre-modern", etc. [[public_notes/Sculpting Time with Computers/Jake Berger|Jake]]  and [[public_notes/Sculpting Time with Computers/Stephen McConnachie|Stephen]] mentioned this is often how archives are searched by users and for commercial licencing: "I need a shot of a street in a rainy night in Victorian London".  They agreed an "epoch" or "era" detector would be very helpful for archive users.

What would it take to design an "era detector"?

We discussed possible approaches to infer this kind of _represented historical time_, including using detected objects as proxies for time periods, e.g. mobile phones, top hats, pylons, etc. This was provisionally called the _meaningful objects approach_, and the idea was to detect the first occurrence of these objects in large audiovisual archives. [[public_notes/Sculpting Time with Computers/Nanne van Noord|Nanne]]  noted that while this is possible, object detection is usually trained on contemporary objects, so there is an additional layer of modification needed.

![[assets/images/20230706_152743.jpg]]

We tried for example to query "Victorian" in the [frozen in time video search](https://meru.robots.ox.ac.uk/frozen-in-time/) implementation, which outputs mostly buildings. One of the most revealing (and funny) moments was when we queried for "Victorian person":

![[assets/images/victorian_person.png]]

Still, the intuition is that something about depicted eras can be captured by this type of system stayed with us and was put to the test during [[public_notes/Sculpting Time with Computers/day two|day two]].
