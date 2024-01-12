// - crea un array di tra mail finte
const mails = [
  "mario.bianchi@mail.com",
  "gloria.bimbi@mail.com",
  "niccolo.sartori@mail.com",
];
console.log(mails[0]);
console.log(mails[1]);
console.log(mails[2]);

// - crea un input in cui l'utente puà inserire la sua mail
const mailUserElement = document.getElementById("mail-user").value;
console.log("mailUserElement");

// - crea una costante per il bottone Inizia
const startButton = document.getElementById("start-button");

//creo due variabili per il login
let logInResult;

// crea un ascoltatore di evento che collega il click del pulsante alle azioni successive
startButton.addEventListener("click", function () {
  // - crea un ciclo for che si ripeta del numero degli elementi dell'array
  for (i = -1; i < mails.length; i++) {
    // - SE il valore dell'input è uguale ad almeno un elemento dell'array
    if (mailUserElement == mails[i]) {
      logInResult = "logInYes";
    } else if (mailUserElement != mails[i]) {
      logInResult = "logInNo";
    }
    console.log(mails[i]);
  }

  //- crea una prompt che dice se il log in è riuscito o meno
  if (logInResult == "logInYes") {
    alert("Login CONCESSO");
  } else {
    alert("Login NEGATO");
  }
});
