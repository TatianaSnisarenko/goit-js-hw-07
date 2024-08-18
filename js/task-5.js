function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const spanColor = document.querySelector("span.color");

const changeColorButton = document.querySelector("button.change-color");

changeColorButton.addEventListener("click", handleChangeBodyColor);

function handleChangeBodyColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}
