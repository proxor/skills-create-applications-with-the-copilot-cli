#!/usr/bin/env node

/**
 * Basic CLI calculator.
 * Supported operations: addition (+), subtraction (-), multiplication (*), division (/).
 */

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
    case "addition":
      return addition(a, b);
    case "-":
    case "subtraction":
      return subtraction(a, b);
    case "*":
    case "x":
    case "multiplication":
      return multiplication(a, b);
    case "/":
    case "division":
      return division(a, b);
    default:
      throw new Error("Unsupported operator. Use +, -, *, or /.");
  }
}

if (require.main === module) {
  const [firstArg, operatorArg, secondArg] = process.argv.slice(2);

  if (!firstArg || !operatorArg || !secondArg) {
    console.error("Usage: node src/calculator.js <number> <operator> <number>");
    console.error("Example: node src/calculator.js 8 / 2");
    process.exit(1);
  }

  const a = Number(firstArg);
  const b = Number(secondArg);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Both inputs must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(a, operatorArg, b);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
};
