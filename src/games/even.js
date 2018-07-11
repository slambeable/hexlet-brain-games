import readlineSync from 'readline-sync';
import giveYourName from '..';

const helloBrainEven = () => console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const checkParity = (name) => {
  const maxNumOfRound = 3;

  for (let i = 0; i !== maxNumOfRound; i += 1) {
    const question = Math.round(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const answerCorrect = isEven(question);
    if (answerCorrect === answer) {
      console.log('Correct!');
    } else {
      return `"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".\nLet's try again, Bill!`;
    }
  }
  return `Congratulations, ${name}`;
};

export default () => {
  helloBrainEven();
  console.log(checkParity(giveYourName()));
};
