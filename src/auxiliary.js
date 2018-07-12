import readlineSync from 'readline-sync';

export const questionName = () => {
  const giveYourName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${giveYourName}!\n`);
  return giveYourName;
};

export const randomNum = maxValue => Math.floor(Math.random() * maxValue);
