// 1. Concert
function concert(input) {
    let finalObj = {};
    let totalTime = 0;
    let lastGroup = input.pop();
    let finalIter;
    for ( let i = 0; i < input.length; i ++ ) {
        let newIter = input[i].split('; ');
        let command = newIter.shift();
        let group = newIter.shift();
        if ( command === 'Add' || command === 'Play' ) {
            if ( !finalObj.hasOwnProperty(group) ) {
                finalObj[group] = {
                    "group": []
                };
            }
        }
        if ( command === 'Add' && finalObj.hasOwnProperty(group) ) {
            if ( newIter.length > 0 ) {
                finalIter = newIter[0].split(', ');
            }
            for ( let m = 0; m < finalIter.length; m ++ ) {
                if ( finalObj[group]["group"].indexOf(finalIter[m]) === -1 ) {
                    finalObj[group]["group"].push(finalIter[m]);
                }
            }
        }
        if ( command === 'Play' && finalObj.hasOwnProperty(group) ) {
            if ( !finalObj[group].hasOwnProperty("time") ) {
                finalObj[group]["time"] = +newIter[0];
                totalTime += +newIter[0];
            }
            else {
                finalObj[group]["time"] += +newIter[0];
                totalTime += +newIter[0];
            }
        }
        if ( command === "start of concert" ) {
            break;
        }
    }
    let test = [];
    console.log('Total time:', totalTime);
    for ( let group in finalObj ) {
        test.push([group,finalObj[group]["time"]]);
    }
    test.sort((a,b)=> {
        if ( a[1] > b[1] ) {
            return -1;
        }
        else if ( a[1] < b[1] ) {
            return 1;
        }
        else {
            return a[0].localeCompare(b[0]);
        }
    });
    for ( let i = 0; i < test.length; i ++ ) {
        console.log(test[i][0] + " -> " + test[i][1]);
    }
    console.log(lastGroup);
    let finalBand = finalObj[lastGroup]["group"];
    for ( let i = 0; i < finalBand.length; i ++ ) {
        console.log("=> " + finalBand[i]);
    }
}
// concert(['Add; The Beatles; John Lennon, Paul McCartney',
//     'Add; The Beatles; Paul McCartney, George Harrison',
//     'Add; The Beatles; George Harrison, Ringo Starr',
//     'Play; The Beatles; 3698',
//     'Play; The Beatles; 3828',
//     'start of concert',
//     'The Beatles']);

// 2. Song Encryption
function songEncryption(input) {
    let regexMatch = /^[A-Z]{1}[a-z ']+:[A-Z ]+$/g;
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for ( let i = 0; i < input.length; i ++ ) {
        let validArray = [];
        if ( input[i] === 'end' ) {
            break;
        }
        else {
            let newIter = input[i].split(':');
            let [artist,song] = newIter;
            let keyLength = artist.length;
            let newString = artist + ":" + song;
            if ( newString.match(regexMatch) ) {
                for ( let m = 0; m < newString.length; m ++ ) {
                    let index = 0;
                    if ( newString[m] !== "'" && newString[m] !== ":" && newString[m] !== " ") {
                        if ( newString[m].toLocaleLowerCase() === newString[m] ) {
                            index = lowerCase.indexOf(newString[m]);
                            validArray.push(lowerCase[(index + keyLength)%26]);
                        }
                        else {
                            index = upperCase.indexOf(newString[m]);
                            validArray.push(upperCase[(index + keyLength)%26]);
                        }
                    }
                    else if ( newString[m] === ":" ) {
                        validArray.push("@");
                    }
                    else {
                        validArray.push(newString[m]);
                    }
                }
                console.log('Successful encryption:',validArray.join(''));
            }
            else {
                console.log('Invalid input!');
            }
        }
    }
    //console.log('validArr', validArray)
}
// songEncryption(['Michael Jackson:ANOTHER PART OF ME',
//     'Adele:ONE AND ONLY',
//     "Guns n'roses:NOVEMBER RAIN",
//     'Christina Aguilera: HuRt',
//     'end']);

    