

describe('Dynamic DropDown Test', () => {
    it('Dynamic Dropdown selection success', () => {
       cy.visit('https://www.yatra.com/',{headers:{"Accept-Encoding":"gzip,deflate"}})
       cy.get('#BE_flight_origin_city').click().clear()
       cy.get('#BE_flight_origin_city').type("NEW",{delay:200})

       //for loop to iterate all list elements using last child tag we verify if with country code
       cy.get('.viewport span:last-child').each(($el,index,$list)=>{ //viewport tag gets all dynamic values listed
        cy.log($el.text()) //gets the element text values & logs them on consol i.e Country code[JFK,NYE etc] 

        if($el.text()==='JFK'){
            //$el.click()
            cy.wrap($el).click()
        }
    
       })


 
    })
  })
