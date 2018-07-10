import readlineSync from 'readline-sync';

export const giveYourName = () => {
  const questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${questionName}!`);
};
