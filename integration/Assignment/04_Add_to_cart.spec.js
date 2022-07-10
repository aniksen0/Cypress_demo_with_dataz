/// <reference types="cypress" />

import BasePage from  "../../PageObject/BasePage";
const base_page = new BasePage;

import signIn from  "../../PageObject/loginPage";
const login = new signIn;

import SearchPage from  "../../PageObject/search";
const searchpage = new SearchPage ;

import add_to_cart from "../../PageObject/add_to_cart";
const cart= new add_to_cart ;


const number = "anik.sen001@gmail.com";
const password = "anik@2645";

const first_product_link_for_you_section = ".J_Row1 > :nth-child(1)"
const cart_modal = "cy.get('.checkout-summary-title')"

describe ("add to cart ", ()=>
{

    it("TC_011	If an unauthenticated user tries to add the product to the cart it will bring the login page.",()=>

    {
        base_page.go_to_page()
        cart.click_on_cart()
        cy.get('.login-title > h3').should("have.text","Welcome to Daraz! Please login." )

    })

    it("TC_012	If an authenticated user added the product to the cart an overflow modal should open with all the product details and a success message will display.",()=>

    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cart.click_add_to_cart_from_product_page()
        cy.get('.cart-message-text').should("have.text","1 new item(s) have been added to your cart")
        cy.get('.cart-item-img').should("be.visible")
        cy.get('.cart-item-current-price').should("be.visible")
        cy.get('.checkout-order-total-title').should("be.visible")
    })

    it("TC_013	Product quantity will be one for the newly selected product",()=>

    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cart.click_add_to_cart_from_product_page()
        cy.get('.cart-item-quantity-value').should("have.text", 1)

        //tearDown
        cart.go_to_cart_page_from_cart_modal()
        cart.delete_all_product_on_the_cart()
    })

    it("TC_014	If the Cart page doesn't has any product it will show a message",()=>

    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cart.click_on_cart()
        cy.get('.cart-empty-text').should("have.text","There are no items in this cart")
    })

    it("TC_015	If a user clicks on the ADD to cart option again for the same product it will increase the product quantity.",()=>
    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cart.click_add_to_cart_from_product_page()
        cart.close_the_cart_modal()
        cart.click_add_to_cart_from_product_page()
        cart.go_to_the_chekout_page()
        cy.get(".item-quantity-value").should("have.text", "2")
        //tearDown
        cart.go_to_the_cart_page()
        cart.delete_all_product_on_the_cart()
    })



})