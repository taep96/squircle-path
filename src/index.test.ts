import { describe, expect, it, beforeEach } from "bun:test";
import { squirclePath } from "./index";

let path: string;

describe("Path", () => {
  beforeEach(() => {
    path = squirclePath({ width: 100, height: 100 });
  });

  it("matches the expected output", () => {
    expect(path).toEqual("M 0 50 C 0 8.888 8.888 0 50 0 S 100 8.888 100 50 S 91.111 100 50 100 S 0 91.111 0 50");
  });
});
