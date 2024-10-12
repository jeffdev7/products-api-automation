function generateRandomId(){
    return Math.floor(Math.random() * 6).toString()
}

module.exports = {generateRandomId}