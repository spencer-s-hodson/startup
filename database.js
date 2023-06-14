const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('spencer???') // idk what to put here
const sessionHistory = db.collection('history') // what is a client

// This will asynchronously test the connection and exit the process if it fails
// (async function testConnection() {
//     await client.connect();
//     await db.command({ ping: 1 });
//   })().catch((ex) => {
//     console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//     process.exit(1);
//   });

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

module.exports = { addSession, getRecentSessions } // add the function names in here
