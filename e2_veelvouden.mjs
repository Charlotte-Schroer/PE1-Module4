/*
Schrijf een script met de volgende variabelen:

start: Met welk getal beginnen we?
end: Met welk getal eindigen we?
deler1: Wat is het eerste getal waarop we testen?
deler2: Wat is het tweede getal waarop we testen?
Zorg ervoor dat het script het volgende gaat uitprinten: 
alle getallen tussen start en end die deelbaar zijn door zowel deler1 als deler2.
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

while(getal<=end){
    if(getal % deler1 == 0 && getal % deler2 == 0){
    console.log(getal + ' ligt '+ start +' en '+ end + ' met zowel ' + deler1 + ' en ' + deler2 + ' als gemeenschappelijke deler');
    }
    getal++;
}

process.exit();