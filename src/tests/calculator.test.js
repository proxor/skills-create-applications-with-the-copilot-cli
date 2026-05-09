const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
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

  describe("modulo", () => {
    test("returns the remainder of division", () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test("throws for modulo by zero", () => {
      expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
    });
  });

  describe("power", () => {
    test("raises base to exponent", () => {
      expect(power(2, 3)).toBe(8);
    });
  });

  describe("square root", () => {
    test("returns square root of a positive number", () => {
      expect(squareRoot(9)).toBe(3);
    });

    test("throws for square root of a negative number", () => {
      expect(() => squareRoot(-1)).toThrow(
        "Square root of a negative number is not allowed."
      );
    });
  });
});

describe("calculate dispatcher", () => {
  test("supports operator symbols", () => {
    expect(calculate(2, "+", 3)).toBe(5);
    expect(calculate(10, "-", 4)).toBe(6);
    expect(calculate(45, "*", 2)).toBe(90);
    expect(calculate(20, "/", 5)).toBe(4);
    expect(calculate(10, "%", 3)).toBe(1);
    expect(calculate(2, "^", 4)).toBe(16);
  });

  test("supports operation names", () => {
    expect(calculate(1, "addition", 2)).toBe(3);
    expect(calculate(5, "subtraction", 3)).toBe(2);
    expect(calculate(3, "multiplication", 4)).toBe(12);
    expect(calculate(9, "division", 3)).toBe(3);
    expect(calculate(10, "modulo", 3)).toBe(1);
    expect(calculate(3, "power", 2)).toBe(9);
    expect(calculate(9, "squareRoot")).toBe(3);
  });

  test("throws for unsupported operators", () => {
    expect(() => calculate(2, "&", 1)).toThrow(
      "Unsupported operator. Use +, -, *, /, %, ^, or sqrt."
    );
  });
});
