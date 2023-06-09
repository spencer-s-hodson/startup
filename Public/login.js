async function createUser() {
  const userEl = document.getElementById("username");
  const passEl = document.getElementById("password");

  try {
    const response = await fetch("/api/auth/create", {
        method: "post",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ username: userEl.value, password: passEl.value })
      });
      alert("New account created, please login")
  }
  catch(error) {
    console.error(error);
    alert("An error occurred while logging in. Please try again later.");
  }
}

async function login() {
  const userEl = document.getElementById("username");
  const passEl = document.getElementById("password");

  if (!userEl.value || !passEl.value) {
    event.preventDefault();
    alert('Please enter both username and password.');
  } else {
    try {
      // Send the login request to the server
      const response = await fetch("/api/auth/login", {
        method: "post",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ username: userEl.value, password: passEl.value })
      });

      const responseData = await response.json()
      if (response.ok) {
        // Store the entered username in local storage
        localStorage.setItem("username", userEl.value);
        // Store the entered username in local storage
        localStorage.setItem("password", passEl.value);
        // Redirect to the home page
        window.location.href = "home.html";
      } else {
        // Display an error message if login fails
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in. Please try again later.");
    }
  }
}

async function startSession() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

  const response = await fetch("/joinSession", {
    method: "post",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ username : localStorage.getItem('username'), time : currentTime })
  });

    alert("Your session started at " + formattedTime + ", and will finish in an hour. You are now being redirected to Zoom.")
    window.location.href = "https://byu.zoom.us/my/spencerhodson";
}

document.addEventListener("DOMContentLoaded", function() {
  // On the home page, retrieve the stored username from local storage
  const storedUsername = localStorage.getItem('username');

  // Display the username on the home page
  const greetingElement = document.getElementById('welcome_home');
  if (greetingElement) {
    greetingElement.textContent = 'Hello, ' + storedUsername;
  }
});
