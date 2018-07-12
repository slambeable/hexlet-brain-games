import readlineSync from 'readline-sync';
import { questionName } from './auxiliary';

export default (rules, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const username = questionName();
  const maxNumOfRound = 3;

  for (let i = 0; i !== maxNumOfRound; i += 1) {
    const questionForThisRound = question();
    console.log(`Question: ${questionForThisRound}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswerForThisRound = correctAnswer();
    if (correctAnswerForThisRound === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswerForThisRound}".\nLet's try again, ${username}`);
    }
  }
  return console.log(`Congratulations, ${username}`);
};
