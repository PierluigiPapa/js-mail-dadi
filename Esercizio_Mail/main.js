//Costante per creare la lista delle email che possono accedere
const listaEmailUtenti = ['pierluigipapa9@gmail.com', 'papaeliana90@gmail.com', 'serenapapa99.sp@gmail.com', 'papafrancesco1259@gmail.com', 'alidaannasimone@gmail.com'];

//Variabile per stabilire lo stato iniziale
let accessoConsentito = false;

//Costante per prompt per inserire l'email
const emailUtente = prompt ('Inserisci la tua mail?');

//Condizione per stabilire se l'email è presente nella lista degli accessi consentiti
for (let listEmail = 0; listEmail < listaEmailUtenti.length; listEmail++) {
    //SE è presente nella lista degli accessi, la stampa è positiva
    // ALTRIMENTI la stampa è negativa
      if (listaEmailUtenti[listEmail] === emailUtente) {
        accessoConsentito = true;
        //La ricerca si interrompe quando si trova la corrispondenza
        break;
      }
  };

//Condizione per stabilire se l'accesso sarà consentito o meno
if (accessoConsentito === false) {
    console.log('Accesso non consentito');
  } else {
    console.log('Accesso consentito');
  }