function printAndSum(startNumber, endNumber) {
    let someString = '';
    let someSum = 0;
    for ( let i = startNumber; i <= endNumber; i ++ ) {
        someString += i + ' ';
        someSum += i;
    }
    console.log(someString);
    console.log('Sum: ' + someSum);
}