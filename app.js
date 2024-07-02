let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    msg.innerHTML = "Game was Draw, play again";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    //Genrate Computer Choice
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paer"){
            //rock, scissors
            compChoice === "scissors" ?  false : true;

        }else{
            //rock, paper
           userWin =  compChoice === "rock" ?  false : true;

        }
        showWinner(userWin, userChoice, compChoice)
    }
};

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    })
});