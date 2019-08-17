function rounding(inputNumber, roundingNumber ) {
    if ( roundingNumber>15 ) {
        roundingNumber = 15;
    }
    let asd = inputNumber.toFixed(roundingNumber);
    let output = parseFloat(asd);
    console.log(output);
}