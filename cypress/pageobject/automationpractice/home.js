class AutomationpracticeHomePage {

    elements = {
        option_blouses: () => cy.get('ul li>a[title="Blouses"]'),
        txt_input_search:  () => cy.get('#search_query_top'),
        btn_submit_search: ()=>cy.get("button[name='submit_search']")
        
    }

    clickOnOptionBlouses(){
        cy.get('ul li>a[title="Blouses"]').should('exist').invoke('show').click({ force: true })
    }


    typeToSearch(searching){
        this.elements.txt_input_search().type(searching)
    }

    clickOnSubmitSearch(){
        this.elements.btn_submit_search().click()
    }

/*     //optionBlouses()
    cy.get('ul li>a[title="Blouses"]').should('exist').invoke('show').click({ force: true })

    //no es necesaria
    cy.get('.product-container').first().should('be.visible')

    //labelPrice()
    cy.get('.right-block > .content_price > .price').invoke('text').as('price')

    //boton para agregar al carrito
    cy.get('.ajax_add_to_cart_button > span').click()
    // I validate that the message is shown when the product was properly added to the cart
    cy.get('h2').should('contain.text', 'Product successfully added to your shopping cart')

    cy.get('@price').then(($price) => {
    cy.log('THE PRICE OF THE GARMENT IS:' + $price)
}) */




/*     type_to_search(input_string) {
        this.elements.txt_main_search().type(input_string)
    }

    click_to_search() {
        this.elements.btn_main_search().click()
        cy.wait(1500)
    } */

login() {
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
}
}

module.exports = new AutomationpracticeHomePage();