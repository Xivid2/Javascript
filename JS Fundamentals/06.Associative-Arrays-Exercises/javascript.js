// 1. Words Tracker
function wordsTracker(input) {
    let someObj = {};
    let lookingWords = input.shift().split(' ').map(x=>x.toLowerCase());
    let wordsArray = input.map(x=>x.toLowerCase());
    for ( let i = 0; i < lookingWords.length; i++ ) {
        if ( !someObj.hasOwnProperty(lookingWords[i]) ) {
            someObj[lookingWords[i]] = 0;
        }
    }
    for ( let i = 0; i < wordsArray.length; i ++ ) {
        if ( someObj.hasOwnProperty(wordsArray[i]) ) {
            someObj[wordsArray[i]] += 1;
        }
    }
    let objEntries = Object.entries(someObj).sort((a,b) => b[1]-a[1]);
    for ( let i in objEntries ) {
        console.log(objEntries[i].join(' - '));
    }    
}
// wordsTracker(['sentence', 'In','this','you','have','to','count','the','occurances','of','the'
// ,'words','this','and','because','this','is','your','task']);

// 2. Odd Occurrences
function oddOccurrences(input) {
    let arr = input.split(' ');
    let usingArray = [];
    let printArray = [];
    for ( let i in arr ) {
        usingArray.push(arr[i].toLowerCase());
    }
    let finalArr = {};
    for ( let i = 0; i < usingArray.length; i ++ ) {
        if ( !finalArr.hasOwnProperty(usingArray[i]) ) {
            finalArr[usingArray[i]] = 1;
        }
        else {
            finalArr[usingArray[i]] += 1;
        }
    }
    for ( let i in finalArr ) {
        if ( finalArr[i] % 2 !== 0 ) {
            printArray.push(i);
        }
    }
    console.log(printArray.join(' '));
}
//oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// 3. Piccolo
function piccolo(input) {
    let finalObj = {};
    let printArr = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let newCar = input[i].split(', ');
        let command = newCar[0];
        let carNumber = newCar[1];
        if ( command === 'IN' ) {
            finalObj[carNumber] = 'IN';
        }
        if ( finalObj.hasOwnProperty(carNumber) && command === 'OUT' ) {
            finalObj[carNumber] = 'OUT';
        }
    }
    for ( let i in finalObj ) {
        if ( finalObj[i] === 'IN' ) {
            printArr.push(i);
        }
    }
    printArr.sort((a,b)=> a.localeCompare(b));
    for ( let i in printArr ) {
        console.log(printArr[i]);
    }
}
// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']
// );

 // 4. Party Time
 function partyTime(input) {
    let counter = 0;
    let indexOfParty = input.indexOf('PARTY');
    let vipList = {};
    let normalList = {};
    for ( let i = 0; i < indexOfParty; i ++ ) {
        if ( isNaN(input[i][0]) ) {
            if ( !normalList.hasOwnProperty(input[i])) {
                normalList[input[i]] = "Not here";
                counter ++;
            }   
        }
        else {
            if ( !vipList.hasOwnProperty(input[i])) {
                vipList[input[i]] = "Not here";
                counter++;
            }
        }
    }
    for ( let i = indexOfParty; i < input.length; i ++ ) {
        if ( normalList.hasOwnProperty(input[i]) ) {
            normalList[input[i]] = 'Here';
            counter--;
        }
        else if ( vipList.hasOwnProperty(input[i]) ) {
            vipList[input[i]] = "Here";
            counter--;
        }
    }
    console.log(counter);
    for ( let i in vipList ) {
        if ( vipList[i] === 'Not here' ) {
            console.log(i);
        }
    }
    for ( let i in normalList ) {
        if ( normalList[i] === 'Not here' ) {
            console.log(i);
        }
    }
 }
//  partyTime(['7IK9Yo0h',
//  '9NoBUajQ',
//  'Ce8vwPmE',
//  'SVQXQCbc',
//  'tSzE5t0p',
//  'PARTY',
//  '9NoBUajQ',
//  'Ce8vwPmE',
//  'SVQXQCbc'
//  ]);

