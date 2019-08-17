// 1. Equal Neighbors
function equalNeighbors(input) {
    let counter = 0;
    for ( let i = 0; i < input.length - 1; i ++ ) {
        for ( let j = 0; j < input[i].length; j ++ ) {
            if ( input[i][j] === input[i][j+1]) {
                counter++;
            }
            if ( input[i][j] === input[i+1][j]) {
                counter++;
            }
            if ( i < input.length - 2 && input[i+1][j] === input[i+1][j+1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]);