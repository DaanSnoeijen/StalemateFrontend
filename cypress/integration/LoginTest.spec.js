describe('Actions', function(){
    it('RegisterInputsTest', function() {
        cy.visit('http://localhost:3000')

        cy.get('.username')
            .type('TestUsername')

        cy.get('.password')
            .type('TestPassword')

        cy.contains('Log in').click()

        // cy.get('.username')
        //     .type('Test')

        cy.contains('TestUsername')
            .should('be.visible')
    })
})