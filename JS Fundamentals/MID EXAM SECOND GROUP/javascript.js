// 1. The Hunting Games
function huntingGames(input) {
    let breakTime = false;
    input.map( x => Number(x) );
    let adventureDays = input.shift();
    let adventurePlayers = input.shift();
    let adventureEnergy = input.shift();
    let waterOnePerson = input.shift();
    let foodOnePerson = input.shift();
    let totalWater = adventurePlayers * adventureDays * waterOnePerson;
    let totalFood = adventurePlayers * adventureDays * foodOnePerson;

    for ( let i = 0; i < input.length; i ++ ) {
        if ( adventureEnergy - Number(input[i]) <= 0 ) {
            breakTime = true;
            break;
        }
        adventureEnergy -= input[i];
        adventureEnergy.toFixed(2);
        if ( (i + 1) % 2 === 0 && i > 0 ) {
            adventureEnergy  += 0.05 * adventureEnergy;
            totalWater -= 0.3 * totalWater;
        }
        if ( (i + 1) % 3 === 0 && i > 0 ) {
            adventureEnergy += 0.1 * adventureEnergy;
            totalFood -= totalFood/adventurePlayers;
        }
    }
    if ( breakTime === false ) {
        console.log('You are ready for the quest. You will be left with - ' + adventureEnergy.toFixed(2) + ' energy!');
    }
    else {
        console.log('You will run out of energy. You will be left with ' + totalFood.toFixed(2) + ' food and ' + totalWater.toFixed(2) + ' water.');
    }
}
//huntingGames([12,6,4430,9.8,5.5,620.3,840.2,960.1,220,340,674,365,345.5,212,412.12,258,496]);

// 2. Sieze the Fire
function siezeFire(input) {
    let totalWater = parseInt(input[1]);
    let stringArray = input[0].split('#');
    let totalEfford = 0;
    let totalFires = [];
    let fireSum = 0;
    for ( let i = 0; i < stringArray.length; i ++ ) {
        let commandArray = stringArray[i].split(' = ');
        let typeFire = commandArray[0];
        let rangeFire = parseInt(commandArray[1]);
        if ( (typeFire === 'High' && (rangeFire >= 81 && rangeFire <= 125))
            ||  (typeFire === 'Medium' && (rangeFire >= 51 && rangeFire <= 80))
            ||  (typeFire === 'Low' && (rangeFire >= 1 && rangeFire <= 50 ))) {

            if ( totalWater >= rangeFire ) {
                totalWater -= rangeFire;
                totalEfford += parseFloat((0.25*rangeFire));
                totalFires.push(rangeFire);
                fireSum += rangeFire;
            }
        }
    }
    console.log('Cells:');
    for ( let i of totalFires ) {
        console.log(' - ' + i);
    }
    console.log('Effort: ' + totalEfford.toFixed(2));
    console.log('Total Fire: ' + fireSum);
}
//siezeFire(['High = 89#Meduim = 53#Low = 28#Medium = 77#Low = 23','1250']);

// 3. The Final Quest
function finalQuest(input) {
    let text = input.shift().split(' ');
    for ( let i = 0; i < input.length; i ++ ) {
        let commandArray = input[i].split(' ');
        let command = commandArray[0];
        let first = commandArray[1];
        let second = commandArray[2];
        switch ( command ) {
            case 'Delete':
                if ( text[Number(first)+1] !== undefined ) {
                    text.splice((Number(first)+1),1);
                }
            break;
            case 'Swap':
                if ( text.indexOf(first !== -1 && text.indexOf(second) !== -1 ) ) {
                    let indexOne = text.indexOf(first);
                    let indexTwo = text.indexOf(second);
                    text.splice(indexOne,1);
                    text.splice(indexOne,0,second);
                    text.splice(indexTwo,1);
                    text.splice(indexTwo,0,first);
                }
            break;
            case 'Put':
                if ( text.indexOf(Number(second)-1) !== undefined && text[Number(second)-1] !== undefined ) {
                    text.splice((Number(second)-1),0,first);
                }
            break;
            case 'Sort':
                text.sort((a,b) => b.localeCompare(a));
            break;
            case 'Replace':
                if ( text.indexOf(second) !== -1 ) {
                    let index = text.indexOf(second);
                    text.splice(index,1);
                    text.splice(index,0,first);
                }
            break;
        }
    }
    console.log(text.join(' '));
}
//finalQuest(['This the my quest! final','Put is 2','Swap final quest!','Delete 2','Stop']);