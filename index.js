
// //Card game

let firstCard = getRandoms()
let secondCard = getRandoms()
let cards = [firstCard, secondCard]
let hasBlackjack = false
let message = ""
 message = "Do you want to pick another card ? 🙂"

let sum = firstCard + secondCard 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


//function to generate random numbers

function getRandoms() {
    return 6
    
}
//function to call the render game function to action
function startGame() {
    renderGame()
}


//function to display cards, the sum and whether you have won or not
function renderGame(){
    

    //creating a forloop to loop through the cards
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent +=  cards[i] + " "
    }


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
    let card = getRandoms()
    sum += card

    //adding the value of the card to the cards
    cards.push(card)
     renderGame()
    
}


// let ca = [1, 3]

// ca.push(6)

// console.log(ca)

// ca.pop()
// console.log(ca)
//for loop


     //start            //finish  //jump
// for (let index = 10; index < 21; index++) {
    
//     console.log(index)
    
// }

// let messages = ['hello', 'hi', 'hey', 'what', 'mee', 'you']

// let cardss = [7, 8, 15, 20]
// for(let i = 0; i < message.length; i++){

//     console.log(messages[i])
// }

// for(let i = 0; i < cardss.length; i++){

//     console.log(cardss[i])
// }

// let sentence = ['hello', "my", "name", "is", "Racheal"]

// const greet = document.getElementById("greatings-el")

// for (let i = 0; i < sentence.length; i++) {
    
//     console.log(sentence[i])

// greet.textContent += sentence[i] + " "

// }

// let player1 = 108;
// let player2 = 104;

// function fastPlayer() {
//     if(player1 < player2){
//         return player1
//     }else if(player2 < player1){
//         return player2
//     }else{
//         return player1
//     }
    
// }


// let fastTime = fastPlayer()
// console.log(fastTime)

// function totalRace() {
//     return player1 + player2
    
// }

// // console.log(totalRace(player1,player2))

// let allTime = totalRace()
// console.log(allTime)

let numbers = Math.random() * 5

console.log(numbers);