

describe('DropDown Test', () => {
    it('Dropdown selection success', () => {
      //  cy.visit('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html')
      //  cy.get('#course').click() 
       
      //  cy.get('#course').select(1)
      //  cy.get('#course').select('net')
       
      cy.visit('https://admin.formstack.com/signup/forms-teams?referring_type=s-temp-animal-intake-form')
      cy.scrollTo(200,300)
      //cy.get(':nth-child(9) > .sc-hAtEyd > .sc-ejdXBC').click()
      cy.get("select[name='numberOfEmployees']").select(2)
 
    })
  })
