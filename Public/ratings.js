  var intervalId; // Variable to store the interval ID
  var max_times = 10
  var counter = 0

  function startInterval() {
    // Clear any existing interval
    clearInterval(intervalId);

    // Start the interval
    intervalId = setInterval(() => {
      ++counter
      if (counter > max_times) {
        return;
      }
      const randomRating = Math.random() < 0.5 ? 4 : 5;
      const chatText = document.querySelector('#reviews');
      chatText.innerHTML = `<div class="event"><span class="player-event">Paul</span>${"⭐".repeat(randomRating)} Thanks for the help!</div>` + chatText.innerHTML;
    }, 2000);
  }






  
