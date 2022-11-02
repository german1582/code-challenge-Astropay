class BlousesPage {

    elements = {
        bton_add_to_cart: () => cy.get('ul > li .ajax_add_to_cart_button > span').first(),
        lbl_successfully_added: () => cy.get('h2'),
        lbl_price: () => cy.get('.right-block > .content_price > .price').first(),
        btn_close_window: ()=> cy.get("span[title='Close window']")
    }

    clickOnAddToCartButton(){
        this.elements.bton_add_to_cart().click()
    }

    //sacarlo luego, lo dejo para ver si puedo hacer validaciones desde challenge-front.spec...
    botonazoAddToCart(){
        return cy.get('ul > li .ajax_add_to_cart_button > span')
    }

    printPrice(){
        this.elements.lbl_price().invoke('text').then((price) => {
            cy.log('THE PRICE OF THE GARMENT IS:' + price)
        }) 
    }

    validateItemSuccessfullyAdded(){
        this.elements.lbl_successfully_added().should('contain.text', 'Product successfully added to your shopping cart')
    }

    clickOnCloseWindowButton(){
        cy.wait(1500)
        this.elements.btn_close_window().click()
    }
}

module.exports = new BlousesPage();