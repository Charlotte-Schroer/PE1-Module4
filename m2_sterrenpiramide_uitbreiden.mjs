let startTop = true;
let startLeft = false;
let height = 3;

let rij = 1;
let ster = '';

while (rij<=height){
    if(startTop && startLeft){
        ster+='*';
    } else if(startTop){
        let spatie = height- rij;
        ster = ' '.repeat(spatie)+'*'.repeat(rij);
    } else if(startLeft){
        let aantalSterren = height - rij +  1;
        ster = '*'.repeat(aantalSterren);
    } else{
        let aantalSterren = height - rij + 1;
        let spatie = rij - 1;
        ster = ' '.repeat(spatie) + '*'.repeat(aantalSterren);
    }
    console.log(ster);
    rij++;
}