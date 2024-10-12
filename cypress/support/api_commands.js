/// <reference types="cypress"/>

let productId = ''

export function setProductId(ProductId){
    productId = ProductId;
}

Cypress.Commands.add('get_AllProducts', () => {
    cy.request({
        method:'GET',
        failOnStatusCode: false,
        url: Cypress.env('url_api') + 'product',

    })
})

Cypress.Commands.add('get_ProductById', (productId) => {
    cy.request({
        method:'GET',
        failOnStatusCode: false,
        url: Cypress.env('url_api') + 'product/' + productId,
    })
})

Cypress.Commands.add('remove_ProductById', (productId) => {
    cy.request({
        method:'DELETE',
        failOnStatusCode: false,
        url: Cypress.env('url_api') + 'product/' + productId,

    })
})

Cypress.Commands.add('update_ProductById', (productId, data) => {
    cy.request({
        method:'PUT',
        failOnStatusCode: false,
        url: Cypress.env('url_api') + 'product/' + productId,

        body: data
    })
})

Cypress.Commands.add('add_NewProduct', (data) => {
    cy.request({
        method:'POST',
        failOnStatusCode: false,
        url: Cypress.env('url_api') + 'product',

        body: data
    })
})