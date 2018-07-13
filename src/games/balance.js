import gameEngine from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const sumNumForQuestion = (num) => {
  const numToString = String(num);
  let result = 0;
  for (let i = 0; i !== numToString.length; i += 1) {
    result += Number(numToString[i]);
  }
  return result;
};

const stringOfTheLargestDigits = (num, numLength) => {
  const maxDigInNum = Math.ceil(sumNumForQuestion(num) / numLength);
  let result = '';
  for (let i = 0; i !== numLength; i += 1) {
    result += maxDigInNum;
  }
  return String(result);
};

const differenceBetweenSumsOfTwoNumbers = (num1, num2) => {
  const sum1 = sumNumForQuestion(num1);
  const sum2 = sumNumForQuestion(num2);
  return sum1 >= sum2 ? sum1 - sum2 : sum2 - sum1;
};

const theBalanceNumber = (num, numLength) => {
  const numOfTheLargDigit = stringOfTheLargestDigits(num, numLength);;
  const diffBetweenSum = differenceBetweenSumsOfTwoNumbers(num, numOfTheLargDigit);
  let result = '';

  for (let i = 0; i !== numLength; i += 1) {
    if (i < diffBetweenSum) {
      result += numOfTheLargDigit[i] - 1;
    } else {
      result += numOfTheLargDigit[i];
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
