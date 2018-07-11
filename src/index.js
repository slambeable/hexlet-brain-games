import readlineSync from 'readline-sync';

export default () => {
  const questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${questionName}!\n`);
  return questionName;
};
