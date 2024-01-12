// - creo due variabili collegate al DOM (per il numero casuale del giocatore e del computer)
let randomPlayerNumber = document.getElementById("random-player-number");
let randomComputerNumber = document.getElementById("random-computer-number");

// - creo una costante collegata al DOM per il vincitore
let winnerElement = document.getElementById("winner");

// - creo un array contenente i numeri da 1 a 6
const numbers = [1, 2, 3, 4, 5, 6];

// - creo un numero casuale per il giocatore
const rNPlayer = Math.floor(Math.random() * 6);
randomPlayerNumber.innerText = numbers[rNPlayer];

// - creo un numero casuale per il computer
const rNComputer = Math.floor(Math.random() * 6);
randomComputerNumber.innerText = numbers[rNComputer];

// - creo un if che confronta i due numeri casuali
//   - SE il numero del giocatore è maggiore del numero del computer
//     - ALLORA nella costante per il vincitore verrà scritto "HAI VINTO!"
//   - ALTRIMENTI SE
//     - nella costante per il vincitore verrà scritto "RITENTA, sarai più fortunato"
//   - ALTRIMENTI
//     - nella costante per il vincitore verrà scritto "è stata una bella partita finita in pareggio, CONTINUA A GIOCARE"
if (numbers[rNPlayer] > numbers[rNComputer]) {
  winnerElement.innerText = "HAI VINTO!😍";
} else if (numbers[rNPlayer] < numbers[rNComputer]) {
  winnerElement.innerText = "RITENTA, sarai più fortunato 😓";
} else {
  winnerElement.innerText =
    "è stata una bella partita finita in pareggio, CONTINUA A GIOCARE😊";
}
