//const cypress = require("cypress");


describe('Hooks Test', () => {

    before('Hooks BeforeTest', () => {
        cy.log('Running statements before all runs ')
    });

    after('Hooks AfterTest', () => {
        cy.log('Running statements before all runs ')
    });


    beforeEach('Hooks BeforeEachTest', () => {
        cy.log('Running statements before each test ')
    });

    afterEach('Hooks AfterEachTest', () => {
        cy.log('Running statements after each test ')
    });

    // to repeat a test more than once
    Cypress._.times(1,(k)=>{ 
    it('HooksTest1', () => {
 
        cy.visit('https://admin.formstack.com/signup/forms-teams?referring_type=s-temp-animal-intake-form')
        cy.scrollTo(200,300)
        cy.get("select[name='numberOfEmployees']").select(2)
      
        cy.get("input[name='terms']").check()
  
      })
})

    //using skip this Test will be skipped
    //it.skip('HooksTest2', () => { 
    it('HooksTest2',{retries:0} ,() => {   //using skip this Test will be skipped
        cy.visit('https://admin.formstack.com/signup/forms-teams?referring_type=s-temp-animal-intake-form')
          
        cy.get("input[name='terms']").check()
        cy.get("input[name='password']").type('abcdefg')
  
      })
  })

