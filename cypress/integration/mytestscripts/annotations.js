describe('Demo annotation', () => {
    before(() => {


        console.log('my before test suite')
        console.log('my before test suite')

    })

    beforeEach(() => {

        console.log('my  beforeEach  test suite')

    })
    it('annotations', () => {


        console.log('my first test case')
        cy.visit('https://www.flipkart.com/')


    })
    afterEach(() => {

        console.log('my afterEach test suite')

    })
    after(() => {

        console.log('my  after test suite')

    })
})