---
layout: posts
author: Degananda Ferdian
categories: jekyll
series-code: HSD001
excerpt: jekyll has a feature called frontmatter configuration on each of the markdown file. Post title can be forced (replace the default one from md file name) by adding title as the parameter
tags: liquid
background: markdown file name by default will be used as the post title on jekyll. this will cause issue on the capitalization. Jekyll will force each of the words (separated by hypen) from the md file name into PerfectCase
objective: to understand how to force replace markdown filename as title into configurable title
deliverables: Article
---

# Incorrect Text Cases on Jekyll Post

All post's source on jekyll is from mark down file (**.md file**)

Unfortunately, the cases(capitalization) used on the markdown file name is not transfered during the compiling of markdown file into HTML convesion by jekyll's engine which is based on ruby.

&mdash; it was jeopardized into perfect cases as shown in below example

**original md filename**: 2025-11-21-Change-Mangement-and-Roll-Out-Strategy-on-CMMS-Implementation.md

**rendered title on HTML**: Change Mangement And Roll Out Strategy On Cmms Implementation

as shown on above images, some terminology(in this cases is CMMS) which is written in full capital on the file name turned into **PerfectCase**

# Root Causes

On the background, jekyll is splitting the file name based on the "-" separator into a sentence without "-" separator. Each of word is generated based on the "-" character separator. 

Then, each of the word will be converted into HTML element with **perfect cases** format.

# The Resolution

to override the default mechanism of jekyll auto splitting file name into post title as mentioned on previous section, a parameter on front matter can be added to force text cases.

for example

```ruby
---
title: "Change Management and Roll-Out Strategy on CMMS Implementation"
permalink: /change-management-rollout-cmms/
---
```

note: dont forget to specify the permalink as some hosting provider cant read uppercase character on the url.