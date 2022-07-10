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

describe("Delete the products ", ()=>
{
    it("TC_019 User can delete individual product from the cart",()=>
    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cart.click_add_to_cart_from_product_page()
        cart.go_to_cart_page_from_cart_modal()
        cart.delete_single_product()
        cy.get(".checkout-shop-children").should("not.exist")
    })
    
    it("TC_020	Users can delete all selected product by selecting the product and click on the Delete all option from the table header.",()=>
    {
        base_page.go_to_page()
        login.go_to_login_page()
        login.fill_up_login_form(number,password);
        login.click_on_submit()
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cart.click_add_to_cart_from_product_page()
        cart.go_to_cart_page_from_cart_modal()
        cart.delete_all_product_on_the_cart()
        cy.get(".checkout-shop-children").should("not.exist")
    })
})