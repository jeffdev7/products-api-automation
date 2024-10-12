/// <reference types="cypress"/>
import '../../support/api_commands'

it('Remove product by Id', () => {
    cy.get_AllProducts().then(response => {

        cy.log(JSON.stringify(response.body
            .forEach(element => {
                cy.log('Products',element)
            })
        ))

        const firstProduct = response.body[0]
        const productId = firstProduct.id

        cy.remove_ProductById(productId).then(resp => {

            cy.log(`Request: product/${productId}`)
            
            expect(resp.status).to.equal(204)

        })
       expect(response.status).to.equal(200)
    })
})