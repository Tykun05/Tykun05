
let Reso = '';
let moves = '';
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0, 
    loses: 0,
    ties: 0
    };

   updateScore();
   

// (!score = null)
/* if(score === null){
    score ={
        wins: 0, 
        loses: 0,
        ties: 0
    };
}*/



function playGame(playerMove){

    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You lose';
        }
        else if(computerMove === 'paper'){
            result = 'You won';
        }
        else if (computerMove === 'scissors'){
            result = 'Tie';
        }
    }

    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You won';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if (computerMove === 'scissors'){
            result = 'You lose';
        }
    }
    
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You lose';
        }
        else if (computerMove === 'scissors'){
            result = 'You won';
        }
    }

    if(result === 'You won'){
        score.wins  += 1;
    }
    else if (result === 'You lose'){
        score.loses += 1;
    }
    else if(result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore()
     document.querySelector('.js-result').innerHTML = result;
     document.querySelector('.js-moves').innerHTML = `
     You 
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`
   
}

function updateScore (){
    document.querySelector('.js-score')
     .innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`
}

function pickComputerMove(){
    const randomNumber = Math.random()

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
 }