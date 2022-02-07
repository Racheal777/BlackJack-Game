
// //Card game

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let hasBlackjack = false
let message = ""
 message = "Do you want to pick another card ? 🙂"

let sum = firstCard + secondCard 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

//function to call the render game to action
function startGame() {
    renderGame()
}


//function to display cards, the sum and whether you have won or not
function renderGame(){
    cardEl.textContent = "Cards : " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum :" + sum
    if(sum <= 20){
        message = "Do you want to pick another card ? "
    
    }else if(sum === 21){
        message = "You have got a Blackjack "
        hasBlackjack = true
    }else{
        message = "You are out of the game "
        hasBlackjack = false;
    }
    
    
    messageEl.textContent = message
}


//function to draw new card

function newCard() {
    let card = 9
    sum += card

     renderGame()
    
}


