import { describe, it, expect } from "bun:test";
import { playOneSleeve } from "../src/functions/PlayOneSleeve";
import { ValuesGames } from "../src/enums/ValuesGames";

// Map: Rock > Scissors, Scissors > Paper, Paper > Rock

describe("playOneSleeve", () => {
  it("le joueur gagne", () => {
    const result = playOneSleeve(
      () => ValuesGames.Rock,
      () => ValuesGames.Scissors
    );
    expect(result).toBe(1);
  });

  it("égalité", () => {
    const result = playOneSleeve(
      () => ValuesGames.Paper,
      () => ValuesGames.Paper
    );
    expect(result).toBe(0);
  });

  it("l'IA gagne", () => {
    const result = playOneSleeve(
      () => ValuesGames.Scissors,
      () => ValuesGames.Rock
    );
    expect(result).toBe(-1);
  });
});
