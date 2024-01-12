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
- creo un ciclo che si ripete due volte

  - primo giro:
    - creo una variabile che prenda il valore di uno degli elementi dell'array
    - la collego ad una costate del DOM che identifica il numero causale per il giocatore
  - secondo giro:
    - creo una variabile che prenda il valore di uno degli elementi dell'array
    - la collego ad una costate del DOM che identifica il numero causale per il computer

- creo un if che confronta i due numeri casuali
  - SE il numero del giocatore è maggiore del numero del computer
    - ALLORA nella costante per il vincitore verrà scritto "HAI VINTO!"
  - ALTRIMENTI nella costante per il vincitore verrà scritto "HAI PERSO..."
