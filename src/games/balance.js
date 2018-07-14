import gameEngine from '..';
import randomNum from '../utils';

const description = 'Balance the given number.\n';

const getBalanceNumber = (num, numLength) => {
  const numToString = String(num);
  let sumNum = 0;
  let result = '';

  for (let i = 0; i !== numLength; i += 1) {
    sumNum += Number(numToString[i]);
  }

  const maxDigInNum = Math.ceil(sumNum / numLength);
  const maxNum = maxDigInNum * numLength;

  for (let i = 0; i !== numLength; i += 1) {
    if (maxNum - sumNum > i) {
      result += maxDigInNum - 1;
    } else {
      result += maxDigInNum;
    }
  }
  return result;
};

const gameLogic = () => {
  const numForQuestion = randomNum(9999);
  const numForQuestionLength = String(numForQuestion).length;
  const question = numForQuestion;
  const correctAnswer = getBalanceNumber(numForQuestion, numForQuestionLength);
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
