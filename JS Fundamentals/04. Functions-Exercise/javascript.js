// 1. Smallest of Three Numbers
function smallestofThreeIntegers(a, b, c) {
    let smallest = Number.MAX_SAFE_INTEGER;
    if ( a < smallest ) {
        smallest = a;
    }
    if ( b < smallest ) {
        smallest = b;
    }
    if ( c < smallest ) {
        smallest = c;
    }
    console.log(smallest);
}

// 2. Add and Subtract
function addAndSubtract(a, b, c) {
    function sum(a, b) {
        return Number(a) + Number(b);
    }
    let someSum = sum(a, b);
    function subtract(someSum, c) {
        return someSum - c;
    }
    let someSubtract = subtract(someSum, c);
    console.log(someSubtract);
}

// 3. Characters in Rage
function charactersInRange(firstString, secondString) {
    let start = firstString.charCodeAt();
    let finish = secondString.charCodeAt();
    let arr = [];
    if ( start < finish ) {
        for ( let i = start + 1; i < finish; i ++ ) {
            arr.push(String.fromCharCode(i));
        }
    }
    else {
        for ( let i = finish + 1; i < start; i ++ ) {
            arr.push(String.fromCharCode(i));
        }
    }
    console.log(arr.join(" "));
}
//charactersInRange('C','#');

// 4. Odd and Even Sum
function oddAndEvenSum(input) {
    let string = input.toString();
    let oddSum = 0;
    let evenSum = 0;
    for ( let i = 0; i < string.length; i ++ ) {
        if ( string[i] % 2 === 0) {
            evenSum += Number(string[i]);
        }
        else {
            oddSum += Number(string[i]);
        }
    }
    console.log('Odd sum = ' + oddSum + ', Even sum = ' + evenSum);
}

// 5. Palindrome Integers
function palindromeIntegers(inputArr) {
    let booleanArr = [];
    for ( let i = 0; i < inputArr.length; i ++ ) {
        let string = inputArr[i].toString();
        let comparissonArray = [];
        for ( let j = string.length - 1; j >= 0; j -- ) {
            comparissonArray.push(string[j]);
        }
        if ( string === comparissonArray.join("").toString()) {
            booleanArr.push(true);
        }
        else {
            booleanArr.push(false);
        }
    }
    for ( let i = 0; i < booleanArr.length; i  ++ ) {
        console.log(booleanArr[i]);
    }
}

// 6. Password Validator
function passwordValidator(input) {
    function lengthCheck( input ) {
        if ( input.length < 6 || input.length > 10 ) {
            console.log('Password must be between 6 and 10 characters');
        }
        else {
            return false;
        }
    }
    let firstCheck = lengthCheck(input);

    function lettersAndDigitsCheck(input) {
        let booleanVar = false;
        let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for ( let i = 0; i < input.length; i ++ ) {
            if ( alphabet.indexOf(input[i]).toString() > - 1) {
               booleanVar = false; 
            }
            else {
                booleanVar = true;
                break;
            }
        }
        if ( booleanVar == true ) {
            console.log('Password must consist only of letters and digits');
        }
        else {
            return false;
        }
    }
    let secondCheck = lettersAndDigitsCheck(input);

    function atLeastTwoDigitCheck(input) {
        let numbers = '1234567890';
        let booleanVar = false;
        let counter = 0;
        for ( let i = 0; i < input.length; i ++) {
            if ( numbers.indexOf(input[i]).toString() > - 1 ) {
                counter ++;
            }
        }
        if ( counter < 2 ) {
            console.log('Password must have at least 2 digits');
        }
        else {
            return false;
        }
    }
    let thirdCheck = atLeastTwoDigitCheck(input);
    if ( firstCheck === false && secondCheck === false && thirdCheck === false) {
        console.log('Password is valid');
    }
}

// 7. Shortest and Longest Word.
function shortestAndLongestWord(input) {
    let asd = input.replace(/[.,!?-]/g,"");
    let wordsArray = asd.split(" ");
    let biggestLength = 0;
    let longestWord = '';
    let smallestLength = Number.MAX_SAFE_INTEGER;
    let shortestWord = '';
    for ( let i = 0; i < wordsArray.length; i ++ ) {
        if ( wordsArray[i].length > biggestLength ) {
            biggestLength = wordsArray[i].length;
            longestWord = wordsArray[i];
        }
        if ( wordsArray[i].length != 0 && wordsArray[i].length < smallestLength ) {
            smallestLength = wordsArray[i].length;
            shortestWord = wordsArray[i];
        }
    }
    console.log('Longest -> ' + longestWord);
    console.log('Shortest -> ' + shortestWord);
}
shortestAndLongestWord('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');

// 8. Perfect Number
function perfectNumber(input) {
    let divisorsArray = [];
    let divisorsSum = 0;
    for ( let i = 1; i < input; i ++ ) {
        if ( input % i === 0 ) {
            divisorsArray.push(i);
        }
    }
    for ( let i = 0; i < divisorsArray.length; i ++ ) {
        divisorsSum += Number(divisorsArray[i]);
    }
    if ( divisorsSum === input ) {
        console.log('We have a perfect number!');
    }
    else {
        console.log("It’s not so perfect.");
    }
}

// 9. Loading Bar
function loadingBar(input) {
    let percents = input/10;
    let outputString = '';
    let arr = [];
    for ( let i = 0; i < percents; i ++ ) {
        arr.push('%');
    }
    for ( let i = percents; i < 10; i ++ ) {
        arr.push('.');
    }
    if ( input < 100 ) {
        console.log(input + '% [' + arr.join("") + "]");
        console.log('Still loading...');
    }
    else {
        console.log('100% Complete!');
        console.log('[' + arr.join("") + ']');
    }
}

// 10. Factorial Division
function factorialDivision(a, b) {
    let firstFactorial = 1;
    let secondFactorial = 1;
    for ( let i = 0; i < a; i ++ ) {
        firstFactorial = firstFactorial + firstFactorial * i;
    }
    for ( let i = 0; i < b; i ++ ) {
        secondFactorial = secondFactorial + secondFactorial * i;
    }
    console.log((firstFactorial/secondFactorial).toFixed(2));
}