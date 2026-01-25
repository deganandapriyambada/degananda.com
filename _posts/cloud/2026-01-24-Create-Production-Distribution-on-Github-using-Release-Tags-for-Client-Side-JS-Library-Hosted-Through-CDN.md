---
layout: posts
author: Degananda Ferdian
categories: git
series-code: n/a
excerpt: Tags is a checkpoint from source code history on git repostiroy that sliced based on the latest commit on specific target branch. If a checkpoint is taken from release branch, the tags can be considered as production artifact or package distribution
tags: git github release tags 
background: Production source code need to be tracked from a specific measurement point. Some organization use release branch and the others are using release tags. which one is better? and how release tags going to help the IT department streamlining their working.
objective: to understand how to create tags and release tags for project distribution on github
deliverables: Article & Illustration
---

Tags on github (or any versioning control system) is a specific **marked** point of the repository history for some particular reasons, commonly used to determine source code release for deployment team or public users (if the project is opensources).

Users (end user or deployment team or CI/CD pipeline) can download any specific release tags (for example 1.0.0) on the git without worrying about manual checkout and source code compilation from the target branch, as the distribution file such as .war (java) or the javascript dist file are also included during release tags creation.

# Current Practices in Industry: Release Tag vs Release Branch

Not all projects implement release tagging for their CI/CD pipeline, it all down to the deployment strategy which sometimes depend on the nature of the project, project purpose, project scope and so on.

For example, an opensource project will require git release tagging in order to distribute the application to the end users. It will consist both of the binary file and the sources code.

In otherhand, for small to medium IT department that managed legacy enterprise application might opted to not use release tags due to the complexity of managing multiple release version and **treat release branch as the production source of truth** for faster iteration. They often follow these pattern:

    Pull from develop branch -> Development & unit testing -> Push Code to develop branch -> Merge develop to release SIT -> perform integration testing -> merge to release PROD -> deployment to production

&mdash; this pattern ensure rapid and fast product shipping to support their business user needs. 

Moreoever, when a hotfixes is needed, these pattern will ensure the fix can be deployed quickly (merge hotfixes to the release branch) and will be consolidated later.

In contrast, release tag for production distribution is a must as the **production source of truth is treated as the release package artifact** which often found in large IT department for big enterprise organization with information technology (IT) as their core services such as banking, telco and fintech.

on this pattern, the CI/CD or deployment pipeline wont triggered after the release branch, but instead it will determined by the target release tags.

## Benefit of Utilizing Release Tag & Treat It as Production Artifact

Imagine managing system dependency for more than 10+ legacy application with lets say five of them are inhouse build and the rest are ready to use packaged software, it would be total headache without a production artifact with specific release tagging.

Key benefit of having artifact with release tagging is the traceability of the dependency across all system (of course the other interdependent system must implement the same pattern for the release tagging).

The development lead or release manager now can determine the required artifact version for all system at specific release time depending on the SIT(system integration testing) report.

note: the system version & environment details used during SIT testing must be documented

example: 25 january production release for integration with new payment gateway

| Application | Artifact Version |
|---|---|
| A | 1.0.1 |
| B | 5.0.2 |
| C | 11.0.4 |
| D | 35.0.8 |

what a properly managed interconnected system dependency management which theoritically reduce the deployment risk.

**#What if something goes wrong and require rollback?**

downgrading the artifact version would be seamless as there is no need to recompile the source code.

**#How to manage the environment variable**

there are several ways to maintaining different environment variable for the artifact. However, the first rule of thumb, artifact should be generic (can be used for all environment, regardless its for SIT/Performance testing/production)

Environment variable can be injected to the artifact using various method (depending on the programming language used, framework, etc).

for example, the most common way is to store the environment variable outside the source code (eg: using azure keyvault) or treat the enviornment variable as artifact itself. Each system must call or integrate to that artifact in order to get the environment variable.

# Creating release tags and artifact on github

below are the steps to create release tags and artifact on github specifically for javascript project, but the flow/steps can be applied to any projects, only differences is the binary creation step.

## Branching Strategy for Release Distribution

While there is no golden standard where to base the source code, there are two mainstream to be choosen:

1. release branch
2. main/master

it will comedown to the organization preferences. Generally, for an enterprise project, release branch is a must as it need to maintain different environment compatibility (if not opted for injecting environment variable through artifact or external system).

for smaller project, especially for small team, release branch is not needed as it will only adding more complexity.

