import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"
import { getDatabase, ref, onValue, set, push, remove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyBHFy0G4SzuSlHoHcHBNvP9j671V76SAJo",
  authDomain: "websiter-fa434.firebaseapp.com",
  databaseURL: "https://websiter-fa434-default-rtdb.firebaseio.com",
  projectId: "websiter-fa434",
  storageBucket: "websiter-fa434.appspot.com",
  messagingSenderId: "220814812327",
  appId: "1:220814812327:web:5203ba48accc92a273a782",
  measurementId: "G-NNHK9WGV8H"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db, ref, onValue, set, push, remove }
