/// <reference types="cypress"/>
import '../../support/api_commands'
import { newProduct } from '../../fixtures/createProduct'


it('Add new product', () => {

    const productRequest = { ...newProduct }
    console.log('LOG', productRequest)

        cy.add_NewProduct(productRequest).then(resp => {

            cy.log(`Request: product/${productRequest}`)
            
            expect(resp.status).to.equal(201)

        })
})

it('It should not add new product', () => {

    var product = {
        Name: "",
        Price: 10.40,
        Stock: 0
    }

        cy.add_NewProduct(product).then(resp => {

            cy.log(`Request: product/${product}`)
            
            expect(resp.status).to.equal(400)

        })
})