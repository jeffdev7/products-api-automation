/// <reference types="cypress"/>
//const { Given, Then, When, BeforeAll } = require("@badeball/cypress-cucumber-preprocessor")
import '../../support/api_commands'
import { newProduct, availableProduct } from '../../fixtures/createProduct'

it('Get all products', () => {
    cy.get_AllProducts().then(response =>{

        cy.log('Data',JSON.stringify(response.body))
        cy.log(JSON.stringify(response.body
            .forEach(element => {
                cy.log('Products',element)
            })
        ))
        expect(response.status).to.equal(200)
    })
})
