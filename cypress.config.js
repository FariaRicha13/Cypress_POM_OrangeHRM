const { defineConfig } = require("cypress");
module.exports = defineConfig({
 
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
  },

  e2e: {
    failOnStatusCode: false,
    specPattern:"cypress/e2e/index.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
      
    },
    
  },
});
