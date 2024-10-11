const {generateRandomId} = require('../utils/generateRandomId')
let productId = generateRandomId(6);

export const newProduct = {
    Name: "",
    Price: 10.0,
    Stock: 20
}

export const availableProduct = {
    Id: productId,
    Name: "",
    Price: 10.0,
    Stock: 20

}