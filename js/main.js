// Initializing Variables
const spinBtn = document.querySelector(".spin-btn");
const resultEl = document.querySelector("#result");
const answerEl = document.querySelector("#answer");
let coin = "";

const logic = () => {
  randomNumberGen();
  let total = "";
  if (randomNumberGen() == 1) {
    total = "Heads";
  } else {
    total = "Tails";
  }
  resultEl.textContent = total;
  answerEl.textContent = `Who ever person toke ${total} won`;
};

const randomNumberGen = () => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  return randomNumber;
};

// Calling Function
spinBtn.addEventListener("click", () => {
  console.log(logic());
});
