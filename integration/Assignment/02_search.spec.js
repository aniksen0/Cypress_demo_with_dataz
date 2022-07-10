/// <reference types="cypress" />

import BasePage from  "../../PageObject/BasePage";
const base_page = new BasePage;

import signIn from  "../../PageObject/loginPage";
const login = new signIn;

import SearchPage from  "../../PageObject/search";
const searchpage = new SearchPage ;

const searching_keyword = "Tshirt"
const ambiguous_search_keyword = "asdfsdfsadfsdafsdfsadfsadfsadf"

describe('Seaech Module-> ', () => {
    it("TC_006	Verify that, If user writes any keyword on the search input field it will show suggestion", ()=>
    {
        base_page.go_to_page()
        searchpage.searching(searching_keyword)
        cy.get("#q").click()
        cy.wait(5000)
        cy.get('.suggest-list--3Tm8').find('a').should('have.length.greaterThan', 0)
    })

    it("TC_007	Verify that, If user search with a keyword all the related product with the keyword will show on the all product page", ()=>
    {
        base_page.go_to_page()
        searchpage.searching(searching_keyword)
        cy.get(".c2prKC").find(".c16H9d").invoke("text").then((text1) =>
        {
            var lower_search_result = text1.toLowerCase();
            var lower_searching_keyword = searching_keyword.toLocaleLowerCase();
            console.log(lower_search_result)
            console.log(lower_searching_keyword)
            expect(lower_search_result).include(lower_searching_keyword)

        })
        cy.wait(5000)
    })

    it("TC_008	Verify that, If the user search for a product that doesn't bring any product related to it, on the search page should show a message", ()=>
    {
        base_page.go_to_page()
        searchpage.searching(ambiguous_search_keyword)
        
        cy.wait(5000)
        cy.get('.c1nVRb').should("have.text","Search No Result")
        cy.get('.c1IhLf').should("have.text","We're sorry. We cannot find any matches for your search term.")
    })



})