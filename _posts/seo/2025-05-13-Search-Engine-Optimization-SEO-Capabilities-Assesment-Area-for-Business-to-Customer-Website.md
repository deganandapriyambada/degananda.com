---
layout: posts
author: Degananda Ferdian
categories: SEO
series-code: CUSTOM001
excerpt: the beginning of product development until software engineering phases. Build a hybrid web based and mobile application to manage personal growth milestone. 
tags: SEO GSC Lighthouse
topics: seo
subtitle: Hello world subtitle of this post
ptype: Issues
background: a tech consultant should understand software development life cycle.
objective: to demonstrate end to end software development life cycle with actual execution.
deliverables: article & illustration
---

    Disclaimer: The website referenced on this page has been censored to respect their privacy. Beacuse this article is solely for educational purposes. It will be called as Domain A and Domain 

# Assessment Area

There are three different area of SEO assessment.

- **Technical SEO** : Focus on the scaleability and indexability part. Google has published an extensive guide regarding their crawling method and the back factor behind it. Some critical area that need to be assessed on this part: Sitemap, robots.txt and performance (via Chrome lighthouse)

below are the documentation

    https://developers.google.com/search/docs/essentials

- **On Page SEO** : Search engine will look for specific HTML tags / Website Semantics or syntax to identify the content such as : Header, Meta Tags, Number of word on the article, Quality of the article and keyword usage
- **Off Page SEO** : More releated with go to market strategy (GTM). Usually its involing campaign, number of backlink, integrated social media and domain authority

Responsibility segregation

    Technical SEO and On page SEO should be resposinbility of technical team while Off page SEO is generally should be done by agency/content marketing team.


# Example Of Search Engine Optimization (SEO) Assessment 

Assessment will focus on the performance area of target website.

## Assessment Starting Point

There are several factor of SEO Capability on a website such as : Secured domain (HTTPS), response time until the page is fully loaded, etc. In order to assessment all those stuff would be tricky because there is <b>no official parameter</b> that published by google. They only provide hint (not disclosing the parameter used in teh crawling and indexing algorithm). Hence, SEO optimization is semi guessing.

    There are lot of SEO Assessment tools out there, using official tools from google would be good start.

However, as starting point, google already provided two powerful tools to assessment the SEO capability of a websites. Chrome Lighhouses for performance related and GSC (Google search console) for crawling/indexing related.

there are B2C (Business to Customer) that will be assessed through out the article.

| No | Website | Description |
|:--------:|:-------:|:------:|
| 1 | Website X  |  Newspage | 
| 2 | Website Y |  E-Commerce | 

# Quick Performance Assessment on Website X

![postimage100](/assets/images/2025-05/websitex-ls.jpg)
[Google Chrome Lighthouse assessment Result for Website X](/assets/images/2025-05/websitex-ls.jpg){: .center-image }

## Performance Matrix Breakdown

![postimage100](/assets/images/2025-05/websitex-metrics.jpg)
[Performance Metrix Breakdown for Website X](/assets/images/2025-05/websitex-metrics.jpg){: .center-image }

Website X definitely need some improvement

- FCP (First Contentful Paint) 4 Second

FCP is the time needed before browser to render first piece of element on the DOM. If it took 4 second to render first element, most likely user will close the website before the loading even completed. A huge loss. 

- Speed Index 23.3 Second

A relative time (in average) taken by browser to load of all the element. Usually user will stay on the page if most of the content (especially the critical one) has been loaded. 23.3 second to load everything is too long. definitely need an improvement.

- Largest Contentful Paint 10.8 Second

Indicating biggest resources loading time. On Website X case is uncompressed image with size of more than 3 Megabytes.

- Cummulative Layout Shift 0.854

How long some of the DOM element are jumbled and moving. Not really important parameter. It just an indicator that some element might be move up and down during the resource loading chain. Lower is definitely better for user Experiences.


## RailWay

![postimage100](/assets/images/2025-05/websitex-railway.jpg)
[Assets Loading Railway ](/assets/images/2025-05/websitex-railway.jpg){: .center-image }

Website X has very long runway (up to 160K MS which is equivalent to 160 second). Usually this is andication of ineffective resource loading.

## Good Part

    Context: Performance related 

- CDN (Content delivery network) is used to serve the asset / kilatstorage.id
- Responsive Web Design (RWD)
- HTTP Compression (GZip)

## Findings for website X

Indicator : **10 Mb Page Size** (Big e-commerce such as tokopedia, bukalapak, blibli at most only has 250 kb page size). Bigger page size equal to slow loading time.

    Perspective: Performance on Niche Newspage B2C website that focus on ORGANIC Traffic. Every milisecond is matters.

