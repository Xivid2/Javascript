// 1. Spring Vacation Trip
function vacationTrip(input) {
    let someBool = false;
    let expenses = 0;
    let numberInput = input.map(x=>Number(x));
    let tripDays = numberInput.shift();
    let budget = numberInput.shift();
    let tripPeople = numberInput.shift();
    let tripPriceFuelPerKM = numberInput.shift();
    let tripFoodExpensesPerPersonPerDay = numberInput.shift();
    let tripPriceRoomOnePerson = numberInput.shift();
    let hotelExpenses = tripDays * tripPeople * tripPriceRoomOnePerson;
    if ( tripPeople > 10 ) {
        hotelExpenses -= (0.25*hotelExpenses).toFixed(2);
    }
    let foodExpenses = tripDays * tripPeople * tripFoodExpensesPerPersonPerDay;
    expenses += (foodExpenses + hotelExpenses);
    for ( let i = 0; i < numberInput.length; i ++ ) {
        if ( budget <= expenses ) {
            someBool = true;
            break;
        }
        let fuelDailyExpense = numberInput[i]*tripPriceFuelPerKM;
        expenses += fuelDailyExpense;
        if ( ((i+1) % 3 === 0)  || ((i+1) % 5 === 0)) {
            expenses += 0.40*expenses;
        }
        if ( (i+1) % 7 === 0 ) {
            expenses -= expenses/tripPeople;
        }
    }
    if ( budget - expenses < 0 ) {
        console.log('Not enough money to continue the trip. You need ' + (expenses-budget).toFixed(2) + '$ more.');
    }
    else {
        console.log('You have reached the destination. You have ' + (Math.abs(budget-expenses)).toFixed(2) + '$ budget left.');
    }
}
vacationTrip(['10','20500','11','1.2','8','13','100','150','500','400','600','130','300','350','200','300']);

// 2. Hello, France
function helloFrance(input) {
    let budget = Number(input.pop());
    let bigArr = input.shift().split('|');
    let finalSum = 0;
    let normalSum = 0;
    let someBool = false;
    for ( let i = 0; i < bigArr.length; i ++ ) {
        let commandArray = bigArr[i].split('->');
        let item = commandArray[0];
        let itemPrice = parseFloat(commandArray[1]);
        let newItemPrice = 0;

        if ( (item === 'Clothes' && itemPrice <= 50.00) ||
            (item === 'Shoes' && itemPrice <= 35.00) || 
            (item === 'Accessories' && itemPrice <= 20.50)) {
            if ( budget - itemPrice >= 0 ) {
                budget -= itemPrice;
                normalSum += +itemPrice;
                newItemPrice = (0.4*itemPrice + itemPrice).toFixed(2);
                input.push(newItemPrice);
                finalSum+= +newItemPrice;
            }
            else {
                someBool = true;
                break;
            }         
        }
    }
    let profit = (finalSum - normalSum).toFixed(2);
    console.log(input.join(' '));
    console.log('Profit: ' + profit);
    if ( finalSum + budget>= 150.00 ) {
        console.log('Hello, France!');
    }
    else {
        console.log('Time to go.');
    }
}
//helloFrance(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60','90']);

// 3. Last Stop
function lastStop(input) {
    let someArr = input.shift().split(' ').map(x=>Number(x));
    for ( let i = 0; i < input.length; i ++ ) {
        let commandArray = input[i].split(' ');
        let command = commandArray[0];
        let first = Number(commandArray[1]);
        let second = Number(commandArray[2]);
        switch ( command ) {
            case 'Insert':
                if ( someArr[first] !== undefined ) {
                    someArr.splice(first+1,0,second);
                }
            break;  
            case 'Change':
                if ( someArr.indexOf(first) !== -1 ) {
                    let index = someArr.indexOf(first);
                    someArr.splice(index,1);
                    someArr.splice(index,0,second);
                }
            break;
            case 'Hide':
                if ( someArr.indexOf(first) !== -1 ) {
                    someArr.splice(someArr.indexOf(first),1);
                }
            break;
            case 'Switch':
                let firstPos = someArr.indexOf(first);
                let secondPos = someArr.indexOf(second);
                if ( firstPos !== -1 && secondPos !== -1 ) {
                    someArr.splice(firstPos,1);
                    someArr.splice(firstPos,0,second);
                    someArr.splice(secondPos,1);
                    someArr.splice(secondPos,0,first);
                }
            break;
            case 'Reverse':
                someArr.reverse();
            break;
        }
    }
    console.log(someArr.join(' '));
}
//lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110','Insert 5 32','Switch 97 78','Hide 88','Change 120 117','END']);
