const {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
} = require("../calculator");

describe("calculator basic operations", () => {
  describe("addition", () => {
    test("adds two numbers", () => {
      expect(addition(10, 20)).toBe(30);
    });
  });

  describe("subtraction", () => {
    test("subtracts second number from first", () => {
      expect(subtraction(10, 4)).toBe(6);
    });
  });

  describe("multiplication", () => {
    test("multiplies two numbers", () => {
      expect(multiplication(45, 2)).toBe(90);
    });
  });

  describe("division", () => {
    test("divides first number by second", () => {
      expect(division(20, 5)).toBe(4);
    });

    test("throws for division by zero", () => {
      expect(() => division(10, 0)).toThrow("Division by zero is not allowed.");
    });
  });
});

describe("calculate dispatcher", () => {
  test("supports operator symbols", () => {
    expect(calculate(2, "+", 3)).toBe(5);
    expect(calculate(10, "-", 4)).toBe(6);
    expect(calculate(45, "*", 2)).toBe(90);
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("supports operation names", () => {
    expect(calculate(1, "addition", 2)).toBe(3);
    expect(calculate(5, "subtraction", 3)).toBe(2);
    expect(calculate(3, "multiplication", 4)).toBe(12);
    expect(calculate(9, "division", 3)).toBe(3);
  });

  test("throws for unsupported operators", () => {
    expect(() => calculate(2, "%", 1)).toThrow(
      "Unsupported operator. Use +, -, *, or /."
    );
  });
});
