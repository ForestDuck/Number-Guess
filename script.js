let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Generator for secret integer between 0 and 9;
let generateTarget = () =>{
  return Math.floor(Math.random()*10);
}

//Determines which player wins;
let compareGuesses = (human, computer, secret) => {
  const humanGuess = Math.abs(human - secret);
  const compGuess = Math.abs(computer - secret);

  if (humanGuess < 0 || humanGuess > 9){
    return window.alert('Enter correct number from 0 to 9') 
    }else if (human === computer || humanGuess < compGuess )
    {
    return true;
  }else if (humanGuess > compGuess){
    return false;
  } else {
    return 'WOW!';
  }
}

//Increases the score variable;
 let updateScore = (winner) => {
if (winner === 'human') {
   humanScore += 1;
}else if (winner === 'computer'){
   compScore += 1
}
 }

//update the round number after each round;
let  advanceRound = () => {
currentRoundNumber +=1;
};



