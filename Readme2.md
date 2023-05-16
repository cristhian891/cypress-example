# WTW ![Build status][ci-image]  

[ci-image]: https://circleci.com/gh/cypress-io/cypress-example-phonecat/tree/master.svg?style=svg

This repo contains a a cypress framerwork developed for testing purposes.

The Cypress test contains the main steps to the task and executes all steps in the exercise.

## How to execute the test

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Download this repo

After dowloading this project, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/wtwictrecruitment/QA-TT-Web-848413.git

## cd into the cloned repo
cd QA-TT-Web-848413

## install the node_modules
npm install

```

### 3. Add the project to Cypress

```bash
## Runs all cypress tests 
npx Cypress run 

```
Once executed, To see the video recording of the test got to videos/searchArticle.cy.js.mp4

### 4. Run test using Cypress Launchpad

This will open the Cypress launchpad so you can see the test executing in the browser.

```bash
## Opens Cypress Launchpad
npx Cypress open 

```
