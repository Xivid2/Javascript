// 1. Multiply Number by 2
function multiplyByTwo(input) {
    console.log(input*2);
}

// 2. Excellent grade
function excellentOrNot(input) {
    if ( input >= 5.50 ) {
        console.log("Excellent");
    }
    else {
        console.log('Not excellent');
    }
}

// 3. Numbers from 1 to 5
function numbersFromOneToFive() {
    for ( let i = 1; i<= 5; i ++ ) {
        console.log(i);
    }
}

// 4. Nubmers from N to 1
function numbersFromNToOne(input){
    for ( let i = input; i >= 1; i--) {
        console.log(i);
    }
}

// 5. Numbers from M to N
function numbersFromMtoN(m,n) {
    if ( m < n ) {
        for ( i = m; i <= n; i ++ ) {
            console.log(i);
        }
    }
    else {
        for ( i = m; i >= n; i -- ) {
            console.log(i);
        }
    }
}

// 6. Student information
function studentInformation(name,age,grade) {
    console.log('Name: ' + name + ', Age: ' + age + ', Grade: ' + grade.toFixed(2));
}

// 7. Month Printer
function monthPrinter(input) {
    switch (input) {
        case 1: console.log('January');
        break;
        case 2: console.log('February');
        break;
        case 3: console.log('March');
        break;
        case 4: console.log('April');
        break;
        case 5: console.log('May');
        break;
        case 6: console.log('June');
        break;
        case 7: console.log('July');
        break;
        case 8: console.log('August');
        break;
        case 9: console.log('September');
        break;
        case 10: console.log('October');
        break;
        case 11: console.log('November');
        break;
        case 12: console.log('December');
        break;
        default: console.log('Error!');
    }
}

// 8. Foreign Languages
function foreignLanguages(input) {
    if ( input === 'England' || input === 'USA') {
        console.log('English')
    }
    else if ( input === 'Spain' || input === 'Argentina' || input === 'Mexico' ) {
        console.log('Spanish');
    }
    else {
        console.log('unknown');
    }
}

// 9. Theater Promotions


// 10. Divisible by 3
function divisibleByThree() {
    for ( let i = 1; i <= 100; i ++ ) {
        if ( i % 3 === 0 ) {
            console.log(i);
        }
    }
}

// 11. Sum of Odd Numbers
function sumOddNumbers(input) {
    let sum = 0;
    for ( let i = 1; i<= input*2; i=i +2 ) {
        console.log(i);
        sum += i;
    }
    console.log('Sum: ' + sum);
}

