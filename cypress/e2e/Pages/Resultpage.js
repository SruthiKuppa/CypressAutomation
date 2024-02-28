class ResultPage{

    elements={
        playlist: () => cy.get("[title='API Testing by Testers Talk']")
        
    }

    goToPlaylist(){
        this.elements.playlist().scrollIntoView().should('be.visible')
        this.elements.playlist().click();
    }


}

//add export option to get the current page class object
module.exports=new ResultPage();