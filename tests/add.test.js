const add = require("../src/add");

describe("String Calculator - Basic Addition", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself if the input has one number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });
});

describe("String Calculator - Multiple Numbers", () => {
  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
});

describe("String Calculator - Handle Newlines", () => {
  test("handles newlines as valid delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});

describe("String Calculator - Custom Delimiters", () => {
  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("supports custom delimiters with multiple numbers", () => {
    expect(add("//|\n2|3|4")).toBe(9);
  });
});

describe("String Calculator - Negative Numbers", () => {
  test("throws an error for a single negative number", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  test("throws an error for multiple negative numbers", () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed -1,-2");
  });
});
