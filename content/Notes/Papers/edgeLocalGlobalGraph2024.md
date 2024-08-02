---
citekey: edgeLocalGlobalGraph2024
aliases:
  - Notes
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
  - ComputerScience
  - AI
  - RAG
  - Graphs
  - NetSci
  - InfoRetrieval
doi: https://doi.org/10.48550/arXiv.2404.16130
draft: false
linter-yaml-title-alias: Notes
date_modified: 02 August 2024
---
See: [[../Graph RAG|Graph RAG]]

> [!Cite]
> Edge D, Trinh H, Cheng N, et al. (2024) From Local to Global: A Graph RAG Approach to Query-Focused Summarization. arXiv:2404.16130. arXiv. Available at: [http://arxiv.org/abs/2404.16130](http://arxiv.org/abs/2404.16130) (accessed 8 May 2024).

> [!LINK] 
> http://arxiv.org/abs/2404.16130

> [!Abstract]
>
> The use of retrieval-augmented generation (RAG) to retrieve relevant information from an external knowledge source enables large language models (LLMs) to answer questions over private and/or previously unseen document collections. However, RAG fails on global questions directed at an entire text corpus, such as "What are the main themes in the dataset?", since this is inherently a query-focused summarization (QFS) task, rather than an explicit retrieval task. Prior QFS methods, meanwhile, fail to scale to the quantities of text indexed by typical RAG systems. To combine the strengths of these contrasting methods, we propose a Graph RAG approach to question answering over private text corpora that scales with both the generality of user questions and the quantity of source text to be indexed. Our approach uses an LLM to build a graph-based text index in two stages: first to derive an entity knowledge graph from the source documents, then to pregenerate community summaries for all groups of closely-related entities. Given a question, each community summary is used to generate a partial response, before all partial responses are again summarized in a final response to the user. For a class of global sensemaking questions over datasets in the 1 million token range, we show that Graph RAG leads to substantial improvements over a na\"ive RAG baseline for both the comprehensiveness and diversity of generated answers. An open-source, Python-based implementation of both global and local Graph RAG approaches is forthcoming at https://aka.ms/graphrag.
>.
> 
# Notes

## Annotations

### Imported: 08 May 2024 5:27 pm


<mark style="background-color: #ffd400">Quote</mark>
> asking questions of a global nature

Page: 2
Note: 


<mark style="background-color: #ffd400">Quote</mark>
> The challenge remains, however, for query-focused abstractive summarization over an entire corpus. Such volumes of text can greatly exceed the limits of LLM context windows, and the expansion of such windows may not be enough given that information can be “lost in the middle” of longer contexts (Kuratov et al., 2024; Liu et al., 2023)

Page: 2
Note: And is also inefficient to parse over the whole context for a global query that might be available from a different source.


<mark style="background-color: #ffd400">Quote</mark>
> we focus on a previously unexplored quality of graphs in this context: their inherent modularity (Newman, 2006) and the ability of community detection algorithms to partition graphs into modular communities of closely-related nodes (e.g., Louvain, Blondel et al., 2008; Leiden, Traag et al., 2019).

Page: 2
Note: 


<mark style="background-color: #ffd400">Quote</mark>
> Our default covariate prompt aims to extract claims linked to detected entities, including the subject, object, type, description, source text span, and start and end dates.

Page: 4
Note: 


<mark style="background-color: #5fb236">Quote</mark>
> The index created in the previous step can be modelled as an homogeneous undirected weighted graph in which entity nodes are connected by relationship edges, with edge weights representing the normalized counts of detected relationship instances. Given such a graph, a variety of community detection algorithms may be used to partition the graph into communities of nodes with stronger connections to one another than to the other nodes in the graph (e.g., see the surveys by Fortunato, 2010 and Jin et al., 2021).

Page: 4
Note: Think of community detection via clustering


<mark style="background-color: #ffd400">Quote</mark>
> Given a user query, the community summaries generated in the previous step can be used to generate a final answer in a multi-stage process. The hierarchical nature of the community structure also means that questions can be answered using the community summaries from different levels, raising the question of whether a particular level in the hierarchical community structure offers the best balance of summary detail and scope for general sensemaking questions (evaluated in section 3).

Page: 5
Note: Echoes the global and local time dynamics of the three times theory


<mark style="background-color: #2ea8e5">Quote</mark>
> We selected two datasets in the one million token range, each equivalent to about 10 novels of text and representative of the kind of corpora that users may encounter in their real world activities

Page: 6
Note: 


<mark style="background-color: #f19837">Quote</mark>
> where subsets of the graph structure (G-Retriever, He et al., 2024) or derived graph metrics (GraphToolFormer, Zhang, 2023) are the objects of enquiry, where narrative outputs are strongly grounded in the facts of retrieved subgraphs (SURGE, Kang et al., 2023), where retrieved event-plot subgraphs are serialized using narrative templates (FABULA, Ranade and Joshi, 2023)

Page: 11
Note: 


<mark style="background-color: #ffd400">Quote</mark>
> This “roll-up” operation could also be extended across more levels of the community hierarchy, as well as implemented as a more exploratory “drill down” mechanism that follows the information scent contained in higher-level community summaries

Page: 11
Note: 
