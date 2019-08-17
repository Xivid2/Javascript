// 1. Reveal Words
function revealWords(words,text) {
    words.split(", ").forEach((word) => {
        text = text.replace('*'.repeat(word.length),word);
    });
    console.log(text);
}
//revealWords('great','softuni is ***** place for learning new programming languages');

// 2. Modern Times of #(HashTag)
function modernTimes(input) {
    let pattern = /#[A-Za-z]+/g;
    input.split(' ').forEach((word)=>{
        if ( word.match(pattern) ) {
            console.log(word.slice(1));
        }
    });
}
//modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');

// 3. Palindromes
function palindromes(input) {
    let counter = 0;
    let palindromes = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let currentWord = input[i].split(' ').join('');
        let reverseWord = currentWord.split('').reverse().join('');
        if ( currentWord === reverseWord ) {
            palindromes.push(currentWord);
            counter ++;
        }
    }
    if ( counter > 0 ) {
        console.log(palindromes.join(', '));
    }
    else {
        console.log('No palindromes found');
    }
}   
//palindromes([' stella won no wallets','not a palindrome']); 

// 4. String Substring
function stringSubstring(word,text) {
    let newWord = word.toLowerCase();
    let textArr = text.toLowerCase().split(' ');
    if ( textArr.indexOf(newWord) !== -1 ) {
        console.log(word);
    }
    else {
        console.log(word + ' not found!');
    }
}
//stringSubstring('javascript','JavaScript is the best programming language');

// 5. Emoticons
function emoticons(input) {
    input = input.split(' ');
    for ( let i of input ) {
        if ( i.length === 2 && i.startsWith(":") ) {
            console.log(i);
        }
    }  
}
//emoticons('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');

// 6. Pascal-Case Splitter
function pascalSplitter(input) {
    let word = '';
    let pascalArr = [];
    for ( let i = 0; i < input.length; i ++ ) {
        if ( (input[i]).toUpperCase() === input[i] ) {
            if ( word.length > 0 ) {
                pascalArr.push(word);
            }
            word = input[i];
        }
        else {
            word += input[i];
        }
        if ( i === input.length - 1 ) {
            pascalArr.push(word);
        }
    }
    console.log(pascalArr.join(', '))
}
//pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

// 7. Cut and Reverse
function cutAndReverse(input) {
    let firstHalf = [];
    let secondHalf = [];
    for ( let i = 0; i < input.length; i ++ ) {
        if ( i < input.length/2 ) {
            firstHalf.push(input[i]);
        }
        else {
            secondHalf.push(input[i]);
        }
    }
    console.log(firstHalf.reverse().join(''));
    console.log(secondHalf.reverse().join(''));
}
//cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');

// 8. Hard Words*
function hardWords(input) {
    let finalText = [];
    let [text,words] = input;

    text.split(' ').forEach((word) => {
        if ( word.indexOf('_') === -1 ) {
            finalText.push(word);
        }
        else {
            let length = word.length;
            let replaceWord = words.find((x) => x.length === length );
            console.log('replaceWord:', replaceWord)
            finalText.push(replaceWord);
        }
    });
    console.log(finalText.join(' '));
}
//hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);


// 9. Password Generator
function passwordGenerator(input) {
    let counter = -1;
    let [firstString,secondString,thirdString] = input;
    let concat = firstString.concat(secondString).split('');
    let textToCheck = concat.slice(0);
    let vowels = 'aeiou';
    for ( let i = 0; i < concat.length; i ++ ) {
        if ( vowels.includes(concat[i]) ) {
            counter++;
            textToCheck.splice(i,1);
            textToCheck.splice(i,0,(thirdString[counter%thirdString.length]).toUpperCase());
        }
    }
    console.log('Your generated password is ' + textToCheck.reverse().join(''));
}
//passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);