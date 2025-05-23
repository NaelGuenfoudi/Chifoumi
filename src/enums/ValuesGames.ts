
/**
 * Valeur du jeu chifoumi
 */
export enum ValuesGames{
    Rock = "pierre",
    Paper = "feuille",
    Scissors = "ciseaux",

}
/**
 * Map des valeurs gagnants en fonction d'une valeur
 */
export const winMap: Record<ValuesGames, ValuesGames> = {
    [ValuesGames.Rock]: ValuesGames.Scissors,
    [ValuesGames.Paper]: ValuesGames.Rock,
    [ValuesGames.Scissors]: ValuesGames.Paper,
    
  };
  