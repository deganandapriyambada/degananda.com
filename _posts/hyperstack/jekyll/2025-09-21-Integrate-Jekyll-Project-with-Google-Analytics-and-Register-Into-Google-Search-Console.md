---
layout: posts
author: Degananda Ferdian
categories: jekyll
series-code: JEKYL001
excerpt: Google analytics can be used to check the number of blog visitor and understand their bahavior (most frequent vistted page, bouncing rate, new user vs old new user, etc). In other hand, google search console is used to monitor the impression and click rate on search engine. Both are the eyes to monitor the blog growth.
tags: jekyll search-console google-analytics
topics: jekyll
ptype: News
background: a Typical blog website need to be listed on search engine to attract visitor. In fact, organic visitor from search engine (with specific keyword) is the best for ads as they are the right potential cistomer for the advertiser.
objective: to Integrate jekyll (blog) project to google analytics and register it into google search console. 
deliverables: article & illustration
---

# Pre-Requisites

Before integrating google analytics and google search console to the jekyll project, a google account is needed (basically a google email address).

    It is recommended to use single google account for both google analytics and search console to have an easy switch.

There are two version of google analytics available on the market

    a single click on any page url is considered as single event. GA free tier threshold is based on events. 

<hr />

## GA4 vs GA360

1. GA4 (free version of google analytics), free (without hidden) cost with limited number of parameter (max 25 parameter) and event (10 mio per month or +- 300K event per day). M**ore than enough for medium to small blog.**
2. GA360 (enterprise version), paid version, can handle more than **millions events per day** and hundreds of custom matrix.

&mdash; a million of event/click(on the site) per day is already considered as an enterprise. While a small-medium blog with only 1K event per day is already considered a win.

# Integration to Jekyll

Below are the step by step to integrate both google analytics and google search console to jekyll projects.

# Integrate Google Analytics to Jekyll

Assuming the pre-requisites has been met (having a google account). First step is to create a property on google analytics.

    property is a website in google analytics terms. If there will be two website to be integrated, each of it will be a property.

## Create New Google Analytics Property

Login to google analytics platform 

    https://analytics.google.com/

navigate to the bottom left of the page and click the "**cog**" icon (settings)

![postimage80](/assets/images/2025-09/ga1.jpg)
[Click on the cog icon to be redirected to the admin page](/assets/images/2025-09/ga1.jpg){: .center-image }

click on create the button located on top of the admin page and choose property.

![postimage80](/assets/images/2025-09/ga2.jpg)
[Create new google analytics property](/assets/images/2025-09/ga2.jpg){: .center-image }

enter the website/blog name, following property name will be used on this article

    property: playpumpkin

once the property name is specified click next.

![postimage80](/assets/images/2025-09/ga3.jpg)
[Specify the property name](/assets/images/2025-09/ga3.jpg){: .center-image }

set the property category

![postimage80](/assets/images/2025-09/ga4.jpg)
[Playpumpkin is game focused blog, hence it is games industry](/assets/images/2025-09/ga4.jpg){: .center-image }

it is recommended set business objectives to understand web and or app traffic to avoid any neccesary insight as the main purpose of google analytics for playpumpkin is to monitor the user traffic and behavior

![postimage80](/assets/images/2025-09/ga5.jpg)
[Set business objective to understand traffic](/assets/images/2025-09/ga5.jpg){: .center-image }


## Add Javascript code to the jekyll project

choose "web" as the platform as jekyll is web based framework / SSG (static site generation).

![postimage80](/assets/images/2025-09/ga6.jpg)
[Jekyll is SSG framework, choose it as the platform](/assets/images/2025-09/ga6.jpg){: .center-image }

enter the website url.

    note: ensure the blog alraedy has FQDN (fully qualified domain name) and HTTPS ready (require SSL certificate)

and also make sure www is redirected to non wwww (or vice versa, depend on the preferences) to avoid canonical issue later during the google search console setup.

![postimage80](/assets/images/2025-09/ga7.jpg)
[Input blog url, require https and http on the FQDN](/assets/images/2025-09/ga7.jpg){: .center-image }

