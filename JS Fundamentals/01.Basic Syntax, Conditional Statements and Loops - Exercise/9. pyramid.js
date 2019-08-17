function pyramid(startNumber, increment) {
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let playfulVariable = 0;
    let counter = 0;
    let height = 0;
    for ( let i = startNumber; i > 0; i = i - 2) {
        counter ++;
        if ( i > 2 ) {
            playfulVariable = i - 2;
            
            stones += playfulVariable * playfulVariable;
             
            if ( counter % 5 !== 0 ) {
                marble += (i * i) - (playfulVariable * playfulVariable);     
            }
            else {
                lapis += (i * i) - (playfulVariable * playfulVariable);
            }
        }
        else {
            gold += i * i;
        }
    }
    height = Math.floor(counter*increment);
    console.log('Stone required: ' + Math.ceil(stones*increment));
    console.log('Marble required: ' + Math.ceil(marble*increment));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis*increment));
    console.log('Gold required: ' + Math.ceil(gold*increment));
    console.log('Final pyramid height: ' + height);
}