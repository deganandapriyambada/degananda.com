---
layout: posts
author: Degananda Ferdian
categories: jekyll
series-code: n/a
excerpt: Jekyll is one of the ruby framework who is fully supported by vercel. It has native integration with github for the automatic deploymnet. Moreoever, vercel CDN cover more than 120+ coutries all over the world which can boost the jekyll based app access latency.
tags: vercel
background: Static site generated web based apps like jekyll has flexibility in terms of the deployment options. Any hosting provider who could host and render html can be used to host jekyll including vercel CDN.
objective: To deploy jekyll based web app on vercel CDN (content delivery network)
deliverables: Article & Illustration
typora-root-url: ./../../../
---

# Jekyll is a Famous Framework to Generate SSG

Jekyll is one of the popular framework to create SSG (static site generation) websites especially for blog and news page with markdown (.md) as the main document. Jekyll will bundle all markdown file with other neccesary files such as images, css and compiled ruby file.

Each of page route on jekyll will have their own dedicated html file as jekyll site is static. No server side rendering means server will sent the ready to consume html directly to the client without any pre-processing. Those mechanism make static site's rendering and loading performance is way faster than SPA (single page application) as the whole html is server immediately and can utilize the power of CDN (content delivery network) ensuring the html file server from the nearest server from client/user.

Jekyll can be deployed on various infrastructure scenario. The best practices is to deploy and host jekyll on CDN (content delivery network) such cloudflare, AWS amplify, netifly, vercal, azure static web apps and so on as jekyll site is a static html files.

## Deploying Jekyll Based Blog on Vercel

go to vercel website then register and login.

	https://vercel.com/

on the vercel dashboard, connect to the jekyll project repository of your choice. 

![Choose continue with github](/assets/images/2026-06/vercel1.jpg){: .postimage80 }
[Choose continue with github](/assets/images/2026-06/vercel.jpg){: .center-image }

on this case github repository will be used and then click install

![Click install](/assets/images/2026-06/vercel2.jpg){: .postimage100 }
[Click install](/assets/images/2026-06/verce2.jpg){: .center-image }

choose the account name 

![Select the github account that has the jekyll repository](/assets/images/2026-06/vercel3.jpg){: .postimage100 }
[Select the github account that has the jekyll repository](/assets/images/2026-06/verce3.jpg){: .center-image }

it is recommended allow specific repository. choose the jekyll project repository unless you want to integrate all of your github projects to vercal. then click install

![Select specific jekyll project repository](/assets/images/2026-06/vercel4.jpg){: .postimage100 }
[Select specific jekyll project repository](/assets/images/2026-06/verce4.jpg){: .center-image }

vercel will automatically detect the framework or programming language used on the repository and click import 

![Import and integrate the repository to vercel](/assets/images/2026-06/vercel5.jpg){: .postimage100 }
[Import and integrate the repository to vercel](/assets/images/2026-06/verce5.jpg){: .center-image }


specify output directory

	_site

specify the build command

	bundle exec jekyll build

specify install command

	bundle install

note: it is recommended to use bundle exec to avoid ruby dependency issues

![Configure the build and target output directory for deployment](/assets/images/2026-06/vercel6.jpg){: .postimage100 }
[Configure the build and target output directory for deployment](/assets/images/2026-06/verce6.jpg){: .center-image }

once all of these three parameter has been set properly, click deploy

wait until the deployment is completed.

done. now the deployed jekyll websites can be accessed.

![Jekyll based website is now deployed and accessible through browser](/assets/images/2026-06/vercel7.jpg){: .postimage100 }
[Jekyll based website is now deployed and accessible through browser](/assets/images/2026-06/verce7.jpg){: .center-image }

if the route pages is returnig 404 on live server but its working fine on local means the permalinks need to be updated. Vercel will not automatically detect the url rewriting. Permalink need to have slash at the end as shown below.

