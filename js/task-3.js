const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  nameOutput.textContent = event.currentTarget.value.trim() || "Anonymous";
}
