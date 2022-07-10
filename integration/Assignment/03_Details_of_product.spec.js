/// <reference types="cypress" />

import BasePage from  "../../PageObject/BasePage";
const base_page = new BasePage;

import signIn from  "../../PageObject/loginPage";
const login = new signIn;

import SearchPage from  "../../PageObject/search";
const searchpage = new SearchPage ;

const searching_keyword = "Tshirt"
const first_product_link_for_you_section = ".J_Row1 > :nth-child(1)"

describe('Search Module-> ', () => {
    it("TC_009	Verify that, if the user clicks on any product it will bring up all the information of the product on the product page", ()=>
    {
        base_page.go_to_page()
        cy.wait(5000)        
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cy.get('.gallery-preview-panel__content > .pdp-mod-common-image').should("be.visible")
        cy.get('.pdp-price_type_normal').should("be.visible")
        cy.get('.pdp-button_theme_bluedaraz').should("be.visible")
        cy.get('.pdp-button_theme_orange').should("be.visible")
        //quantity
        cy.get('.section-title').should("be.visible")
        //review
        cy.get('.pdp-review-summary').should("be.visible")
        //brand
        cy.get('.pdp-product-brand').should("be.visible")

    })
    
    it("TC_010	Verify that, User can see the product delivery amount on the current address", ()=>
    {
        base_page.go_to_page()
        cy.wait(5000)        
        cy.scrollTo('bottom', { easing: 'linear' , duration: 10000})
        cy.get(first_product_link_for_you_section).click()
        cy.get(':nth-child(1) > .delivery-option-item > .delivery-option-item__body > .delivery-option-item__shipping-fee').should("be.visible")

    })
})
