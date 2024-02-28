

describe('Radio button Test', () => {
    it('Radio button test success', () => {
       cy.visit('https://formy-project.herokuapp.com/radiobutton')
       
       //cy.get('#css').check()
       cy.get('[type="radio"]').check('option2','option3')

       //ASSERT using jQuery the selection should have value=option2
       cy.get('[type="radio"]:checked').should('be.checked').and('have.value', 'option2')

        // cy.get('.navbar-toggler').click()
        // cy.get("#navbarDropdownMenuLink").click()
        
 
    })
  })
