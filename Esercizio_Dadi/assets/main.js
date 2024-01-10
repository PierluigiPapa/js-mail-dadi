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

    
})