# GIOCO DEI DADI

## CONSEGNA:

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

## SOLUZIONE:

- creo due variabili collegate al DOM (per il numero casuale del giocatore e del computer)
- creo una costante collegata al DOM per il vincitore
- creo un array contenente i numeri da 1 a 6
- creo un numero casuale per il giocatore
- creo un numero casuale per il computer
- creo un if che confronta i due numeri casuali
  - SE il numero del giocatore è maggiore del numero del computer
    - ALLORA nella costante per il vincitore verrà scritto "HAI VINTO!"
  - ALTRIMENTI SE
    - nella costante per il vincitore verrà scritto "RITENTA, sarai più fortunato"
  - ALTRIMENTI
    - nella costante per il vincitore verrà scritto "è stata una bella partita finita in pareggio, CONTINUA A GIOCARE"
