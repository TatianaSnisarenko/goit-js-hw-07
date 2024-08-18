const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.target.reset();
  }
}
