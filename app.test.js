test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);

     const { fromDollarToYen } = require('./app.js')
})

test("One Dollar should be 106.58 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const resultado = fromDollarToYen(5);
    const expected = 106.58*5;

    expect(expected).toBe(resultado);

})


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One Yen should be 102.32 pound", function(){
    const { fromYenToPound } = require('./app.js')

    const resultado = fromYenToPound(5);
    const expected = 102.32*5;

    expect(expected).toBe(resultado);

})
