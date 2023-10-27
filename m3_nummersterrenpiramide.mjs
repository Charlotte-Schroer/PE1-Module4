let startTop = false;
let startLeft = false;
let height = 3;

let rij = 1;
let piramide = '';

while (rij<=height){
  
    for(let kolom = 1; kolom<=rij; kolom++)
    {
        if(startTop && startLeft){
            let aantalCijfers = rij;
            piramide=rij.toString().repeat(aantalCijfers);
        } else if(startTop){
            let spatie = height- rij;
            piramide = ' '.repeat(spatie)+rij.toString().repeat(kolom);
        } else if(startLeft){
            let i = height - rij +1;
            let aantalCijfers = height - rij +  1;
            piramide = i.toString().repeat(aantalCijfers);
        } else{
            let i = height - rij +1;
            let aantalCijfers = height - rij + 1;
            let spatie = rij - 1;
            piramide = ' '.repeat(spatie) + i.toString().repeat(aantalCijfers);
    }
   }
    console.log(piramide);
    rij++;
}