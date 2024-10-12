/// <reference types="cypress"/>
import '../../support/api_commands'

it('Get product by Id', () => {
    cy.get_AllProducts().then(response => {

        cy.log(JSON.stringify(response.body
            .forEach(element => {
                cy.log('Products',element)
            })
        ))

        const firstProduct = response.body[0]
        const productId = firstProduct.id

        cy.get_ProductById(productId).then(resp => {

            cy.log(`Request: product/${productId}`)
            
            expect(resp.status).to.equal(200)

        })
       expect(response.status).to.equal(200)
    })
})

it('It does not get product by Id - It returns Not Found', () => {

    const productId = "123"

        cy.get_ProductById(productId).then(resp => {

            cy.log(`Request: product/${productId}`)
            
            expect(resp.status).to.equal(404)

        })
})