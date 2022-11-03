///<reference types="Cypress" />

import AutomationpracticeHomePage from '../../../pageobject/automationpractice/home'
import BlousesPage from '../../../pageobject/automationpractice/blousesPage'
import SearchResultsPage from '../../../pageobject/automationpractice/searchResultsPage'


describe("TEST CHALLENGE - FRONT - ASTROPAY", () => {

    beforeEach(() => {
        AutomationpracticeHomePage.login()
    })
    it("1.1 Access the website.", () => {

        // I Access the Womens section and select the Blouses option,
        AutomationpracticeHomePage.clickOnOptionBlouses()

        BlousesPage.botonazoAddToCart().should('exist')

        // I add the first garment found to the cart
        BlousesPage.clickOnAddToCartButton()          

        // I validate that the garment was successfully added to the cart
        BlousesPage.validateItemSuccessfullyAdded()

        // I print the garment's price
        BlousesPage.printPrice()

        BlousesPage.clickOnCloseWindowButton()

    })

    it("1.2 Access the web search component and enter the jeans garment.", () => {

        AutomationpracticeHomePage.typeToSearch('jeans')
        AutomationpracticeHomePage.clickOnSubmitSearch()
        SearchResultsPage.validateAlertMessage()

    })
})
