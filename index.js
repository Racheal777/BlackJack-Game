
// //Card game

// let firstCard = getRandoms()
// let secondCard = getRandoms()
let cards = []
let hasBlackjack = false
let message = ""
let isAlive = false
let sum = 0

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")


let player = {
    name: "Rich",
    chip: 145
}

playerEl.textContent = player.name + " " + '$' + player.chip
//function to generate random numbers by using math.floor to display whole
//numbers out of decimals

function getRandoms() {
    let randoms = Math.floor(Math.random() * 13) + 1

    if(randoms === 1){
        return 11
    }else if(randoms > 10){
        return 10
    }else{
        return randoms
    }
        
}
//function to call the render game function to action
//assigning the getrandoms function to each card
function startGame() {
    isAlive = true
    let firstCard = getRandoms()
    let secondCard = getRandoms()
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    // if(firstCard && secondCard){
    //     return
    // }

    
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
        isAlive = false
    }
    
    
    messageEl.textContent = message
}


//function to draw new card
//calling a function in another function

function newCard() {
    if(isAlive === true && hasBlackjack === false){
       
        let card = getRandoms()
        sum += card
    
        //adding the value of the card to the cards
       
        cards.push(card)
        // cards[cards.length-1]
         renderGame() 
         console.log(cards)
         console.log(card) 
    }
    
     

     
    //  console.log(Addednum)
    
}


let men = ["vhghcrfg", "vtgctgc", "fyfjghv", "awdsctrcf", "hiii"] 

let moon = {
    name: "Rich",
    age: 28,
    address: "juaso",
    isStudent : true,
    tag: ["hiiii", "helllo", "meee"],
    hot : function heat(params) 
    {
        console.log('are you ready')
        
    }
}

let most = "helooooo"
men.push(most)
console.log(console)
console.log(moon.hot())
