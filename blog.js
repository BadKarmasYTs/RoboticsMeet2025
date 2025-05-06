import { db, ref, push, onValue } from "./firebase.js"

const blogText = document.getElementById("blog-text")
const blogEntries = document.getElementById("blog-entries")

function addBlog() {
  push(ref(db, "blog"), {
    text: blogText.value,
    time: Date.now()
  })
  blogText.value = ""
}

onValue(ref(db, "blog"), snap => {
  blogEntries.innerHTML = ""
  snap.forEach(child => {
    const d = child.val()
    const div = document.createElement("div")
    div.textContent = `${new Date(d.time).toLocaleString()} - ${d.text}`
    blogEntries.appendChild(div)
  })
})

window.addBlog = addBlog
