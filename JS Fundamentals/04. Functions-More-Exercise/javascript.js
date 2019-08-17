// 1. Car Wash
function carWash(input) {
    let final = 0;
    for ( let i = 0; i < input.length; i ++ ) {
        switch ( input[i] ) {
            case 'soap': final+=10;
                break;
            case 'water': final = final + 0.2*final;
                break;
            case 'vacuum cleaner': final = final + 0.25*final
                break;
            case 'mud': final = final - 0.1*final;
                break;
        }
    }
    console.log('The car is ' + final.toFixed(2) + '% clean.');
}
//carWash(['soap','soap','vacuum cleaner','mud','soap','water']);


// 2. Number Modification
function numberModification(input) {
    let inputString = input.toString();
    let sumDigits = 0;
    let count = 0;
    for ( let i = 0; i < inputString.length; i ++ ) {
        sumDigits += Number(inputString[i]);
        count++;
    }
    if ( sumDigits / count >= 5 ) {
        console.log(Number(inputString));
    }
    else {
        while ( sumDigits / count < 5 ) {
            sumDigits += 9;
            count ++;
            inputString += '9';
            if ( sumDigits / count >= 5 ) {
                console.log(Number(inputString));
                break;
            }
        }
    }
}

// 3. Points Validation
function pointsValidation(input) {
    let firstX = input[0];
    let secondX = input[2];
    let firstY = input[1];
    let secondY = input[3];

    function comparisson(firstX,firstY,secondX,secondY) {
        let distanceX = firstX - secondX;
        let distanceY = firstY - secondY;
        let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
        if ( Number.isInteger(distance)) {
            return '{' + firstX + ', ' + firstY + '} to {' + secondX + ', ' + secondY + '} is valid';
        }
        else {
            return '{' + firstX + ', ' + firstY + '} to {' + secondX + ', ' + secondY + '} is invalid';
        }
    }
    console.log(comparisson(firstX,firstY,0,0));
    console.log(comparisson(secondX,secondY,0,0));
    console.log(comparisson(firstX,firstY,secondX,secondY));
}
//pointsValidation([2,1,1,1]);

// 4. Radio Crystals
function radioCrystals(input) {
    
}

// 5. Print DNA
function printDNA(input) {
    let dna = 'ATCGTTAGGG';
    let counter = 0;
    function first(a, b) {
        return '**' + a + b + '**';
    }
    function second(a, b) {
        return '*' + a + '--' + b + '*';
    }
    function third(a, b) {
        return a + '----' + b;
    }
    function fourth(a, b) {
        return '*' + a + '--' + b + '*';
    }

    for ( let i = 0; i < input* 2 ; i = i + 2 ) {
        left = dna[i % 10];
        right = dna[(i+1) % 10];
        counter ++;
        if ( counter % 4 === 1 ) {
            console.log(first(left, right));
        }
        else if ( counter % 4 === 2 ) {
            console.log(second(left, right));
        }
        else if ( counter % 4 === 3 ) {
            console.log(third(left, right));
        }
        else if ( counter % 4 === 0 ) {
            console.log(fourth(left, right));
        }
    }
}