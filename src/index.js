import readlineSync from 'readline-sync';

const maxNumOfRound = 3;

export default (description, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  for (let i = 0; i !== maxNumOfRound; i += 1) {
    const [question, correctAnswer] = gameLogic();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}`);
    }
  }
  return console.log(`Congratulations, ${username}`);
};
