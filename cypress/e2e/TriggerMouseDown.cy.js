

describe('Upload File Test', () => {
    it('File upload', () => {

        cy.visit('https://www.yatra.com/',{headers:{"Accept-Encoding":"gzip,deflate"}})
        //cy.get('.list-more-tab').trigger('mouseover')
        cy.get('.moreOption').invoke('show')
        cy.get("a[title='Cruise'][id='booking_engine_cruise']").click()

        
    })
  })
