/// <reference types="cypress" />


var search_input = "#q";
var search_button = ".search-box__button--1oH7";
class SearchPage
{
    searching (keyword)
    {
        cy.get(search_input).click(
            {
                force:true
            }
        )
        cy.get(search_input).type(keyword);
        cy.get(search_button).click()
    
    }

}

export default SearchPage