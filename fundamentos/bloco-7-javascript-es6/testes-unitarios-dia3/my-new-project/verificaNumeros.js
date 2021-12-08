const numeros = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        if (typeof array[i] !== 'number') {
            return false;
        }
    }
    return true;
};

module.exports = numeros;