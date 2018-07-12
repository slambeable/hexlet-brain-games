import gameLogic from '..';
import { randomNum } from '../auxiliary';

let firstNum = 0;
let secondNum = 0;
let randomMathOperations = 0;
const mathOperations = ['+', '-', '*'];

const rules = 'What is the result of the expression?\n';

const setOfValuesForThisOperation = () => {
  firstNum = randomNum(10);
  secondNum = randomNum(10);
  randomMathOperations = randomNum(2);
};

const question = () => {
  setOfValuesForThisOperation();
  return `${firstNum} ${mathOperations[randomMathOperations]} ${secondNum}`;
};

const correctAnswer = () => {
  switch (randomMathOperations) {
    case 0:
      return String(firstNum + secondNum);
    case 1:
      return String(firstNum - secondNum);
    default:
      return String(firstNum * secondNum);
  }
};

export default () => gameLogic(rules, question, correctAnswer);
