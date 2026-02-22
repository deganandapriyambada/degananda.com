# The Importance of Distributed Computing in Modern SaaS landscape.

Demand on technology adoption (B2C) for both consumer or business to business (B2B) is raising in the last five year.

Most of gen-Z (people who born after 1995) and gen alpha  (born after 2012) has been exposed to technology every since they were kids. They have one thing in common: **rapid technology adoption**.

For example, most of gen X and gen Y are prefer to use built in calendar application on their phone or even use physical calendar to plan & schedule their activities while gen Z and gen alpha are exploring fancy apps for daily schedule on the market (app store, web or playstore).

Those rapid technology adoption by gen Z and gen alpha increasing the demand of a scaleable SaaS platform as they should serve the majority population (gen Z and gen alpha are making up 70% of world population)

&mdash; scalable saas can only be achieved with distributed computing as the true monolithic computing has limited capacity.

# What is Distributed Computing?

Distributed computing is a **system architecture** where single task to achieve  business objective will **be distributed over several different servers** through **computer network**.

# Simple distributed computing using NodeJS

NodeJS can distribute the task into multiple services that called as a **worker** within a node **cluster**. The number of spawned node worker depending on the CPU core of the server.

For example, Apple silicon M1 processor for macbook air 2020 has total of 8 CPU Core.

if you're on apple mac silicon laptop execute following command to get the CPU core of the laptop.

    sysctl -a | grep cpu

it will shown the cpu specs as shown below

transaction flow per single request on single worker

1. get current timestamp in integer format
2. randomize 12 digit number
3. randomize operator (1. plus [+] 2. minus [-] 3. times [*])
4. add/substract/multiply the timestamp(integer) with 12 digit randomized number from step 2
5. display on console log
