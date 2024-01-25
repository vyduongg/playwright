function divide(firstNumber, secondNumber) {
  return Math.round(firstNumber / secondNumber);
}

function isEvenNumber(number) {
  return number % 2 === 0;
}

module.exports = {
  divide: divide,
  isEvenNumber: isEvenNumber,
};
/**
 * SOLID:
 * S: Single Responsibility
 * O: Opened - Closed
 * L: Liskov
 * I: Interface
 * D: Dependency
 */
