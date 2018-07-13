import gameEngine from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const sumAllDigitInNum = (num, numLength) => {
  const numToString = String(num);
  let result = 0;
  for (let i = 0; i !== numLength; i += 1) {
    result += Number(numToString[i]);
  }
  return result;
};

const maxDigInNum = (num, numLength) => Math.ceil(sumAllDigitInNum(num, numLength) / numLength);

const theBalanceNumber = (num, numLength) => {
  const maxDigit = maxDigInNum(num, numLength);
  const sumNum = sumAllDigitInNum(num, numLength);
  const maxNum = maxDigit * numLength;
  let result = '';

  for (let i = 0; i !== numLength; i += 1) {
    if (maxNum - sumNum > i) {
      result += maxDigit - 1;
    } else {
      result += maxDigit;
    }
  }
  return result;
};

const gameLogic = () => {
  const numForQuestion = randomNum(9999);
  const numForQuestionLength = String(numForQuestion).length;
  const question = numForQuestion;
  const correctAnswer = theBalanceNumber(numForQuestion, numForQuestionLength);
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
