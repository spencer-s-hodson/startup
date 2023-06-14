const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('spencer???') // idk what to put here
const userCollection = db.collection('user')
const sessionHistory = db.collection('history') // what is a client

// This will asynchronously test the connection and exit the process if it fails
// (async function testConnection() {
//     await client.connect();
//     await db.command({ ping: 1 });
//   })().catch((ex) => {
//     console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//     process.exit(1);
//   });

function getUser(email) {
    console.log(email)
    return userCollection.findOne({ email: email });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
  }

async function addSession(session) {
    const result = await sessionHistory.insertOne(session)
    return result
}  

async function getRecentSessions(user) {
    console.log(user)
    const query = { username : user };
    const options = {
        limit: 10,
  };
    const cursor = sessionHistory.find(query, options);
    const resolve = await cursor.toArray()
    console.log(resolve)
    return resolve;
}

module.exports = { 
    getUser,
    getUserByToken, 
    createUser,
    addSession, 
    getRecentSessions,
 }