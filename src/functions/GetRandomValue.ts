import { get } from "lodash";
import { ValuesGames } from "../enums/ValuesGames";
const _ = require("lodash");

/**
 * Permet de choisir une valeur au hasard pour jouer
 * @returns une valeur random entre les valeurs du jeu
 */
export function getRandomValue():ValuesGames
{
    let valueRandom = _.sample(Object.values(ValuesGames));
    return valueRandom;
}
/**
 * Test : 
 *         Récuperer une valeur qui est bien dans ValuesGames
 */

