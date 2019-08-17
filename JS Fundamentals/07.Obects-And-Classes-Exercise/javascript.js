// 1. Class Vehicle
// class Vehicle {
//     constructor(type,model,parts,fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = parts;
//         this.fuel = fuel;
//         this.parts.quality = this.parts.engine * this.parts.power;
//         this.drive = (input) => this.fuel -= input;
//     }
// }
// let parts = {engine: 6, power: 100}
// let vehicle = new Vehicle('a', 'b', parts, 200)
// vehicle.drive(100)
// console.log(vehicle.fuel)
// console.log(vehicle.parts.quality)

// 2. Class Storage
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.totalCost = 0;
        this.storage = [];
        this.addProduct = (input) => {
            this.storage.push(input);
            this.capacity -= input.quantity;
            this.totalCost += input.quantity * input.price;
        }
        this.getProducts = () => {
            for ( let i in this.storage ) {
                return this.storage.map(x=>JSON.stringify(x)).join('\n');
            };
        }             
    }
}
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15}
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25}
let productThree = {name: 'Bread', price: 1.10, quantity: 8}
let storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
storage.getProducts()
console.log(storage.capacity)
console.log(storage.totalCost)

// 3. Movies
function movies(input) {
    let finalArray = [];
    let objArray = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let currentArray = input[i].split(" ");
        if ( currentArray[0] === 'add' ) {
            currentArray.shift();
            currentArray.shift();
            let film = currentArray.join(" ");
            if ( finalArray.indexOf(film) === -1) {
                finalArray.push(film);
                let newObj = {
                    name:undefined,
                    director:undefined,
                    date:undefined
                };
                newObj.name = film;
                objArray.push(newObj);
            }
        }
        else {
            if ( currentArray.indexOf('by') !== -1 ) {
                let indexOfBy = currentArray.indexOf('by');
                let film = currentArray.splice(0,indexOfBy - 1).join(" ");
                let director = currentArray.splice(2,currentArray.length).join(" ");
                for ( let i in objArray ) {
                    for ( let j in objArray[i] ) {
                        if ( objArray[i][j] === film ) {
                            if ( objArray[i].hasOwnProperty('director')) {
                                objArray[i].director = director;
                            }
                        }
                    }
                }
            }  
            if ( currentArray.indexOf('on') !== -1 ) {
                let indexOfOn = currentArray.indexOf('on');
                let film = currentArray.splice(0,indexOfOn).join(" ");
                let date = currentArray.splice(2,currentArray.length).join(" ");
                for ( let i in objArray ) {
                    for ( let j in objArray[i] ) {
                        if ( objArray[i][j] === film ) {
                            if ( objArray[i].hasOwnProperty('date')) {
                                objArray[i].date = date;
                            }
                        }
                    }
                }
            }
        }
    }
    for ( let i in objArray ) {
        for ( let key in objArray[i] ) {
            if ( (objArray[i].name !== undefined) &&
                (objArray[i].director !== undefined) &&
                (objArray[i].date !== undefined) ) {
                    let asd = JSON.stringify(objArray[i]);
                    console.log(asd);
                    break;
                }
        }
    }
}
// movies(['add movie Fast and Furious',
// 'add movie Godfather',
// 'Inception directed by Christopher Nolan',
// 'Godfather directed by Francis Ford Coppola',
// 'Godfather on date 29.07.2018',
// 'Fast and Furious on date 30.07.2018',
// 'Batman on date 01.08.2018',
// 'Fast and Furious directed by Rob Cohen']
// );

// 4. Store Provision
function storeProvision(input) {
    let firstArray = input[0];
    let secondArray = input[1];
    let stockObj = {};
    for ( let i = 0; i < firstArray.length; i ++ ) {
        if ( i % 2 === 0 ) {
            if ( !stockObj.hasOwnProperty(firstArray[i])) {
                stockObj[firstArray[i]] = Number(firstArray[i+1]);
            }
        }
    }
    for ( let i = 0; i < secondArray.length; i ++ ) {
        if ( i % 2 === 0 ) {
            if ( !stockObj.hasOwnProperty(secondArray[i])) {
                stockObj[secondArray[i]] = Number(secondArray[i+1]);
            }
            else {
                stockObj[secondArray[i]] += Number(secondArray[i+1]);
            }
        }
    }
    console.log(stockObj);

}
//storeProvision([['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']]);

// 5. Inventory
function inventory(input) {
    let heroesArray = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let newHero = input[i].split(' / ');
        let heroName = newHero[0];
        let heroLevel = Number(newHero[1]);
        let heroItems = newHero[2].split(', ');
        let newObj = {};
        newObj.name = heroName;
        newObj.level = heroLevel;
        newObj.items = heroItems;
        heroesArray.push(newObj);
    }
    let jsonFinale = JSON.stringify(heroesArray);
    console.log(jsonFinale);
}
// inventory(["Isacc / 25 / Apple, GravityGun",
// "Derek / 12 / BarrelVest, DestructionSword",
// "Hes / 1 / Desolator, Sentinel, Antara"]
// );

