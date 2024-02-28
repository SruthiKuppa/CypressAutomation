


describe('Scroll to View Demo', () => {
    it('Scroll to View Demo', () => {
       cy.visit('https://www.youtube.com/results?search_query=cypress+tutorial')
       cy.wait(2000)
       cy.contains('Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation | LambdaTest')
       .scrollIntoView().should('be.visible').click()

       
    })
  })
