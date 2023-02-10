// Variables nécessaires pour le jeu
let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
    [0, 4, 8], [2, 4, 6], // Diagonales
];
let statusElement = document.querySelector('.status');
let active = true;

// Le premier 4 se récupère comme ça
// console.log(wins[1][1]);

// On affiche le tour du joueur au début
statusElement.innerHTML = `C'est le tour du joueur ${currentPlayer}`;

// Ecouter le clic sur chacune des cases
document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', handleClick);
});

// Ecouter le clic sur le bouton restart
document.querySelector('.restart').addEventListener('click', handleRestart);

// Fonction où on va ranger la logique du clic sur une case
function handleClick(event) {
    let cell = event.target; // Récupère la case cliquée
    let index = cell.dataset.cell; // Récupère la valeur du data-cell=

    // Vérifier si la case n'est pas vide ou que la partie est terminée
    if (gameState[index] != '' || !active) {
        return; // On stoppe le code et rien ne se passe si la case est remplie
    }

    // On remplit le tableau pour suivre l'état du jeu
    gameState[index] = currentPlayer;
    // On mets à jour "l'interface" du jeu
    cell.innerHTML = currentPlayer;

    // Vérifier si le jeu est gagné ou nul
    checkEndGame();

    // if (currentPlayer == 'X') {
    //     currentPlayer = 'O';
    // } else {
    //     currentPlayer = 'X';
    // }
}

// Fonction qui nous permet de vérifier la fin du jeu
function checkEndGame() {
    let winRound = false;

    // Possibilités pour gagner (index avec la même valeur)
    // 0, 1, 2 ; 3, 4, 5 ; 6, 7, 8 // Horizontales
    // 0, 3, 6 ; 1, 4, 7 ; 2, 5, 8 // Verticales
    // 0, 4, 8 ; 2, 4, 6 // Diagonales
    for (let win of wins) {
        let indexA = win[0]; // 3 par exemple pour la 2ème itération
        let indexB = win[1]; // 4 par exemple pour la 2ème itération
        let indexC = win[2]; // 5 par exemple pour la 2ème itération

        if (gameState[indexA] == gameState[indexB] && gameState[indexB] == gameState[indexC] && gameState[indexA] != '') {
            winRound = true;
        }
        // console.log(`gameState[${indexA}] == gameState[${indexB}] && gameState[${indexB}] == gameState[${indexC}] && gameState[${indexA}] != ''`);
    }

    if (gameState[0] == gameState[1] && gameState[1] == gameState[2] && gameState[0] != '') {
        // console.log('GAGNE');
    } else if (gameState[3] == gameState[4] && gameState[4] == gameState[5] && gameState[3] != '') {
        // console.log('GAGNE');
    }

    if (winRound) { // Si le joueur current a gagné
        statusElement.innerHTML = `Le joueur ${currentPlayer} a gagné !`;
        active = false; // On arrête la partie
    } else if (!gameState.includes('')) { // Si le tableau n'a aucune case vide, match nul
        statusElement.innerHTML = `Partie nulle !`;
        active = false; // On arrête la partie
    } else {
        // Changer le joueur actuel (Si c'est X, il devient O sinon il devient X)
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        statusElement.innerHTML = `C'est le tour du joueur ${currentPlayer}`;
    }

    console.log(gameState);
}

// Fonction qui permet de réinitialiser la partie
function handleRestart() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    active = true;
    statusElement.innerHTML = `C'est le tour du joueur ${currentPlayer}`;

    // On vide toutes les cases du jeu
    document.querySelectorAll('.cell').forEach(function (cell) {
        cell.innerHTML = '';
    });
}