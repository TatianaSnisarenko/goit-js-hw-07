function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");

const createBoxesButton = document.querySelector("button[data-create]");
const destroyBoxesButton = document.querySelector("button[data-destroy]");

createBoxesButton.addEventListener("click", handleCreateBoxes);
destroyBoxesButton.addEventListener("click", handleDestroyBoxes);

function handleCreateBoxes(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const amount = Number.parseInt(input.value.trim());
  if (!Number.isNaN(amount) && amount >= 1 && amount < 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  }
}

function handleDestroyBoxes(event) {
  event.preventDefault();
  destroyBoxes();
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.append(div);
  }
  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
