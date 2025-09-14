---
layout: posts
author: Degananda Ferdian
categories: jekyll
series-code: JEKYL001
excerpt: Solve jekyll module dependencies issue between system (local machine) and project specific ruby modules or packages.
tags: jekyll
topics: jekyll
ptype: News
background: Gemfile.lock is used by jekyll to determine the project`s module depedencies. Including the specific required module version. If the module version installed on the system is different with Gemfile.lock module version, mismatch issue will be occured.
objective: to Solve module mismatch preventing jekyll from running.
deliverables: article & illustration
---

# Problem Root Cause

![postimage100](/assets/images/2025-09/jekyllm1.jpg)
[Jekyll server encountered Gemfile module mismatch version](/assets/images/2025-09/jekyllm1.jpg){: .center-image }

> You have already activated [module_name] x.x.x(version), but your Gemfile requires [module_name]  x.x.x(version). Prepending bundle exec to your command may solve this. (Gem::LoadError)

above error message will be shown on the console when ruby tried to start jekyll via serve command with dependencies issues between module specifices on syesm and gemlock.

    jekyll serve

serve command on jekyll will **utilize latest installed package on system** to run jekyll. For example, rake version 13.3.0 installed on system and the rake version specificied on Gemfile.lock is version 13.2.1 will trigger those error.

Installed module version on the system (local machine) need to be **100% (exact) match** with predefined module version on Gemfile.lock
    

# Resolution

There are two ways to solve module versioning dependencies on jekyll. 

1. Quickwin: run jekyll via bundler. It will use Gemfile.lock as the version basline instead of using the system version.
2. Upgrade (Preferred): update Gemfile to match with version reqiured by the system. Because system wide installed package usually are up to date. best for security, performance and integrity.

## Run Jekyll via Bundler

![postimage100](/assets/images/2025-09/jekyllm2.jpg)
[Run jekyll serve via bundler](/assets/images/2025-09/jekyllm2.jpg){: .center-image }

below command will force jekyll serve command to be executed from the bundler. Installed jekyll dependencies package version on system will be forced when running the jekyll project. Hence, error will be solved.

Use following command to run jekyll via bundler

    bundler exec jekyll serve

## Update Module version on Gemfile

On a case where ruby module version installed at the system is newer than defined module version at Gemfile.lock, an update can be made by  adjusting the version number on Gemfile.lock file using bundle update

![postimage100](/assets/images/2025-09/jekyllm3.jpg)
[Update Module version on Gemfile.lock using bundle update](/assets/images/2025-09/jekyllm3.jpg){: .center-image }

execute following command

    bundle update

this will update the "rake" version on Gemfile.lock

![postimage100](/assets/images/2025-09/jekyllm4.jpg)
[Module version is successfully upgraded on the Gemfile](/assets/images/2025-09/jekyllm4.jpg){: .center-image }

Now run jekyll serve usual (without the bundle exec)

    jekyll serve
    
![postimage100](/assets/images/2025-09/jekyllm5.jpg)
[run jekyll serve after fixing module dependencies and versioning issue on Gemfile.lock](/assets/images/2025-09/jekyllm5.jpg){: .center-image }