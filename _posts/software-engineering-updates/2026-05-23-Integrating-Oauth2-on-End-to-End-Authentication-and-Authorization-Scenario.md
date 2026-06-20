---
layout: posts
author: Degananda Ferdian
categories: software-engineering-updates
series-code: n/a
excerpt: Oauth is standard protocol for authentication data sharing across applications. The most popular oauth is google authentication which used by almost all SaaS platform that available on the market (web/appstore/playstore)
tags: oauth authentication authorization
background: Nowdays digital apps is emerging with human habit and culture. Worker use apps to boost their productivity and students study with the help of note taking apps. More and more people start to integrate digital apps to their daily life thanks to the interconnected authentication between those SaaS platforms.
objective: To understand the underlying mechanism of open authentication system that used by big social media platform
deliverables: Article & Illustration
typora-root-url: ./../../../../
---

# Oauth2 Implementation in Daily Life

Oauth is stands for open authentication framework which become industry standard to allow HTTP requests and obtain some data from 3rd party applications on the behalf of the user. For example, i have a google mail account called as degananda.ferdian@gmail.com, then a SaaS that provide milestone management service has **feature to login to their platform using google account/mail**. They could get my personal information including (but no limited to) avatar, name, etc as long as i (as the google account owner) allow the data to be shared with the SaaS. Such scenario is enabled by oauth2 framework and often called as **delegated authorization process** as the user delegate it to google/facebook/github or any other oauth2 identity provider

The most popular oauth2 implementation are :

1. Oauth2 for user identification such as google oauth, github oauth, microsoft oauth & facebook oauth
2. Securing IAM (identity access maagement) using oauth2

All SaaS provider still develop internal role and permission services as the oauth2 based identity provider like google or github only able to provided limited information about the user and based on the oauth standard, the internal role and permission on SaaS must be separated from the Oauth2 identity provider. Custom permission which specifically used for the SaaS platform still need to be custom developed. 

Oauth2 framework provide secure approval mechanism like user confirmation before the data can be shared from the 3rd party application.

## Oauth2 is Technology Breaking on the User Authorization Management

Before Oauth2 was a thing, almost all SaaS only provide single authroization method which is through login mechanism on their website/application using username and password. None of the has haas integrated authorization method. Forcing user to remember different account username and password for different SaaS/applications.

Nowdays with Oauth2, user can login to almost any SaaS using google account, github account, X account and so on. Instead of using the each of the SaaS authorization method, Oauth2 will generate **access token** that can be used to access the API on that SaaS without worrying about the role and permissions as oauth separating the **SaaS authorization layer** to grant the user permissions **with the oauth credentials**.

The primary output of oauth2 is access token and often formated in JWT (json web token) alongside with other credentials information including: 

1. token expiration - written in integer, which indicate when the access token become invalid
2. scope - scope granted for that specific user.
3. refresh token -  to regenerate access token. useful for "remember me" features.

Oauth identity provider access token will only be used once for authentication process. Once the user is authenticated to SaaS by checking if the email is registered on the database, then SaaS will generate their own JWT to manage the user role and permissons. This is aligned with oauth2 principle to segregate internal (SaaS) role and permissions.

# Integrating Google Oauth with JWT for Authentication & Authorization

Below is the end to end step by step to integrate google oauth for authentication and authorization using JWT (json web token) which starting when user click "continue using google" until the user can access the digital product/SaaS protected resources/endpoint.

there will be total of two authentication process and two authorization process.

## Authentication to google 

| Process              | isCompleted                                               |
| -------------------- | --------------------------------------------------------- |
| Oauth Authentication | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| Oauth Authorization  | No <i class="fa fa-times-circle" aria-hidden="true"></i>  |
| SaaS Authentication  | No <i class="fa fa-times-circle" aria-hidden="true"></i>  |
| Saaas Authorization  | No <i class="fa fa-times-circle" aria-hidden="true"></i>  |

Step 1 - It all started on the login page where user will click on the login with google button. Then the page will be redirected to the google oauth2 endpoint. If its a website, usually a mini pop up will appeared. User have to login using their gmail account and provide **consent** that they willing to share some of their personal information (usually just the avatar and email address) to the SaaS application.

## Authorization using Oauth2

| Process              | isCompleted                                               |
| -------------------- | --------------------------------------------------------- |
| Oauth Authentication | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| Oauth Authorization  | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| SaaS Authentication  | No <i class="fa fa-times-circle" aria-hidden="true"></i>  |
| Saaas Authorization  | No <i class="fa fa-times-circle" aria-hidden="true"></i>  |

Step 2 - Once the user logged in to their gmail account and approve the consent, the page will be redirected again to the SaaS landing page and returing authorization code which idenicate the user has been authorized to access the SaaS website using oauth. Then the SaaS backend will use that authorization code to **generate access token**, if the access token is able to be generated, meaning the authorization process on oauth2 is completed

## Authentication to the SaaS

| Process              | isCompleted                                               |
| -------------------- | --------------------------------------------------------- |
| Oauth Authentication | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| Oauth Authorization  | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| SaaS Authentication  | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| Saaas Authorization  | No <i class="fa fa-times-circle" aria-hidden="true"></i>  |

Step 3 - **JWT** Access token that provided by google auth will be verified, signed and decoded. The decoded google oauth JWT token will contains following value (assuming the user provide the consent for each of the parameter)

1. email
2. name
3. avatar

SaaS backend services then will **check whether the user JWT token email is registered on the database**. If the email is found, then the user is **authenticated at the SaaS platform**.

## Authorization to the SaaS

| Process              | isCompleted                                               |
| -------------------- | --------------------------------------------------------- |
| Oauth Authentication | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| Oauth Authorization  | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| SaaS Authentication  | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |
| Saaas Authorization  | Yes <i class="fa fa-check-square" aria-hidden="true"></i> |

Step 4 - Once the user is authenticated to the SaaS backend services, then internal role and permissions will be assigned to the user. At this stage, a new JWT will be generated by SaaS backend services as the proof that the user has been authroized to access the platform.

and its done.

