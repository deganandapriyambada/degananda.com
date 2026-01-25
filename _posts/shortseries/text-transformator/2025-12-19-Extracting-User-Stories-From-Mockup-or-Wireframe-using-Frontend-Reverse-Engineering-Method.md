---
layout: posts
author: Degananda Ferdian
categories: short-series
series-code: text-transformator-001
excerpt: UI Mockup can be reverse enginereed / deconstructed into small workable divison or screen and some relevant part will be grouped into single user story to ensure small, tangible & independent story.
tags: site-updates
background: Apart from business requirement document (BRD), User story can also be derrived from UI wireframe or mockup especially on agile based digital delivery team.
objective: to understand how to create user stories based on website mockup or wireframe
deliverables: article & illustration
---

# Reverse Engineering from UI Wireframe and Mockup

One of methodology to create user story from given wireframe by **reverse engineer the screen**.

However, this method ideally can only be executed by frontend developer who tried to become business analyst and got a task to create user story as it require  understanding about **web development**.

sample use cases: Text-transformator tools to transform sentence into newly formatted sentence based on four modification parameter:

1. **Font Visual** - Adjusting the font weight, add underline, etc
2. **Character Replacement** - repalce word or character with symbol, new word, etc
3. **Character Enrichment** - enrich character or word at certain position
4. **Capitalization** - transform the sentence into Perfect Case, CamelCase, etc

these capabilities then translated into following screen

![postimage100](/assets/images/2025-12/text-transformator1.jpg)
[Text transformator tools mockup](/assets/images/2025-12/text-transformator1.jpg){: .center-image }

a typical business analyst without knowledge or experience on web development will definitely create **single user story** from that one screen.

# Deconstruct Wireframe or Mockup into User Stories

Reverse engineering on context of web development is an activity to deconstructing / decompose an existing mockup or screen into smaller pieces **to understand how it work**.

a regular BA dont understand **how to built it**. Hence, most logical way to structure it into user story is by creating one story per screen and then have the developer assess it during story point discussion.

Nothing wrong with this approach, its just waste the developer time to detailing out the user story's task later during design sprint.

If the business analyst can already divide and conquer the screen into smaller pieces of developable user stories from the beginning, it will save the team time and theoritically increase productivity.

## Deconstructuring the Screen

note: this decontruction activity might be dependent on the developer preferences. 

There are at least five "division" (div) component on the screen which group some element into single block.

![postimage100](/assets/images/2025-12/text-transformator2.jpg)
[Header part](/assets/images/2025-12/text-transformator2.jpg){: .center-image }

First part is the website header. Consist of the website title and jargon.

![postimage100](/assets/images/2025-12/text-transformator3.jpg)
[Transformation option toggle](/assets/images/2025-12/text-transformator3.jpg){: .center-image }

Second part is text input along side with the toggle to enable which transformation parameter.

![postimage100](/assets/images/2025-12/text-transformator4.jpg)
[Core transformation logic](/assets/images/2025-12/text-transformator4.jpg){: .center-image }

Third part, the most complex one is transformation action which triggered after user click the buttom

![postimage100](/assets/images/2025-12/text-transformator5.jpg)
[New Formatted Text Visualization](/assets/images/2025-12/text-transformator5.jpg){: .center-image }

Fourth part is the output visualization and last part if the website footer.

![postimage100](/assets/images/2025-12/text-transformator6.jpg)
[Footer part](/assets/images/2025-12/text-transformator6.jpg){: .center-image }

If the frontend code is applying reuseable component, then each of the divison usually will managed separately on different source code file, allowing developer to work on different screen part **in parallel**, eventhough there is dependencies from one division to another as it can be solved using stub / agreed interfaces.

## Converting Each of the Web Divison into User Stories

"INVEST" is a wellknown principle to write user stories which stands for independent, negotiable, valueable, estimable, small and testable.

Breaking down the screen into small web divison will ensure the user stories follow two out of six INVEST principle which are **small** and **independent**, because it has been divided per smallest **workable web divison**.

below is the extracted user stories from these five smallest workable web divison.

| No | User Stories | Smallest Divisino Coverage |
|---|---|--|
| 1 | as a user i wanted to view the tools name and all available information <br /> related to the tools so that i can understand about the tools | Header & Footer |
| 2 | as a user i want to transform the text visual, re-capitalization, replace some character or words <br /> and add new character or word into it <br /> so that i can reduce my effort when doing my job as writer | Transformation Toggle & Core Transformation Logic |
| 3 | as a user i wanted to copy the newly formated text <br /> r so that i can paste it into my work document | New Formatted Text Visualization |