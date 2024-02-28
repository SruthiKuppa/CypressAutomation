
export class Dashboard{

    dash_Page_title= ".oxd-topbar-header-breadcrumb"
    dash_minimizeIsle_icon="button[role='none']"
    user_name_DropDownTitle =".oxd-userdropdown-name"
    UserdropDownOptions = "i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']"
    dropDown= '.oxd-userdropdown-name'
    ul="ul[class='oxd-dropdown-menu']"
    logoutOpt = "a.oxd-userdropdown-link[href='/web/index.php/auth/logout']"

    verifyTitle(){
       cy.get(this.dash_Page_title)
       .should('be.visible')
       .and('have.text',"Dashboard");
    }

    verifyUsername(){
        cy.get(this.user_name_DropDownTitle).should('have.text',"BobBibek Tester")
        cy.wait(1000);
    }

    minimize_icon(){
        cy.get(this.dash_minimizeIsle_icon).click();
        
    }

    clickLogout(){
        cy.get(this.dropDown).click();
        cy.get(this.ul).should('be.visible')
        cy.get(this.logoutOpt).click();
      }


     UserAssignLeave(){
        cy.get("")
     } 
}