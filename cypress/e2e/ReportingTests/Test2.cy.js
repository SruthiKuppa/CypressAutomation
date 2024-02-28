

describe('Checkbox Test', () => {
    it('Checkbox selection success', () => {
  
      cy.visit('https://admin.formstack.com/signup/forms-teams?referring_type=s-temp-animal-intake-form')
      cy.scrollTo(200,300)
      cy.get("select[name='numberOfEmployees']").select(2)
    
      cy.get("input[name='terms']").check()

    })
  })
