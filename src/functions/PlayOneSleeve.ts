import { getValuePlayer } from "./GetValuePlayer";
import { getRandomValue } from "./GetRandomValue";
import { getSleeveResultFromChoices } from "./compareChoices";
import type { ValuesGames } from "../enums/ValuesGames";

export type SleeveResult = 1|0|-1;

/**
 * Permet de générer une manche de chifoumi contre une ia
 * @returns 1 si le joueur a gagné , 0 si neutre et -1 si l'ia a gagné
 */

export function playOneSleeve(
    getPlayer: () => ValuesGames = getValuePlayer,
    getIa: () => ValuesGames = getRandomValue
  ): number {
    const choicePlayer = getPlayer();
    const choiceIa = getIa();
  
    console.log("J'ai joué " + choiceIa);
    return getSleeveResultFromChoices(choicePlayer, choiceIa);
  }


































