import gameLogic from '..';
import { randomNum } from '../auxiliary';

let questionForThisRound = 0;

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const question = () => {
  questionForThisRound = randomNum(100);
  return questionForThisRound;
};

const isEven = num => num % 2 === 0;

const correctAnswer = () => (isEven(questionForThisRound) ? 'yes' : 'no');

export default () => gameLogic(rules, question, correctAnswer);
