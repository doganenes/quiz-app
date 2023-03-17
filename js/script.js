const questionsData = [
  {
    question: "What is the most popular programming language in 2023?",
    options: ["Javascript", "Java", "C#", "Python", "Golang"],
    answer: "Javascript",
  },
  {
    question: "What was the first web browser?",
    options: [
      "Netscape Navigator",
      "Internet Explorer",
      "Google Chrome",
      "Firefox",
      "Yandex",
    ],
    answer: "Netscape Navigator",
  },
  {
    question: "What is the release date of Javascript?",
    options: ["1995", "1996", "1997", "1998", "1999"],
    answer: "1995",
  },
  {
    question: "Which is a CSS property?",
    options: ["for loop", "if statement", "flexbox", "while", "switch-case"],
    answer: "flexbox",
  },
  {
    question: "Which is the Javascript library?",
    options: ["React", "Angular", "Vue", "Ember", "Blazor"],
    answer: "React",
  },
  {
    question: "What is the most popular database management system?",
    options: ["MySQL", "Oracle", "SQL Server", "PostgreSQL", "SQLLite"],
    answer: "MySQL",
  },
  {
    question: "Which is not a backend technologies approach?",
    options: ["MERN", "MEVN", "LAMP", ".NET", "Tensorflow"],
    answer: "Tensorflow",
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "Hypertext Transfer Protocol",
      "Hyper Text Transmission Protocol",
      "Hyper Transfer Transmission Protocol",
      "Hyper Text Transfer Processes",
      "Hyper Transfer Transmission Processes",
    ],
    answer: "Hypertext Transfer Protocol",
  },
  {
    question: 'What is the long form of "CRUD"?',
    options: [
      "CREATE REMOVE UPDATE DELETE",
      "CREATE READ UPDATE DELETE",
      "CREATE REMOVE UPDATE DATA",
      "CREATE RESET UPDATE DELETE",
      "CREATE RESET UPDATE DATA",
    ],
    answer: "CREATE READ UPDATE DELETE",
  },
  {
    question: "What is the long form of NoSQL?",
    options: [
      "Not only SQL",
      "No SQL",
      "Not One SQL",
      "Notation SQL",
      "Number One SQL",
    ],
    answer: "Not only SQL",
  },
];

let welcomeMessage = document.getElementById("welcomeMessage");
const codesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, "A", "B", "C", "D", "E", "F"];

const randomTextColor = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += codesArr[Math.floor(Math.random() * codesArr.length)];
  }
  return hexCode;
};

setInterval(() => {
  welcomeMessage.style.color = randomTextColor();
}, 500);

let welcomePage = document.getElementById("welcomePage");
let quizPage = document.getElementById("quizPage");
let resultPage = document.getElementById("resultPage");

let answers = [];
let current = 0;

function startQuiz() {
  let nameInput = document.getElementById("name");
  let name = nameInput.value;
  if (name !== "") {
    welcomePage.style.display = "none";
    quizPage.style.display = "block";
    getQuestions();
  }
}

function getQuestions() {
  let question = questionsData[current];
  quizPage.innerHTML =
    "<h3 style='margin-bottom:2rem'>" + question.question + "</h3>";
  for (let i = 0; i < question.options.length; i++) {
    quizPage.innerHTML +=
      "<button class='btn w-75 btn-lg' onclick=\"takeAnswer('" +
      question.options[i] +
      "')\"'>" +
      question.options[i] +
      "</button><br><br>";
  }

  if (current >= questionsData.length) {
    getResult(nameInput);
  }
}

function takeAnswer(answer) {
  answers.push(answer);
  current++;
  if (current < questionsData.length) {
    getQuestions();
  } else {
    getResult();
  }
}

function getResult() {
  let correctAnswers = 0;
  for (let i = 0; i < questionsData.length; i++) {
    if (answers[i] === questionsData[i].answer) {
      correctAnswers++;
    }
  }

  let nameInput = document.querySelector("#name");
  let name = nameInput.value;

  let resultMessage = `Congratulations ${name}! <br/>You answered
  <span class='correctAnswer'>${correctAnswers}</span> out of
  ${questionsData.length} questions correctly.<br/> 
  <button class='playAgain btn btn-warning mt-4'>Play Again</button>`;

  quizPage.style.display = "none";
  resultPage.style.display = "block";
  resultPage.innerHTML = "<h2 class='resultMessage'>" + resultMessage + "</h2>";

  let playAgain = document.querySelector(".playAgain");
  playAgain.addEventListener("click", () => {
    current = 0;
    answers = [];
    startQuiz();
    resultPage.style.display = "none";
  });
}
