describe('Check suite', () => {

    it('open flipkart', () => {

        cy.visit('https://www.flipkart.com/');

        //   cy.get('input[name="q"]').type('Iphone x');

        let name = "hello"
        console.log(name.startsWith("hel"))

        if (name.startsWith("hel")) {
            cy.get('input[name="q"]').type('Iphone x');
        }

        cy.get("button[type='submit']").click()
    })
    // it('open amazon', () => {

    //     cy.visit('https://www.amazon.in/');

    //     cy.get('input[id = "twotabsearchtextbox"]').type('Iphone x');
    // })

})