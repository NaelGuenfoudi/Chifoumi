import { describe, it, expect } from "bun:test";
import { getRandomValue } from "../src/functions/GetRandomValue";
import { ValuesGames } from "../src/enums/ValuesGames";

describe("getRandomValue", () => {
  it("doit retourner une valeur valide de ValuesGames", () => {
    for (let i = 0; i < 100; i++) {
      const value = getRandomValue();
      expect(Object.values(ValuesGames)).toContain(value);
    }
  });
});
