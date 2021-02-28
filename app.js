// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

//Dolar a Yen
const dolar_yen=106.58
function fromDollarToYen(monto_dolar){
    return monto_dolar*dolar_yen
}

//Yen to Pound
const yen_pound=102.32
function fromYenToPound(monto_yen){
    return euro_yen/euro_pound
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound}