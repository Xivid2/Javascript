function bitcoinMining(array) {
    let gramGold = 67.51;
    let bitcoinPrice = 11949.16;
    let sumMoney = 0;
    let numberBitcoins = 0;
    let moneyLeft = 0;
    let whichDay = 0;

    for ( let i = 1; i <= array.length; i ++ ) {
        sumMoney += array[i-1] * gramGold;
        if ( sumMoney > bitcoinPrice && whichDay === 0 ) {
            whichDay = i;
        }
        if ( i % 3 === 0 ) {
            sumMoney -= 0.30*(array[i-1]*gramGold);
        }
    }
    numberBitcoins = Math.floor(sumMoney / bitcoinPrice);
    moneyLeft = sumMoney - (numberBitcoins * bitcoinPrice);
    console.log("Bought bitcoins: " + numberBitcoins);
    if ( whichDay > 0 ) {
        console.log('Day of the first purchased bitcoin: ' + whichDay);
    }
    console.log('Left money: ' + moneyLeft.toFixed(2) + " lv.");
}