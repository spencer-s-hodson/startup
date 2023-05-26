class Session {
    constructor(date, duration, subject, notes) {
        this.date = date
        this.duration = duration
        this.subject = subject
        this.cost = duration * 60
        this.notes = notes
    }
}

// mock data to be replaced by database
const session1 = new Session("May 10th, 2023", 1, "Math", "Awesome!")
const session2 = new Session("May 10th, 2023", 2, "Chemistry", "Amazing!")
const session3 = new Session("May 10th, 2023", 1.5, "Spanish", "Epic!")
const session4 = new Session("May 10th, 2023", 1, "English", "Good job!")

let sessions = [session1, session2, session3, session4];

function previousSessions() {
    const tableBodyEl = document.querySelector('#sessions');
  
    if (sessions.length) {
      for (const [i, session] of sessions.entries()) {
        const dateTdEl = document.createElement('td');
        const durationTdEl = document.createElement('td');
        const subjectTdEl = document.createElement('td');
        const costTdEl = document.createElement('td');
        const notesTdEl = document.createElement('td');

  
        dateTdEl.innerText = session.date;
        durationTdEl.innerText = session.duration;
        subjectTdEl.innerText = session.subject;
        costTdEl.innerText = session.cost;
        notesTdEl.innerText = session.notes;


  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(dateTdEl);
        rowEl.appendChild(durationTdEl);
        rowEl.appendChild(subjectTdEl);
        rowEl.appendChild(costTdEl);
        rowEl.appendChild(notesTdEl)
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td>Schedule a Sessin to see them here!</td></tr>';
    }
  }
  
  previousSessions();
  