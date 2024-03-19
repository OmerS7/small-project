document.addEventListener('DOMContentLoaded', function() {
    const restartGameLink = document.getElementById('restartGameLink');

    restartGameLink.addEventListener('click', function(event) {
        // Voorkom standaardgedrag van de link (navigatie naar een lege hash-URL)
        event.preventDefault();
        
        // Vernieuw de pagina
        window.location.reload();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');

    const icons = document.querySelectorAll('.icon');

    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            icons.forEach(function(icon) {
                icon.classList.remove('selected');
            });
            icon.classList.add('selected');
        });
    });

    document.getElementById('playButton').addEventListener('click', function() {
        const selectedIcon = document.querySelector('.icon.selected');
        if (selectedIcon) {
            const playerChoice = selectedIcon.getAttribute('data-choice');

            const randomNum = () => {
                return Math.floor(Math.random() * 3) + 1;
            };

            const determineAttack = (randomNumber) => {
                if (randomNumber === 1) {
                    return 'hand-fist';
                } else if (randomNumber === 2) {
                    return 'hand';
                } else {
                    return 'hand-scissors';
                }
            };

            const resultComputerElement = document.getElementById('resultComputer');

            const randomNumComputer = randomNum();
            const resultComputer = determineAttack(randomNumComputer);

            resultComputerElement.innerHTML = "<i class='fas fa-" + resultComputer + " icon'></i>";

            const resultElement = document.getElementById('result');
            const computerChoiceElement = document.getElementById('computerChoice');

            function resultGame(playerChoice, computerChoice) {
                if (playerChoice === computerChoice) {
                    return "It's a Draw!";
                } if ((playerChoice === 'hand-fist' && computerChoice === 'hand-scissors') ||
                    (playerChoice === 'hand' && computerChoice === 'hand-fist') ||
                    (playerChoice === 'hand-scissors' && computerChoice === 'hand')) {
                    playerScore++;
                    return "You win!";
                } else {
                    computerScore++;
                    return "Computer wins!";
                }
            }
            const result = resultGame(playerChoice, resultComputer);
            
            computerChoiceElement.innerHTML = "Computer has chosen for: " ;
            resultElement.innerHTML = result;

            playerScoreElement.innerText = "You " + playerScore + "-";
            computerScoreElement.innerText = computerScore + " Computer";
            
        } else {
            alert("Please select a move.");
        }
    });
});