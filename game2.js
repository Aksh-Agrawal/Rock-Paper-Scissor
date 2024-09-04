// let userScore = 0;
// let comScore = 0;
// const msg = document.querySelector(".msg");
// const choices = document.querySelectorAll(".choice");
// const userPt = document.querySelector("#User");
// const comPt = document.querySelector("#Computer");

// const generateComp = () => {
//     const option = ["rock" , "paper" , "scissors"];
//     const randomIdx = Math.floor(Math.random() * 3);
//     return option[randomIdx];
// }

// const drawGame = () => {
//     console.log("Game Was Draw");
//     msg.innerText = "Game Was Draw";
//     msg.classList.remove("youWins");
//     msg.classList.remove("opponentWins");
//     msg.classList.add("DrawStyle");
// }

// const playGame = (userID) => {
// console.log("User Choice =",userID);

// const compChoice = generateComp();
// console.log("Com Choice was =", compChoice);

// const showWinner = (userWin , userID , compChoice) => {
//     if (userWin){
//         userScore++;
//         userPt.innerText = userScore;
//         console.log("You Win!");
//         msg.innerText = `You Win! , ${userID} beats ${compChoice} `;
//         msg.classList.remove("DrawStyle");
//         msg.classList.remove("opponentWins");
//         msg.classList.add("youWins");
//     }else{
//         comScore++;
//         comPt.innerText = comScore;
//         console.log("Opponent Wins!");
//           msg.innerText = `Opponent Win! , ${compChoice} beats ${userID} `;
//           msg.classList.remove("youWins");
//           msg.classList.remove("DrawStyle");
//           msg.classList.add("opponentWins");
//     }
// }

// if (userID === compChoice){
//     drawGame();
// }else {
//     let userWin = true;
//     if(userID === "rock"){
//         userWin = compChoice === "paper" ? false : true;
//     } else if (userID === "paper"){
//         userWin = compChoice === "scissors" ? false : true;
//     } else {
//         userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin , userID , compChoice);
// }
// };

// choices.forEach((choice) => {
// choice.addEventListener("click", () =>{
//     const userID = choice.getAttribute("id");
//     playGame(userID);
// });
// });

let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const userPt = document.querySelector("#User");
const comPt = document.querySelector("#Computer");
const msgbox = document.querySelector(".msg");

// computerChoice
const gererate = () => {
  const option = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};
scissors
const gameDraw = () => {
  console.log("Game Was Draw");
  msgbox.classList.remove("youWins");
  msgbox.classList.remove("opponentWins");
  msgbox.innerText = "Game Was Draw";
};
showWinner = (userWin , userID , compChoice) => {
  if (userWin) {
    userScore++;
    console.log("You Wim");
    userPt.innerText = userScore;
    msgbox.innerText = `You Win! , ${userID} beats ${compChoice}`
    msgbox.classList.remove("opponentWins");
    msgbox.classList.add("youWins");
  } else {
    console.log("you lose");
    comScore++;
    comPt.innerText = comScore;
    msgbox.innerText = `You Lose! , ${compChoice} beats ${userID}`
    msgbox.classList.remove("youWins");
    msgbox.classList.add("opponentWins");
  }
};

const playGame = (userID) => {
  console.log("User Choice Was =", userID);
  const compChoice = gererate();
  console.log("Computer Choice Was =", compChoice);

  if (userID === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userID === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userID === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userID , compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userID = choice.getAttribute("id");
    playGame(userID);
  });
});
