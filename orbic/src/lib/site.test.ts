import { describe, it, expect } from "vitest";
import { whatsappUrl, mailtoUrl, SITE } from "./site";

describe("site link builders", () => {
  it("wa.me con mensaje codificado", () => {
    expect(whatsappUrl("Hola ORBIC")).toBe(`https://wa.me/${SITE.whatsappNumber}?text=Hola%20ORBIC`);
  });
  it("mailto con asunto codificado", () => {
    expect(mailtoUrl("Diagnóstico")).toBe(`mailto:${SITE.email}?subject=Diagn%C3%B3stico`);
  });
  it("datos de contacto y nav", () => {
    expect(SITE.email).toBe("orbicoperationgroupsas@gmail.com");
    expect(SITE.nav.length).toBeGreaterThanOrEqual(5);
  });
});
