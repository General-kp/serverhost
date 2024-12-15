
const { getDatabase } = require("firebase/database");
require('dotenv').config()
console.log(process.env)
const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  databaseURL: "https://htmlbackend-ad937-default-rtdb.firebaseio.com",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
console.log("jetkins")
module.exports = database;
