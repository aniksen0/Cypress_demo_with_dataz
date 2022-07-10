/// <reference types="cypress" />

const cart_option = ".lzd-nav-cart"
class add_to_cart
{
    
    click_on_cart ()
    {
        cy.get(cart_option).click()
    }

    click_add_to_cart_from_product_page ()
    {
        cy.get('.pdp-button_theme_orange').click(
            {
                force:true
            }
        )
    }

    go_to_cart_page_from_cart_modal()
    {
        cy.get('.next-btn-secondary').click()
    }
    delete_all_product_on_the_cart()
    {
        cy.get('.checkbox-wrap > .next-checkbox > input').click()
        cy.get('.list-header-operation-text').click()
        cy.get('.ok').click()
    }
    close_the_cart_modal()
    {
        cy.get(".next-dialog-close").click(
            {
                force:true
            }
        )
    }
    go_to_the_chekout_page()
    {
        cy.get('.next-btn-primary').click( {
            force:true
        })
    }
    go_to_the_cart_page()
    {
        cy.visit("https://cart.daraz.com.bd/cart")
    }
    delete_single_product()
    {
        cy.get('.operations > .automation-btn-delete > .lazada').click()
        cy.get('#dialog-footer-2 > .next-btn-primary').click()
    }
}


export default add_to_cart;