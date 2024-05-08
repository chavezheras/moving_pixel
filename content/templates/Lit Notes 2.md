---
citekey: {{citekey}}
aliases:
- "{%- if creators -%}
        {{creators[0].lastName}}
        {%- if creators|length == 2 %} & {{creators[1].lastName}}{% endif -%}
        {%- if creators|length > 2 %} et al.{% endif -%}
    {%- endif -%}
    {%- if date %} ({{date | format("YYYY")}}){% endif -%} 
    {%- if shortTitle %} {{shortTitle | safe}} {%- else %} {{title | safe}} {%- endif -%}"{% if itemType == "bookSection" %}
book-title: "{{bookTitle | replace('"',"'")}}"{% endif %}
title: "{{title | replace('"',"'")}}"
{%- set camelRegex = r/([a-z])([A-Z])/g %}
{%- for type, creators in creators | groupby("creatorType") %} 
{% if creators.length > 1 %}{{type | replace(camelRegex, "$1 $2") | lower | trim}}s:{%- for creator in creators %}{% if creator.name %}
- {{creator.name}}{% else%}
- {{creator.firstName}} {{creator.lastName}} {% endif %}{%- endfor %} {% else -%}
{{type | replace(camelRegex, "$1-$2") | lower | trim}}:{%- for creator in creators %}{% if creator.name %} "{{creator.name}}"{% else%} "{{creator.firstName}} {{creator.lastName}}"{% endif -%}{%- endfor -%}{% endif -%}{% endfor %}
date: {% if date %}{{date | format("DD MMMM YYYY")}}{% endif %}
item-type: {{itemType | replace(camelRegex, "$1 $2") | title | trim}}
publisher: {% if publicationTitle %}"{{publicationTitle}}"{% else %}"{{publisher}}"{% endif %}
{%- if notes.length > 0 -%}
{%- set longShortCutoff = 20 -%}
{%- set shortnotes = [] -%}
{%- set longnotes = [] -%}
{%- for note in notes -%}
{%- if note.note | wordcount <= longShortCutoff -%}
{%- set shortnotes = (shortnotes.push(note.note), shortnotes) -%} 
{%- else -%}
{%- set longnotes = (longnotes.push(note), longnotes) -%}
{%- endif -%}{%- endfor -%}{%- endif -%}
{%- for comment in shortnotes %}
{%- if comment and loop.first %}
comments:
{% endif -%}
- "{{comment|replace('"',"'")| replace("\n"," ")}}"{% endfor %}
tags: {% if allTags %}{{allTags}}{% endif %}
{% if DOI %}
doi: https://doi.org/{{DOI}}{% endif %}{% if itemType == "book" %}
ISBN: {{ISBN}}{% endif %}
draft: true
---

> [!Cite]
> {{bibliography}}

> [!LINK] 
> {{url}}

> [!Abstract]
> {%- if abstractNote %}
> {{abstractNote}}
> {%- endif -%}.
> 
# Notes

## Annotations

{%- macro calloutHeader(type, color) -%}  
{%- if type == "highlight" -%}  
<mark style="background-color: {{color}}">Quote</mark>  
{%- endif -%}
{%- if type == "text" %}  
Note
{%- endif -%}  
{%- endmacro -%}

{% persist "annotations" %}
{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}
{% if newAnnotations.length > 0 %}
### Imported: {{importDate | format("DD MMMM YYYY h:mm a")}}

{% for a in newAnnotations %}
{{calloutHeader(a.type, a.color)}}
> {{a.annotatedText}}

Page: {{a.page}}
Note: {{a.comment}}

{% endfor %}
{% endif %}
{% endpersist %}