// 5. Card Game
function cardGame(input) {
    let finalObj = {};
    for ( let i = 0; i < input.length; i ++ ) {
        let newPlayerIteration = input[i].split(': ');
        let playerName = newPlayerIteration[0];
        let playerCards = newPlayerIteration[1].split(', ');
        if ( !finalObj.hasOwnProperty(playerName) ) {
            finalObj[playerName] = [];
        }
        for ( let j = 0; j < playerCards.length; j ++ ) {
            if ( finalObj[playerName].indexOf(playerCards[j]) === -1 ) {
                finalObj[playerName].push(playerCards[j]);
            }
        }
    }
    for ( let i in finalObj ) {
        let sum = 0;
        let power = 0;
        let type = 0;
        for ( let j in finalObj[i] ) {
            let asd = finalObj[i][j].slice(finalObj[i][j].length -1);
            switch (finalObj[i][j][0]) {
                case '2':
                    power = 2;
                break;
                case '3':
                    power = 3;
                break;
                case '4':
                    power = 4;
                break;
                case '5':
                    power = 5;
                break;
                case '6':
                    power = 6;
                break;
                case '7':
                    power = 7;
                break;
                case '8':
                    power = 8;
                break;
                case '9':
                    power = 9;
                break;
                case '1':
                    power = 10;
                break;
                case 'J':
                    power = 11;
                break;
                case 'Q':
                    power = 12;
                break;
                case 'K':
                    power = 13;
                break;
                case 'A':
                    power = 14;
                break;
            }
            switch (asd) {
                case 'S':
                    type = 4;
                break;
                case 'H':
                    type = 3;
                break;
                case 'D':
                    type = 2;
                break;
                case 'C':
                    type = 1;
                break;
            }
            sum += power * type;
        }
        finalObj[i] = sum;
    }
    for ( let i in finalObj ) {
        console.log(i + ": " + finalObj[i]);
    }
}
// cardGame(['Peter: 2C, 4H, 9H, AS, QS',
// 'Tomas: 3H, 10S, JC, KD, 5S, 10S',
// 'Andrea: QH, QC, QS, QD',
// 'Tomas: 6H, 7S, KC, KD, 5S, 10C',
// 'Andrea: QH, QC, JS, JD, JC',
// 'Peter: JD, JD, JD, JD, JD, JD']
// );

// 6. Travel time
function travelTime(input) {
    let bigObj = {};
    
    for ( let i = 0; i < input.length; i ++ ) {
        let currentVisit = input[i].split(' > ');
        let currentCountry = currentVisit[0];
        let currentTown = currentVisit[1];
        let currentPrice = Number(currentVisit[2]);
        if ( !bigObj.hasOwnProperty(currentCountry) ) {
            bigObj[currentCountry] = {};
            if ( !bigObj[currentCountry].hasOwnProperty(currentTown) ) {
                bigObj[currentCountry][currentTown] = currentPrice;
            }
        }
        else {
            if ( !bigObj[currentCountry].hasOwnProperty(currentTown) ) {
                bigObj[currentCountry][currentTown] = currentPrice;
            }
            else {
                if ( Number(bigObj[currentCountry][currentTown]) > currentPrice ) {
                    bigObj[currentCountry][currentTown] = currentPrice;
                }
            }
        }
    }
    Object.keys(bigObj).sort((a,b) => a.localeCompare(b))
        .forEach(function(i) {
            let string = '';
            string += i + " ->";
            let arr = [];
            for ( let j in bigObj[i] ) {
                arr.push([j, bigObj[i][j]]);
            }
            arr.sort((a,b) => a[1] - b[1]);
            for ( let j = 0; j < arr.length; j ++ ) {
                string += " " + arr[j][0] + " -> " + arr[j][1];
            }
            console.log(string);
        });
}
// travelTime(["Bulgaria > Sofia > 500",
// "Bulgaria > Sopot > 800",
// "France > Paris > 2000",
// "Albania > Tirana > 1000",
// "Bulgaria > Sofia > 200" ]);

