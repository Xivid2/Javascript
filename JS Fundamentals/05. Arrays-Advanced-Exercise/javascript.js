// 1. Train
function train(input) {
    let wagonString = input[0].split(" ").map(x => Number(x));
    let maxCapacity = Number(input[1]);
    let commandsString = input.splice(2);
    let asd = [];
    for ( let i = 0; i < commandsString.length; i ++ ) {
        let commandInput = commandsString[i].split(" ");
        if ( commandInput[0] === 'Add' ) {
            wagonString.push(Number(commandInput[1]));
        }
        else {
            for ( let j = 0; j < wagonString.length; j ++ ) {
                if ( wagonString[j] + Number(commandInput[0]) <= maxCapacity ) {
                    wagonString[j]+=Number(commandInput[0]);
                    break;
                }
            }
        }
    }
    console.log(wagonString.join(" "));
}
//train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);

// 2. Distinct Array
function distinctArray(input) {
    let arrayCopy = []
    for ( let element of input ) {
        if (arrayCopy.indexOf(element) === -1) {
            arrayCopy.push(element);
        }
    }
    console.log(arrayCopy.join(" "));
}
//distinctArray([7,8,9,7,2,3,4,1,2]);

// 3. House Party
function houseParty(input) {
    let personList = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let nextCheck = input[i].split(" ");
        if ( nextCheck[2] === 'going!') {
            if ( personList.indexOf(nextCheck[0]) === -1 ) {
                personList.push(nextCheck[0]);
            }
            else {
                console.log(nextCheck[0] + ' is already in the list!');
            }
        }
        else {
            if ( personList.indexOf(nextCheck[0]) === -1 ) {
                console.log(nextCheck[0] + ' is not in the list!');
            }
            else {
                personList.splice(personList.indexOf(nextCheck[0]),1);
            }  
        }
    }
    for ( let i = 0; i < personList.length; i ++ ) {
        console.log(personList[i]);
    }
}
//houseParty(['Allie is going!','George is going!','John is not going','George is not going!']);

// 4. Sorting
function sorting(input) {
    let newArr = input.slice(0);
    let someArr = [];
    newArr.sort((a,b) => a - b);
    while ( newArr.length > 0 ) {
        someArr.push(newArr.pop());
        someArr.push(newArr.shift());
    }
    console.log(someArr.join(" "));
}
//sorting([1,21,3,52,69,63,31,2,18,94]);

// 5. Sort an Array by 2 Criteria
function sortTwoCriteria(input) {
    let newArr = input.slice(0);
    newArr.sort(function(a,b) {
        if ( a.length < b.length ) {
            return a.length - b.length;
        }
        else if ( a.length === b.length ) {
            return a > b;
        }
        else if ( a.length > b.length ) {
            return a.length - b.length;
        }
    });
    for ( let i = 0; i < newArr.length; i ++ ) {
        console.log(newArr[i]);
    }
}
//sortTwoCriteria(['alpha','beta','gamma']);
//sortTwoCriteria(['Isacc','Theodor','Jack','Harrison','George']);

// 6. Bomb Numbers
function bombNumbers(array,bombArray) {
    while ( array.indexOf(bombArray[0]) !== -1 ) {
        let bombIndex = array.indexOf(bombArray[0]);
        let spliceSum = bombArray[1] * 2 + 1;
        let startIndex = bombIndex - bombArray[1];
        if ( startIndex < 0 ) {
            startIndex = 0;
        }
        array.splice(startIndex,spliceSum);
    }
    let sum = 0;
    for ( element in array) {
        sum += Number(array[element]);
    }
    console.log(sum);
}
//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3]);
//bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);

// 7. Search for a Number
function searchNumber(firstArray,secondArray) {
    let elementsToTake = secondArray[0];
    // let newArray = firstArray.splice(0,elementsToTake);
    // console.log('newArray: ' + newArray);
    let elementstoDelete = secondArray[1];
    let searchN = secondArray[2];
    let counter = 0;
    if ( firstArray.length >= 5 ){
            let newArr = firstArray.splice(0,elementsToTake);
            newArr.splice(0,elementstoDelete);
        for ( let i = 0; i < newArr.length; i ++ ) {
            if ( newArr[i] === searchN ) {
                counter++
            }
        }
    }
    console.log('Number ' + searchN + ' occurs ' + counter + ' time.');
}
//searchNumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);

