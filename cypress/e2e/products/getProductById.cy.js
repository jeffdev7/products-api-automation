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
        console.log('LGO FIRST PRODUTCT: ', JSON.stringify(firstProduct))
        console.log('LGO FIRST PRODUTCT ID: ', JSON.stringify(productId))

        cy.get_ProductById(productId).then(resp => {

            cy.log(`product/${productId} Data: `, JSON.stringify(resp.body[0]))
            
            expect(resp.status).to.equal(200)

        })
       expect(response.status).to.equal(200)
    })
})