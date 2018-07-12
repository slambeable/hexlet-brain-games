import gameLogic from '..';
import { randomNum } from '../auxiliary';

let firstNum = 0;
let secondNum = 0;

const rules = 'Find the greatest common divisor of given numbers\n';

const setOfValuesForThisOperation = () => {
  firstNum = randomNum(100);
  secondNum = randomNum(100);
};

const question = () => {
  setOfValuesForThisOperation();
  return `${firstNum} ${secondNum}`;
};

const correctAnswer = () => {
  const theSmallestNumber = firstNum < secondNum ? firstNum : secondNum;

  for (let i = theSmallestNumber; ; i -= 1) {
    const firstDividend = firstNum % i;
    const secondDividend = secondNum % i;
    if (firstDividend + secondDividend === 0) {
      return String(i);
    }
  }
};

export default () => gameLogic(rules, question, correctAnswer);
