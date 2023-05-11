# SpencerTutors
## Description Deliverable
### Elevator Pitch
Looking for personalized academic support from the comfort of your own home? I offer one-on-one sessions to help you achieve your academic goals. Whether you're struggling with a particular subject or just want to improve your grades, I can provide the individual attention and guidance you need to succeed. With flexible scheduling and affordable pricing, I make it easy to get the help you need, when you need it. Contact me today to schedule your first session!
### Design
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="Picture1.png">
  <img alt="This picture was made with NinjaMock. If you can't see it, I had a really hard time figuring out how to include it in here since I needed a URL" src="Picture1.png">
</picture>

### Key Features
- Secure login over HTTPS
- Ability to set tutoring appointments
- Able to view a calendar
- Able to set tasks with due dates
- Leave ratings from sessions
- Able to view notes from previous sessions
### Technologies
- **HTML** - Uses HTML structure. I'll need 3 pages. A Home screen, a place to leave a review, and a place to view the calendar
- **CSS** - Application styling, spacing, and use of contrasting colors
- **JavaScript** - Provides login, interation with the calendar, and ability to leave ratings
- **Service** - Backend service with endpoints for:
    - login
    - submitting reviews
    - retrieving reviews
- **DB** - Store users, reviews, and previoius session information in database
- **Login** - Register and login users. Credentials securely stored in database. Can't meet with me without one.
- **WebSocket** - All website visitors will be able to see the reviews that students leave
- **React** - Application ported to use the React web framework.
## HTML Deliverable
For this deliverable I added the application structure.
- **HTML pages** - Five HTML pages that represent the ability to login, leave reviews, keep track of assignments, view session history, and send messages to me.
- **Links** - The login page automatically links to the home page. After logging in, you are able to link any of the other HTML pages, including the login page (sign out)
- **Text** - Each review leaves a 0-5 star rating, as well as text.
- **Login** - Input box and submit button for login.
- **Database** - The voting choices represent data pulled from the database. Previous sessions are also stored in a database, and are viewable from the History section
- **WebSocket** - Displays all reviews from to the Homepage. Also a chat feature in the messages section
- 