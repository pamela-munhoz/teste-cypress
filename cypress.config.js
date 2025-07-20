const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mfgfrp",
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    
    video:true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
