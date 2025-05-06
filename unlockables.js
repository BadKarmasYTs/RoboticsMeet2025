const unlockables = document.getElementById("unlockables")
const targetDate = new Date("2024-06-19T00:00:00Z")
const unlocks = [
  { daysBefore: 30, content: "🚨 Final Month Warning" },
  { daysBefore: 14, content: "⚡ 2 Weeks Left - Practice Mode Unlocked" },
  { daysBefore: 7, content: "🔥 1 Week Left - Team Hype Trailer Dropped" },
  { daysBefore: 1, content: "🎯 Final Prep Mode Unlocked" }
]

const now = new Date()
unlocks.forEach(u => {
  const unlockTime = new Date(targetDate)
  unlockTime.setDate(unlockTime.getDate() - u.daysBefore)
  if (now >= unlockTime) {
    const div = document.createElement("div")
    div.textContent = u.content
    unlockables.appendChild(div)
  }
})
