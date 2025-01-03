import questions from "./question.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-select");
  const categoryDOM = document.getElementById("category");
  const questionNum = document.getElementById("question-number");
  const quizElement = document.getElementById("quiz-element");
  const numberBtns = document.querySelectorAll(".number-btn");
  const categoryBtns = document.querySelectorAll(".category-btn");
  const questionElement = document.getElementById("question-element");

  const setCategory = (category) => {
    categoryDOM.value = category;
  };

  const setQuestionNumber = (number) => {
    questionNum.value = number;
  };

  let currentIndex = 0;
  let selectedQuestions = [];
  let point = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryDOM.value || !questionNum.value) {
      alert("Please select all the options");
      return;
    }
    fetchQuiz(categoryDOM.value, questionNum.value);
    quizElement.style.display = "none";
  };

  const fisherYatesShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  const fetchQuiz = (category, number) => {
    const selectedCategory = questions.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    if (number > selectedCategory.questions.length) {
      alert("Not enough questions available in this category.");
      return;
    }

    const randomQuestions = fisherYatesShuffle(selectedCategory.questions);
    selectedQuestions = randomQuestions.slice(0, number);
    currentIndex = 0;

    renderQuestion();
  };

  const renderQuestion = () => {
    const currentQuestion = selectedQuestions[currentIndex];
    questionElement.innerHTML = `
      <div class="question-container" id="question-${currentIndex + 1}">
        <p>${currentIndex + 1}. ${currentQuestion.question}</p>
        <div class="options-container">
          ${currentQuestion.options
            .map((option) => `<button class="option-btn">${option}</button>`)
            .join("")}
        </div>
        <p>Question ${currentIndex + 1} / ${selectedQuestions.length}</p>
        <button class="next-btn">Next</button>
      </div>
    `;
    addNextButtonListener();
    optionSelectListener();
  };

  const optionSelectListener = () => {
    const optionButtons = document.querySelectorAll(".option-btn");
    const nextButton = document.querySelector(".next-btn");

    optionButtons.forEach((option, index) => {
      option.dataset.index = index;

      option.addEventListener("click", () => {
        optionButtons.forEach((button) => (button.disabled = true));

        const selectedOptionIndex = parseInt(option.dataset.index, 10);
        const currentQuestion = selectedQuestions[currentIndex];

        if (selectedOptionIndex === currentQuestion.correctAnswer) {
          option.classList.add("green");
          point++;
        } else {
          option.classList.add("red");
        }

        const correctOption = optionButtons[currentQuestion.correctAnswer];
        correctOption.classList.add("green");

        nextButton.classList.add("appear");
      });
    });
  };

  const addNextButtonListener = () => {
    const nextButton = document.querySelector(".next-btn");
    nextButton.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex < selectedQuestions.length) {
        renderQuestion();
      } else {
        alert(`You have completed the quiz! Your point is ${point}`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  numberBtns.forEach((btn) =>
    btn.addEventListener("click", () =>
      setQuestionNumber(btn.innerHTML.trim().toLowerCase())
    )
  );

  categoryBtns.forEach((btn) =>
    btn.addEventListener("click", () =>
      setCategory(btn.innerHTML.trim().toLowerCase())
    )
  );

  const highlightSelectedButtons = (buttonGroupSelector) => {
    document.querySelectorAll(buttonGroupSelector).forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll(buttonGroupSelector)
          .forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  };

  highlightSelectedButtons(".category-btn");
  highlightSelectedButtons(".number-btn");

  form.addEventListener("submit", handleSubmit);
});
