// 1. Sum digits
function countInputNumberSum(input) {
    let stringInput = input.toString();
    let sum = 0;
    for ( let i = 0; i < stringInput.length; i ++ ) {
        sum += Number(stringInput[i]);
    }
    console.log(sum);
}

// 2. Chars to String
function charsToString(a, b, c) {
    let final = '';
    let firstString = a.toString();
    let secondString = b.toString();
    let thirdString = c.toString();
    final = firstString + secondString + thirdString;
    console.log(final);
}

// 3. Town Info
function townInfo(townName, townPopulation, townArea) {
    console.log('Town ' + townName + ' has population of ' + townPopulation + ' and area ' + townArea + ' square km.');
}

// 4. Convert Meters to Kilometres
function metersToKilometres(meters){
    let kilometres = (meters*0.001).toFixed(2);
    console.log(kilometres);
}

// 5. Pounds to Dollars
function poundsToDollars(money) {
    let pound = 1.31;
    let finale = (money * pound).toFixed(3);
    console.log(finale);
}

// 6. Reversed Chars
function reverseChars(a, b, c) {
    console.log(c + " " + b + " " + a);
}

// 7. Lower or Upper
function lowerOrUpper(input) {
    let test = input.toLowerCase();
    if ( input === test ) {
        console.log('lower-case');
    }
    else {
        console.log('upper-case');
    }
}

// 8. Calculator
function calculator(firstInput,operation,secondInput) {
    if ( operation === '+' ) {
        console.log((firstInput + secondInput).toFixed(2));
    }
    else if ( operation === "-" ) {
        console.log((firstInput - secondInput).toFixed(2));
    }
    else if ( operation === "/" ) {
        console.log((firstInput/secondInput).toFixed(2));
    }
    else if ( operation === "*" ) {
        console.log((firstInput * secondInput).toFixed(2));
    }
}

// 9. Gladiator Expenses
function gladiatorExpenses(loseFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for ( let i = 1; i <= loseFights; i ++ ) {
        if ( i % 2 === 0 ) {
            helmetCount++;
        }
        if ( i % 3 === 0 ) {
            swordCount++;
        }
        if ( i % 2 === 0 && i % 3 === 0 ) {
            shieldCount++;
            if ( shieldCount % 2 === 0 && shieldCount > 0) {
                armorCount ++;
            }
        }  
    }
    let helmetCost = helmetCount * helmetPrice;
    let swordCost = swordCount * swordPrice;
    let shieldCost = shieldCount * shieldPrice;
    let armorCost = armorCount * armorPrice;
    let expenses = (helmetCost + swordCost + shieldCost + armorCost).toFixed(2);

    console.log('Gladiator expenses: ' + expenses + ' aureus');
}

// 10.Spice Must Flow 
function spiceMustFlow(spice) {
    let finalSum = 0;
    let counter = 0;
    for ( let i = spice; i >= 100; i = i - 10) {
        finalSum += i - 26;
        counter++;
    }
    finalSum = finalSum - 26;
    if (finalSum < 0) {
        finalSum = 0;
    }
    console.log(counter);
    console.log(finalSum);
}

// More Exercises
// 1. Digits with Words
function digitsWithWords(input) { 
    switch (input) {
        case 'zero': console.log('0');
        break;
        case 'one': console.log('1');
        break;
        case 'two': console.log('2');
        break;
        case 'three': console.log('3');
        break;
        case 'four': console.log('4');
        break;
        case 'five': console.log('5');
        break;
        case 'six': console.log('6');
        break;
        case 'seven': console.log('7');
        break;
        case 'eight': console.log('8');
        break;
        case 'nine': console.log('9');
        break;
    }
}

// 2. Prime Number Checker
function isPrime(num) {
    let counter = 0;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            counter++;
        }
    }
    if ( counter > 0 ) {
        console.log('false');
    }
    else {
        console.log('true');
    }
}

// 3. Cone
function cone(coneRadius, coneHeight) {
    let coneVolume = (1/3)*Math.PI*coneRadius*coneRadius*coneHeight;
    let slantHeight = Math.sqrt(coneRadius*coneRadius + coneHeight*coneHeight);
    let lateralSurface = Math.PI*coneRadius*slantHeight;
    let baseSurface = Math.PI*coneRadius*coneRadius;
    let totalSurface = lateralSurface + baseSurface;

    console.log('volume = ' + coneVolume.toFixed(4));
    console.log('area = ' + totalSurface.toFixed(4));
}

// 4. Biggest of 3 Numbers
function biggestNumber(a,b,c) {
    let dummy = Math.max(a,b,c);
    console.log(dummy);
}

// 5. Binary to Decimal
function binaryToDecimal(input) {
    let asd = input.toString();
    console.log(parseInt(asd,2));
}

// 6. Chess board
function chessBoard(input) {
    console.log('<div class="chessboard">');
    for ( let i = 1; i <= input; i ++ ) {
        if ( i % 2 !== 0 ) {
            console.log('  <div>')
            console.log('\t<span class="black"></span>');
            console.log('\t<span class="white"></span>');
            console.log('\t<span class="black"></span>');
            console.log('  </div>')
        }
        else {
            console.log('  <div>')
            console.log('\t<span class="white"></span>');
            console.log('\t<span class="black"></span>');
            console.log('\t<span class="white"></span>');
            console.log('  </div>')
        }
    }
    console.log('</div>');
}
chessBoard(3);

// 7. Triangle Area
function triangleArea(a,b,c) {
    let halfPerimeter = ( a + b + c ) / 2;
    let area = Math.sqrt(halfPerimeter*(halfPerimeter-a)*(halfPerimeter-b)*(halfPerimeter-c));
    console.log(area);
}