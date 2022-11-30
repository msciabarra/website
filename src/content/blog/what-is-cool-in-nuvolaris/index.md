---
title: What is cool in Nuvolaris
author: Irina Branovic
date: 15 August 2022
image: collin-armstrong-SR0_MNa77MU-unsplash.webp
topic: Development
summary: Nuvolaris is an open source project you can find interesting to contribute to. Let me list some cool things that a developer enthusiast can find in the project itself.
---

![cool spelled in fireworks](./collin-armstrong-SR0_MNa77MU-unsplash.webp)

Nuvolaris is an open source project you can find interesting to contribute to. Let me list some cool things that a developer enthusiast can find in the project itself.

All repositories are linked via git submodules so that you know exactly which version of the source is being used.

All Docker images are tagged with the exact build date and therefore precisely versioned; we don’t just tag them as "latest".

All builds are fully automated, run using github actions and activated by tagging.

At each build, all sources are checked against correct license headers.

At each push, a test suite is executed; builds fail if the tests fail.

The development environment is a Docker image in which you can find the exact versions of all languages ​used for the build.

All repositories have a devcontainer setup for VSCode IDE, so you can develop inside Docker container with a predefined environment, no need to setup anything on your local machine to start contributing.

In all repositories, we use Task tool to automate processes, and it is the same tool used for builds.

Build environment is also created using the same script as the development environment.

We use semantic versioning with major, minor and patch versions; we also tag each build with a pre-release in the format "milestone" - "timestamp".

All work in progress is tracked as github issues in the main repository; they are labeled by sub-project and by the level of difficulty.

The real "issues" and the details are instead recorded as github issues in separate subprojects.

All issues are also divided into milestones so you can track the current state in development.

Before implementing each feature, a requirements document is written and kept directly in the markdown format in various project repositories.
