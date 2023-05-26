// This function stores the entered email and password into local storage, and directs the user to the home page
function login() {
  const emailEl = document.getElementById("email");
  const passEl = document.getElementById("password");
  localStorage.setItem("email", emailEl.value);
  localStorage.setItem("password", passEl.value);
  window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // On the home page, retrieve the stored email from local storage
  const storedEmail = localStorage.getItem('email');

  // Display the email on the home page
  const greetingElement = document.getElementById('welcome_home');
  greetingElement.textContent = 'Hello, ' + storedEmail;
});
