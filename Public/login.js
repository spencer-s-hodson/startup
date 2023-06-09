// This function stores the entered email and password into local storage, and directs the user to the home page
async function login() {
  const emailEl = document.getElementById("email");
  const passEl = document.getElementById("password");
  localStorage.setItem("email", emailEl.value);
  localStorage.setItem("password", passEl.value);
  const send_to_server = await fetch("/test", {
    method: "post",
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({email: emailEl.value, password: passEl.value})
  })

  const receive_from_server = await send_to_server.json();
  console.log(send_to_server.status)



  if (!emailEl.value || !passEl.value) {
    event.preventDefault();
    alert('Please enter both email and password.');
  } else {
    window.location.href = "home.html";
  }
  
}
document.addEventListener("DOMContentLoaded", function() {
  // On the home page, retrieve the stored email from local storage
  const storedEmail = localStorage.getItem('email');

  // Display the email on the home page
  const greetingElement = document.getElementById('welcome_home');
  greetingElement.textContent = 'Hello, ' + storedEmail;
});
