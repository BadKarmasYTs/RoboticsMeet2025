import { db, ref, push, onValue } from "./firebase.js"

const agendaList = document.getElementById("agenda-list")
const taskInput = document.getElementById("task")
const timeInput = document.getElementById("time")
const statusInput = document.getElementById("status")

function addAgenda() {
  push(ref(db, "schedule"), {
    task: taskInput.value,
    time: timeInput.value,
    status: statusInput.value
  })
  taskInput.value = ""
  timeInput.value = ""
}

onValue(ref(db, "schedule"), snap => {
  agendaList.innerHTML = ""
  snap.forEach(child => {
    const d = child.val()
    const div = document.createElement("div")
    div.textContent = `${d.task} at ${new Date(d.time).toLocaleString()} - ${d.status}`
    agendaList.appendChild(div)
  })
})

window.addAgenda = addAgenda
