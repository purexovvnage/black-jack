import './style.css'

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = [firstCard,secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false

let message = ""

const startBtn = document.getElementById("start-btn")
const newBtn = document.getElementById("new-btn")

startBtn.addEventListener('click',startGame)
newBtn.addEventListener('click',newCard)

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
  name: "Per",
  chips: 6969
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  if (isAlive === false || hasBlackJack === true) {
    isAlive = true
    hasBlackJack = false
    player.chips -= 20
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
  }
}

function renderGame() {

  playerEl.textContent = player.name + ": $" + player.chips

  let cardmessage  = "Cards: "
  for(let i = 0; i<cards.length; i++) {
    cardmessage += cards[i] + " "
  }
  cardsEl.textContent = cardmessage
  sumEl.textContent = "Sum: " + sum
  if ( sum<21 ) {
    //console.log("Do you want to draw a new card?")
    message = "Do you want to draw a new card?"
  } else if ( sum === 21 ) {
    //console.log("Woohoo! You've got Blackjack!")
    hasBlackJack = true
    isAlive = false
    message = "Woohoo! You've got Blackjack!"
    player.chips += 80
  } else {
    //console.log("You're out of the game!")
    isAlive = false
    message = "You're out of the game!"
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}

function getRandomCard() {
  let num =  1+Math.floor(Math.random()*13)
  if (num ===1) {
    return 11
  } else if (num > 10) {
    return 10
  } else {
    return num
  }


}
