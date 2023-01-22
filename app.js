// Get element
function selectElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(
      "Something went wrong. please make sure " +
        selector +
        " exist or is typed correctly."
    );
  }
}

// NAV TOGGLES
selectElement(".nav-toggle").addEventListener("click", function() {
  selectElement(".nav-toggle").classList.toggle("activate");
  selectElement(".nav-list").classList.toggle("activate");
});

const formEl = selectElement("#form");
const submitBtn = selectElement("#submit-ans");
const firstOpprantEl = selectElement(".first-opprand");
const lastOpprantEl = selectElement(".last-opprand");
const userInput = selectElement(".ans");
const scoreBoard = selectElement(".score");

// random number
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate random number for opprands
const firstOpprant = (firstOpprantEl.textContent = randomIntFromInterval(0, 9));
const lastOpprant = (lastOpprantEl.textContent = randomIntFromInterval(0, 9));

const correctAnswer = firstOpprant * lastOpprant;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreBoard.textContent = `Score: ${score}`;

formEl.addEventListener("submit", function() {
  const userAnswer = userInput.value;
  if (userAnswer == correctAnswer) {
    score++;
    updateLocatStorage();
  } else {
    score--;
    updateLocatStorage();
  }
});

// local storage
function updateLocatStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
