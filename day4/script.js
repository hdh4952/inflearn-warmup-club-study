function createQuiz() {
  const first = Math.floor(Math.random() * 10 + 1);
  const second = Math.floor(Math.random() * 10 + 1);

  const question = `Q. ${first} + ${second} ?`;
  const answer = first + second;
  const wrongAnswers = [answer + 1, answer + 2, answer + 3, answer + 4];

  return { question, answer, wrongAnswers };
}

window.onload = function () {
  const quizBtn = document.querySelector('.quiz-btn');
  quizBtn.addEventListener('click', () => {
    const app = document.querySelector('.app');
    app.style.backgroundColor = 'white';

    quizBtn.style.display = 'none';

    renderQuiz();
  });

  renderQuiz();
};

function renderQuiz() {
  const { question, answer, wrongAnswers } = createQuiz();

  const questionBox = document.querySelector('.question-box');
  questionBox.innerText = question;

  const answerBox = document.querySelector('.answer-box');
  answerBox.innerHTML = '';

  const buttons = [];
  buttons.push(createButton(answer, true));
  wrongAnswers.forEach((wa) => buttons.push(createButton(wa, false)));

  buttons.sort(() => Math.random() - 0.5);
  buttons.forEach((button, index) => {
    const box = document.createElement('div');
    const span = document.createElement('span');

    span.innerText = String.fromCharCode(0x2460 + index);

    box.appendChild(span);
    box.appendChild(button);

    answerBox.appendChild(box);
  });
}

function createButton(content, isAnswer) {
  const button = document.createElement('button');
  button.innerText = content;
  button.onclick = isAnswer ? onClickAnswer : onClickWrongAnswer;
  return button;
}

function onClickAnswer(e) {
  const app = document.querySelector('.app');
  app.style.backgroundColor = 'green';
  e.target.innerHTML += '✅';

  const quizBtn = document.querySelector('.quiz-btn');
  quizBtn.style.backgroundColor = 'green';
  quizBtn.innerText = 'Next';
  quizBtn.style.display = 'block';
}

function onClickWrongAnswer(e) {
  const app = document.querySelector('.app');
  app.style.backgroundColor = 'red';
  e.target.innerHTML += '❌';

  const quizBtn = document.querySelector('.quiz-btn');
  quizBtn.style.backgroundColor = 'red';
  quizBtn.innerText = 'Restart';
  quizBtn.style.display = 'block';
}
