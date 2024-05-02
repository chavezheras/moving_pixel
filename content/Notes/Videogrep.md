---
title: "Videogrep"
date: 16 May 2023
draft: false
tags:
- supercut
- montage
- tools
- words and images
---
---

>Videogrep is a command line tool that searches through dialog in video files and makes [supercuts](https://vimeo.com/440746435) based on what it finds. It will recognize .srt or .vtt subtitle tracks, or transcriptions that can be generated with vosk, pocketsphinx, and other tools.

Sam posted an implementation of Videogrep that runs on Colab, which made me think of running this on a Jupyter Lab instance from our College's computer cluster, and then possibly using it for teaching. The college does not host its own notebook instance, as far as I know, but the cluster can serve a headless Jupyter that can be "tunnelled in" through ssh.

Here's a supercut of [recent lecture](https://www.youtube.com/watch?v=b6ogLgWnpes) by  [Shannon Mattern](https://cinemastudies.sas.upenn.edu/people/shannon-mattern) at KCL called "Modeling Doubt, Coding Humility: A Speculative Syllabus"

<iframe title="Doubt ― with Shannon Mattern" height="240" width="426" src="https://player.vimeo.com/video/830237949?h=5fb9301c4d&amp;app_id=122963" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.775 / 1; width: 100%; height: 100%;"></iframe>


Interestingly, not one single mention of "code" or "coding", nor of "humility". I recommend watching the whole talk, though.

Here's the [repository](https://github.com/antiboredom/videogrep)for Videogrep. Here's the [Colab minimal example](https://t.co/QGKTLxOZ52).
And here are other examples from Sam's repo:

-   [silence extraction](https://github.com/antiboredom/videogrep/blob/master/examples/only_silence.py)
-   [automatically creating supercuts](https://github.com/antiboredom/videogrep/blob/master/examples/auto_supercut.py)
-   [creating supercuts based on youtube searches](https://github.com/antiboredom/videogrep/blob/master/examples/auto_youtube.py)
-   [creating supercuts from specific parts of speech](https://github.com/antiboredom/videogrep/blob/master/examples/parts_of_speech.py)
-   [creating supercuts from spacy pattern matching](https://github.com/antiboredom/videogrep/blob/master/examples/pattern_matcher.py)