// All code should be written in this file.

/* 12 Global Variables representing type and value */
let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;

let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;

let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;

let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;

let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, 
    moveTwoType, moveTwoValue, 
    moveThreeType, moveThreeValue) {
    
    // edge cases - move value 
    if (!moveOneValue || !moveTwoValue || !moveThreeValue) {
        // missing move value 
        return 'Missing move value.';
    } else if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        // sum of values exceed 99 
        return;
    } else if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
        // one or more values is less than 1 
        return;
    }

    // edge cases - move type 
    if (!moveOneType || !moveTwoType || !moveThreeType) {
        // missing move type 
        return 'Missing move type.';
    } else if (moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') {
        // invalid move type for move one 
        return;
    } else if (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') {
        // invalid move type for move two
        return;
    } else if (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors') {
        // invalid move type for move three 
        return;
    }

    // edge cases - player value 
    if (player !== 'Player One' && player !== 'Player Two' || !player) {
        // invalid player name 
        return;
    }

    // assigning Player One Values 
    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    }
    
    // assigning Player Two Values 
    if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

function getRoundWinner(roundNumber) {
    let playerOneMoveType; 
    let playerOneMoveValue;
    let playerTwoMoveType;
    let playerTwoMoveValue;

    if (roundNumber < 1 || roundNumber > 3) {
        // invalid round number 
        return null;
    }

    if (roundNumber === 1) {
        playerOneMoveType = playerOneMoveOneType;
        playerOneMoveValue = playerOneMoveOneValue;
        playerTwoMoveType = playerTwoMoveOneType;
        playerTwoMoveValue = playerTwoMoveOneValue;
    } else if (roundNumber === 2) {
        playerOneMoveType = playerOneMoveTwoType;
        playerOneMoveValue = playerOneMoveTwoValue;
        playerTwoMoveType = playerTwoMoveTwoType;
        playerTwoMoveValue = playerTwoMoveTwoValue;
    } else if (roundNumber === 3) {
        playerOneMoveType = playerOneMoveThreeType;
        playerOneMoveValue = playerOneMoveThreeValue;
        playerTwoMoveType = playerTwoMoveThreeType;
        playerTwoMoveValue = playerTwoMoveThreeValue;
    }

    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    // Tie 
    if (playerOneMoveType === playerTwoMoveOneType) {
        if(playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }

    // Player 1 === rock
    if (playerOneMoveType === 'rock') { 
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        } else if (playerTwoMoveType === 'paper') {
            return 'Player Two';
        }
    }

    // Player 1 === paper 
    if (playerOneMoveType === 'paper') { 
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        } else if (playerTwoMoveType === 'scissors') {
            return 'Player Two';
        }
    }

    // Player 1 === scissors 
    if (playerOneMoveType === 'scissors') { 
        if (playerTwoMoveType === 'paper') {
            return 'Player One';
        } else if (playerTwoMoveType === 'rock') {
            return 'Player Two';
        }
    }
}

function getGameWinner() { 
    let playerOneScore = 0;
    let playerTwoScore = 0;

    let roundOneResult = getRoundWinner(1);
    let roundTwoResult = getRoundWinner(2);
    let roundThreeResult = getRoundWinner(3);

    if (!roundOneResult || !roundTwoResult || !roundThreeResult) {
        return null;
    }

    if (roundOneResult === 'Player One') {
        playerOneScore++;
    } else if (roundOneResult === 'Player Two') {
        playerTwoScore++;
    } 

    if (roundTwoResult === 'Player One') {
        playerOneScore++;
    } else if (roundTwoResult === 'Player Two') {
        playerTwoScore++;
    } 

    if (roundThreeResult === 'Player One') {
        playerOneScore++;
    } else if (roundThreeResult === 'Player Two') {
        playerTwoScore++;
    } 
    

    if (playerOneScore > playerTwoScore) {
        return 'Player One';
    } else if (playerOneScore < playerTwoScore) {
        return 'Player Two';
    } else if (playerOneScore === playerTwoScore) {
        return 'Tie';
    }
}

// bonus 
function setComputerMoves() {
    let movePossibilities = ['rock', 'paper', 'scissors']; 
    playerTwoMoveOneType = movePossibilities[Math.floor(Math.random() * 2)];
    playerTwoMoveTwoType = movePossibilities[Math.floor(Math.random() * 2)];
    playerTwoMoveThreeType = movePossibilities[Math.floor(Math.random() * 2)];

    playerTwoMoveOneValue = Math.floor(Math.random() * 98 + 1);
    playerTwoMoveTwoValue = Math.floor(Math.random() * (99-playerTwoMoveOneValue) + 1);
    playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}