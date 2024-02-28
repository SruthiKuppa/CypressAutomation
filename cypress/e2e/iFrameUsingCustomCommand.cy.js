/// <reference types ="cypress"/>
import 'cypress-iframe'
describe('iFrameDemo', () => {
    it('iFramesTest', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        //instead of declaring const for iframe- im calling custom funtion from command.js
        //const iFrame= cy.get('#mce_0_ifr')
       cy.switchToFrame('#mce_0_ifr')
        .clear()
        .type('Welcome {ctrl+a}')
        cy.get(".tox-tbtn[title='Bold']").click()



    })
  })
