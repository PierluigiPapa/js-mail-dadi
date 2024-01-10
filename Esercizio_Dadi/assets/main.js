//Costante per genere il numero, cliccando sul bottone
const btnRandom = document.querySelector('button');

//Aggiungere evento al click al bottone per generare i numeri del pc e del giocatore
btnRandom.addEventListener('click',
function () {

    //Dichiarare il numero del pc (1,2,3,4,5,6)
    const numeroComputer = Math.floor(Math.random() * 6) + 1;
    console.log('Random Computer:', numeroComputer);
    
     //Dichiarare il numero del giocatore (1,2,3,4,5,6)
    const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
    console.log('Random Giocatore:', numeroGiocatore);

    //SE il numero del computer è superiore a quello del giocatore. Computer vince.
    if (numeroComputer > numeroGiocatore) {
        console.log('ha vinto il Computer!');
    //ALTRIMENTI il numero del computer è inferiore a quello del giocatore. Giocatore vince.  
    } else if (numeroComputer < numeroGiocatore) {
        console.log('Hai vinto!');
    //ALTRIMENTI il numero del giocatore è uguale a quello del giocatore. Pareggio.
    } else {numeroComputer === numeroGiocatore
        console.log('Avete giocato lo stesso numero!');
    }
})