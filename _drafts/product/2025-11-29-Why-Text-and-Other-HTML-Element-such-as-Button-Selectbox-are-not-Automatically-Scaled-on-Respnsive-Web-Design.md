---
layout: posts
author: Degananda Ferdian
categories: nodejs
series-code: HSD001
excerpt: there are at least five mandatory component to be added and configured on the express project framework from the environment variables all the way up to the test script.
tags: nodejs express
background: a Proper nodejs express project structure can help the whole team to gain more productivity as the source code are well organized and make debugging easier.
objective: to understand one of references for nodejs with express framework project structure
deliverables: Article
---

# Study Case

Common problem arise during responsive web design CSS(Cassading style sheet) coding is that the DOM element not scaled into correct ratio

for example on current pipenpoof.com (taken at 30 nov, 10 AM jakarta time/GMT+7) following element are failed to scale

## List on Homepage

Last update list which has link inside it failed to scale out during mobile view.

## Date on Homepage

series section has a div list, however the date text size is too small if viewed on mobile view.

## Section title on Homepage

"series list" text above is using section-title class and this class is not properly scaled out on mobile view. 

## Section title on Post Details

there are several element using section-title class:

1. post's series name
2. "deliverables" section name
3. "share the article" section
4. "about the writer" section
5. "leave a comment" section

a lot element with section-title class are not scaled properly on mobile view

## List Markdown of Markdown post

all article visualization on pipenpoof.com are written on markdown. Then, those markdown will be converted into HTML.

ol, li and ul element from markdown list is not scaled out on mobile view.

## H1, H2 of Mardown Post

Heading is not properly scaled on on the mobile view.

## Button on Post Details

there are two button available on post details, they are:

1. share to X (formerly called as twitter)
2. share to linked in

both are too small if viewed on mobile view.

## Writer name and category on related post

both of writer name and post category on related post section (after the post markdown) are not scaled properly on mobile view.

## Pagination Category and Tags View

pagination menu such as previous, next and the page number display are not scaled out properly.

## Footer - build version

looks too small and not properly scaled out.

## Explore Section

catasthropic.. not other word to describe it. all element is jumbled left and right. Not proportional scaled as well.

## Search result on Search page

listed article is not scaled out properly on mobile view.

## Archive page

not neccesary to be fix as it is seldom to be access by user, but lets include it on the fix to avoid user complaint/bad impression. 

# The Root Causes

# The Resolution to Responsive Scaleout
