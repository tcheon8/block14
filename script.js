//Only Odds Section

const array = [2, 4, 6, 8, 11, 20, 15, 22];
//index        0  1  2  3   4   5   6   7
const oddNums = [];

//console.log everything
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

for (let i = 0; i < array.length; i++) {
    const num = array[i];

// we do num % 2.

    if (num % 2 === 1) {
    // it is an odd number
    oddNums. push(num);
    }
    //I'm console.logging an index
    console.log(array[i]); 
}

// 5 % 2 
// do 5 / 2 take the remainder
// if you do 5/2, there is a remainder of 1
// since there's a remainder that means it's an odd number
// if there's no remainder it's an eve number


//Vowels vs Consonant Section

//const array = "hello";
//imagine a string as an array of characters

//const array ="ukelele";

let numVowels = 0;
let numConsonants =0;

const vowels = 'aeiou';

for (let i = 0; i < array.length; i++) {
    const char = array[i];

    if (char ==='a' char === 'i' char ==='u' )
//    it is a vowel
    numVowels++;
  } else {
    numConsonants++;
  }
  console.log(`${array} has ${numVowels} vowels and ${numConsonants}`);



//Reverse Array Section
//const array = [1, 2, 3];
const reversed = [];

for (let i = array.length - 1; i >=0; i--) {
    const num = array [i];

    reversed.push(num);
    console.log(array.reversed());
}

//FizzBuzz Section
for (let i = 1; i <= 100; i++) {
    //it is a multiple of 3
  if (i % 3 === 0) {
        console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}