/// <reference types="cypress" />

import BasePage from  "../../PageObject/BasePage";
const base_page = new BasePage;

import signIn from  "../../PageObject/loginPage";
const login = new signIn;

import SearchPage from  "../../PageObject/search";
const searchpage = new SearchPage ;


const number = "anik.sen001@gmail.com";
const password = "anik@2645";
const invalid_pass = "invalid_pass"
const invalid_email = "invalid_email"
const short_phone = "12312"
const unregistered_email = "anik.sen00123@infolytx.com"

const product_name = "TShirt"

describe('login-> ', () => {

  it("TC_001	User can login with valid email and valid password",()=>
  {
    base_page.go_to_page();
    cy.get('#anonLogin').click()

    login.fill_up_login_form(number,password);
    login.click_on_submit();
    cy.get('#myAccountTrigger').should('have.text',"Anik  Sen's account")
  })

  it("TC_002	Verify that, User can't login with an unregistered email id",()=>
  {
    base_page.go_to_page();
    cy.get('#anonLogin').click()

    login.fill_up_login_form(unregistered_email,password);
    login.click_on_submit();
    cy.wait(1000)
    cy.get(".next-feedback-title").invoke('text').then((text1) =>
    {
        expect(text1).to.equal("Error");
    })
    cy.get(".next-feedback-content").invoke('text').then((text1) =>
    {
        expect(text1).to.equal("Incorrect username or password.");
    })
  })

  it("TC_003	Verify that, User can't login with an invalid password",()=>
  {
    base_page.go_to_page();
    cy.get('#anonLogin').click()

    login.fill_up_login_form(number,invalid_pass);
    login.click_on_submit();
    cy.wait(1000)
    cy.get(".next-feedback-content").invoke('text').then((text1) =>
    {
        expect(text1).to.equal("Incorrect username or password.");
    })
  })

  it("TC_004	Verify that, If user tries to login with any invalid email/phone number on the input field it will show error message",()=>
  {
    base_page.go_to_page();
    cy.get('#anonLogin').click()

    login.fill_up_login_form(invalid_email,password);
    login.click_on_submit();
    cy.wait(1000)
    cy.get(".next-feedback-content").invoke('text').then((text1) =>
    {
        expect(text1).to.equal("Please enter a valid phone number.");
    })
  })

  it("TC_005	Verify that, if user type email/phone less than 6 character it will show an error.",()=>
  {
    base_page.go_to_page();
    cy.get('#anonLogin').click()

    login.fill_up_login_form(short_phone,password);
    login.click_on_submit();
    cy.wait(1000)
    cy.get('.floating > span').invoke('text').then((text1) =>
    {
        expect(text1).to.equal("The length of the Phone or Email should be 6-60 characters.");
    })
  })
})
