function triangleOfNumbers(input) {
    let someString = '';
    for ( let i = 1; i <= input; i ++ ) {
        for ( let j = 1; j <= i; j ++ ) {
            someString += i + ' ';
        }
        console.log(someString);
        someString = '';
    }
}