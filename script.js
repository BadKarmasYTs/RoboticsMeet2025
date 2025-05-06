const targetDate = new Date('June 19, 2025 00:00:00').getTime()
const launchStart = new Date().getTime()
const daysSpan = document.getElementById('days')
const hoursSpan = document.getElementById('hours')
const minutesSpan = document.getElementById('minutes')
const secondsSpan = document.getElementById('seconds')
const progressFill = document.getElementById('progress-fill')

function updateCountdown() {
  const now = new Date().getTime()
  const distance = targetDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  daysSpan.innerText = days.toString().padStart(2, '0')
  hoursSpan.innerText = hours.toString().padStart(2, '0')
  minutesSpan.innerText = minutes.toString().padStart(2, '0')
  secondsSpan.innerText = seconds.toString().padStart(2, '0')

  const totalDuration = targetDate - launchStart
  const elapsed = now - launchStart
  const percent = Math.min(100, (elapsed / totalDuration) * 100)
  progressFill.style.width = percent + '%'
}

setInterval(updateCountdown, 1000)
updateCountdown()
