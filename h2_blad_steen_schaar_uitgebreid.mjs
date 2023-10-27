//om het eerst 3x winnen

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;
let userWins = 0;
let computerWins = 0;

while(computerWins !=3 && userWins !=3)
//zolang de conditie true is loopt hij de lus door. 
//Dus om het eerst aan 3 te geraken heb ik voor and gekozen als bolean en verschillend van
{
    userChoice = await userInput.question('Maak een keuze: rock, paper of scissors? ');
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log('Dit heeft de computer gekozen: ' + computerChoice);
    if(computerChoice==userChoice){
        console.log('Tie');
    }else if (
        (computerChoice=='rock'&&userChoice=='scissors')||
        (computerChoice=='paper'&&userChoice=='rock')||
        (computerChoice=='scissors'&&userChoice=='paper')){
            console.log('Computer wins');
            computerWins++;
        } else {
            console.log('User wins.');
            userWins++;
        }
}

if(computerWins==3){
    console.log('Computer heeft eerst 3 maal gewonnen.');
} else {
    console.log('De user heeft eerst 3 maal gewonnen.');
}

process.exit();