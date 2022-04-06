const array = require('./products.json')

function getPhoneById(id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            return array[i];
        }
    }
    return undefined;
}

function getPhoneByColor(color) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].color == color) {
            return array[i];
        }
    }
    return undefined;
}

module.exports = {
    getPhoneById,
    getPhoneByColor,
}