import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useScrollSpy } from "./useScrollSpy";

class IO {
  cb: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) { this.cb = cb; IO.instances.push(this); }
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  static instances: IO[] = [];
  fire(id: string, isIntersecting: boolean) {
    this.cb(
      [{ target: { id } as Element, isIntersecting, intersectionRatio: isIntersecting ? 1 : 0 } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

beforeEach(() => {
  IO.instances = [];
  vi.stubGlobal("IntersectionObserver", IO as unknown as typeof IntersectionObserver);
  document.body.innerHTML = `<section id="a"></section><section id="b"></section>`;
});

describe("useScrollSpy", () => {
  it("devuelve el id de la sección que entra en viewport", () => {
    const { result } = renderHook(() => useScrollSpy(["a", "b"]));
    expect(result.current).toBe("");
    act(() => IO.instances[0].fire("b", true));
    expect(result.current).toBe("b");
  });
});
