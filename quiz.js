const questions = [
  {
    'ques': "What is the capital city of france?*",
    'a': "Londan",
    'b': "Paris",
    'c': "Rome",
    'd': "Madrib",
    'correct': "b",
  },
  {
    'ques': "Which planet is known as the Red Planet?*",
    'a': "Venus",
    'b': "Mars",
    'c': "Juipter",
    'd': "Saturn",
    'correct': "b",
  },
  {
    'ques': "Which country is home to the kangaroo?",
    'a': "Austrila",
    'b': "Canada",
    'c': "Brazil",
    'd': "Japan",
    'correct': "a",
  },
  {
    'ques': "Who painted the famous artwork Mona Lisa?",
    'a': "Pablo Picasso",
    'b': "Leonardo da Vinci",
    'c': "Vincent van Gogh",
    'd': "Michelangelo",
    'correct': "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  // console.log(data);
  quesBox.innerText = `${index + 1}) ${data.ques}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  console.log(ans, data.correct);
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
   let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
        answer= input.value;
    }
  })
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <h3> Your Total Score</h3>
  <h2>${right} / ${total} are correct</h2>
  `;
};

loadQuestion();
