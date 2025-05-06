import { db, ref, push, onValue } from "./firebase.js"

const nicknameInput = document.getElementById("nickname")
const messageInput = document.getElementById("message")
const chatBox = document.getElementById("chat-box")

function sendMessage() {
  push(ref(db, "chat"), {
    name: nicknameInput.value,
    text: messageInput.value,
    time: Date.now()
  })
  messageInput.value = ""
}

onValue(ref(db, "chat"), snap => {
  chatBox.innerHTML = ""
  snap.forEach(child => {
    const d = child.val()
    const div = document.createElement("div")
    div.textContent = `${d.name}: ${d.text}`
    chatBox.appendChild(div)
  })
})

window.sendMessage = sendMessage
