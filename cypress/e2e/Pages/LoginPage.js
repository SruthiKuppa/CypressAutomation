export class LoginPage{

    loginpage_txtbox_username = "input[name='username']"
    loginpage_txtbox_password = "input[name='password']"
    loginpage_btn_login= "button[type='submit']"


    enterUsername(username){
        cy.get(this.loginpage_txtbox_username)
        .should('be.visible')
        .and('be.enabled')
        .clear()
        .type(username);
        cy.wait(1000)
    }

    enterPassword(password){
        cy.get(this.loginpage_txtbox_password)
        .should('be.visible')
        .and('be.enabled')
        .clear()
        .type(password);
    }

    clickLogin(){

        cy.get(this.loginpage_btn_login)
        .should('be.visible')
        .click()
    }


}