import { getLuminanceValue } from "./getLuminanceValue";
import { describe, it, expect } from "vitest";

describe("getLuminanceValue", () => {
  it("happy path", () => {
    const input = "rgb(255,128,0)";
    const output = 0.367;
    expect(getLuminanceValue(input)).toBeCloseTo(output, 3);
  });

  it("edge case", () => {
    const input = "rgb(255";
    expect(getLuminanceValue(input)).toBeNaN();
  });
});
