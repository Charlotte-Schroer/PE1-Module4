//nog eens bekijken in de teams van dirk

/*
Schrijf een script dat gebruik maakt van een variabele number 
en aan de hand van die variabele en één of meerdere lussen de volgende output gaat hebben:
1
22
333
4444
*/
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let number = 4; //variabele volgens opgave
let i = 1; //eerste rij

// een buitenste while-lus om door de rijen te iteren
while(i<=number){
    let j = 1; //eerste kolom in de huidige rij
    let piramide ='';
    //Binnenste while-lus om door de kolommen van de huidige rij te iteren.
    while(j<=i){
        piramide+=i.toString(); // getal toevoegen aan de tekst
        j++; // naar volgende iteratie
    }
    console.log(piramide);
    i++; // naar volgende rij
}

process.exit();