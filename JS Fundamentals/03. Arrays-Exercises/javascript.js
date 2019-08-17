// 1. Add or Substract
function addOrSubstract(array) {
    let firstSum = 0;
    let newSum = 0;
    for ( let i = 0; i< array.length; i ++ ) {
        firstSum += array[i];
        if ( array[i] % 2 === 0 ) {
            array[i]+=i;
            newSum+=array[i];
        }
        else {
            array[i]-=i;
            newSum+=array[i];
        }
    }
    console.log(array);
    console.log(firstSum);
    console.log(newSum);
}

// 2. Common Elements
function commonElements(firstArray,secondArray) {
    for ( let i = 0; i < firstArray.length; i ++ ) {
        for ( let j = 0; j < secondArray.length; j ++ ) {
            if ( firstArray[i] === secondArray[i] ) {
                console.log(firstArray[i]);
            }
        }
    }
}

// 3. Merge Arrays
function mergeArrays(firstArray, secondArray) {
    let newArray = [];
    let someString = "";
    for ( let j = 0; j < secondArray.length; j ++ ) {
        if ( j % 2 === 0 ) {
            newArray.push(Number(firstArray[j]) + Number(secondArray[j]));
        }
        else {
            newArray.push(firstArray[j] +secondArray[j]);
        }
    }
    someString = newArray.join(" - ");
    console.log(someString);
}

// 4. Array Rotation
function arrayRotation(inputArray,rotationNumber) {
    for ( let i = 0; i < rotationNumber; i ++ ) {
        let asd = inputArray.shift();
        inputArray.push(asd);
    }
    console.log(inputArray.join(" "));
}

// 5. Max Number
function maxNumbers(inputArray) {
    let newArray = [];
    for ( let i = 0; i < inputArray.length; i ++ ) {
        let j;
        for ( j = i + 1; j < inputArray.length; j ++ ) {
            if ( inputArray[i] <= inputArray[j]){
                break;
            }
        }
        if ( j == inputArray.length ) {
            newArray.push(inputArray[i]);
        }
    }
    console.log(newArray.join(" "));
}

// 6. Equal Sums
function equalSums(inputArray) {
    let rightSum = 0;
    let leftSum = 0;
    let notZero = 1;
    let something = 0;
    let trueFalse = false;
    if ( inputArray.length < 2 ) {
        console.log('0');
    }
    else {
        for ( let i = 0; i < inputArray.length; i ++ ) {
            rightSum += inputArray[i];
        }
        for ( let i = 0; i < inputArray.length; i ++ ) {
            leftSum+=inputArray[i];
            rightSum-=inputArray[i];
            if ( leftSum !== rightSum - inputArray[i+1] ) {
                trueFalse = false;
            }
            else {
                trueFalse = true;
                something = i + 1;
                break;
            }
        }
        if ( trueFalse == false ) {
            console.log('no');
        }
        else {
            if ( inputArray.length === 1 ) {
                console.log('0');
            }
            else {
                console.log(something);
            }
        }
    }
}

// 7. Max Sequence of Equal Elements
function maxSequence(inputArray) {
    let string = inputArray[0].split(" ");
    let counter = 0;
    let number = 0;
    let min = 0;
    let someArray = [];
    for ( let i = 0; i < string.length; i ++ ) {
        if ( string[i] === string[i+1]) {
            counter++;
        }
        else if ( string[i] === string[i-1]) {
            counter++;
        }
        if ( counter > min ) {
            min = counter;
            number = string[i];
        }
        if ( string[i] !== string[i+1]) {
            counter = 0;
        }
    }
    for ( let i = 0; i < min; i ++ ) {
        someArray.push(number);
    }
    console.log(someArray.join(" "));
}

// 8. Magic Sum
function magicSum(inputArray) {
    let sum = Number(inputArray[1]);
    let stringArray = inputArray[0].split(" ");
    for ( let i = 0; i < stringArray.length; i ++ ) {
        for ( let j = stringArray.length-1; j > i; j -- ) {
            if ( Number(stringArray[i]) + Number(stringArray[j]) === sum ) {
                console.log(stringArray[i] + " " + stringArray[j]);
            }
        }
    }
}

// 9. Tseam Account
function TseamAccount(inputArray) {
    let gamesArray = inputArray[0].split(" ");
    inputArray.shift(); // removing games string from the array
    let commandsArray = []; //array for storage of commands
    let newGamesArray = []; //array for storage of games from commands
    for ( let i = 0; i < inputArray.length; i++ ) {
        let trialArray = inputArray[i].split(" "); // trial array is used to spread each element into above arrays
        commandsArray.push(trialArray[0]);
        newGamesArray.push(trialArray[1]);   
    }
    for ( let i = 0; i < commandsArray.length; i ++ ) {
        let index = gamesArray.indexOf(newGamesArray[i]);
        switch(commandsArray[i]) {
            case "Install": 
                if ( !gamesArray.includes(newGamesArray[i]) ) {
                    gamesArray.push(newGamesArray[i]);
                }
                break;
            case "Uninstall":
                if ( gamesArray.includes(newGamesArray[i]) ) {
                    gamesArray.splice(index,1);
                }
                break;
            case "Update":
                if ( gamesArray.includes(newGamesArray[i]) ) {
                    let updateVar = gamesArray.splice(index,1);
                    gamesArray.push(updateVar);
                }
                break;
            case 'Expansion':
                let expansionVar = newGamesArray[i].split("-");
                if ( gamesArray.includes(expansionVar[0]) ) {
                    index = gamesArray.indexOf(expansionVar[0]);
                    let asd = expansionVar[0] + ":" + expansionVar[1];
                    gamesArray.splice(index+1,0,asd);
                }
                break;
        }
    }
    console.log(gamesArray.join(" "));
}
TseamAccount(['CS WoW Diablo','Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go','Play!'])

// 10. *Ladybugs
function solve(input) {
    let i,
        field = new Array(input[0]).fill(0),    //create fileld
        bugsPositions = input[1].split(' '),    //take ladybugs' positions
        currPosition,
        command,
        index,
        direction,
        move;
    //fill field with ladybygs
    for (i = 0; i < bugsPositions.length; i += 1) {
        currPosition = Number(bugsPositions[i]);
        if ( currPosition < field.length ) {
            field[currPosition] = 1;
        }     
    }
 
    for (i = 2; i < input.length; i += 1) {
        command = input[i].split(' ');
        index = Number(command[0]);
        direction = command[1];
        move = Number(command[2]);
 
        if (field[index] === 1) {   //chek if index is in field range and if there is bug on the position
            field[index] = 0;
            while (index >= 0 && index < field.length) {
                if (direction === 'right') {
                    index += move;
                    if (field[index] === 0) {
                        field[index] = 1;
                        break;
                    }
                }
                else if (direction === 'left') {
                    index -= move;
                    if (field[index] === 0) {
                        field[index] = 1;
                        break;
                    }
                   
                }
            }
        }
    }
    console.log(field.join(' '));
}