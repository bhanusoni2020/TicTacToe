console.log("Welcome to Tic-Tac-Toe")
let music = new Audio("kids-game-gaming-background-music-295075.mp3")
let audioTurn = new Audio("beep-6-96243.mp3")
let gameover = new Audio("short-beep-tone-47916.mp3")
let turn = "X"

// Function to change the turn
const change = ()=>{
    return turn === "X"? "0": "X"

}

// Function to check for a win
const checkWin = ()=>{

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }

    })

})