// 7. Company Users
function companyUsers(input) {
    let bigObj = {};
    for ( let i = 0; i < input.length; i ++ ) {
        let currentStuff = input[i].split(' -> ');
        let company = currentStuff[0];
        let employeeID = currentStuff[1];
        if ( !bigObj.hasOwnProperty(company) ) {
            bigObj[company] = [];
        }
        if ( bigObj[company].indexOf(employeeID) === -1 ) {
            bigObj[company].push(employeeID);
        }
    }
    Object.keys(bigObj).sort((a,b) => a.localeCompare(b)).forEach(function(i) {
        console.log(i);
        for ( let j in bigObj[i]) {
            console.log('-- ' + bigObj[i][j]);
        }
    });
}
// companyUsers(['SoftUni -> AA12345','SoftUni -> CC12344','Lenovo -> XX23456','SoftUni -> AA12345','Movement -> DD11111']);
// 8. A Miner Task
function minerTask(input) {
    let bigObj = {};
    for ( let i = 0; i < input.length; i ++ ) {
        if ( i % 2 === 0 ) {
            if ( !bigObj.hasOwnProperty(input[i])) {
                bigObj[input[i]] = 0;
            }
        }
        else {
            bigObj[input[i-1]] += Number(input[i]);
        }
    }
    for ( let i in bigObj ) {
        console.log(i + " -> " + bigObj[i]);
    }
}
// 9. Arena Tier
function arenaTier(input) {
    let gladiatorsObj = {};
    let onlyGladiators = [];
    let onlyFights = [];
    let skillObj = {};
    for ( let m = 0; m < input.length; m ++ ) {
        if ( !input[m].includes(' vs ') ) {
            onlyGladiators.push(input[m]);
        }
        else {
            onlyFights.push(input[m]);
        }
    }
    //console.log(onlyFights);
    for ( let i = 0; i < onlyGladiators.length; i++ ) {
        if ( onlyGladiators[i] === 'Ave Cesar' && onlyFights.length < 1 ) {
            for ( let j in gladiatorsObj ) {
                let sum = 0;
                for ( let m in gladiatorsObj[j] ) {
                    sum += gladiatorsObj[j][m];
                }
                skillObj[j] = sum;
            }
            let skillObjEntries = Object.entries(skillObj).sort(function(a,b) {
                if ( b[1] > a[1] ) {
                    return 1;
                }
                else if ( a[1] > b[1] ) {
                    return -1;
                }
                else {
                    return a[0].localeCompare(b[0]);
                }
            });
            for ( let m in skillObjEntries ) {
                console.log(skillObjEntries[m][0] + ": " + skillObjEntries[m][1] + " skill");
                for ( let n in gladiatorsObj ) {
                    if ( skillObjEntries[m][0] === n ) {
                        let proba = Object.entries(gladiatorsObj[n]).sort(function(a,b) {
                            if ( b[1] > a[1] ) {
                                return 1;
                            }
                            else if ( a[1] > b[1] ) {
                                return -1;
                            }
                            else {
                                return a[0].localeCompare(b[0]);
                            }
                        });
                        for ( let z in proba ) {
                            console.log("- " + proba[z][0] + " <!> " + proba[z][1]);
                        }
                    }
                }
            }
            break;
        }
        else {  
            let gladiator = onlyGladiators[i].split(' -> ');
            let gladiatorName = gladiator[0];
            let gladiatorSkillName = gladiator[1];
            let gladiatorSkillSize = Number(gladiator[2]);
            if ( !gladiatorsObj.hasOwnProperty(gladiatorName) && !gladiatorName.includes(' vs ') ) {
                let newGladiator = {}
                newGladiator[gladiatorSkillName] = gladiatorSkillSize;
                gladiatorsObj[gladiatorName] = newGladiator;
            }
            else {
                if ( !gladiatorsObj[gladiatorName].hasOwnProperty(gladiatorSkillName) ) {
                    gladiatorsObj[gladiatorName][gladiatorSkillName] = gladiatorSkillSize;
                }
                else {
                    if ( gladiatorsObj[gladiatorName][gladiatorSkillName] < gladiatorSkillSize ) {
                        gladiatorsObj[gladiatorName][gladiatorSkillName] = gladiatorSkillSize;
                    }
                }
            }
            for ( let j = 0; j < onlyFights.length; j ++ ) {
                let battle = onlyFights.shift().split(' vs ');
                let fighter1 = battle[0];
                console.log(fighter1)
                let fighter2 = battle[1];
                console.log(fighter2)
                let asd = Object.keys(gladiatorsObj);
                console.log('asd: ' + asd);
                if ( gladiatorsObj.hasOwnProperty(fighter1) && gladiatorsObj.hasOwnProperty(fighter2) ) {
                    console.log('ya1');
                }
                else {
                    console.log('no');
                }
            }  
        }
    }
}

arenaTier(['Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar']);

// 10. Legendary Farming  
function legendaryFarming(input) {
    let legendary = '';
    let legendaryWords = '';
    let someBool = false;
    let newArr = input.split(' ').map(x=>x.toLowerCase());
    legendaryObj = {
        'motes':0,
        'fragments':0,
        'shards':0
    };
    normalObj = {};
    for ( let i = 0; i < newArr.length; i ++ ) {
        if ( someBool === true ) {
            break;
        }
        if ( i % 2 !== 0 ) {
            if ( newArr[i] === 'motes' || newArr[i] === 'fragments' || newArr[i] === 'shards') {
                legendaryObj[newArr[i]] += Number(newArr[i-1]);
                if ( Number(legendaryObj[newArr[i]]) >= 250 ) {
                    someBool = true;
                    legendaryWords = newArr[i];
                    legendaryObj[newArr[i]] -= 250;
                    break;
                }
            }
            else {
                if ( !normalObj.hasOwnProperty(newArr[i]) ) {
                    normalObj[newArr[i]] = Number(newArr[i-1]);
                }
                else {
                    normalObj[newArr[i]] += Number(newArr[i-1]);
                }
            }
        }
    }
    if ( legendaryWords === 'fragments' ) {
        legendary = 'Valanyr';
    }
    else if (legendaryWords === 'motes' ) {
        legendary = 'Dragonwrath';
    }
    else if ( legendaryWords === 'shards' ) {
        legendary = 'Shadowmourne';
    }
    console.log(legendary + " obtained!");
    let legendaryArray = Object.entries(legendaryObj);
    legendaryArray.sort(function(a,b) {
        if ( a[1] < b[1] ) {
            return 1;
        }
        else if ( a[1] > b[1] ) {
            return -1;
        }
        else if ( a[1] === b[1] ) {
            return a[0].localeCompare(b[0]);
        }
    });
    for ( let i in legendaryArray ) {
        console.log(legendaryArray[i][0] + ": " + legendaryArray[i][1]);
    }
    let normalArray = Object.entries(normalObj);
    normalArray.sort(function(a,b) {
        return a[0].localeCompare(b[0]);
    });
    for ( let i in normalArray ) {
        console.log(normalArray[i][0] + ": " + normalArray[i][1] )
    }
}
//legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
