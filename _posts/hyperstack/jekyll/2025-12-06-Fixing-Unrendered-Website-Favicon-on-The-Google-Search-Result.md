---
layout: posts
author: Degananda Ferdian
categories: web-design
series-code: HSD001
excerpt: Google has their requirements for favicon design and implementation. Web master need to follow the google guidelines. Otherwise their website favicon might not be rendered on the google search result.
tags: favicon google-search
background: Logo is one of the important brand identity of a product. If the logo failed to display on the google search engine result, it might affect on the potential revenue as the user might hinder to click the website because they think its not legit due to the unavailability of favicon
objective: to understand how to fix unrendered favicon on google search result
deliverables: Article
---

# What is Website Favicon?

Webiste's favicon is an icon which shown beside website title. Some browser render these favicon on left side of the website title and some render it on the right side. The usual browser section to place these two element (favicon and title) is on the **browser tab**. 

For example, on google chrome browser, website favicon is rendered on left the side of the website title.

same goes for the safari browser, it also render the favicon at the left side of the website title.

## The importance of favicon

Branding is one of the key activities for any product to have good sales and perception on the market. It can be achieved by creating a insightful and meaningful logo. 

Research found that human mind reaction towards brand is unqiue. It tend to remember the brand logo rather than the brand name it self. For example, when people mention apple, they automatically remember the phenomenal cracked apple logo.

Logo need to be put on several different area and media to increase the brand engagement with their potential customer. Website favicon is one of mandatory area to place the logo.

## The importance of having brand or product logo as favicon

as mentioned before, website favicon is one of the best places to advertise the brand logo. It has two main reason:

1. Displayed on the **user's browser tab**. Enforcing user to remember the brand identity
2. Displayed on the **search engine result** (google, bing, etc).
3. Displyaed on the **GenAI text based chatbot as response references**. for example: chatgpt, grok, gemini, etc.

for many startup or new product, website favicon or the product logo will be the one that going to be remembered by the potential user/customer instead of the brand name especially in this digital era where most people find information from GenAI and some portion still use conventional search engine.

below are the three possible scenario where the favicon will be rendered and perceived by user

browser tab

![postimage80](/assets/images/2025-12/favicon2.jpg)
[favicon displayed on browser tab](/assets/images/2025-12/favicon2.jpg){: .center-image }

search engine result

![postimage80](/assets/images/2025-12/favicon3.jpg)
[favicon displayed on google search result](/assets/images/2025-12/favicon3.jpg){: .center-image }

as references of GenAI responses

![postimage80](/assets/images/2025-12/favicon4.jpg)
[favicon displayed on genAI responses as references, if asked by the user on the prompt](/assets/images/2025-12/favicon4.jpg){: .center-image }

# What if my website doesnt have favicon properly rendered?

&mdash; it could lead into potential lead lost as people tend to skip a **website which doesnt have a favicon**.


![postimage80](/assets/images/2025-12/favicon1.jpg)
[favicon of pipenpoof website not rendered on google search](/assets/images/2025-12/favicon1.jpg){: .center-image }

for example, currently pipenpoof.com doesnt have any logo displayed on the google search result.

Imagine a condition where you try to search something on google and there are two search result from different websites.

One website has favicon rendered and the other doesnt have favicon.

Eventhough both of website has https(secured connection), The user will automatically choose then one with favicon because:

1. looks more profesional & legit.
2. most likely not a scam website as it as proper logo

## Why favicon is not rendered on the google search result?

google has following favicon recommendation requriement specifications that need to be followed by all webmaster / developer

1. favicon file name is set favicon.ico and placed on the root directory
2. 1:1 aspect ratio
3. greater or equal than 48x48 and maintain the aspect ratio (48x48, 96x96, etc). 48x48 px is recommended
4. formatted with .ico

favicon implementation standards

place following code snippet on the head html tags

```html
<link rel="icon" href="/path/to/favicon.ico">
```

add some backup favicon link as well

```html
<link rel="icon" type="image/png" href="/favicon-48x48.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

so in total, there will be **three link to the favicon**. require two format of favicon (ico and png). these two format are the most standard and safe image format.

```html
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/favicon.png" />
```

## What happened with pipenpoof.com favicon

below is the compliance checklist of pipenpoof website favicon towards google favicon standard.

| No | Google Search Favicon Requirements | Pipenpoof Favicon Compliant |
|---|---|---|
| 1 | 48x48 size | X - non compliant |
| 2 | proper link rel | X - non compliant |
| 3 | alternative link rel | X - non compliant |
| 4 | ico or png format | X - non compliant |
| 5 | favicon located at root directory | X - non compliant |

as shown above, there are 5 non compliant requirements.

## The Resolution: Fixing the rendering of favicon on google search

**first step** - edit pipenpoof icon size into 48x49

![postimage80](/assets/images/2025-12/favicon5.jpg)
[pipenpoof logo on 48x48 pixels size](/assets/images/2025-12/favicon5.jpg){: .center-image }


**second step** - generate two format of the icon (png and ico, previously was svg)

![postimage80](/assets/images/2025-12/favicon6.jpg)
[two types of favicon image, png and ico](/assets/images/2025-12/favicon6.jpg){: .center-image }

**thrid step** - place the favicon on the root directory

![postimage80](/assets/images/2025-12/favicon7.jpg)
[two favicons are placed on website project root folder](/assets/images/2025-12/favicon7.jpg){: .center-image }

**fourth step** - add three link rel (including the alternatives link as backup, just to be safer)

```html
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/favicon.png" />
```

done. theoritically google will adjust the rendering process of pipenpoof favicon on their google search result in next days or weeks (depend on the google crawler schedule)

note: it is recommended to restart crawling to the website, this can be done via google search console.