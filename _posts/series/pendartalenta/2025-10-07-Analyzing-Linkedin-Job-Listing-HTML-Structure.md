---
layout: posts
author: Degananda Ferdian
categories: product
series-code: TLNT001
excerpt: a Specific strategy is needed to prepare with new job market during GenAI revolution era. Each person might need different strategy as everyone has different natural talent, skill and also background. But, there is one specific data needed to craft the strategy which is job market evolution data
tags: product linkedin job-hunting
background: GenAI(generative artificial intelligence) is distrupting the world normal. Some job that previously can only be handled by human now can be done by AI Agents. Whitecollar and blue collar worker need to prepare the revolution in order to stay relevant with the job market.
objective: to understand linkedin public joblistings html strucutre as the preparation stage before executing web scrapping.
deliverables: article & illustration
---

# Lay Off Trends Records on FY25 on IT Industry

job market on IT industry is getting dry on the last 2 years. some big names on the industry such as microsoft, AWS and Big 4 consultancies were letting go of their employee.

some noteable workforce lay off

- microsoft laid off up to **15K employee** over 2025
- aws cut **hundreds of job** on 2025
- PwC (one of the Big 4 consultacies) lay off approximately **1.500 US based employee**.
- Intel cut off **21K ~ 25K global workforce**
- and so on.

**scary!** no job safe. even stable companies are also conducting lay off. Some said that it was the result of overhiring during covid period.

another reason is that was due to the AI reshaping the workforce culture as AI can speed up work task completion. If a task usually done by a team of three, they claimed that same task can be done with just one employee equipped with AI tools/agent within same duration.

    an anecdote: it such as shame that software engineer is killing their own job by inventing artificial intelligence!

above anecdote is partially true. Yes they might looks like killing their own job, but it also **creating new line job which revolving on AI capabilities** such as : vibe coder, prompt engineer or even consultant on steroids a.k.a consultant equiped with GenAI tools such as chatgpt, grook, deepseek, gemini  to speedup their deck creation task.

# New Hope

However, during any revolution (eg: industrial revolution, www bubble) there will be a new job lining up. a job that born after revolution happened. 

**the job is still there but its evolving**. the amount of job postings/opening might be decreasing or slowing down and 

## Understanding the job listing evolution

to fully understand the job evolution an analysis is required based on actual job listing data on the market.

&mdash; linkedin is one of the most credible job listing platform.

accessing following links will give the list of job opening across the globe 
    
    target url: linkedin.com/jobs/search?location=Indonesia&geoId=102478259&f_TPR=r86400&currentJobId=4311366551&position=0&pageNum=1

some useful parameter:

1. **location**: can be replaced with target job listing location
2. **pageNum**: for scrapping multiple page as the page is displayed using infinite scroll.
3. **f_TPR**: sorting

these data can be analyzed to understand how the job market is evolving.

Microsoft might already have the data handy (both historical and present data) as they own the platform

however, for an outsider, job listing that posted on linkedin can be scrapped(with some limitations and legal concern, need to be supersafe) for further analysis.

## Whats next?

for any white collar or to be work collar (fresh graduate), it is important to understand the evolution. These insight can be used to job hoping preparation.

job listing evolution driven by AI(Artificial intelligence) distruption will affect the skill demand/job description, employeement type(fulltime or parttime), compensation, geographical distribution of the jobs, hiring criteria, industry demand, organization strucutre and workforce headcount.

all people (not limited to worker on IT industry) need to prepare for these evolution by performing following steps :

1. **Up Skilling** - getting familiar with AI tools and have experience applying these AI agent/tools on daily task. but for software engineer, it is important to understand on how to build/orchestrate/integrate these AI agent
2. **Midnset & adaptability** - AI will drive the work enviroment into fast pace as AI agent will increase (supposedly) productivity on some job area.
3. **Impactful Portofolio** - literally an expereince using (for non SWE) or build an AI agents (for SWE) and showcasing the real impact given to the business.
4. **Domain integratio**n - AI is just a tools domain expertise can't be replaced by AI. Eventhough AI can give explanation about the specific domain, but the years of actual domain expertise will become a differentiator. sample domain: maintenance, logistics, transportation, etc.
5. **Softskill** - period. will never be replaced by AI. for example : critical thinking, leadership, communication, teambulding, negotitation and collaboration
6. **Personal branding** - need to be uplifted and emphasized. even before AI distruption personal branding is already important.
7. **Networking** - stay up to date and maintain the engagement on the professional circle (can be through forum, offline community/club, conferences, etc).

