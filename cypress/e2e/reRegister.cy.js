
describe('Re-Registeration Test', () => {
    it('Launch success', () => {
       cy.visit('https://parabank.parasoft.com/parabank/index.htm')
       cy.get('#loginPanel > :nth-child(3) > a').click()
       cy.get("input[name='customer.firstName']").type('Sruthi')
       cy.get("input[name='customer.lastName']").type('Kuppa')
       cy.get("input[name='customer.address.street']").type('20 Broadway Ave')
       cy.get("input[name='customer.address.city']").type('Toronto')
       cy.get("input[name='customer.address.state']").type('Ontario')
       cy.get("input[name='customer.address.zipCode']").type('M4P 0E3')
       cy.get("input[name='customer.phoneNumber']").type('6476672003')
       cy.get("input[name='customer.ssn']").type('999999')
       cy.get("input[name='customer.username']").type('Sruthi')
       cy.get("input[name='customer.password']").type('6476672003')
       cy.get("input[name='repeatedPassword']").type('6476672003')

       cy.get("input[value='Register']").click()
       
       cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')
 
    })
  })

