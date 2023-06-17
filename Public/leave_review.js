function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket({ port : 4000 });
    socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        displayMsg(msg.value);
    };
}

function displayMsg(msg) {
    const chatText = document.querySelector('#the-reviews');
    chatText.innerHTML =
      `<tr>${msg}</tr>` + chatText.innerHTML;
  }

function broadcastEvent(value) {
    const event = {
      value: value
    };
    socket.send(JSON.stringify(event));
  }
  
function getReview() {
    configureWebSocket();
    const variable = getElementById("the-review").value;
    broadcastEvent(variable);
}
