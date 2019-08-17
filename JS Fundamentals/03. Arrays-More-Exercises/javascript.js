// 1. Print every N-th Element from an Array
function printEveryNthElementFromAnArray(input) {
    let step = Number(input.pop());
    let newArr = [];
    for ( let i = 0; i < input.length; i = i + step ) {
        newArr.push(input[i]);
    }
    console.log(newArr.join(" "));
}
//printEveryNthElementFromAnArray(['5','20','31','4','20','2']);

// 2. Add and Remove Elements from Array
function addAndRemoveElementsFromArray(input) {
    let newArr = [1];
    for ( let i = 1; i <= input.length; i ++ ) {
        switch ( input[i] ) {
            case 'add': newArr.push([i + 1]);
                break;
            case 'remove':  newArr.pop();
                break;
        }
    }
    if ( newArr.length === 0 ) {
        console.log('Empty');
    }
    else {
        console.log(newArr.join(" "));
    }
}
//addAndRemoveElementsFromArray(['add','add','remove','add','add']);

// 3. Rotate Array
function rotateArray(input) {
    let step = input.pop();
    if ( Number.isInteger(Number(step))) {
        for ( let i = 0; i < step; i ++ ) {
            let rotationStep = input.pop();
            input.unshift(rotationStep);
        }
        console.log(input.join(" "));
    }
    else {
        console.log('Empty');
    }
}
//rotateArray(['remove','remove','remove']);

// 4. Extract an Non-Decreasing Subsequence from an Array
function extractFromArray(input) {
    let max = Number.MIN_VALUE;
    let newArr = [];
    for ( let i = 0; i < input.length; i++ ) {
        if ( input[i] > max ) {
            max = input[i];
            newArr.push(max);
        }
    }
    console.log(newArr.join(" "));
}
//extractFromArray([20,3,2,15,6,1]);

// 5. Magic Matrices
function magicMatrices(input) {
    let rowSum = 0;
    let someBool = true;
    for ( let i = 0; i < input[0].length; i ++ ) {
        rowSum += input[0][i];
    }
    for ( let row = 0; row < input.length; row ++ ) {
        let sum = 0;
        for ( let col = 0; col < input[row].length; col ++ ) {
            sum += input[row][col];
            //mus += input[col][row];
        }
        if ( sum !== rowSum ) {
            someBool = false;
        }
        // if ( mus !== rowSum ) {
        //     someBool = false;
        // }
    }
    for ( let col = 0; col < input[0].length; col ++ ) {
        let mus = 0;
        for ( let row = 0; row < input.length; row ++ ) {
            //sum += input[row][col];
            mus += input[row][col];
        }
        // if ( sum !== rowSum ) {
        //     someBool = false;
        // }
        if ( mus !== rowSum ) {
            someBool = false;
        }
    }
    if ( someBool === false ) {
        console.log('false');
    }
    else {
        console.log('true');
    }
}
//magicMatrices([[1,0,0],[0,0,1],[0,1,0]]);

// 6. Spiral Matrix
function spiralMatric(row,col) {
    let newArr = [];
    let counter = 1;
    let direction = 0;
    let top = 0;
    let left = 0;
    let bottom = row -1;
    let right = col -1;
    for ( let i = 0; i < row; i ++ ) {
        newArr[i] = [];
        for ( let j = 0; j < col; j ++ ) {
            newArr[i][j] = 0;
        }
    }

    while ( top <= bottom && left <= right ) {
        switch (direction % 4) {
            case 0: 
                for ( let col = left; col <= right; col ++ ) {
                    newArr[top][col] = counter++;
                }
                top ++;
                direction++;
                break;
            case 1:
                for ( let row = top; row <= bottom; row ++ ) {
                    newArr[row][right] = counter++;
                }
                right--;
                direction++;
                break;
            case 2:
                for ( let col = right; col >= left; row -- ) {
                    newArr[bottom][col] = counter++;
                }
                direction++;
                bottom--;
                break;
            case 3:
                for ( let row = bottom; row >= top; row -- ) {
                    newArr[row][left] = counter++;
                }
                left++;
                direction++;
                break;
        }
    }

    for ( let i = 0; i < newArr.length; i ++ ) {
        console.log(newArr[i]);
    }
}
spiralMatric(5,5);