/*
Maak een script waar je een zijde1 en zijde2 kan ingeven. 
Geef de oppervlakte van een rechthoek met de afmetingen zijde1 en zijde2.
*/
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let lengte = parseFloat(await userInput.question('Geef mij een lengte: '));
let hoogte = parseFloat(await userInput.question('Geef mij een hoogte: '));
let oppervlakte = lengte * hoogte;

console.log('De oppervlakte is: '+ oppervlakte);

process.exit();