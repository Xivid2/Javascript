// 1. Person Info
function personInfo(firstName,lastName,age) {
    let person = {
        firstName,
        lastName,
        age
    };
    let entries = Object.entries(person);
    for ( let [key,value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
//personInfo("Peter", "Pan", "20");

// 2. City
function city(name, area, population, country, postCode) {
    let cityObject = {
        name,
        area,
        population,
        country,
        postCode
    }
    let entries = Object.entries(cityObject);
    for ( let [key,value] of entries ) {
        console.log([key] + ' -> ' + [value]);
    }
}
//city("Sofia"," 492", "1238438", "Bulgaria", "1000");

// 3. Convert to Object
function convertToObject(input) {
    let obj = JSON.parse(input);
    let entries = Object.entries(obj);
    for ( let [key,value] of entries ) {
        console.log([key] + ': ' + [value]);
    }
}
//convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

// 4. Covert to JSON
function convertToJSON(name,lastName,hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }
    let jsonObj = JSON.stringify(obj);
    console.log(jsonObj);
}
//convertToJSON('George','Jones','Brown');

// 5. Cats
function cats(input) {
    class Cat {
        constructor(name,age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(this.name + ', age ' + this.age + ' says Meow');
            };
        }
    }
    for ( let i in input ) {
        let newCat = input[i].split(' ');
        let newKitty = new Cat(newCat[0],newCat[1]);
        newKitty.meow();
    }
}
//cats(['Mellow 2', 'Tom 5']);

// 6. Songs
function songs(input) {
    class Song {
        constructor(typeList,name,time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
            this.print = () => console.log(this.name);
        }
    }
    let length = input.shift();
    let typeListAll = input.pop();
    for ( let i in input ) {
        let newSong = input[i].split("_");
        if ( newSong[0] === typeListAll ) {
            let newSongie = new Song(newSong[0],newSong[1],newSong[2]);
            newSongie.print();
        }
        else if ( typeListAll === 'all' ) {
            let newSongie = new Song(newSong[0],newSong[1],newSong[2]);
            newSongie.print();
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );
 
