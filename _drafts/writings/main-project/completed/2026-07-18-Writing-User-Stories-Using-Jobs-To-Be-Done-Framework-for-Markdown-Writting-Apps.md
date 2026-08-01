# Product Background and Problem Statement

I like writings, its one of my hobbies. I could spend arround 30 mins to one hour a day to write an article for this website (pipenpoof). I have tried several markdown editor that available on the market from typora, stackedit and obsidian. From those three, if feel that typora is the best among of them. It has simple user interfaces and tons of markdown editing functionality.

However, none of them could provide an integrated environment between scheduling apps (like google calendar/google task) with the markdown writings apps. I would like to create a cross platform desktop based markdown writting apps which tailored specifically for my needs as hobbyist writer.

I need the integrated scheduling feature to keep track which article need to be prioritized and get the sense of release plan. Apart from that, none of these apps can flag the writings status (not started, completed or in-progress). Its hard to keep which article is 0%, 90% or 100% without flagging capability.

Apart from that, i wanted the markdown can be rendered with various renderer including jekyll, github readme and probably the original markdown.

## Jobs to Be Done Framework for Writing User Story

Jobs to be done (JTBD) is a principle on user story definition in which focused on identifying, understanding and finally empathizing **struggles or pain point that faced by user** based on their objectives (can be key perfromance indicator/KPI, mission or vision) rather than just determining what fetures **wanted** by user. JTBD will ensure only critical feature will be shipped on the product as it mainly driven by user objectives, not the **user wants**.

Both JTBD and traditional user story are a method to discover and unfold customer needs. However, they have a polar distinction. The differences between JTBD vs traditional user stories **lies in the approach**. User story focus on **who is the user** and **what they want** while JTBD shift the focus into understanding the bigger goal or objectives of the organization (or the user itself) to avoid "nice to have" feature.

below are the principles of JTBD

1. Started with an empathy towards the user:  Everyone has jobs to be done in their lives regardless their position and they strive towards accomplishing those goal in order to survive in this world.
2. People who has a jobs can accelerate their task accomplishment rate (speed, accuracy, correcness) by **employ other poeple/contractor** or **buy a product** that can help them doing their task.
3. **Context and outcome over user personas and action**
4. Long process is needed before user can incorporate a new product as a tools to their daily jobs
5. JTBD focus on determining and justifying the problem. (is it valid business concern in which can impact the business or just a minor QoL issues)
6. Some jobs need to be done by multiple role with the help of various tools/product.

Introducing a new product means changing the behavior of the user from the existing habits into the new one. According to the JDBS theory, there are at least four stages for people to adapt and tune in into new product and habits. 

**First stage**: Existing habits without any external intervention. Business as usual condition

**Second Stage**: changes is initiated (either by organization itself or can also came from the user's deliberation process) 

**Third Stage**: Critical phase where user is doubting and felt anxious about the new "product" / "solution" which can affect their comfort zone. This is where JTBD principle is needed to help the user make decision.

**Fourth Stage**: Decision is made. user/organization finally decided to adapt with new solution and incorporating it to their business process.

## Differences Between Traditional User Story vs JTBD

Below are the comparison between Traditional User Story and jobs to be done framework from multiple angle / perspective

| Perspective          | Traditional                                                  | JTBD                                                         |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Focus                | User Persona or user type and their action                   | Focus on context and situation                               |
| Template             | as a [user persona]<br /> i want to [action or feature]<br /> So that [benefit] | When i am [situation/context] i want to [motivation/solution] so i can [Expected Outcome] |
| feature creep Chance | High - easily get trapped with solutioning.                  | Low                                                          |
| Usage                | Feature implementation                                       | business needs identification                                |

For example: we are building a markdown writings apps product

traditional user story: as a writer i want to be able to write in markdown format using WYSIG editor then view the renderer version for github and jekyll immediately so that i can check the writings final output.

JTBD: When i am writing, i want to get assisted on the markdown formatting so i can focus on the content.

Personally, i feel that traditional user story trap business analyst to think and focus about the solution instead of understanding what user really needs. Infact, solutioning is happened after user story is created. There is a dedicated sprint called as design sprint to accomodate such acitivity.

	JTBD not dicatating the solution. Leaving freedom for the product/design team to determine the feature later on once the 	business needs is justified.

Note that JTBD is just a method, what matter the most is the alignment between stakeholders and system implementor. Everyone need work hand in hand as team to make it happen.

## Writing User Stories for Nulis.app using Just to be Done Framework

As a hobbyist writer, my job is not solely writing article but also includes following (not limited) business process such as subject/topic research, drafting (defning article's content topics), review, release planning and keep track of the writings progress.

lets breakdown those business processes and have the JTBD (job to be defined)

Job 1: **Research**

When i am researching a new or existing topics for my writings, i want to get informed about the current trends specifically under my domain of expertise to that i can spend more time on the writings itself instead of the research process.

Job 2: **Drafting**

When i am drafting the the article's content skeleton, i want to get several ideas about the skeleton strcuture from different writing angle so that i can combine it with my own ideas and create writings with unique perspectives 

Job 3: **Review**

When i am reviewing my writings, i want to get assisted for grammar check so that i can focus on the checking and validating the content.

Job 4: **Release Planning**

When i am creating release planning, i want to get a bird view on the writings progress so that i can plan and track the release accordingly

note: Each job variant represent a single business process (the L4 sub-process)

## Combining traditional User Story with JTBD

JTBD is suitable to determining the strategical product capabilities and justified it while user stories  will translate those capabilities into an tactical actionable item for development team. 

- JTBD can act as the bridge between stakeholder and product owner
- user stories will help determining the design nitty gritty of the product

Many big organizations combining both JTBD and traditional user story writings as both of them complementing each other.