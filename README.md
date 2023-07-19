# SBS-Tech-Assessment

## **Overview:**

This is an Automation project using Playwright and Typescript and uses playwright-testrunner to execute test cases. This is a POM framework focused on separating the test scripts logic and the page object, test data from each other. This allows us to create test automation scripts by passing test data also it allows to keep the identifiers based on the respective pages.Ts the number of test scripts compared to a modular based framework when we need to test for multiple sets of data for same functionality. This helps code resusability and easy maintenance.


## Features

- Supports execution of tests in different browsers.
- Generates Playwright's HTML Report.
- Test execution logs are captured in the log file.

#### Supported Browsers
1. Chrome - default browser
2. Firefox

##optional
3. MS Edge (Download MS edge from `https://www.microsoft.com/en-us/edge/download?form=MA13FJ` and enable the configuration in playwright.config.ts)



#### Steps for installation
##### 1. Installation

1. Playwright framework requires [Node.js](https://nodejs.org/) v14+ to run.
2. Clone Repository : `git clone https://github.com/ffirdhause/QI_test.git`
3. Go to QI_test folder
4. Install Playwright:`npm install playwright` - this will create node modules inside the root folder
## Optional
5. Install MS Edge if required

##### 2. Execution
To run test: `npx playwright test`

##### 4. Report & Logs
To open last HTML report run:`npx playwright show-report`

##### scope of improvement
1. Assertion on the audio player needs to be added. 
