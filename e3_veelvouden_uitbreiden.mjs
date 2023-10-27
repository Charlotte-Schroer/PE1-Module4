/*
Pas je vorige script aan. 
Zorg ervoor dat je aan de hand van de variabelen deelbaar1 en deelbaar2 kan kiezen of een getal wel 
of niet deelbaar moet zijn door deler1 of deler2 om ze weer te geven.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question('Geef mij een startwaarde: '));
let end = parseFloat(await userInput.question('Geef mij een eindwaarde: '));
let deler1 = parseFloat(await userInput.question('Geef mij een gemene deler: '));
let deler2 = parseFloat(await userInput.question('Geef mij nog een gemene deler: '));
//variabelen vragen
let getal = start; //heb ik nodig om het met variabelen allemaal geprint te krijgen
let deelbaar1 = true;
let deelbaar2 = true;

while(getal<=end && deelbaar1 && deelbaar2){
    if(getal % deler1 == 0 && getal % deler2 == 0){
    console.log(getal);
    } getal++;
}

while(getal<=end && deelbaar1){
    if(getal%deler1 == 0){
        console.log(getal)
    } getal++;
}

while(getal<=end && deelbaar2){
    if(getal%deler2 == 0){
        console.log(getal)
    } getal++;
}

process.exit();