Risk Register on Performance Assessment

| No | Severity | Description | Impact | 
|:--------:|:-------:|:------:|:------:|
| 1 | Low | Semantic Error | Degraded SEO Crawling efficiency |
| 2 | Medium 1 | Console warnings | Slightly increases page size and parsing time |
| 3 | Medium 2 | Render Blocking | Prevent user to click/open the website or continue the user joureny; Cause ranking drops |
| 4 | High | Content doesnt load (404/403/5xx) | Prevent user to click/open the website; Cause ranking drops |

Below is the findings based on defined risk register above.

| No | Type | Findings | Description |  Severity |
|:--------:|:-------:|:------:|:------:|:------:|
| P1 | Performance / Architectural | (Landing/Category Page) API based content rendering | Content is served via Jquery  Ajax(API Call/XHR/Fetch) before rendered to the frontend. Jquery(jquery.min) base library itself has big size +- 100 kb | Medium 2 |
| P2 | Performance / Architectural | (Article Detail) Server Side rendering | Article is rendered server side (apache, csrf token/authorization) | Medium 2 |
| P3 | Performance | No Images lazy load | All images on the whole pages are loaded at once  | Low |
| P4 | Performance | Uncompresed Image | Image file is too big | Medium 2 |
| P5 | Performance | Non performance optimized image format | Image still use png / jpeg | Medium 1 |
| P6 | Performance | Unminified Css & JS | Raw JS/CSS being loaded | Low |
| P7 | Performance | JS Console error | esource 403, syntax error | Low |

## Recommendation for website X

| No | Findings# |   Recommendation |  
|:--------:|:-------:|:------:|:------:|
| R1 | P1, P2 |  Move from Traditional MPA (Multi page application) to Hybrid Stack. Public Page::SSG (static site generation) Authenticated Page::CSR (Client Side Rendering)  | 
| R2 | P7 |  Apply image lazy laod on all pages and strategize the shimmering | 
| R3 | P4 |  Compress image before publish as low as possible without too much quality reduction. low to mild compression for web and huge compression for mobile | 
| R4 | P5 |  use AVIF and WebP (fallback if the user browser not support AVIF) | 
| R5 | P6 |  Minify JS and CSS | 
| R6 | P7 |  Fix JS Error | 

# Quick Performance Assessment on Website Y

![postimage100](/assets/images/2025-05/websitey-ls.jpg)
[Google Chrome Lighthouse assessment Result for Website Y](/assets/images/2025-05/websitex-y.jpg){: .center-image }


## Metrics Breakdown

![postimage100](/assets/images/2025-05/websitey-metrics.jpg)
[Performance Metrix Breakdown for Website Y](/assets/images/2025-05/websitey-metrics.jpg){: .center-image }

Website X has very long runway (up to 160K MS which is equivalent to 160 second). Usually this is andication of ineffective resource loading.

Website X has very long runway (up to 1000K MS which is equivalent to 1K second). Usually this is andication of ineffective resource loading.

## RailWay

![postimage100](/assets/images/2025-05/tk-railway.jpg)
[Assets Loading Railway ](/assets/images/2025-05/tk-railway.jpg){: .center-image }

## Good Part

    Context: Performance related 

- VueJS SPA (Single page application) with Pre Render / SSR
- Responsive Web Design (RWD)
- HTTP Compression (GZip)


## Findings for website Y

    POV: E-commernce (not heavily relied on organic user; need actual data to validate)

Indicator : **9 mb page size**

| No | Type | Findings | Description |  Severity |
|:--------:|:-------:|:------:|:------:|:------:|
| P1 | Performance | No CDN | All images hosted on same server with the apps  | Low |
| P2 | Performance | No Images lazy load | All images on the whole pages are loaded at once  | Low |
| P3 | Performance | Uncompresed Image | Image file is too big | Medium 2 |
| P4 | Performance | Non performance optimized image format | Image still use png / jpeg | Medium 1 |
| P5 | Performance | Unminified Css & JS | Raw JS/CSS being loaded | Low |
| P6 | Performance | JS Console error | esource 403, syntax error | Low |

## Recommendation for website Y

| No | Findings# |   Recommendation |  
|:--------:|:-------:|:------:|:------:|
| R1 | P1 |  Store Assets to CDN | 
| R2 | P2 |  Apply image lazy laod on all pages and strategize the shimmering | 
| R3 | P3 |  Compress image before publish as low as possible without too much quality reduction. low to mild compression for web and huge compression for mobile | 
| R4 | P4 |  use AVIF and WebP (fallback if the user browser not support AVIF) | 
| R5 | P5 |  Minify JS and CSS | 
| R6 | P6 |  Fix JS Error | 

