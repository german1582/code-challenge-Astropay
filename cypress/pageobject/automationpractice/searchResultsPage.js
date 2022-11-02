class SearchResultsPage {

    elements = {
        alert_message: () => cy.get('p.alert')   
    }

    validateAlertMessage(){
        this.elements.alert_message().should('contain.text', 'No results were found for your search')
    }
    
}

module.exports = new SearchResultsPage();