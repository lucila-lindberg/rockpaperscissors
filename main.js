const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        console.log('Invalid input');
    }
};

const getComputerChoice = () => {
    let computerNumber = Math.floor(Math.random() * 3);
    switch (computerNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
        }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'No winner. It is a tie';
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won';
        } else {
            return 'The user has won';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer has won';
        } else {
            return 'The user has won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer has won';
        } else {
            return 'The user has won';
        }
    }
}


const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
