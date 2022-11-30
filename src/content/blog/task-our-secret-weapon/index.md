---
title: Task, our secret weapon
author: Michele Sciabarrà
date: 18 August 2022
image: artem-labunsky-H9vQC7wfhTQ-unsplash.webp
topic: Tips
summary: When you are developing software, an absolutely fundamental and indispensable tool is the one you use to make builds. Let's talk of what we chose for Nuvolaris.
---

![crane](./artem-labunsky-H9vQC7wfhTQ-unsplash.webp)

When you are developing software, an absolutely fundamental and indispensable tool is the one you use to make builds. Let's talk of what we chose for Nuvolaris.

The original tool, the most important of all build tools is Make, which is an all-rounder tool under Unix. Unfortunately, in the world of software development, every programming language has invented its own... or rather, its own.

When you develop a complex project like Nuvolaris, where many languages coexist, there are a lot of build tools to manage.

There is Gradle for the Scala part, which is also used for OpenWhisk runtimes. For the front-end, there is npm and rollup. For the Python part, we use poetry and the native Go tools for the Go part.

Unfortunately, since distribution is a more complicated affair than a single project like OpenWhisk, and there are lots of build tasks, a global build tool was necessary.

Using Gradle for everything was totally inappropriate. Though it is a great product for compiling Java and Scala, it is too slow and cumbersome (and complex) to be used at scale anywhere as a coordinator.

So what to use? We tried several tools and were long tempted to use the classic Make. However, Make shows its age. It doesn't have many of the features of modern build tools and has a pretty confusing syntax. So we set out to find "something better".

In our minds, a good Make replacement had to have a clean and modern syntax, using, for example, the YAML format but gave you the possibility to execute any command with ease.

Also, it had to have a lot of other things, like good template support, environment variables management and so on.

We were even thinking of writing one ourselves when we came across Task (taskfile.dev website) and it blew our minds by how it responded. It was just the tool we wanted to write.

In short, Task is Make, rethought for our times. It's written in Go, uses YAML instead of the terrible Make syntax, and incorporates (and this is great) a shell interpreter (also written in Go) providing portability.

Working with tasks is very natural and obvious to those who know Make, and we've rarely found ourselves with a tool that does what we expect, how we expect it, when we expect it, and one that we've learned to use very quickly.

At Nuvolaris, we use Task everywhere, builds are done using Task, even the CI first installs Task. We also integrated Task into our CLI, since Task's logic is exactly what we need to run builds.

Let us tell you a secret: Our nuv build tool first builds a build for Task using the conventions we've defined and then invokes Task itself (which is compiled into nuv) to run.

Take a look at it, it will not be a waste of your time. We consider it the best build tool we know.
