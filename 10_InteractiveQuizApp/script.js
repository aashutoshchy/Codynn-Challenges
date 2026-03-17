const questions = [
  {
    que: "Which of the following is a Markup Language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "C",
    correct: "a",
  },
  {
    que: "What is the national animal of Nepal?'",
    a: "Buffalo",
    b: "Dog",
    c: "Lion",
    d: "Cow",
    correct: "d",
  },
  {
    que: "What is the capital city of Nepal?",
    a: "Chitwan",
    b: "Dharan",
    c: "Hile",
    d: "Kathmandu",
    correct: "d",
  },
  {
    que: "Will You Marry Me?",
    a: "Yes",
    b: "hmmm",
    c: "✅",
    d: "All of the above",
    correct: "d",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("que-box");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  queBox.innerText = `${index + 1}. ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
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
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  if (right == 4) {
    document.getElementById("box").innerHTML = `
        <div class="after">
        <h3>Congratulations! You answered all correct.</h3>
        <h2>${right}/${total} 🎉🥳<h2>
        <div>
        `;
  } else {
    document.getElementById("box").innerHTML = `
        <div class="after">
        <h3>Your Score is: </h3>
        <h2>${right}/${total}<h2>
        <div>
        `;
  }
};

loadQuestion();
