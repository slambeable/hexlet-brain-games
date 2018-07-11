import readlineSync from 'readline-sync';

export const giveYourName = () => {
  const questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${questionName}!\n`);
  return questionName;
};

export const helloBrainEven = () => console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

export const checkParity = (name) => {
  for (let i = 0; i !== 3; i + 1) {
    const randomNum = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      const answerCorrect = answer === 'yes' ? 'no' : 'yes';
      return `"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".\nLet's try again, Bill!`;
    }
  }
  return `Congratulations, ${name}`;
};
