

describe('Real Events Test', () => {
    it('CypressRealEvents', () => {

        cy.visit('https://www.yatra.com/',{headers:{"Accept-Encoding":"gzip,deflate"}})
        //cy.get('.list-more-tab').trigger('mouseover')
        //cy.get('.moreOption').invoke('show')
        cy.get('.list-more-tab').realMouseMove()
        cy.get('.moreOption').realHover()  
        cy.get('.moreOption').realMouseDown()

        cy.get("a[title='Cruise'][id='booking_engine_cruise']").click()

        
    })
  })
