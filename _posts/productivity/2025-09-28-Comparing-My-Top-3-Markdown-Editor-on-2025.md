---
layout: posts
author: Degananda Ferdian
categories: productivity
series-code: WRT001
excerpt: Review of top 3 markdown editor that can be used on cross platform (laptop,desktop and mobile) based on the UI/UX & Functionality
tags: product
topics: product
ptype: news
background: Markdown is one of popular text format that widely by some well known product such as github.  markdown is used as the text format. Apart from that, most of software documentation is written using md format. Then it is adopted by non-techie folks for writing.
objective: to review our top 3 MD (markdown) editor that available on the market (free and paid version)
deliverables: article
---

# Why Markdown (MD) is Getting More Popular?

if there are two option regarding text format for scientific writing, blogging or documentation in general, usually LaTeX and MD will be the most considerable text formal as it is widely used.

However, in terms of simplicity, markdown is way simpler, clean and easy to use compared to LaTeX. As someone who wrote his undergraduate thesis document using LaTeX, markdown is definitely easier.

&mdash; LaTeX has complex syntax compared with markdown.

But on scientific writing world such as writing thesis or any kind of academic deliverables, LaTeX still widely used as it is the **norm and standard**. 

# LaTeX is more complicated than Markdown

Creating heading 1, heading 2 and heading 3 on markdown is quite simple. Following symbols ("crash") #, ##, ### are representing heading 1, heading 2 and heading 3.

```json
# Introduction

## Background

### Background Details
```

however in latex to create such headings structure it need to be done in following way

```json
\documentclass{article}

\begin{document}

\section{Introduction}   % H1
\subsection{Background}  % H2
\subsubsection{Background Details}  % H3

\end{document}
```

What about the heading numbering?

&mdash; with **proper MD converter**, mardown heading structure can be turned into strucutured numbered list (1, 1.1, 1.2, 1.2.3 and so on) in form of PDF or HTML.

# My Top 3 MarkDown Editor

There will be three markdown editor that will be reviewed. These are :

1. visual studio code (with plugins for markdown)
2. Typora
3. Mark Text

## Visual Studio Code

Fun Fact: This article is written using visual studio code.

| No | Category | Review |
|---|-------|-----------|
| 1 | UI / UX | Bad for non software engineer as it is built in inside VSC | 
| 2 | Render Markdown Format | Yes, all md syntax will automatically rendered |
| 3 | GUI to insert table/image/etc | Such feature not exist on VSC, but can be automated using additional library |

### Advantages

- integrated with the blog system. For example, if the article will be posted on jekyll based on web, the md is located inside the project folder, meaning editing post markdown and site configuration can be done in single window

### Disadvantages

- wrote the syntax manually, no UI helper to create heading,link, table, etc. Programming style writing.


## Markdown Library for VSC

