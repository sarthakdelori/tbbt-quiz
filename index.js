const readLineSync = require('readline-sync');
const chalk = require('chalk');

const questions = [
  {
    question: "What is the number of Penny's apartment? ",
    answer: "4B"
  },
  {
    question: "What is the name of Raj's dog? ",
    answer: "Cinnamon"
  },
  {
    question: "Where does Penny work in first seven seasons? ",
    answer: "The CheeseCake Factory"
  },
  {
    question: "What is Leonard's profession? ",
    answer: "Experimental Physicist"
  },
  {
    question: "What is Howard's Mother name? ",
    answer: "Debbie"
  },
  {
    question: "What is Raj's sister's name? ",
    answer: "Priya"
  },
  {
    question: "What is the middle name of Amy? ",
    answer: "Farrah"
  },
  {
    question: "What song does Sheldon listen to when sick? ",
    answer: "Soft Kitty"
  },
  {
    question: "On which day Sheldon does his laundry? ",
    answer: "Saturday"
  },
  {
    question: "What is the color of Penny's sofa? ",
    answer: "Turquoise"
  },
  {
    question: "What is Sheldon's catchphrase? ",
    answer: "Bazinga"
  },
  {
    question: "In which city the show is based? ",
    answer: "Pasadena"
  },
  {
    question: "Who is the owner of 'The Comic Book Store'? ",
    answer: "Stuart"
  },
  {
    question: "What is Howard's astronaut nickname? ",
    answer: "Froot Loops"
  },
  {
    question: "What is name of Howard and Bernadette child? ",
    answer: "Halley"
  }
];

let userName = readLineSync.question("What is your name? ");

function welcome() {

  console.log("Welcome " + chalk.blue(userName) + " to 'The Big Bang Theory Quiz'");
  console.log(" ");
}

let score = 0;

function play() {
  for (let i = 0; i < 5; i++) {
    let ran = Math.floor(Math.random()*questions.length);
    let current = questions[ran];
    let ques = current.question;
    let ans = current.answer;

    let userAnswer = readLineSync.question(ques);

    if (userAnswer.toUpperCase() === ans.toUpperCase()) {
      console.log(chalk.green("Right!!"));
      score++;
    }
    else {
      console.log(chalk.red("Wrong!"));
    }

    console.log(chalk.italic("Current Score: "), score);
    console.log("__________________________");
    console.log("                          ");
  }
}

function finalScore() {
  console.log(chalk.yellow(userName + " scored: ", score));
}
welcome();
play();
finalScore();