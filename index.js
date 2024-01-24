console.log("Hello!");

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const passWord = "welkom123";

let answer = await rl.question('What is your name? ');

console.log(`Welcome, ${answer}!`);

answer = await rl.question('Enter your password. ');

if (answer == passWord) {
    console.log('Password is correct!');
} else {
    console.log('Password is incorrect, try again.');
}

answer = await rl.question('How would you like to utilize NodeJS? Please make sure that your word amount is minimally over 100 words. ');

if (answer == 100) {
    console.log('Interesting!');
} else {
    console.log('Not enough words, please try again.');
}

rl.close();  