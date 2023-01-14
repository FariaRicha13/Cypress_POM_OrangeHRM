# Cypress_POM_OrangeHRM

## Tools and Technologies
- Node.js
- Faker Library
- Mochawesome
- File System

## How to run this project
- clone this project
- Hit the following commands
- ```npm init -y```
- ```npm inistall cypress```
- ```npx cypress open\npx cypress run```

-- To add Faker library use the following command
- ```npm install --save-dev @faker-js/faker```

- To generate Mochawesome Report
- ``` npm i --save-dev cypress-mochawesome-reporter```
- ``` npm i mochawesome --save-dev```
- ``` npm i mochawesome-merge --save dev```
- ``` npx cypress run --reporter mochawesome```
- ``` npx mochawesome-merge .\cypress\reports\*.json | out-file -encoding ascii ./report1.json```
- ```  npx marge ./report1.json --reportDir ./cypress\reports```

- To run it in chrome in a headed way
- ```npx cypress run -b chrome --headed```

## Pre-requisities
** You must have installed nodejs in your system/local device**

## Scenario 
- https://drive.google.com/file/d/1tHdevewHdpYJElWZC2gYQqo-pEticiw2/view?usp=share_link

## Code Structure
- https://drive.google.com/file/d/1127-5tFJI78xyrWPxXJZ79fLbcGoN_xR/view?usp=share_link

## Output
- ![Screenshot_20230103_140724](https://user-images.githubusercontent.com/81919644/212456774-8a74fc20-3a26-42bc-ab0b-da895d6a1dd8.png)
