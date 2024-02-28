import 'cypress-iframe'
describe('iFrameDemo', () => {
    it('iFramesTest', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')

        const iFrames= cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        iFrames
        .clear()
        .type('hellooo! {cmd+a}')
        cy.wait(20)
        cy.get(".tox-tbtn[title='Bold']").click()
       // cy.iframe().get("cy.get(':nth-child(4) > .tox-mbtn__select-label')").click()


           })
  })
