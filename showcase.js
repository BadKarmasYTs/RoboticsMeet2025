import { db, ref, push, onValue } from "./firebase.js"

const mediaInput = document.getElementById("media")
const descInput = document.getElementById("desc")
const gallery = document.getElementById("gallery")

function uploadMedia() {
  const file = mediaInput.files[0]
  const desc = descInput.value
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    push(ref(db, "showcase"), {
      desc,
      type: file.type.startsWith("image") ? "image" : "video",
      data: reader.result
    })
    mediaInput.value = ""
    descInput.value = ""
  }
  reader.readAsDataURL(file)
}

onValue(ref(db, "showcase"), snap => {
  gallery.innerHTML = ""
  snap.forEach(child => {
    const d = child.val()
    const el = document.createElement(d.type === "image" ? "img" : "video")
    el.src = d.data
    el.controls = true
    const p = document.createElement("p")
    p.textContent = d.desc
    gallery.appendChild(p)
    gallery.appendChild(el)
  })
})

window.uploadMedia = uploadMedia
