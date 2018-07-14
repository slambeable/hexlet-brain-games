import gameEngine from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".\n';

const isEven = num => num === 0;

const isPrimeNumber = (num) => {
  for (let i = 2; i !== num; i += 1) {
    const number = num % i;
    if (isEven(number)) {
      return false;
    }
  }
  return true;
};

const gameLogic = () => {
  const numForQuestion = randomNum(100);
  const question = numForQuestion;
  const isPrimeNumberToString = isPrimeNumber(numForQuestion) ? 'yes' : 'no';
  const correctAnswer = isPrimeNumberToString;
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
