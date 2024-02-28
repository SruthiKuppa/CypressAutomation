/// <reference types= 'Cypress'/>

describe('FileUploadTest',()=>{
    it('fileUploadTest',()=>{

    cy.visit("https://trytestingthis.netlify.app/")
    cy.get('#myfile')
    .scrollIntoView()
    .should('be.visible')
    .attachFile('ss.png',{force: true})
})

    it('fileDownloadTest',()=>{
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','.fixtures','sample.jpg')
        
    })
})