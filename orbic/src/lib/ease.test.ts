import { describe, it, expect } from "vitest";
import { easeOutCubic } from "./ease";

describe("easeOutCubic", () => {
  it("mapea 0->0 y 1->1", () => {
    expect(easeOutCubic(0)).toBeCloseTo(0);
    expect(easeOutCubic(1)).toBeCloseTo(1);
  });
  it("desacelera (valor a 0.5 > 0.5)", () => {
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
  });
});
