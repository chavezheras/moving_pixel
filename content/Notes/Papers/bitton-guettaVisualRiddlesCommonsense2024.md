---
citekey: bitton-guettaVisualRiddlesCommonsense2024
aliases:
  - Bitton-Guetta et al. (2024) Visual Riddles
title: "Visual Riddles: a Commonsense and World Knowledge Challenge for Large Vision and Language Models"
authors:
  - Nitzan Bitton-Guetta
  - Aviv Slobodkin
  - Aviya Maimon
  - Eliya Habba
  - Royi Rassin
  - Yonatan Bitton
  - Idan Szpektor
  - Amir Globerson
  - Yuval Elovici
date: 28 July 2024
item-type: Preprint
publisher: ""
comments:
  - "Comment: https://visual-riddles.github.io/"
tags:
  - ComputerVision
  - ComputerScience
  - LVM
  - benchmark
  - HumanEval
  - ModelEval
  - CommonSense
  - synthetic_media
  - image_generation
doi: https://doi.org/10.48550/arXiv.2407.19474
draft: false
---

> [!Cite]
> Bitton-Guetta N, Slobodkin A, Maimon A, et al. (2024) Visual Riddles: a Commonsense and World Knowledge Challenge for Large Vision and Language Models. arXiv:2407.19474. arXiv. Available at: [http://arxiv.org/abs/2407.19474](http://arxiv.org/abs/2407.19474) (accessed 2 August 2024).

> [!LINK] 
> http://arxiv.org/abs/2407.19474

> [!Abstract]
>
> Imagine observing someone scratching their arm; to understand why, additional context would be necessary. However, spotting a mosquito nearby would immediately offer a likely explanation for the person's discomfort, thereby alleviating the need for further information. This example illustrates how subtle visual cues can challenge our cognitive skills and demonstrates the complexity of interpreting visual scenarios. To study these skills, we present Visual Riddles, a benchmark aimed to test vision and language models on visual riddles requiring commonsense and world knowledge. The benchmark comprises 400 visual riddles, each featuring a unique image created by a variety of text-to-image models, question, ground-truth answer, textual hint, and attribution. Human evaluation reveals that existing models lag significantly behind human performance, which is at 82\% accuracy, with Gemini-Pro-1.5 leading with 40\% accuracy. Our benchmark comes with automatic evaluation tasks to make assessment scalable. These findings underscore the potential of Visual Riddles as a valuable resource for enhancing vision and language models' capabilities in interpreting complex visual scenarios.
>.
> 
# Notes

## Annotations%% begin annotations %%


### Imported: 02 August 2024 12:55 pm


<mark style="background-color: #ffd400">Quote</mark>
> existing image-understanding models struggle to integrate visual cues with world knowledge stemming from cultural aspects, life-experiences, and physical or social knowledge \[1–4]

Page: 2


<mark style="background-color: #ffd400">Quote</mark>
> Our benchmark’s main task (§3) involves solving riddles in an open-ended visual question answering (VQA) format, which takes as input an image and a question, and expects a free-text answer. This setup evaluates the ability to detect subtle visual cues and apply commonsense reasoning or world knowledge to formulate answers. Additionally, we investigate the impact of including hints and attributions in the input to enhance comprehension.

Page: 2


<mark style="background-color: #ffd400">Quote</mark>
> To facilitate scalable research, we introduce two additional tasks. The first is a multiple-choice version of the main task, also for the hint- and attribution-assisted variants, allowing for easy automatic scoring based on accuracy. The second task assesses the ability of models to determine the accuracy of open-ended responses in two settings: reference-free, where models evaluate responses based only on the image and the question, and reference-based, where the correct answer is also provided. This task suggests auto-raters to evaluate our riddles, and aim to advance research on such automatic evaluation methods.

Page: 2


<mark style="background-color: #ffd400">Quote</mark>
> The Visual Riddles benchmark was hand-curated by seven designers experienced in generating images with text-to-image models. The design process was guided by comprehensive instructions to create visual riddles that were complex enough to challenge models yet solvable by humans. Each riddle consisted of a synthetic image paired with a question and a corresponding ground truth answer (see examples in Fig. 1).

Page: 3


<mark style="background-color: #a28ae5">Quote</mark>
> We assess the correctness of human and model answers using three annotators in a multiple-choice selection format. They select responses that match the ground truth, without any hallucinations, based on provided images, questions, and ground-truth answers. The final rating is determined by a majority vote. Annotator agreement, measured by Krippendorff’s alpha \[16], reached 79%.

Page: 5
Note: Human evaluation of the responses. Researchers also had human evaluators for the tasks themselves to compare against the models


<mark style="background-color: #ffd400">Quote</mark>
> We evaluate the models in two scenarios: referencefree and reference-based, in the first scenario, models independently assess the correctness of an answer based solely on the image and its associated question, and in the second, models are additionally provided with the ground-truth answer along with the candidate answer, challenging them to validate the provided answer against the correct one. Each auto-rater candidate was evaluated on a subset of two responses provided by other models and humans, excluding its own responses from this evaluation.

Page: 7


<mark style="background-color: #a28ae5">Quote</mark>
> Figure 4: Modified images ablation study: a demonstration of the process where the model evaluates an answer’s validity using two scenarios: one with the original image and another with a modified image that alters the visual clue, affecting the correctness of the original ground truth answer.

Page: 8
Note: examples of the kinds of A|B testing done to validate results


<mark style="background-color: #ffd400">Quote</mark>
> We conducted two rounds of testing: one with original images and one with modified versions. In both instances, we presented the model with the question, the original ground truth answer, and asked,“Is the answer correct?” (see Fig. 4). Post-image modification, known ground truth answers became incorrect, make the evaluation to a binary assessment. For each model, we calculated the percentage of correctness rates on each type of image and the gap. A high gap indicates that the model identified the answer as correct for the original image and incorrect for modified one.

Page: 8


<mark style="background-color: #ffd400">Quote</mark>
> Designing images for the Visual Riddles dataset, with their specific and often subtle visual clues, proved surprisingly difficult. To quantify this difficulty, we attempted to reproduce 100 visual riddles using five popular open-source diffusion models: SDXL \[17], SDXL-Turbo \[18], LCM-SDXL \[19], SD-1.4, and SD-2.1 \[20]. Each model generated 100 images based on these prompts, amounting to 500 images in total. However, only 61 (12%) successfully matched the prompts. The most successful model was SDXL-Turbo, achieving a 15% success rate.

Page: 8


<mark style="background-color: #2ea8e5">Quote</mark>
> Commonsense reasoning in multimodal models. Recent progress in vision-language models including models like BLIP2 \[21], Flamingo \[22], LLaVA \[12], GPT4 \[15], and Gemini-Pro \[8]. These developments have sparked interest in commonsense reasoning \[2, 23], leading to complex visual reasoning challenges within the vision-and-language domain. These include specialized tests for understanding associations and analogies \[24, 25], interpreting unusual images in WHOOPS! \[26], visual abductive reasoning tasks (e.g., Sherlock; \[27]), multi-modal humor understanding tasks \[3], and world-instructed image-editing tasks requiring commonsense reasoning (e.g., EditWorld; \[28]). A related benchmark to Visual Riddles is VisIT-Bench \[5], where the authors took existing images and generated challenging questions about them. However, Visual Riddles distinguishes itself by allowing annotators more creative freedom to devise challenging scenarios and generate corresponding images and questions, rather than restricting them exclusively to what appears in the images. This also ensures the images have not been previously seen during pretraining.

Page: 9
Note: Relevant for STiC, e.g. commonsense cinematic reasoning


<mark style="background-color: #ffd400">Quote</mark>
> Although we have made efforts to exclude visual riddles that could be considered offensive, it is still possible that individuals may find certain riddles offensive, despite our best efforts to prevent this. A promising future direction is to explore model performance across multiple images generated from the same prompt, allowing for a more robust evaluation of visual reasoning capabilities.

Page: 9



%% end annotations %%



%% Import Date: 2024-08-02T12:55:53.474+01:00 %%
