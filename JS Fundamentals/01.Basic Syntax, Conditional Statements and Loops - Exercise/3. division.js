function division(inputNumber) {
    if ( inputNumber % 10 === 0 && inputNumber % 7 === 0 ) {
        console.log('The number is divisible by 10');
    }
    else if ( inputNumber % 10 === 0 && inputNumber % 6 === 0 ) {
        console.log('The number is divisible by 10');
    }
    else if ( inputNumber % 10 === 0 && inputNumber % 3 === 0 ) {
        console.log('The number is divisible by 10');
    }
    else if ( inputNumber % 10 === 0 && inputNumber & 2 === 0 ) {
        console.log('The number is divisible by 10');
    }
    else if ( inputNumber % 3 === 0 && inputNumber % 2 === 0 ) {
        console.log('The number is divisible by 6');
    }
    else if ( inputNumber % 10 === 0 ) {
        console.log('The number is divisible by 10');
    }
    else if ( inputNumber % 7 === 0 ) {
        console.log('The number is divisible by 7');
    }
    else if ( inputNumber % 3 === 0 ) {
        console.log('The number is divisible by 3');
    }
    else if ( inputNumber % 2 === 0 ) {
        console.log('The number is divisible by 2');
    }
    else {
        console.log('Not divisible');
    }
}