## Creating Distribution Binary 

a common release distribution which widely adopted on software engineering industry generally should include those files:

1. source code
2. execute able binary files (eg: exe, dmg, jar, war, javascript.dist, etc)

on this case, binary files must will placed under "dist" folder

create dist folder

    mkdir dist

run the compilation script to generate the binary file 

    npm run build (on our cases)

ensure above command is configured to place the binary file on dist folder.

for example, if the project using esbuild (javascript project), esbuild can make the binary file ready for production by executing following command:

| No | Command Param | Purpose | 
|---|---|---|
| 1 | Bundle | Bundle all source code into single files <br /> including with dependency resolution for all library on node_modules <br /> required if the binary file will be consumed through browser |
| 2 | Minify | Reduce the binary file size <br /> by remove all spcaes, shorten variable name <br > and perform optimization (shorten the syntax) | 
| 3 | Sourcemap | map the minified code to the original file |

these three command will ensure the binary is optimized and shrink into smaller size as possible to improve the performance

```javascript
  "scripts": {
    "start": "esbuild app.js --bundle --outfile=app.dist.js --watch=forever & python -m http.server",
    "build": "esbuild app.js --bundle --minify --sourcemap --outfile=dist/text-transformator.js"
  },
```

note: above code snippet is just an example, it will depend on the project configuration/scope/needs.

execute the command

    npm run build

ensure the binary/"packaged javascript source" (as javascript technically doesnt have direct binary file like java/.net/etc) file is generated on the dist folder.

![postimage100](/assets/images/2026-01/release1.jpg)
[bundled & minidifed of the packaged js file has been created](/assets/images/2026-01/release1.jpg){: .center-image }

along side the dist file, map file is also generated to map the minified file to the original source file.

## Create release tags based on Master/Main Branch

Push the dist folder to the master/main (can be done through CLI or IDE)

    git add dist
    git commit -m "release v1.0.0"

create the tag

    git tag -a 1.0.0 -m "Release 1.0.0"

push the commit to the target branch

    git push origin master --tags

basically git will create a tag and then create the "snapshot" based on the latest commit at that target branch at specific time

![postimage100](/assets/images/2026-01/release2.jpg)
[Tags successfuly created with latest snapshot from latest commit at master branch](/assets/images/2026-01/release2.jpg){: .center-image }


a new tag should be shown on the github repository pages.

![postimage100](/assets/images/2026-01/release3.jpg)
[Tags 1.0.0 is available on github](/assets/images/2026-01/release3.jpg){: .center-image }

use following links to checkit directly on github

    https://github.com/deganandapriyambada/officepawn/tags

inside the tag (1.0.0), should also contain source code on two different version (zip and tar.gz) 

or the commited dist file can actually be seen on the treeview

    https://github.com/deganandapriyambada/officepawn/tree/1.0.2/dist

however, this is not the common way to share the distribution file to public (see next steps about creating release)

![postimage100](/assets/images/2026-01/release4.jpg)
[Dist file can be seen on the tree view of that tags](/assets/images/2026-01/release4.jpg){: .center-image }

note: it is important to **commit first before tagging**, otherwise the dist folder won't be detected.

## Create Release from Existing Tags

now the dist file or binary file can be added **during release creation**.

go to tags under the project repository

    https://github.com/deganandapriyambada/officepawn/tags

click the three dots on the tags item and click create release.

![postimage100](/assets/images/2026-01/release5.jpg)
[Click create release menu on the dropdown at specific tags](/assets/images/2026-01/release5.jpg){: .center-image }

not all tags require release. for example, some tags might not intended for public release as it meant for alpha or nightly build (example).

then upload the binary (on this case is javascript dist file that was generated earlier)

![postimage100](/assets/images/2026-01/release6.jpg)
[choose all neccesary file that will be displayed on the release tags](/assets/images/2026-01/release6.jpg){: .center-image }

done, now the dist or binary file completely visible on the tags. Moreoever, it also recommended to put some description on the tags like what was changed, whats new and so on. 

&mdash; github provide markdown support to add those details.

![postimage100](/assets/images/2026-01/release7.jpg)
[user can see the distribution files on the specific tags](/assets/images/2026-01/release7.jpg){: .center-image }

access to the  recently published tags & release on this article can be done through following links

    https://github.com/deganandapriyambada/officepawn/releases/tag/1.0.2