// 8. Array Manipulator
function arrayManipulator(firstArray,secondArray) {
    let newArr = firstArray.slice(0);
    let sumArrat = [];
    let addManyArray = [];
    for ( let i = 0; i < secondArray.length; i ++ ) {
        let currentArray = secondArray[i].split(" ");
        let index = 0;
        let value = 0;

        switch(currentArray[0]) {
            case 'add':
                index = currentArray[1];
                value = Number(currentArray[2]);
                newArr.splice(index,0,value);
            break;
            case 'addMany':
                let addManyArray = currentArray.slice(2);
                for ( let j = 0; j < addManyArray.length; j ++ ) {
                    value = Number(addManyArray[j]);
                    index = Number(currentArray[1]) + j;
                    newArr.splice(index,0,value);
                }
            break;
            case 'contains': 
                index = Number(currentArray[1]);
                if ( newArr.indexOf(index) !== -1 ) {
                    console.log(newArr.indexOf(index));
                }
                else {
                    console.log(-1);
                }
                break;
            case 'remove':
                index = Number(currentArray[1]);
                newArr.splice(index,1);
            break;
            case 'shift':
                index = Number(currentArray[1]);
                for ( let j = 0; j < index; j ++ ) {
                    value = newArr.shift();
                    newArr.push(value);
                }
            break;
            case 'sumPairs':
                sumArrat = [];
                for ( let j = 0; j < newArr.length; j++ ) {
                    if ( j % 2 === 0){
                        index = Number(newArr[j]);
                        if ( newArr[j+1] !== undefined){
                            value = Number(newArr[j+1]);
                        }
                        else {
                            value = 0;
                        }
                    sumArrat.push(index+value);
                    }
                }
                newArr = sumArrat;
            break;
            case 'print':
                console.log(newArr);
            break;
        }
    }
}
//arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);

// 9. Gladiator Inventory
function gladiatorInventory(input) {
    let inventory = input[0].split(" ");
    let commands = input.slice(1);
    for ( let i = 0; i < commands.length; i ++ ) {
        let command = commands[i].split(" ");
        switch (command[0]) {
            case 'Buy':
                if ( inventory.indexOf(command[1]) === -1) {
                    inventory.push(command[1]);
                }
            break;
            case 'Trash':
                if ( inventory.indexOf(command[1]) !== -1) {
                    inventory.splice(inventory.indexOf(command[1]),1);
                }
            break;
            case 'Repair':
                if ( inventory.indexOf(command[1]) !== -1 ) {
                    inventory.splice(inventory.indexOf(command[1]),1);
                    inventory.push(command[1]);
                }
            break;
            case 'Upgrade':
                let item = command[1].split('-');
                if ( inventory.indexOf(item[0]) !== -1) {
                    let index = inventory.indexOf(item[0]);
                    inventory.splice(index + 1,0,item[0] + ":" + item[1]);
                }
            break;
        }
    }
    console.log(inventory.join(" "));
}
//gladiatorInventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V']);

// 10. Build a Wall
function buildWall(input) { 
    const concrete = 195;
    const oneCubicConcrete = 1900;
    let dailyWork = [];
    while(input.length > 0) {
        let sum = 0;
        for ( let i = 0; i < input.length; i ++ ) {
            if ( input[i] < 30 ) {
                input[i] += 1;
                sum++;
            }
            else {
                while( input.indexOf(30) !== -1) {
                    let index = input.indexOf(30);
                    input.splice(index,1);
                    if ( input[index] < 30 ) {
                        input[index] += 1;
                        sum++;
                    }
                }
            }
        }
        if ( sum > 0 ) {
            dailyWork.push(sum*concrete);     
        }
    }
    if ( dailyWork.length > 0 ) {
        console.log(dailyWork.join(", "));
    }
    let sum = 0;
    for ( let i in dailyWork ) {
        sum += dailyWork[i];
    }
    console.log(sum * oneCubicConcrete + ' pesos');
}
buildWall([29,30,29]);
