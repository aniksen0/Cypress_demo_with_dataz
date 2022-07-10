/// <reference types="cypress" />

var mobile_input_field = ".mod-login-input-loginName > input";
var pass_input_field = ".mod-input-password > input";
var submit_button = ".next-btn";

class signIn
{
    go_to_login_page()
    {
        cy.get('#anonLogin').click()
    }

    fill_up_login_form(mobile,pass)
    {
        cy.get(mobile_input_field).type(mobile)
        cy.get(pass_input_field).clear()
        cy.get(pass_input_field).type(pass)
    }
    
    click_on_submit()
    {
        cy.get(submit_button).click();
    }

    logout()
    {
        cy.get(logout_locator).click();
    }
}

export default signIn