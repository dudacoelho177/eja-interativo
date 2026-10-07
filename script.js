// Lista de perguntas da atividade de alfabetização.
const questions = [
  {
    question: 'Qual palavra começa com a letra M?',
    options: ['Mesa', 'Lápis', 'Casa'],
    answer: 0,
    explanation: 'A palavra "Mesa" começa com a letra M.'
  },
  {
    question: 'Qual palavra termina com a letra O?',
    options: ['Caderno', 'Livro', 'Pato'],
    answer: 1,
    explanation: 'A palavra "Livro" termina com a letra O.'
  },
  {
    question: 'Qual palavra tem 4 letras?',
    options: ['Luz', 'Mão', 'Copo'],
    answer: 2,
    explanation: 'A palavra "Copo" tem 4 letras.'
  }
];

// Seleção dos elementos do DOM com getElementById e querySelector.
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const optionButtons = document.querySelectorAll('.answer-btn');

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Função para mostrar a pergunta atual na tela.
function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionNumber.textContent = `Questão ${currentQuestionIndex + 1}`;
  questionText.textContent = currentQuestion.question;
  scoreElement.textContent = score;
  feedbackElement.textContent = '';
  feedbackElement.classList.remove('success', 'error');
  nextButton.disabled = true;
  nextButton.textContent = 'Próxima pergunta';
  answered = false;

  // Atualiza cada botão com a opção da pergunta atual.
  optionButtons.forEach((button, index) => {
    const optionText = currentQuestion.options[index];
    button.textContent = optionText;
    button.dataset.index = String(index);
    button.classList.remove('correct', 'incorrect', 'disabled');
    button.disabled = false;
  });
}

// Função para validar a resposta escolhida.
function checkAnswer(selectedButton) {
  if (answered) {
    return;
  }

  answered = true;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedIndex = Number(selectedButton.dataset.index);
  const isCorrect = selectedIndex === currentQuestion.answer;

  // Atualiza pontuação e feedback visual.
  if (isCorrect) {
    score += 1;
    scoreElement.textContent = score;
    feedbackElement.textContent = `✅ ${currentQuestion.explanation}`;
    feedbackElement.classList.add('success');
  } else {
    feedbackElement.textContent = `❌ Resposta incorreta. ${currentQuestion.explanation}`;
    feedbackElement.classList.add('error');
  }

  // Marca as opções com classes de CSS.
  optionButtons.forEach((button) => {
    const buttonIndex = Number(button.dataset.index);
    button.classList.add('disabled');
    button.disabled = true;

    if (buttonIndex === currentQuestion.answer) {
      button.classList.add('correct');
    }

    if (buttonIndex === selectedIndex && !isCorrect) {
      button.classList.add('incorrect');
    }
  });

  selectedButton.classList.add(isCorrect ? 'correct' : 'incorrect');
  nextButton.disabled = false;
}

// Avança para a próxima pergunta ou finaliza a atividade.
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  questionNumber.textContent = 'Fim da atividade';
  questionText.textContent = `Você concluiu a atividade com ${score} ponto(s) de ${questions.length}.`;
  feedbackElement.textContent = 'Parabéns por praticar a leitura!';
  feedbackElement.classList.add('success');
  nextButton.textContent = 'Reiniciar';
  nextButton.disabled = false;

  optionButtons.forEach((button) => {
    button.textContent = '';
    button.disabled = true;
    button.classList.remove('correct', 'incorrect', 'disabled');
  });
}

// Adiciona listeners aos botões de resposta.
optionButtons.forEach((button) => {
  button.addEventListener('click', () => checkAnswer(button));
});

nextButton.addEventListener('click', () => {
  if (nextButton.textContent === 'Reiniciar') {
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
    return;
  }

  nextQuestion();
});

// Inicia a atividade ao carregar a página.
renderQuestion();
