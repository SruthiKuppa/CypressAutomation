

describe('Upload File Test', () => {
    it('File upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("input[type='file'][name='file']").selectFile("C:\\Users\\kruth\\Videos\\abc.png",{force: true})
        cy.get("#file-submit").click()
        cy.get('#uploaded-files').should('contain',"abc.png")


    })
  })
