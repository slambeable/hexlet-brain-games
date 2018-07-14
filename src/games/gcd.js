import gameEngine from '..';
import randomNum from '../utils';

const description = 'What is the result of the expression?\n';

const isLess = (num1, num2) => num1 < num2;

const findGCD = (firstNum, secondNum) => {
  const theSmallestNumber = isLess(firstNum, secondNum) ? firstNum : secondNum;

  for (let i = theSmallestNumber; ; i -= 1) {
    const firstDividend = firstNum % i;
    const secondDividend = secondNum % i;
    if (firstDividend + secondDividend === 0) {
      return i;
    }
  }
};

const gameLogic = () => {
  const firstNum = randomNum(100);
  const secondNum = randomNum(100);

  const question = `${firstNum} ${secondNum}`;
  const findGCDToString = String(findGCD(firstNum, secondNum));
  const correctAnswer = findGCDToString;
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
