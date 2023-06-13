async function whatThe () {
  class Session {
    constructor(date, user) {
        this.date = date
        this.duration = 1 // figure this out later
        this.cost = this.duration * 60
    }
}

async function someF () {
  var response = await fetch(`/history/${localStorage.getItem("user")}`)
  var date = await response.json()
  console.log(date)
  return date;
}

var date = await someF()
// mock data to be replaced by database
const session = new Session(date[0].time)

let sessions = [session];

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