these prepration need a strategy. Each person strategy will be difference as every worker has different skills, target domain, target indsutry, preferences and **talent**

## Talent mapping

a deep reseerch about human talent has been conducted over the last decades. Including studies from gallup, MBTI and so on.

each person natural talents with his technical expertise should be incorporated to the job listing evolution preparation to **sharpen the strategy**.

&mdash; hypotesis: if hardskill is the most require skill to success in white collar world, the balance might be **shifted to softskill** after AI revolution as hardskill gap is minimized/shortened due to of AI tools.

meaning people with leadership, influencing and empathy skill will be preferable during job hunting/listing compared with people with extraordinary hardskill but lack of softskill &mdash; The job market will find its balances.

# Srap linkedin job postings

job search page on linkedin can be accessed without login requirement. Its one key indication that the data can be "scrapped".

job posting data can be accessible without login (/jobs/search/), it mean that **the data is publicly available**. theoritically it will not cause any legal issue eventhough it is against linkedin terms and condition and it is clearly mentioned on the robots.txt that /jobs is prohibited to be crawled for any agent except linkedin own bots.

no guarantee that linkedin will not ban the scrapper IP address, its purely linkedin authority.

# Linkedin Public joblistings HTML Structure

linked in has following public job listings(the one that are not locked behind login/authentication bar) HTML structure with following scraping strategy

1. set the specific job listing to Indonesia region
2. only scrap last 24 hours job listing (time forward scrapping strategy) to avoid getting black listed. (ip public is costly, eventhough its possible to get everything at single scrapping process)
3. scrapping job will be ran once a day (again same strategy to avoid getting banned)

before creating scrapping jobs, the first step is to identify the html structure of the target site.

## Handle the authentication pop up

when the linkedin public job listing page is firstly loaded, it will **show a popup**. 

  linkedin authentication popup on public job search page not always showing. It onyl shown during first time access (cookies is cached)

Following action need to be applied on the scrapping engines.

1. wait for x seconds (at least 3 to 4 seconds) to check if the popup is appeared by assessing whether **button.modal__dismiss** available on the DOM.
2. if the pop up shown, trigger **click the button action to dismiss** or close the pop up
   

```html
<button class="modal__dismiss btn-tertiary h-[40px] w-[40px] p-0 rounded-full indent-0
                  contextual-sign-in-modal__modal-dismiss absolute right-0 m-[20px] cursor-pointer" aria-label="Dismiss" data-tracking-control-name="public_jobs_contextual-sign-in-modal_modal_dismiss">
                <icon class="contextual-sign-in-modal__modal-dismiss-icon lazy-loaded" aria-hidden="true" aria-busy="false"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" class="artdeco-icon lazy-loaded" focusable="false" aria-busy="false">
  <path d="M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z" fill="currentColor"></path>
</svg></icon>
</button>
```

to dismiss the authentication popup, fire click() action on button with class of **modal__dismis**.

## Get the whole joblistings list.

Next is to get the whole ul.jobs-search__results-list. 

&mdash; HTML parsing should not happened on the browser automation script as its prone to get timeout and lost all the content.

parsing will be executed as different pipeline after scrapping process is completed.

all raw data will be saved on storage.

```html
<ul class="jobs-search__results-list">
  <li>
      <div class="base-card relative w-full hover:no-underline focus:no-underline
        base-card--link
         base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:4313267060" data-reference-id="L/M5hIaaBFF5BNKhXdGG0w==" data-tracking-id="5aFeXtjzNu24AcmNZmRpiA==">
      </div>
  </li>
</ul>
```

in order to get the job details, linked in provide an public API. it will return the whole description of the **jobs defined by employer**.

below is the url to get those details.

  https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/[jobPostingId]

replace the jobPostingId with data-entity-urn value that previously retrieved from scrapping process.





