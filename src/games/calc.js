import gameEngine from '..';
import randomNum from '../utils';

const description = 'What is the result of the expression?\n';

const solutionOfEquation = (firstNum, secondNum, randomMathOperations) => {
  switch (randomMathOperations) {
    case 0:
      return String(firstNum + secondNum);
    case 1:
      return String(firstNum - secondNum);
    default:
      return String(firstNum * secondNum);
  }
};

const gameLogic = () => {
  const firstNum = randomNum(10);
  const secondNum = randomNum(10);
  const randomMathOperations = randomNum(3, 0);
  const mathOperations = ['+', '-', '*'];

  const question = `${firstNum} ${mathOperations[randomMathOperations]} ${secondNum}`;
  const correctAnswer = solutionOfEquation(firstNum, secondNum, randomMathOperations);
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
