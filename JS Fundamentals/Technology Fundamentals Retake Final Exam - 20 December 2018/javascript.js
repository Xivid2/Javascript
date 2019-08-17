// 1. VaporWinterSale
function winterSale(input) {
    finalObj = {};
    let gamesArr = input[0].split(', ');
    for ( let i = 0; i < gamesArr.length; i ++ ) {
        let game,price,DLC;
        if ( gamesArr[i].includes(":") ) {
            let split = gamesArr[i].split(":");
            [game,DLC] = split;
            if ( finalObj.hasOwnProperty(game) ) {
                finalObj[game]["DLC"] = '';
                finalObj[game]["DLC"] = DLC;
                finalObj[game]["price"] += 0.2 * finalObj[game]["price"];
            }
        }
        else {
            let split = gamesArr[i].split("-");
            [game,price] = split;
            if ( !finalObj.hasOwnProperty(game) ) {
                finalObj[game] = {
                    "price": parseFloat(price)
                }
            }
        }
    }
    let withDLC = [];
    
    let withoutDLC = [];
    for ( let game in finalObj ) {
        if ( finalObj[game].hasOwnProperty("DLC") ) {
            finalObj[game]["price"] -= 0.5 * finalObj[game]["price"];
            withDLC.push([game,finalObj[game]["price"]]);
        }
        else {
            finalObj[game]["price"] -= 0.2 * finalObj[game]["price"];
            withoutDLC.push([game,finalObj[game]["price"]]);
        }
    }
    withDLC.sort((a,b)=>{
        if ( a[1] < b[1] ) {
            return -1;
        }
        else {
            return 1;
        }
    });
    withoutDLC.sort((a,b)=>{
        if ( a[1] > b[1] ) {
            return -1;
        }
        else {
            return 1;
        }
    });
    for ( let game of withDLC ) {
        let price = parseFloat(finalObj[game[0]]["price"]);
        let DLC = finalObj[game[0]]["DLC"];
        console.log(game[0] + " - " + DLC + " - " + price.toFixed(2));
    }
    for ( let game of withoutDLC ) {
        let price = Number(finalObj[game[0]]["price"]);
        console.log(game[0] + " - " + price.toFixed(2));
    }
}
//winterSale(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC']);

// 2. Activation Keys
function activationsKeys(input) {
    let someArr = input[0].split("&");
    let validArr = [];
    let regex = /[A-Za-z0-9]+/g;
    for ( let i = 0; i < someArr.length; i ++ ) {
        if ( someArr[i].match(regex) && (someArr[i].length === 16 || someArr[i].length === 25 )) {
            validArr.push(someArr[i]);
        }
    }
    let brandNewArr = []
    console.log('validArr:', validArr);
    for ( let i = 0; i < validArr.length; i ++ ) {
        let staffArr = [];
        for ( let j = 0; j < validArr[i].length; j ++ ) {
            if ( validArr[i].length === 16 ) {
                
            }
            else {

            }
        }
    }
    
}
//activationsKeys(["t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs"]);

// 2. AK
function activationKeys(input) {
    let regex = /[A-Za-z0-9]+/g;
    let keysArray = [];
    let staffArr = input[0].split("&");
    for ( let i = 0; i < staffArr.length; i ++ ) {
        if ( staffArr[i].match(regex) && (staffArr[i].length === 16  || staffArr[i].length === 25 )) {
            keysArray.push(staffArr[i]);
        }
    }
    let finalFinal = [];
    for ( let i in keysArray ) {
        somethingFinal = [];
        keysArray[i] = keysArray[i].toLocaleUpperCase();
        if ( keysArray[i].length === 16 ) {
            let split = keysArray[i].split('');
            for ( let m in split ) {
                let something = split.splice(0,4);
                for ( let n in something ) {
                    if ( !isNaN(something[n])) {
                        let small = Math.abs(something[n] - 9);
                        something[n] = small;
                    }                    
                }
                something = something.join('');
                somethingFinal.push(something);
            }
        finalFinal.push(somethingFinal.join('-')); 
        }
        else if ( keysArray[i].length === 25 ) {
            let split = keysArray[i].split('');
            for ( let m in split ) {
                let something = split.splice(0,5);
                for ( let n in something ) {
                    if ( !isNaN(something[n])) {
                        let small = Math.abs(something[n] - 9);
                        something[n] = small;
                    }                    
                }
                something = something.join('');
                somethingFinal.push(something);
            }
        finalFinal.push(somethingFinal.join('-')); 
        }
    }
    console.log(finalFinal.join(', '));
    //console.log(finalFinal);
}
activationKeys(["xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS"]);
