/// <reference types="cypress"/>
import '../../support/api_commands'
const { generateRandomId } = require('../../utils/generateRandomId')
const { availableProduct } = require('../../fixtures/createProduct')

it('Update product by Id', () => {
    cy.get_AllProducts().then(response => {

        cy.log(JSON.stringify(response.body
            .forEach(element => {
                cy.log('Products', element)
            })
        ))

        const firstProduct = response.body[1]
        const productId = firstProduct.id

        const updateProduct = {
            Id: productId,
            Name: "Action Figure",
            Price: 250.0,
            Stock: 13
        } 

        cy.update_ProductById(productId, updateProduct).then(resp => {

            cy.log(`Request: product/${productId}`)
            
            expect(resp.status).to.equal(200)

        })
       expect(response.status).to.equal(200)
    })
})

it('It should not update product by wrong Id', () => {
    cy.get_AllProducts().then(response => {

        cy.log(JSON.stringify(response.body
            .forEach(element => {
                cy.log('Products', element)
            })
        ))

        const firstProduct = response.body[1]
        const productId = firstProduct.Id
        const id = generateRandomId(7)

        cy.update_ProductById(id, availableProduct).then(resp => {

            cy.log(`Request: product/${productId}`)
            
            expect(resp.status).to.equal(400)

        })
       expect(response.status).to.equal(200)
    })
})

it('It should not update product', () => {
    cy.get_AllProducts().then(response => {

        cy.log(JSON.stringify(response.body
            .forEach(element => {
                cy.log('Products', element)
            })
        ))

        const firstProduct = response.body[1]
        const productId = firstProduct.id

        const updateProduct = {
            Id: productId,
            Name: "Action Figure",
            Price: 0,
            Stock: 0
        } 

        cy.update_ProductById(productId, updateProduct).then(resp => {

            cy.log(`Request: product/${productId}`)
            cy.log(`Request: product/${updateProduct}`)
            cy.log(`Request: product/${updateProduct.Price}`)
            
            expect(resp.status).to.equal(400)

        })
       expect(response.status).to.equal(200)
    })
})