---
layout: posts
author: Degananda Ferdian
categories: short-series
series-code: text-transformator-001
excerpt: text transformation on website can be achieved by combining multiple tools including HTML, Javascript and CSS
tags: site-updates
background: in order comply with certain regulation regarding text format for example, legal writing only allow italic font (apart from the normal text)
objective: to understand avaialble text transformation syntax for web design
deliverables: article & illustration
---

# Text Transformation

Text transformation for website is a process to modify (but not limited) text visual, capitalization and character/word replacement

1. **Font Visual** - focus on modifying the character, word or whole sentence physical visual such as bold, italic
2. **Sentences Capitalization** - change one or more character size
3. **Character/word Replacement** - change from one alphabet to numeric, alphabet to alphabet or alphabet to symbol etc

## Font Visual

There are at five available font visual modification that can be applied on modern website in form of HTML and CSS including bold, italic, strike through, underline, superscript and subscript.

1. Bold - **cheese burger is good**
2. Italic - <i>cheese burger is good</i>
3. Underline - <u>cheese burger is good </u>
4. Strikethrough - <s>cheese burger is good </s>
5. Superscript - <sup>cheese burger is good</sup>
6. Subscript - <sub>cheese burger is good</sub>

Both superscript and subscript are widely adopted for writing formula across multiple field of study from mathematics, physics, biotechnology, etc and has been adopted on all modern browser.

## Capitalization

"Character" is single letter, number or symbol, "Cord" is combination of one or more character into meaningful thing and "Sentence" is combination of more than one words.

Generally, there are around four variant of sentence which widely used on most digital media.

**Sentence case** - Capitalize first letter on the sentences. Most common pattern used on blogs, newspaper, publications, etc.

for example


    Cheese burger is good

**CamelCase** - Capitalize first character of each word without spaces

for example

    CheeseBurgerIsGood

**Perfect Case** - Capitalize first character of each word with spaces

for example

    Cheese Burger Is Good

**kebab-case** - replace entire "space" within the sentences with "dash" (-)

for example

    cheese-burger-is-good

## Character or Word Replacement

Character replacement will replace target character with new character. It can be symbol, number or alphabet.

Word replacement will replace target word with new word. Usually word replacement is **case sensitive**, "Burger" is different with "BURGER" and also different with "burger" depending on the text-transformator tools.

Both character and word repalcement can be combined to create desired text transformation, and also replacing a character with two or more character is called as **enrichment**.

for example, on PHP mysql_real_escape_string() function, it will prepending backslash character "\" on some characters which has potential to be used for SQL Injection such as  ' (single quote), " (double quote), "\n" (new line), etc.

# Summary

below is the available and viable text transformation syntax on web

| No | Category | Transformation Type | Syntax |
|---|---|---|---|
| 1 | Font Visual | Bold | {{ "<b>Text</b>" | escape }} | 
| 2 | Font Visual | Italic | {{ "<i>Text</i>" | escape }} | 
| 3 | Font Visual | Underline | {{ "<u>Text</u>" | escape }} | 
| 4 | Font Visual | Strikethrough | {{ "<s>Text</s>" | escape }} | 
| 5 | Font Visual | Superscript | {{ "<sup>Text</sup>" | escape }} | 
| 6 | Font Visual | Subscript | {{ "<sub>Text</sub>" | escape }} | 
| 7 | Capitalization | Sentece case, kebab-case, Perfect Case, CamelCase | Custom Javascript | 
| 8 | Character/Word Replacement | Word/character repalcement and enrichment | Custom Javascript | 