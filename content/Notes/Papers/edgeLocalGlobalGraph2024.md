---
citekey: edgeLocalGlobalGraph2024
aliases:
  - Edge et al. (2024) From Local to Global
title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization"
authors:
  - Darren Edge
  - Ha Trinh
  - Newman Cheng
  - Joshua Bradley
  - Alex Chao
  - Apurva Mody
  - Steven Truitt
  - Jonathan Larson
date: 24 April 2024
item-type: Preprint
publisher: ""
tags:
  - Computer-Science---Artificial-Intelligence
  - Computer-Science---Computation-and-Language
  - Computer-Science---Information-Retrieval
doi: https://doi.org/10.48550/arXiv.2404.16130
draft: false
---

> [!Cite]
> Edge D, Trinh H, Cheng N, et al. (2024) From Local to Global: A Graph RAG Approach to Query-Focused Summarization. arXiv:2404.16130. arXiv. Available at: [http://arxiv.org/abs/2404.16130](http://arxiv.org/abs/2404.16130) (accessed 8 May 2024).

> [!LINK] 
>
>  [Edge et al_2024_From Local to Global.pdf](file:///home/daniel/Zotero/storage/5EVWJM2N/Edge%20et%20al_2024_From%20Local%20to%20Global.pdf).

> [!Abstract]
>
> The use of retrieval-augmented generation (RAG) to retrieve relevant information from an external knowledge source enables large language models (LLMs) to answer questions over private and/or previously unseen document collections. However, RAG fails on global questions directed at an entire text corpus, such as "What are the main themes in the dataset?", since this is inherently a query-focused summarization (QFS) task, rather than an explicit retrieval task. Prior QFS methods, meanwhile, fail to scale to the quantities of text indexed by typical RAG systems. To combine the strengths of these contrasting methods, we propose a Graph RAG approach to question answering over private text corpora that scales with both the generality of user questions and the quantity of source text to be indexed. Our approach uses an LLM to build a graph-based text index in two stages: first to derive an entity knowledge graph from the source documents, then to pregenerate community summaries for all groups of closely-related entities. Given a question, each community summary is used to generate a partial response, before all partial responses are again summarized in a final response to the user. For a class of global sensemaking questions over datasets in the 1 million token range, we show that Graph RAG leads to substantial improvements over a na\"ive RAG baseline for both the comprehensiveness and diversity of generated answers. An open-source, Python-based implementation of both global and local Graph RAG approaches is forthcoming at https://aka.ms/graphrag.
>.
> 
# Notes

## Annotations

### Imported: 08 May 2024 4:47 pm


<mark style="background-color: #ffd400">Quote</mark>
> Retrieval-augmented generation (RAG, Lewis et al., 2020) is an established approach to answering user questions over entire datasets, but it is designed for situations where these answers are contained locally within regions of text whose retrieval provides sufficient grounding for the generation task.

Page: 2
Note: And this is a comment on a highlight on page 2


<mark style="background-color: #ffd400">Quote</mark>
> The challenge remains, however, for query-focused abstractive summarization over an entire corpus. Such volumes of text can greatly exceed the limits of LLM context windows, and the expansion of such windows may not be enough given that information can be “lost in the middle” of longer contexts (Kuratov et al., 2024; Liu et al., 2023).

Page: 2
Note: yet another comment on a highlight


<mark style="background-color: #2ea8e5">Quote</mark>
> We now unpack the high-level data flow of the Graph RAG approach (Figure 1) and pipeline, describing key design parameters, techniques, and implementation details for each step.

Page: 3
Note: One more comment on a highlight



> 

Page: 3
Note: Make this a stand alone note


<mark style="background-color: #5fb236">Quote</mark>
> To balance the needs of efficiency and quality, we use multiple rounds of “gleanings”, up to a specified maximum, to encourage the LLM to detect any additional entities it may have missed on prior extraction rounds.

Page: 4
Note: This is a green note on the text
