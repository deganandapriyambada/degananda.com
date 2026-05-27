---
layout: posts
author: Degananda Ferdian
categories: functional-workflow
series-code: n/a
excerpt: Each user persona has must have different user onboarding method. Social media platform who target gen-Z rqeuire fast user onboarding method as they prefer simplicity. Hence, SSO (Single sign on) using email or social media account is preferred.
tags: user-onboarding
background: User onboarding journey is one of critical process in any digital product because it directly affect the number of leads (n potential user who shown interest to the product) generated.
objective: To understand the differences method of user onboarding and desgining manual user onboarding flow
deliverables: Article & Illustration
typora-root-url: ./../../../
---

# User Onboarding Definition

User onboarding is a series of process to register user information to the system database along side with their preffered login method and credentials. The most popular login method is SSO (single sign on) using social media account such as gmail, facebook, instagram or X. Many people prefer that method because of the quick process. They just need to select their social media account and all of the needed personnal information will be automatically retrieved during the user onboarding process.

Depending on the type of the digital product, user onboarding is an essential steps before user can use the product. For example, on banking system, user can't use the mobile banking unless they have been registered on the database because account number is required. In otherhand, digital product like news platform, blog, forum not require registration for the user to view the content because they need as much traffic as possible to sell the article. Putting up onboarding as pre-requisite will hinder the user to view the content/article.

## The Dilemma of User Onboarding Process for Potential Customer

Complex user onboarding process is a nightmare for the sales and marketing team. Based on start up research journal study, **70% of users will abandom their product trial attempt** if the onboarding process take longer than **20 minutes**. Imagine filling up a super long registration form with complicated rule such as image must be less than 25 kb, middle name must be filled or asking for too personal information like birth date or birth place. Such experience must be a nightmare for majority of users unless its government owned platform for administration purposes.

Nowdays, most digital product simplify and speedup their onboarding process by incorporating social media SSO (single single on) authentication method.

However, even SSO is also introducing new dilemma. What if the user prefer to have the highest degree of anonimity? sure that they can just create alternative email and use that for the SSO. But the SSO provider still track the login attempt, login history to that digital products.

	Thus, conventional user onboarding using email and password (not SSO) is still needed in modern digital world for 100% anonimyty.

## Type of User Boarding Journey

There are at least three user onboarding journey on that commonly used in modern digital product such as:

- **SSO (Single sign on)** - User will be login using their social media or email account and the digital product will automatically retrieve the neccesarry personnal information (usually only the email addresses). SSO is the fastest onboarding process.

- **OTP (One time password)** - User will input their email or phone number (usually a phone number, as email login already catered under SSO method). The digital product/service provider will send out and OTP including with onboarding links. 

- **Manual registration** - User will need to fillup a form including their email addresses, username and password. Due to the manual data input, this method will take the longest time compared to other user onboarding type.

Each of user onboarding journey has its own advatanges and disadvantages. It is recommended to have all of these three onboarding scenario to increase the chance to get convert a guest into actual user as they can choose their own preferred onboarding process.

For gen-Z who prefer simplicity and speed will probably use SSO method. While, millenials (gen-X) or boomers who has concern with their anonimity will probably choose thrid method (manual registration). 

## Manual User Onboarding Process Flow

![postimage100](/assets/images/2026-05/user-onboarding2.jpg)
[Manual user onboarding using username and password swimlane diagram](/assets/images/2026-05/user-onboarding2.jpg){: .center-image }

Below is the manual user onboarding process with **minimum required personal data** required. 

1. Open up user registration page
2. Input email address
3. System will validate if the email format is valid
4. System will validate if the email has been registered or not
5. Input nicknames (for more personalization, optional)
6. Input password
7. Verify the password by asking the user to re-input the password
8. Ensure the password are match 
9. Check password strength
10. Send out account activation email
11. User click the link on their email to activate their account
12. Done

## ERD Adjustment to Cater Manual User Onboarding Journey

the ERD (Entity relationship diagram) need to be adjusted to cater user information and as well their login credentials. 

User account credentials details like email and password need to be stored on the databases. No need to worry about security as long as the the stored password is **hashed with salt**. Assuming the database is using RDBMS, such credentials must be separated from the user table given following conditions:

1. one user can have multiple login method (for future proof). Say user A can login using email and password as well as using SSO.
2. User unqiue identifier will be determined by **email**.
3. Same email can be used for SSO (as long as the SSO provider acknowledge that email address) and username+password login
4. Single account id for both email (incase the email is valid for SSO and username+password login)

above conditions can be modelled through following logical ERD.

![postimage100](/assets/images/2026-05/user-onboarding1.jpg)
[high level logical ERD for manual user onboarding using username and password](/assets/images/2026-05/user-onboarding1.jpg){: .center-image }


Authentication table will be an intermediary table between user and authentication_type as they have many to many relationship / cardinality. Password and sso_id will be **nullable** because one email can have more than one authentication_type. For example, user A is login only using SSO, means the password will be null and the sso_id will be filled. Another scenario where user B login usign both method (SSO and password), meaning the authentication.password and authentication.sso field for that particular user id will be both filled up.