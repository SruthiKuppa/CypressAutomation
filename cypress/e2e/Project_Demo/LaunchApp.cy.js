//  <reference types='Cypress'/>

describe('Checkbox Test', () => {
it('launchApp', ()=>{
    cy.visit("https://automationstepbystep.com/");

   // cy.get('//*[@id="pageid-3146"]/h1')
    cy.get('h1')
    .should('be.visible')
    .should('have.text','NEVER STOP LEARNING')

    cy.wait(6000)
    
   
    cy.get('a[title="cypress beginner tutorial"]',{timeout:50000}).scrollIntoView().click();
    
   // let title= 'Menu'
   //expect(title).to.be.equal('Menu')

})
})
