describe('Check suite', () => {

    it('open flipkart', () => {

        cy.visit('https://www.flipkart.com/');

        cy.get('input[name="q"]').type('Iphone x');
    })
})