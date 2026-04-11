import { hexToRgb } from "./hexToRgb";
import { describe, it, expect } from "vitest";

describe("hexToRgb", () => {
  it("converts a basic hex color", () => {
    expect(hexToRgb("#3A7BF2")).toBe("rgb(58,123,242)");
  });

  it("converts black", () => {
    expect(hexToRgb("#000000")).toBe("rgb(0,0,0)");
  });

  it("converts white", () => {
    expect(hexToRgb("#FFFFFF")).toBe("rgb(255,255,255)");
  });

  it("handles lowercase hex", () => {
    expect(hexToRgb("#ff0000")).toBe("rgb(255,0,0)");
  });
});
