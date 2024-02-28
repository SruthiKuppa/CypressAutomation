// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//plugin for real mouse events
import 'cypress-real-events'

//plugin included in js for file upload functionality
import 'cypress-file-upload'

//include the download file command
require('cypress-downloadfile/lib/downloadFileCommand')

//command for iFrames functionalities
Cypress.Commands.add('switchToFrame',(IFrame) => {
return cy
.get(IFrame)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap);

});