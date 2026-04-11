import { WCAGTest } from "./WCAGTest";
import { describe, it, expect } from "vitest";

describe("WCAGTest", () => {
  it("all levels pass at max contrast (21)", () => {
    const result = WCAGTest(21);
    expect(result.every((row) => row.passes)).toBe(true);
  });

  it("all levels fail at min contrast (1)", () => {
    const result = WCAGTest(1);
    expect(result.every((row) => row.passes)).toBe(false);
  });

  it("at exactly 3: only AA large passes", () => {
    const result = WCAGTest(3);
    const passing = result.filter((row) => row.passes).map((row) => row.level);
    expect(passing).toEqual(["AA for large text"]);
  });

  it("at exactly 4.5: AA normal, AA large, AAA large pass (AAA normal fails)", () => {
    const result = WCAGTest(4.5);
    const passing = result.filter((row) => row.passes).map((row) => row.level);
    expect(passing).toEqual([
      "AA for normal text",
      "AA for large text",
      "AAA for large text",
    ]);
  });

  it("at exactly 7: all levels pass", () => {
    const result = WCAGTest(7);
    expect(result.every((row) => row.passes)).toBe(true);
  });
});
