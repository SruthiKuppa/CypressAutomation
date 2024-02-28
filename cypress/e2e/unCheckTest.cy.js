

describe('Checkbox uncheck Test', () => {
    it('Checkbox selection success', () => {
  
      cy.visit('https://formy-project.herokuapp.com/checkbox')
      //cy.scrollTo(200,300)
      cy.get("#checkbox-1").check()
      cy.get('[type="checkbox"]').check('checkbox-3')
      cy.get('[type="checkbox"]').check('checkbox-2')
      cy.get('[type="checkbox"]').check('checkbox-3').uncheck()
      //cy.get("input[name='terms']").check()

    })
  })
