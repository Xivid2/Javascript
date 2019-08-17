function login(someArray) {
    let firstThing = someArray.shift();
    let copy = firstThing;
    someArray.unshift(copy);
    let counter = 0;
    for ( let i = 1; i < someArray.length; i ++ ) {
        if ( counter === 3 ) {
            console.log('User ' + firstThing + " blocked!");
            break;
        }
        let reverseString = someArray[i];
        reverseString = reverseString.split('');
        reverseString = reverseString.reverse();
        reverseString = reverseString.join("");
        if ( reverseString !== firstThing ) {
            console.log('Incorrect password. Try again.');
        }
        else {
            console.log('User ' + firstThing + ' logged in.');
        }
        counter ++;
    }
}
