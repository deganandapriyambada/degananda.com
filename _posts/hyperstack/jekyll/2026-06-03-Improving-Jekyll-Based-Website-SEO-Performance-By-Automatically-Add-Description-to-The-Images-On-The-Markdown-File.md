---
layout: posts
author: Degananda Ferdian
categories: jekyll
series-code: n/a
excerpt: Just like text which can be crawled by google bot, image can also be indexed by search engine as long the image has readable description. Webmaster need to put the image description under the alt parameter of the html images.
tags: seo
background: Google image search still become one of the most visited image search engine. Despite the growing of LLM and AI based search engine like chatgpt, claude or grox, people still use google search to find related images. 
objective: To understand how to add alt text on jekyll markdown
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# SEO Still matter in 2026

Googling (an activity to find some references regarding specific keyword through search engine) is not "dead". Majority of the population still prefer to use search engine is dropping while a some portion is also use chatbot style search engine such as chatgpt, gemini or grok.

According to the sparktoro report at 2025, 97% of users (respondent) still using google search and 56% of the user (respondent) also use chatbot style search engine (on this case is chatgpt). It means that, people still using google search as their main search engine to find references and at same times, some of them are also using chatgpt. So they both google search and chatbot to find information from the internet.

Hence, **SEO (search engine optimization) is still critical matters** for any websites. People will never abandon convetional way to find information on internet due to the **imperfections** of AI. LLM might give people the information quickly, but most of the time, we have to find backing up article or references which can be found using traditional search method.

## The Importance of Image Description for SEO

![Google search crawler wil read image description throught the img.alt parameter](/assets/images/2026-06/seo0.jpg){: .postimage100 }
[Google search crawler wil read image description throught the img.alt parameter](/assets/images/2026-06/seo0.jpg){: .center-image }

Organic visitor can came not just from google text search, but it also can also be originated from image search. While text search still remaining as popular searching method, people stil use image search to find specific references especially if they wanted to know visual references such as product screenshot or photo. According SEO.ai studies, approximately 1 billion people still doing image search on google everyday. 

Thus, boosting website's SEO performance for image search can increase the likelyhood of attracting new users or visitor. Apart acting new leads generator, image SEO can also improve overall SEO performance because the image will be crawlable throught the alt description and it will increase the number of indexed content. 

note: google officially mentioned on their documentation that images is one of the file type that can be indexed by their search engine.

# Add Alt Text on Images For Jekyll Based Website

There are two ways to add jekyll image alt. First method is by embedding html code for showing images  directly on the jekyll markdown files

## Embed IMG HTML and add alt text code on the markdown

Use following code to embed image on jekyll posts

{% raw %}
```html
<img src="/assets/images/2026-05/auth.svg" alt="Decoupling authentication and authorization services with business logic services instances">
```
{% endraw %}

- replace the "src" parameter with image location. If its is stored under the asset folder, absolute path towards the asset folder like "/assets/path/image.jpg" is sufficient. Otherwise, if the image is stored on external imagehosting like imgbb, full domain name and the absolute path is required.
- put the image description under "alt" parameter.

Google search crawler now will read the image alt description and add it to their indexes. 

Note: the image is searchable via google image search. Not the usual text based search.

## Embed IMG and add atl text using standard markdown syntax for jekyll

Using standard markdown syntax to embed image on jekyll post is recommended. Because it wil allow non-browser media to display the image properly. For example: if the md file is also hosted on github, the image will automatically rendered. Second reasons is that the markdown syntax to display image is easier to be memorized compared with the html one.

below is the markdown code to display image as well as the alt text using markdown syntax

```json
![image description!](/assets/images/2026-05/helloworld1.jpg){: .postimage100 }
```

replace the first bracket [] with image description or the alt text and change the image path with same rules like the previous method ( if internal images: add the absolute path & if its external hosted image add the full domain url as well as the absolute path of the image location )