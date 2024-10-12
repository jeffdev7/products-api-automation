const {generateRandomId} = require('../utils/generateRandomId')
let productId = generateRandomId(6);

export const newProduct = {
    Name: "Beer",
    Price: 10.0,
    Stock: 300
}

export const availableProduct = {
    Id: productId,
    Name: "Beer",
    Price: 10.0,
    Stock: 20

}