
import 'cypress-iframe'
describe('iFrameDemo', () => {
    it('iFramesTest', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        // cy.frameLoaded('#mce_0_ifr')

        // cy.iframe().contains('Your content goes here.').clear()
        
        // cy.wait(20)
        // cy.iframe().get("cy.get(':nth-child(4) > .tox-mbtn__select-label')").click()

       const iFrame= cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iFrame.clear()
        iFrame.type('Welcome {ctrl+a}')
        cy.get(".tox-tbtn[title='Bold']").click()



    })
  })
