import { getValuePlayer } from './GetValuePlayer';
import { playOneSleeve } from './PlayOneSleeve';



/**
 * Permet de faire une partie de chifoumi en 3 manches gagnantes 
 * @returns 1 si le joueur a gagné, -1 sinon
 */
export function playOneGame():1|-1{
let winUser=0;
let winIa=0;
let numberGames =0;

console.log("Jouons à une partie, le premier à 3 gagne !");

while (isNotFinished(winUser,winIa,3)){
    console.log("Pour l'instant, j'ai "+winIa+" et toi "+winUser);
    let resultGame = playOneSleeve();
    numberGames ++;
    

switch (resultGame) {
    case 1:
        winUser++;
        console.log("Tu as gagné")
        break;
    case 0:
        console.log("Tu as fait égalité avec moi")
        break;
    
    default:
        winIa++;
        console.log("Tu as perdu");
        break;
}
}

if(winIa==3)
{
    console.log ("J'ai gagné la partie en "+numberGames+" manches");
    return -1;
}
else{
    console.log ("tu as gagné la partie en "+numberGames+" manches");
    return 1;
}
}


function isNotFinished(winIa:number,winUser:number,numberSleeves:number):boolean
{
    return winIa!==3 && winUser!==3;
}