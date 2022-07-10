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
const cart_modal = ".checkout-summary-title"
const product1_url = "https://www.daraz.com.bd/products/-i177148705-s1117056854.html?spm=a2a0e.home.flashSale.3.779312f7EzloAi&search=1&mp=1&c=fs"
const product2_url = "https://www.daraz.com.bd/products/i7s-41-hbq-i7s-tws-i7s-tws-i213233779-s1162598304.html?spm=a2a0e.home.flashSale.4.11fd12f7CtUh9q&search=1&mp=1&c=fs"


describe("checkout", ()=>
{
    it("TC_016	On cart page all the added product should be available",()=>
    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cart.click_add_to_cart_from_product_page()
        cy.get('.cart-item-title').invoke("text").then(($text) =>
            {
                cy.get('.next-btn-primary').click( {force:true})
                cy.get('.automation-link-from-title-to-prod').invoke("text").then(($text2) =>
                {
                    expect($text).to.equal($text2)
                })

            })
        //tearDown
        cart.go_to_the_cart_page()
        cart.delete_all_product_on_the_cart()
    })
    it("TC_017	Users can select product individually by clicking on the product checkbox or all the product by select all checkbox",()=>

    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.visit(product1_url)
        cart.click_add_to_cart_from_product_page()
        cy.visit(product2_url)
        cart.click_add_to_cart_from_product_page()
        cart.go_to_the_cart_page()
        cy.get('.checkbox-wrap > .next-checkbox > input').click()
    })
    it("TC_018	Proceed to checkout option should present under the order summary",()=>

    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.visit(product1_url)
        cart.click_add_to_cart_from_product_page()
        cart.go_to_the_chekout_page()
        cy.get('.checkout-order-total > .next-btn').should("be.visible")
        
    })

})