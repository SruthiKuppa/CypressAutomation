export class AssignLeave{

    AssignLeave_Button= "button[title='Assign Leave']"
    AL_hintsTxtbox= ".oxd-autocomplete-wrapper"
    LeaveTypeDropdown= ".oxd-select-wrapper"
    personalLeaveOption = ".oxd-select-dropdown > :nth-child(5) > span"
    commentsTextbox= '.oxd-textarea';
    datePicker_from= "cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon')"
    datePicker_to="cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon')"
    
    
    enterEmployeeDetails(){
        cy.get(this.AssignLeave_Button).click()
        cy.get(this.AL_hintsTxtbox).type("Sruthi Kuppa")
        cy.get(this.LeaveTypeDropdown).click()
        cy.get(this.LeaveTypeDropdown).each(function($el,index,list){
            cy.log($el.text());
        })
        cy.get(this.personalLeaveOption).click()
        cy.get(this.commentsTextbox).type("Personal Leave request for 2days")
    }

    pickDate(){


        
    }
    

}