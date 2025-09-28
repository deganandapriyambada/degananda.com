---
layout: posts
author: Degananda Ferdian
categories: cloud
series-code: HSD001
excerpt: Add custom domain on AWS Amplify 
tags: aws aws-amplify
topics: aws
subtitle: Hello world subtitle of this post
ptype: News
background: by default, apps hosted on AWS Amplify doesnt get a dedicated domain.
objective: to add custom domain on application that hosted at AWS Amplify
deliverables: Article
typora-root-url: ./../../
---

# Built In Domain Registrar for AWS Cloud Native
the easiest way to add domain name on top of AWS Amplify is to use AWS Route 53 due to the native integration between AWS Route 53 and Amazon Amplify. 

    AWS Route 53 used to procure and manage domain. The domain can be used across all AWS native component that exposed to public or internet.

Once we procure a domain name of route 53, the domain can be seamlessly integrated to our AWS Amplify applicaitons.

## Benefit of Buying domain in AWS Route 53

Exposing a server to internet meaning increase the vulnerability of the application due to the open access for public. The server now can be accessed from anyone and anywhere from all over the world. 

    DNS will be managed by AWS Route 53 as well

One of the critical security mitigation to secure public server is to implement SSL certificates. If we buy the domain and register it via AWS Route 53, it will come with free SSL certificate so our domain will be accessed via HTTPS instead of HTTP (unsecure) 

    If a custom SSL needed, it can be configured on AWS Amplify. Generally the certificate provided by AWS route 53 is already sufficient.

# Preparation

## Choosing domain name

Go to AWS console and find route 53 services.

![postimage100](/assets/images/2025-03/amplify-1.jpg)
[Route 53 Services to Register a Domain on AWS](/assets/images/2025-03/amplify-1.jpg){: .center-image }

Define your preferred domain name. Route53 can also check whether the domain name is already taken or still available.

![postimage100](/assets/images/2025-03/amplify-2.jpg)
[Checkout domain name](/assets/images/2025-03/amplify-2.jpg){: .center-image }

once the checkout is completed, please wait until the domain is activated. Activation confirmation will be sent over the email. Usually it took less than an hour.

![postimage100](/assets/images/2025-03/amplify-3.jpg)
[Monitor domain registration status](/assets/images/2025-03/amplify-3.jpg){: .center-image }

You can monitor the domain registration status on request page at Route 53 Services page.

![postimage100](/assets/images/2025-03/amplify-4.jpg)
[Email confirmation on AWS Route 53 domain registration](/assets/images/2025-03/amplify-4.jpg){: .center-image }


they will also sent an confirmation email to indicate whether the domain registration is success or not. 

## Configuring domain on AWS Amplify

to activate the domain into our application that hosted on top of AWS amplify, we need to configure it inside the console.

Go to AWS Amplify and choose the apps which you want to add with a domain name.

![postimage100](/assets/images/2025-03/amplify-5.jpg)
[Select apps](/assets/images/2025-03/amplify-5.jpg){: .center-image }

Move into hosting section and select custom domains, then click add domain button on the right side.

![postimage100](/assets/images/2025-03/amplify-6.jpg)
[Configure Custom domain on Amplify](/assets/images/2025-03/amplify-6.jpg){: .center-image }

Select the domain name that you want to bind with the apps. 

![postimage100](/assets/images/2025-03/amplify-7.jpg)
[Domain Binding](/assets/images/2025-03/amplify-7.jpg){: .center-image }

Done, the domain has been binded. Wait a few minutes and be ready to test (access) it on the browser. To check the configuration status you can view it one the amplify console.

![postimage100](/assets/images/2025-03/amplify-8.jpg)
[Ensure the domain binding status](/assets/images/2025-03/amplify-8.jpg){: .center-image }


## Test the newly configured domain to AWS Amplify Apps

Once the configuration is completed you can now test it.

    type the domain name in browser (https://your-registered-domain-name) and you should be able to access the AWS Amplify site.