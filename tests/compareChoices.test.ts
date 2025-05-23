import { describe, expect, it } from "bun:test";
import { ValuesGames } from "../src/enums/ValuesGames";
import { getSleeveResultFromChoices } from "../src/functions/compareChoices";

describe("getSleeveResultFromChoices", () => {
  it("doit retourner 0 en cas d'égalité", () => {
    expect(getSleeveResultFromChoices(ValuesGames.Rock, ValuesGames.Rock)).toBe(0);
    expect(getSleeveResultFromChoices(ValuesGames.Paper, ValuesGames.Paper)).toBe(0);
    expect(getSleeveResultFromChoices(ValuesGames.Scissors, ValuesGames.Scissors)).toBe(0);
  });

  it("doit retourner 1 si le joueur gagne", () => {
    expect(getSleeveResultFromChoices(ValuesGames.Rock, ValuesGames.Scissors)).toBe(1);
    expect(getSleeveResultFromChoices(ValuesGames.Paper, ValuesGames.Rock)).toBe(1);
    expect(getSleeveResultFromChoices(ValuesGames.Scissors, ValuesGames.Paper)).toBe(1);
  });

  it("doit retourner -1 si l'IA gagne", () => {
    expect(getSleeveResultFromChoices(ValuesGames.Rock, ValuesGames.Paper)).toBe(-1);
    expect(getSleeveResultFromChoices(ValuesGames.Paper, ValuesGames.Scissors)).toBe(-1);
    expect(getSleeveResultFromChoices(ValuesGames.Scissors, ValuesGames.Rock)).toBe(-1);
  });
});
