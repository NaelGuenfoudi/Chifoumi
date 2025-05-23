import { ValuesGames } from '../enums/ValuesGames';
import { Insult } from '../enums/Insult';
const _ = require("lodash");
/**
 * Permet de récuperer une valeur ( uniquement correcte ) à l'utilisateur pour jouer au chifoumi
 * @returns la valeur choisi par le joueur
 */

export function getValuePlayer(
  getValueConsole: () => string = defaultValueConsole,
  getValueConsoleFailed: () => string = defaultValueConsoleFailed
): ValuesGames {
  let valuePlayer = getValueConsole();
  let count = 0;
  while (!Object.values(ValuesGames).includes(valuePlayer as ValuesGames)) {
    insult(count);
    count++;
    valuePlayer = getValueConsoleFailed();
    
  }

  return valuePlayer as ValuesGames;
}

/**
 * Permet de récuperer le choix écrit en console
 * @returns le choix écrit en console
 */
function defaultValueConsole(): string {
  return prompt("Donne ton choix :")?.toLowerCase() ?? "";
}
/**
 * 
 * @returns le choix écrit en console lors d'une mauvaise saisie auparavant
 */
function defaultValueConsoleFailed(): string {
  return prompt("Choix non correct, réessaye :")?.toLowerCase() ?? "";
}

function insult(count:number){
        if(count>=3)
        console.log( _.sample(Object.values(Insult)))
}



// import { ValuesGames } from '../enums/ValuesGames';
// /**
//  * Permet de récuperer une valeur ( uniquement correcte ) à l'utilisateur pour jouer au chifoumi
//  * @returns la valeur choisi par le joueur
//  */
// export function getValuePlayer(): ValuesGames {
//     let valuePlayer = getPrompt();

   
//     while (!Object.values(ValuesGames).includes(valuePlayer as ValuesGames)) {
//         valuePlayer = getPromptFailed();
//     }

//     return valuePlayer as ValuesGames;
// }


// function getPromptFailed():string{
//     return prompt("Choix non correct, réessaye:")?.toLowerCase() as string;
// }

// function getPrompt():string{
//     return prompt("Donne ton choix:")?.toLowerCase() as string;
// }

