// 1. Cooking Masterclass

function cookingMasterClass(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceFlour = 0;
    let priceEgg = Number(input[3]).toFixed(2);
    let priceApron = Number(input[4]).toFixed(2);
    let apronStudents = Math.ceil(students + 0.2 * students);
    let neededMoney = 0;

    for ( let i = 1; i <= students; i ++ ) {
        if ( i % 5 === 0 ) {
            priceFlour = 0;
        }
        else {
            priceFlour = Number(input[2]).toFixed(2);
        }
        neededMoney += (Number(priceFlour) + Number(10*priceEgg));
    }
    neededMoney += (apronStudents * priceApron);
    if ( neededMoney <= budget ) {
        console.log('Items purchased for ' + neededMoney.toFixed(2) + '$.');
    }
    else {
        console.log((neededMoney - budget).toFixed(2) + '$ more needed.');
    }
}
//cookingMasterClass([100,25,4.0,1.0,6.0]);

// 2. Bread Factory
function breadFactor(input){
    let energy = 100;
    let coins = 100;
    let someBool = false;
    let commandsArray = input[0].split('|');
    //console.log(commandsArray);
    for ( let i = 0; i < commandsArray.length; i ++ ) {
        if ( someBool === true ) {
            break;
        }
        let currentCommand = commandsArray[i].split('-');
        let event = currentCommand[0];
        let number = Number(currentCommand[1]);

        switch ( event ) {
            case 'rest':
                let currentEnergy = energy;
                let energyGained = 0;
                if ( energy + number >= 100 ) {
                    energy = 100;
                    energyGained = energy - currentEnergy;
                }
                else if ( energy + number < 100 ) {
                    energyGained = number;
                    energy += number;
                }
                console.log('You gained ' + energyGained + ' energy.');
                console.log('Current energy: ' + energy + '.');
            break;
            case 'order':
                energy -= 30;
                if ( energy >= 0 ) {
                    coins += number;
                    console.log('You earned ' + number + ' coins.');
                }
                else {
                    energy += 80;
                    console.log('You had to rest!');
                }
            break;
            default:
                coins -= number;
                if ( coins <= 0 ) {
                    console.log('Closed! Cannot afford ' + event + '.');
                    someBool = true;
                    break;
                }
                else {
                    console.log('You bought ' + event + '.');
                }
            break;
        }
    }
    if ( someBool === false ) {
        console.log('Day completed!');
        console.log('Coins: ' + coins);
        console.log('Energy: ' + energy);
    }
}
//breadFactor(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000']);

// 3. Cooking Factory
function cookingFactor(input) {
    let bestQuality = Number.MIN_SAFE_INTEGER;
    let bestAverage = Number.MIN_SAFE_INTEGER;
    let finalLength = Number.MAX_SAFE_INTEGER;
    let bestBatch = [];
    function sum(input) {
        let sum = 0;
        for ( let i = 0; i < input.length; i ++ ) {
            sum += Number(input[i]);
        }
        return sum;
    }
    function average(input) {
        return sum(input) / input.length;
    }
    for ( let i = 0; i < input.length; i ++ ) {
        if ( input[i] === 'Bake It!') {
            break;
        }
        let currentBread = input[i].split('#');
        let batchSum = sum(currentBread);
        let batchAverage = average(currentBread);

        if ( batchSum > bestQuality ) {
            bestQuality = batchSum;
            bestAverage = batchAverage;
            finalLength = currentBread.length;
            bestBatch = currentBread.slice();
        }
        else if ( batchSum === bestQuality ) {
            if ( batchAverage > bestAverage ) {
                bestQuality = batchSum;
                bestAverage = batchAverage;
                finalLength = currentBread.length;
                bestBatch = currentBread.slice();
            }
            else if ( batchAverage === bestAverage ) {
                if ( currentBread.length < finalLength ) {
                    bestQuality = batchSum;
                    bestAverage = batchAverage;
                    finalLength = currentBread.length;
                    bestBatch = currentBread.slice();
                }
            }
        }
    }
    console.log('Best Batch quality: ' + bestQuality);
    console.log(bestBatch.join(' '));   
}
cookingFactor(['5#3#2','10#2#-2#1#-1','4#2#1','Bake It!']);