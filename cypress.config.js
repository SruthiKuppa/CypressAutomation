//const { defineConfig } = require("cypress");
//define download file plugin
const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  //plugin for HTML report generation declaration
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})  // assign download file in e2e block  with const downloadfile declared on top 
    },
    

  },
});



