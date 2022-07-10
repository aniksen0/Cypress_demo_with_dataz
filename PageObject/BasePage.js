/// <reference types="cypress" />

class BasePage
{

    go_to_page(url)
    {
        if(url == null)
        {
            cy.visit("https://www.daraz.com.bd/")
        }
        else
        {
            cy.visit("https://www.daraz.com.bd/"+url)
        }
    }

    

}

export default BasePage