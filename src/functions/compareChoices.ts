import { ValuesGames } from "../enums/ValuesGames"
import { winMap } from "../enums/ValuesGames";
import type { SleeveResult } from "./PlayOneSleeve";


/**
 * Compare les choix du joueur et de l'ia pour donner un gagnant
 * @param choicePlayer Choix d'une joueur
 * @param choiceIa Choix randomisé de l'IA
 * @returns 1 si joueur gagne, -1 si l'ia gagne, 0 si nul
 */
export function getSleeveResultFromChoices(choicePlayer:ValuesGames, choiceIa:ValuesGames):SleeveResult
{   

    if (choicePlayer === choiceIa) return 0; // égalité
    return winMap[choicePlayer] === choiceIa ? 1 : -1;
    
}

/**
 * Test:
 *      Tester toutes les combinaisons et verifier que le bon résultat est retourné
 */