if combined with **MarkShap** library, the markdown format will automatically rendered into the actual formatting (eg: # will be come h1 in bold).}

install (if not yet been installed) the extension by open following links on any browser.

to start using MarkSharp on visual studio code, right click the .md file and choose open with marksharp

![postimage100](/assets/images/2025-09/md3.jpg)
[edit md files on visual studio code using marksharp](/assets/images/2025-09/md3.jpg){: .center-image }

eventhough the rendering is live on the editor (not in separete view or tab), **all the syntax need to be typed manually**.

below is the markdown syntax used in marksharp exntensions

| Slash Command | Description |
| ------------- | ------------------------------------------------------------------------------------------------ |
| /list         | Insert a new list. You can specify between a numbered list, a bulleted list, or a checked list.  |
| /h1           | Insert an H1 header. You can insert headers of levels 1-6                                        |
| /5x2          | [Premium Feature] Insert a table with 5 rows, 2 columns.                                         |
| /mermaid      | [Premium Feature] Inserts a mermaid diagram, optionally with a pre-configured template           |
| /image        | [Premium Feature] Insert an image into your document                                             |
| /footnote     | [Premium Feature] Insert a footnote into your document. The footnote anchor will auto-increment. |
| /html         | [Premium Feature] Insert an HTML block using one of the preset templates.                        |

note: premium feature such as **automatically write the md syntax** to create table is locked behind paywall. 

frankly speaking md syntax is not hard to memorize and quite easy to write

creating heading

```json

# heading 1

## heading 2 
```

create 2x2 table

```
|column 1|column 2|
|---|------|
|column 1 first row value| column 2 first row value|
|column 1 second row value| column 2 second row value|
```

embed code 

````markdown
```
<b> My HTNL Code</b> or print("My Python Code")
```
````

inserting image

```json
![postimage100](/assets/images/2025-09/md1.jpg)
[image description](/assets/images/2025-09/md1.jpg){: .center-image }
```

<hr />

**However**, same capability can be achieved with just standard visual studio code mark down editor + the preview mode as shown below.

![postimage100](/assets/images/2025-09/md1.jpg)
[Left side is the raw md file, right side is the rendered preview](/assets/images/2025-09/md1.jpg){: .center-image }

## Typora

download and install typora from following links

    http://typora.io/

choose version that match with the target operating system.

![postimage100](/assets/images/2025-09/md4.jpg)
[Typora md editor in action](/assets/images/2025-09/md4.jpg){: .center-image }

### Advantages

the UI looks super clean compared to visual studio code (which is natural because vsc is code editor in the first places). 

The theme can be adjusted from dark or light theme.

super easy to make a text become heading and GUI helper to create md component such as table, iamge are available.

![postimage100](/assets/images/2025-09/md5.jpg)
[Create table on typora](/assets/images/2025-09/md5.jpg){: .center-image }

the gui helper to create table,image, etc will definitely helpful. 

Moreover, the md file strucuture (say we opened a folder with bunch of markdown files) is displayed  **as a tree view and categorized per folder**. 

awesome job typora. Super clean and intuitive UI.

## Diadvatanges

the only downside about typora is that the image not loaded automatically because it demand full path of the image (which will become an issue if the article/md files is intended for SSG such as jekyll/hugoes)

![postimage100](/assets/images/2025-09/md6.jpg)
[Image not loaded on typora](/assets/images/2025-09/md6.jpg){: .center-image }

meanwhile the image rendered properly on vsc.

![postimage100](/assets/images/2025-09/md7.jpg)
[Image loaded on VSC from same markdown files](/assets/images/2025-09/md7.jpg){: .center-image }


Fortunately, it is easy to fix by setting up the image base path on the top of markdown (front matter)

add following lines on the frontmatter

    typora-root-url: ./../

so the new front matter would be : 

```json
layout: posts
author: Degananda Ferdian
categories: genai
typora-root-url: ./../
```

now the image is successfully rendered.

![postimage100](/assets/images/2025-09/md8.jpg)
[Images now loaded properly on typora](/assets/images/2025-09/md8.jpg){: .center-image }

another down side: typora is paid software with 14 days of trial.

### Review on Typora

| No | Category | Review |
|---|-------|-----------|
| 1 | UI / UX | Really Good. simple & clean | 
| 2 | Render Markdown Format | Yes, all md syntax will automatically rendered |
| 3 | GUI to insert table/image/etc | All MD component can be created via UI, super intuitive |

overall conclusion: **worth to buy.**

## MarkText

![postimage100](/assets/images/2025-09/md11.jpg)
[Marktext as open source and free markdown editor, inspired from typora](/assets/images/2025-09/md11.jpg){: .center-image }


The thrid recommendation for markdown editor software is marktext. it is fully open sourced markdown editor and free to use.

Review on MarkText

| No | Category | Review |
|---|-------|-----------|
| 1 | UI / UX | Good (Not as good as Typora) | 
| 2 | Render Markdown Format | Yes, all md syntax will automatically rendered. |
| 3 | GUI to insert table/image/etc | All MD component can be created via UI, super intuitive |

to install MarkText, execute following command depending on the target os (Mac, Windows or Linux)

Install MarkText on **Mac via homebrew**

    brew install --cask mark-text

Install MarkText on **Windows via Choco**

    choco install marktext

Install MarkText on **Linux via Shell Script**

download the MarkText installation script

    https://github.com/marktext/marktext/releases/latest

adjust the permission to allow linux to execute the file

    chmod +x marktext-%version%-x86_64.AppImage

### Advantages

UI wise, marktext is inspired from typora. But in our personal opinion, typora has better UI (more crispy and neat)

MarkText is open source and free. Thats the best advantage of using MarkText. No need to pay a single penny while still able to write md with **GUI helper and the automatic rendering**.


### Disadvantages

MarkText can only be installed using CLI command which is not user friendly for non software engineer.

And Unfortunately markText will be **shutdown by 2026**, hence it is not recommended to use marktext for writings. 

![postimage100](/assets/images/2025-09/md9.jpg)
[MarkText is no longer maintained. Has been depreciated](/assets/images/2025-09/md9.jpg){: .center-image }

However, we can still download and use MarkText, but it is **no longer maintained**.