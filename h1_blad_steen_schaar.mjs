//Computer tegen gebruiker
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let choices = ['rock', 'paper', 'scissors'];
let userChoice = await userInput.question('Maak een keuze: rock, paper of scissors? ');
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log('Dit heeft de computer gekozen: ' + computerChoice);

if(computerChoice==userChoice){
    console.log('Tie');
}else if (
    (computerChoice=='rock'&&userChoice=='scissors')||
    (computerChoice=='paper'&&userChoice=='rock')||
    (computerChoice=='scissors'&&userChoice=='paper')){
        console.log('Computer wins');
    } else {
        console.log('User wins.');
    }

process.exit();