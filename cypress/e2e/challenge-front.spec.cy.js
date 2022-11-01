///<reference types="Cypress" />

describe("TEST CHALLENGE - FRONT - ASTROPAY", () => {

    beforeEach(() => {
        // I do the login through an API method since it is more secure and best practices recommend it.

        // I take the data for the login from a json file into the fixture folder.
        cy.fixture('code-challenge-login').then((loginData) => {
            cy.request({
                method: 'POST',
                url: 'http://automationpractice.com/index.php?controller=authentication',
                form: true,
                body: {
                    email: loginData.email,
                    passwd: loginData.passwd,
                    back: loginData.back,
                    SubmitLogin: loginData.SubmitLogin
                }
            })

            cy.visit("http://automationpractice.com/index.php?controller=my-account")
            cy.get('.account > span').should('contain.text', 'GERMAN LARCHER')
        })


    })
    it("1.1 Access the website.", () => {

        cy.get('ul li>a[title="Blouses"]').should('exist').invoke('show').click({ force: true })

        cy.get('.product-container').first().should('be.visible')

        cy.get('.right-block > .content_price > .price').invoke('text').as('price')

        cy.get('.ajax_add_to_cart_button > span').click()
        // I validate that the message is shown when the product was properly added to the cart
        cy.get('h2').should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('@price').then(($price) => {
            cy.log('THE PRICE OF THE GARMENT IS:' + $price)
        })

    })

    it("1.2 Access the web search component and enter the jeans garment.", () => {

        cy.get('#search_query_top').type('jeans')
        cy.get("button[name='submit_search']").click()
        // I validate that the proper message is shown for no results search
        cy.get('p.alert').should('contain.text', 'No results were found for your search')

    })
})
