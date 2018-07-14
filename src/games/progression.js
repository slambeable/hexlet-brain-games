import gameEngine from '..';
import randomNum from '../utils';

const description = 'What is the result of the expression?\n';

const getArithmeticProgression = () => {
  const firstNumber = randomNum(100);
  const stepOfProgression = randomNum(10);
  const arithmeticProgressionLength = 10;
  const skipNumber = randomNum(10);
  let counterProgression = 0;
  let arithmeticProgression = '';
  let missNumber = 0;

  for (let i = 0; i !== arithmeticProgressionLength; i += 1) {
    if (i === 0) {
      arithmeticProgression = String(firstNumber);
      counterProgression = firstNumber;
    } else if (i === skipNumber) {
      arithmeticProgression += ' ..';
      counterProgression += stepOfProgression;
      missNumber = counterProgression;
    } else {
      counterProgression += stepOfProgression;
      arithmeticProgression += ` ${counterProgression}`;
    }
  }
  return [missNumber, arithmeticProgression];
};

const gameLogic = () => {
  const [missNumber, arithmeticProgression] = getArithmeticProgression();
  const missNumberToString = String(missNumber);

  const question = arithmeticProgression;
  const correctAnswer = missNumberToString;
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
