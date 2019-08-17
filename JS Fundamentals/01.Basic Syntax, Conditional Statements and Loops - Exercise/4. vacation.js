function vacation(people, typeGroup, weekDay) {
    let price = 0;
    if ( typeGroup == 'Students' ) {
        if ( weekDay == 'Friday' ) {
            price = 8.45;
        }
        else if ( weekDay == 'Saturday' ) {
            price = 9.80;
        }
        else if ( weekDay == 'Sunday' ) {
            price = 10.46;
        }
    }
    else if ( typeGroup == 'Business' ) {
        if ( weekDay == 'Friday' ) {
            price = 10.90;
        }
        else if ( weekDay == 'Saturday' ) {
            price = 15.60;
        }
        else if ( weekDay == 'Sunday' ) {
            price = 16;
        }
    }
    else if ( typeGroup == 'Regular' ) {
        if ( weekDay == 'Friday' ) {
            price = 15;
        }
        else if ( weekDay == 'Saturday' ) {
            price = 20;
        }
        else if ( weekDay == 'Sunday' ) {
            price = 22.50;
        }
    }
    let priceForPay = people * price;
    if ( people >= 30 && typeGroup == 'Students') {
        priceForPay = priceForPay - 0.15*priceForPay;
    }
    else if ( people >= 100 && typeGroup == 'Business') {
        priceForPay = priceForPay - 10*price;
    }
    else if ( people >= 10 && typeGroup == 'Regular' && people <= 20) {
        priceForPay = priceForPay - 0.05*priceForPay;
    }
    console.log('Total price: ' + priceForPay.toFixed(2));
}