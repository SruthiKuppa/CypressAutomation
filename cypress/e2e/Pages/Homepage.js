class HomePage{

    elements={
        serachtextbox: () => cy.get("input[name='search_query']"),
        serachicon: () => cy.get("button[id='search-icon-legacy']")
    }

    visit(){
        cy.visit('https://www.youtube.com/')
    }
    searchInYoutube(){
        this.elements.serachtextbox().type('API testing by Tester talks');
        this.elements.serachicon().click();
    }

}

//add export option to get the current page class object
module.exports=new HomePage();