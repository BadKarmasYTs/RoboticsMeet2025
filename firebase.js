import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, push, onValue } from "firebase/database"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyByrmvkZxn4TV75Yk4cVdgRe5aXNpgUlUI",
  authDomain: "roboticswebsite.firebaseapp.com",
  databaseURL: "https://roboticswebsite-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "roboticswebsite",
  storageBucket: "roboticswebsite.appspot.com",
  messagingSenderId: "744993199417",
  appId: "1:744993199417:web:e28dfa13ba114f9973c4e8",
  measurementId: "G-QBJL52KDRT"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getDatabase(app)

export { db, ref, set, push, onValue }