once the stream is created, click next

![postimage80](/assets/images/2025-09/ga8.jpg)
[Stream is created](/assets/images/2025-09/ga8.jpg){: .center-image }

add the javascript code on the blog. recommended way to put the google analytics java script code on the footer.

ensure the script only accessed during on **production environment**. otherwise it will add false positive information on the visitor count/insight.

<hr />

on the jekyll deployment pipeline configuration, add environment variable called as "environment" and set the value to production.

then create a jekyll condition check liquid syntax to only activate the google analytics javascript if the environment variable is set production.

| No | Env Variable Name | Value |
------------|----------|---------------|
| 1 | JEKYLL_ENV | production | 

![postimage80](/assets/images/2025-09/ga10.jpg)
[JEKYLL_ENV set to production](/assets/images/2025-09/ga10.jpg){: .center-image }


following is sample code for playpumpkin

![postimage80](/assets/images/2025-09/ga9.jpg)
[Google tag id unique per property and FQDN](/assets/images/2025-09/ga9.jpg){: .center-image }


```javascript
{% if jekyll.environment == "production" %}
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QSFKWHCQSF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QSFKWHCQSF');
</script>
{% endif %}
```

done, now deploy the jekyll project to reflect the changes regarding google analytics.

<hr />

## Test if google analytics is integrated successfully.

once the deployment is completed, click the test installation button on google analytics.

    also its recommended to access the webiste and see if google analytics able to detect it.

![postimage80](/assets/images/2025-09/ga11.jpg)
[Test if google analytics can monitor the website](/assets/images/2025-09/ga11.jpg){: .center-image }

if the installation is successfull (it may take time), number of visitor on the google analytics report page will be increased.

![postimage80](/assets/images/2025-09/ga12.jpg)
[Website if successfully integrated to the google analytics as it can already detect the number of visitor](/assets/images/2025-09/ga12.jpg){: .center-image }

# Integrate to Google Search Console

Google search console is used to monitor the website performance on the search engine. It could monitor the keyword associated with the property.

go to below url to access google search console.

    https://search.google.com/search-console

enter the FQRN (without HTTP or HTTPS) as shown below

![postimage80](/assets/images/2025-09/gs1.jpg)
[enter the website domain name](/assets/images/2025-09/gs1.jpg){: .center-image }

## Validate the domain ownership

there are four ways to confirm the domain ownership status, the recommended way is to use DNS record.

select the record type as TXT

![postimage80](/assets/images/2025-09/gs2.jpg)
[Use TXT to validate the domain ownership](/assets/images/2025-09/gs2.jpg){: .center-image }

Go to the domain provider and create new TXT record and paste the value. For this article the domain provider is AWS Route 53.

![postimage80](/assets/images/2025-09/gs3.jpg)
[add new DNS record with type TXT](/assets/images/2025-09/gs2.jpg){: .center-image }

once the DNS record has been added, click verify button on the google search console.

![postimage80](/assets/images/2025-09/gs4.jpg)
[Click the button to start domain ownership verification](/assets/images/2025-09/gs4.jpg){: .center-image }

if the verification is success, a pop up message will appear indicating the property registration on google search console is completed.

![postimage80](/assets/images/2025-09/gs5.jpg)
[Property verification is compeleted on google search console](/assets/images/2025-09/gs5.jpg){: .center-image }

done.

# Add sitemap

to speedup the crawling process, it is recommended to add sitemap.xml path url on the google search console.

![postimage80](/assets/images/2025-09/gs6.jpg)
[Google search now will utilize the sitemap.xml during the crawling process. All the url mentioned on the xml will be crawler eventhough not guarantee the indexability](/assets/images/2025-09/gs6.jpg){: .center-image }

go to search console property , navigate to the sitemaps and add url xml url.

## Next Step

Now that both of googel search console and google analytics has been in plcaed, adding more quality content is the next priority.

&mdash; quality = unqiueness, the depth of content and completeness of the content.  


