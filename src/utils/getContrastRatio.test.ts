import { getContrastRatio } from "./getContrastRatio";
import { describe, it, expect } from "vitest";

describe("getContrastRatio", () => {
  it("happy path", () => {
    const l1 = 0;
    const l2 = 1;
    const output = 21;
    expect(getContrastRatio(l1, l2)).toBe(output);
  });
});
