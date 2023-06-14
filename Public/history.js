async function whatThe () {
  class Session {
    constructor(date, user) {
        this.date = date
        this.duration = 1 // figure this out later
        this.cost = this.duration * 60
    }
}

async function someF () {
  console.log(localStorage.getItem('username'))
  var response = await fetch(`/history/${localStorage.getItem('username')}`)
  var date = await response.json()
  console.log(date)
  return date;
}

var date = await someF()
console.log(date)
let sessions = [];

// mock data to be replaced by database
for (var i = 0; i < date.length; i++) {
  const session = new Session(date[i].time)
  sessions.push(session)
}

function previousSessions() {
    const tableBodyEl = document.querySelector('#sessions');
  
    if (sessions.length) {
      for (const [i, session] of sessions.entries()) {
        const dateTdEl = document.createElement('td');
        const durationTdEl = document.createElement('td');
        const costTdEl = document.createElement('td');

  
        dateTdEl.innerText = session.date;
        durationTdEl.innerText = session.duration + " hrs";
        costTdEl.innerText = "$" + session.cost;


        const rowEl = document.createElement('tr');
        rowEl.appendChild(dateTdEl);
        rowEl.appendChild(durationTdEl);
        rowEl.appendChild(costTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td>Schedule a Session to see them here!</td></tr>';
    }
  }
  
  previousSessions();
  
}
whatThe()

