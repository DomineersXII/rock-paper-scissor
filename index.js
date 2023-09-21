const winner = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
}

function checkWinner(playerChoice, npcChoice) {
     if(playerChoice===npcChoice){
        alert("draw")
        
     } else if(winner[npcChoice] === playerChoice) {
        alert("you win")
     } else {
        alert("you lose")
     }

}

function npcRandom() {
const choices = ["rock", "paper", "scissors"]
choice = Math.floor(Math.random()*3)
return choices[choice]
}

const scissorsButton = document.getElementById("button-scissors")
const rockButton = document.getElementById("button-rock")
const paperButton = document.getElementById("button-paper")

rockButton.addEventListener("click",()=> {
checkWinner("rock", npcRandom())

})
paperButton.addEventListener("click",()=> {
    checkWinner("paper", npcRandom())
    
})
scissorsButton.addEventListener("click",()=> {
        checkWinner("scissors", npcRandom())
        
})

