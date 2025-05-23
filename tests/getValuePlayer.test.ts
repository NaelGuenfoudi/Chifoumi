import { describe, it, expect } from "bun:test";
import { getValuePlayer } from "../src/functions/GetValuePlayer";
import { ValuesGames } from "../src/enums/ValuesGames";

describe("getValuePlayer", () => {
  it("doit accepter une bonne valeur du premier coup", () => {
    const mockValueConsole = () => "pierre"; // valeur correcte
    let calls = 0;
    const mockValueConsoleFailed = () => {
      calls++;
      return "feuille"; // réponse valide après une erreur
    };

    const result = getValuePlayer(mockValueConsole, mockValueConsoleFailed);
    console.log(result);
    console.log(ValuesGames.Rock);
    expect(result).toBe(ValuesGames.Rock);
    expect(calls).toBe(0);
  });

  it("doit refuser une mauvaise valeur et reprendre", () => {
    let calls = 0;

    const mockValueConsole = () => "banane"; // première mauvaise réponse
    const mockValueConsoleFailed = () => {
      calls++;
      return "feuille"; // réponse valide après une erreur
    };

    const result = getValuePlayer(mockValueConsole, mockValueConsoleFailed);
    expect(result).toBe(ValuesGames.Paper);
    expect(calls).toBe(1);
  });
});
