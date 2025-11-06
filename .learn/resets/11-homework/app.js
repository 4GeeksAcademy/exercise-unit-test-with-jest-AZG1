console.log("Hello World")

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };

const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInYen) {
    
    let valueInDollar = valueInYen * 156.5;
    return valueInDollar;
}

module.exports = { sum, fromDollarToYen }

const fromYenToPound = function(valueInPound) {
    
    let valueInYen = valueInPound * 0.87;
    return valueInYen;
}

module.exports = { sum, fromYenToPound }