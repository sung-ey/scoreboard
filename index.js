let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function addHomeScore1() {
  homeScore += 1
  homeEl.textContent = homeScore
}

function addHomeScore2() {
  homeScore += 2
  homeEl.textContent = homeScore
}

function addHomeScore3() {
  homeScore += 3
  homeEl.textContent = homeScore
}

function addGuestScore1() {
  guestScore += 1
  guestEl.textContent = guestScore
}

function addGuestScore2() {
  guestScore += 2
  guestEl.textContent = guestScore
}

function addGuestScore3() {
  guestScore += 3
  guestEl.textContent = guestScore
}


