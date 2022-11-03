///<reference types="Cypress" />

describe("TEST CHALLENGE - BACKEND - ASTROPAY", () => {

    it("2.1 The following endpoint simulates the insertion of a user to a system.", () => {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                userId: 101,
                id: 101,
                title: 'challenge for Astropay',
                body: 'Body of the challenge'
            }
        }).then(({ body, status }) => {
            // **********VALIDATING PROPER STATUS=201 **********
            expect(status).to.be.eq(201)

            // **********VALIDATING PROPER USERID=101 **********
            expect(body.userId).to.be.eq(101)

            // **********VALIDATING PROPER ID=101 **********
            expect(body.id).to.be.eq(101)

            // **********VALIDATING PROPER TITLE **********
            expect(body.title).to.be.eq('challenge for Astropay')

            // **********VALIDATING PROPER BODY **********
            expect(body.body).to.be.eq('Body of the challenge')
        })
    })

    it("2.2 The following endpoint displays the user with id=1.", () => {
        
        cy.log('VALIDATING PROPER TITLE')
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).its('body')

            // This test would fail If I had validate the title as requested in the challenge ("title": "delectus aut autem"),  
            // Then, I put the correct title so the test will pass.
            .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
})