// 6. JSON Towns
function jsonTowns(input) {
    let headers = input.shift().split(' ');
    let finalArray = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let newObj = {};
        let newTown = input[i].split(' ');
        for ( let j = 0; j < newTown.length; j ++ ) {
            if ( newTown[j] !== '|' ) {
                if ( newTown[j] > 1 ) {
                    newObj[headers[j]] = Number((Number(newTown[j])).toFixed(2));
                }
                else {
                    newObj[headers[j]] = newTown[j];
                }
            }
        }
        finalArray.push(newObj);
    }
    console.log(JSON.stringify(finalArray));
}
// jsonTowns(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// );

// 7. Unique Names
function uniqueNames(input) {
    input.sort(function(a,b){
        if ( a.length !== b.length ) {
            if ( a.length < b.length ) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
           return a.localeCompare(b);
        }
    });
    let newArr = [];
    for ( let i = 0; i < input.length; i ++ ) {
        if ( newArr.indexOf(input[i]) === -1) {

            newArr.push(input[i]);
        }
    }
    for ( let i of newArr ) {
        console.log(i);
    }
}
// uniqueNames(["Ashton",
// "Kutcher",
// "Ariel",
// "Lilly",
// "Keyden",
// "Keyden",
// "Keyden",
// "Keyden",
// "Keyden",
// "Aizen",
// "Billy",
// "Braston"]
// );

// 8. *Catalogue
function catalogue(input) {
    let letterArray = [];
    let finalObject = {};
    for ( let i = 0; i < input.length; i ++ ) {
        let newData = input[i].split(" : ");
        let newProduct = newData[0];
        let newProductLetter = newData[0][0];
        if ( letterArray.indexOf(newProductLetter) === -1 ) {
            letterArray.push(newProductLetter);
        }
        let newProductPrice = newData[1];
        finalObject[newProduct] = newProductPrice;
    }
    let objectEntries = Object.entries(finalObject);
    objectEntries.sort( function(a, b) {
        return ( a[0].localeCompare(b[0]));
    });
    letterArray.sort( function(a, b){
        return a.localeCompare(b);
    });
    for ( let i in letterArray ) {
        console.log(letterArray[i]);
        for ( let j in objectEntries ) {
            if ( objectEntries[j][0][0] === letterArray[i] ) {
                console.log('  ' + objectEntries[j][0] + ': ' + objectEntries[j][1]);
            }
        }
    }
}
//catalogue(['Appricot : 20.4','Fridge : 1500','TV : 1499','Deodorant : 10',
//    'Boiler : 300','Apple : 1.25','Anti-Bug Spray : 15','T-Shirt : 10']);

// 9. *Flight Schedule
function flightSchedule(input) {
    let allFlights = input[0];
    let changeFlights =input[1];
    let statusCheck = input[2][0];
    let flightArray = [];
    for ( let i = 0; i < allFlights.length; i ++ ) {
        let samoleten = {};
        let newSamoleten = allFlights[i].split(' ');
        let samoletenNomer = newSamoleten.shift();
        let samoletenSamolet = newSamoleten.join(' ');
        samoleten[samoletenNomer] = samoletenSamolet;
        samoleten['Destination'] = samoletenSamolet;
        samoleten['Status'] = 'Ready to fly';
        flightArray.push(samoleten);
        for ( let i = 0; i < changeFlights.length; i ++ ) {
            let newChange = changeFlights[i].split(' ');
            let samoletenNomer = newChange[0];
            let statusChange = newChange[1];
        
            if ( samoleten.hasOwnProperty(samoletenNomer) ) {
                samoleten['Status'] = statusChange;
            }
        }
    }
    for ( let i of flightArray ) {
        if ( i['Status'] === statusCheck ) {
            console.log("{ " + "Destination: " + "'" + i['Destination'] + "'" + 
            ", Status: '" + i['Status'] + "' }");
        }
    }
}
// flightSchedule([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'],
//  ['Cancelled']
// ]
// );

// 10. Systems Register
function systemRegister(params) {
    let systems = {};
 
    for (let param of params) {
        let tokens = param.split(' | ').filter(x => x !== '');
        let currentSystem = tokens[0];
        let currentComponent = tokens[1];
        let currentSubcomponent = tokens[2];
 
        if (!systems.hasOwnProperty(currentSystem)) {
            systems[currentSystem] = {};
        }
        if (!systems[currentSystem].hasOwnProperty(currentComponent)) {
            systems[currentSystem][currentComponent] = [];
        }
        systems[currentSystem][currentComponent].push(currentSubcomponent);
    }
 
    let sortedSystemKeys = Object.keys(systems).sort(function (a, b) {
        let result = Object.keys(systems[b]).length - Object.keys(systems[a]).length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    });
 
    for (let systemKey of sortedSystemKeys) {
        console.log(systemKey);
        let sortedComponentKeys = Object.keys(systems[systemKey]).sort(function (a, b) {
            return systems[systemKey][b].length - systems[systemKey][a].length;
        });
        for (let componentKey of sortedComponentKeys) {
            console.log('|||' + componentKey);
            let subcomponentKeys = systems[systemKey][componentKey];
            for (let subcomponentKey of subcomponentKeys) {
                console.log('||||||' + subcomponentKey);
            }
        }
    }
}
// systemRegister(['SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security'
// ]);

