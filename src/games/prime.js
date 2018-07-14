import gameEngine from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".\n';

const isPrimeNumber = (num) => {
  const halfNum = Math.floor(num / 2);

  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= halfNum; i += 1) {
    const number = num % i;
    if (number === 0) {
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
