import gameEngine from '..';
import randomNum from '../utils';

const arithmeticProgressionLength = 10;

const description = 'What is the result of the expression?\n';

const getArithmeticProgressionWithMissNum = () => {
  const firstNumber = randomNum(100);
  const stepOfProgression = randomNum(10);
  const skipPosition = randomNum(10);
  let arithmeticProgression = '';
  let missNumber = 0;

  for (let i = 0; i !== arithmeticProgressionLength; i += 1) {
    if (i === skipPosition) {
      arithmeticProgression += '.. ';
      missNumber = firstNumber + stepOfProgression * i;
    } else {
      arithmeticProgression += `${firstNumber + stepOfProgression * i} `;
    }
  }
  return [missNumber, arithmeticProgression];
};

const gameLogic = () => {
  const [missNumber, arithmeticProgression] = getArithmeticProgressionWithMissNum();
  const question = arithmeticProgression;
  const correctAnswer = String(missNumber);
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
