---
layout: posts
author: Degananda Ferdian
categories: product
series-code: RELEARNSWE02
excerpt: User stories and Epic are the common tools that used to craft a product requirement before handed over to the developer for development. a clear and scoped user stories are needed especially for MVP to avoid overscope as the timeframe is limited and MVP is meant to for testing the water. need to release the product quickly.
tags: iot d2c c2d
topics: iot
ptype: Issues
background: First thing to do before built(develop/code) a product apart from market is research is to define the product user requirement in form of epic and user stories. Those user stories will be then handed over to developer.
objective: to create a sample thought process for shaping user requirement
---

below is the sample of MVP (minimum viable product) Product user requirement that reeady to be built. It has four main key component

1. what is the product
2. why the product matter
3. value proposition
4. MVP scope

# Defining the Product Brief 

KapanRilis.com is a content aggregator platform that focus on tracking release date of hobby releated content.

&mdash; it will focus only for some hobbies at first. Will slowly grow as the product get a traction (even small traction still considered as a win)

# Value Proposition

**pain point assumption**: Most of people use various media (youtube/reddit/discord/news website) to get updates regarding their hobbies. It take **an effort** to open those platform to get the updates related to their hobbies especially if they're in busy season due to work/study/business etc.

kapanrilis aggregating those hobby related content release date especially for upcoming product/item/content/event and **push the information** to them either via email/whatsapp/push notification or in platform notification. So that the  **hobbyist can still get the updates eventhough they're busy with work**. 

# Defining the MVP scope

there will be two things defined on the MVP scope

1. persona - who is the specific target market for the product
2. feature - available product feature during the MVP release. 

## Persona

**Busy working male or female** (white collar/blue collar) that live on Indonesia especially on jakarta and love to spend their time to do their hobbies after the working hour.

## MVP Phase-0 Product Scope

there will be two hobby topics for the MVP (Minimum viable product) based on the writer personal interest (as this is related to hobby, its better to start something based on what you love, you'll be the first user and persona) which are :

| No   | Target Hobby  | Content                                                      |
| ---- | ------------- | ------------------------------------------------------------ |
| 1    | Mobile Gaming | - upcoming new mobile game release date per genre <br />- genre scope: MMORPG, FPS, Hack & Slash, Turn Based |
| 2    | Anime         | - upcoming new anime/anime style movie release for next season<br />- upcoming anime event on JAKARTA |

possible target hobby for next phases (MVP phase-1): Movie & Music Event

# User Stories

User stories is a brief description of the specific product feature that need to be built for specific persona and module.

generally it followed below format

	as a [persona] i want to [the feature description] so that i can [the value added of that feature to the persona]

User stories typically is grouped by **epic** or often called as module which hold several user stories that **shared same purpose.**

## List of User Stories and EPIC Mapping

Based on my experience as tech consultant, usual MVP project should be built and released (either to consumer or internal, depend on the project) within **2~4 monthts.**

&mdash; it is really important to make the MVP scope as small & specific as possible. The goal is to test the water before full blown scaling.

But with the advancement of GenAI technology, the built time can be reduced. a combination of right developer, analyst and AI Tools should be able to speed up and optimize the timeline.

<hr />

below is the proposed user stoes and epic for kapanrilis.com based on following specific persona : white or blue collar worker who are into their hobby (anime/gaming) after working hour and the system admin(content publisher)

| No   | Epic                             | User Stories                                                 |
| ---- | -------------------------------- | ------------------------------------------------------------ |
| 1    | Notification                     | As a hobbyist worker, i want to get notified to my email or mobile phone when my hobby related content is going to be released<br />so that i will not miss any update regarding my hobby |
| 2    | Hobby related content Management | As a hobbyist worker, i want to view all the upcoming my hobby related content <br />so that i can view and adjust my schedule to accomodate my hobby, |
| 3    | User Management                  | As a hobbyist worker, i wanted login on the platform and select my preferred hobby so that all the content is personalized based on my preferences. |
| 4    | Content Curration Management     | As an admin, i wanted to get all the upcoming hobby related released date automatically. so that i dont need to spend effort to fetch all the content manually (it take effort and time). |
| 5    | Content Crawling                 | As an admin, i wanted to currate all the automatically crawled hobby related content. so that i can control the content quality and do some revision/modification. |
| 6    | User Management                  | As an admin, i wanted to access the content curration pages securely. so that i am not worried about any intruder. |
| 7    | Content Curration Management     | As an admin, i wanteed to currate the hobby related content per category. it should be filterable based on the hobby name and timeframe. so it can make my life easier when doing day to day operation of curating the content. |
| 8    | Hobby related content Management | As hobbyist worker, i want to be able to search for any upcoming hobby related event/content/item/product. so that i can find specific information about my hobby |
| 9    | Calendar Integration             | As hobbyist worker, i want to integrate and sync my clendar with the upcoming hobby related content. so that i can viewed on the calendar as well which i usually use to manage my working schedule. |
| 10   | Notification                     | (freemium) as a hobbyist worker, i want to get a suggestion about upcoming hobby related content for **next 1 week** every monday via email or my mobile phone So that i can plan my calendar during that week. |

tip: wrote all the user stories first and categorize it into epic later after (bottom up approach) as its easier starting with the detail then come up with the top-level epic. But some people do love the top-down approach. (depend on the preferences and scenario).

Pros of Bottom Up Approach user stories creation

- more detailed user stories as the execerise is started from detailing the user story without any guiding anchor (epic)

Downside of Bottom Up Approach user stories creation

- might introduce too much epic (overscope)

Pros of Top down approach of user stories creation

- scope (epic) is defined early
- easier to do as the guidance has been set in the first place.

Down side of Top down approach of user stories creation

1. might loses small details as the anchor/guidances has been set

## Landing Page Tagline

the first step to release an MVP to consumer is to have **landing page** !

	define a tagline then craft the landing page to shape that tagline look and feel (UI/UX)

some tagline ideas for KapanRilis.com

- Never miss your next hype
- Track what you love. Right on time
- When remind you when it matters