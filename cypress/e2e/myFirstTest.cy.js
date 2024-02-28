


describe('Launch Application', () => {
    it('Launch success', () => {
       cy.visit('https://parabank.parasoft.com/parabank/index.htm')
       cy.get("input[name='username']").type('user1')
       cy.get("input[name='password']").type('password1')
       cy.get('input.button').click
    })
  })
