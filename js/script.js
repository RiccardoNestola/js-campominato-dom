
/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

Attenzione: Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */


const gridContainer = document.querySelector("div.grid");
console.log(gridContainer);



const play = document.getElementById("play");

play. addEventListener ("click", function () {
    console.log("click"); 

    gridContainer.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        const newSquare = document.createElement("div");
    
        newSquare.classList.add("square");
    
        newSquare.innerHTML = (i);

            newSquare. addEventListener ("click", function () {

                newSquare.classList.toggle ('clicked')
            });
        
        gridContainer.appendChild(newSquare);
        
    }

});


/* preparo un contenitore vuoto (array) */
let bombs = [];

//Funzione per un numero randomico.
function getRandomNumber(numMax, numMin) {
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return randomNumber;
}


/* controllo se il numero è già presente nel contenitore */ 

while(bombs.length < 16){

    let generateNewBomb = getRandomNumber(1, 100); /* invoco la funzione per generare un numero casuale (tra 1 e 100) */ 

    if(!bombs.includes(generateNewBomb)){
        
        bombs.push(generateNewBomb); /* aggiungo il numero di bombe al contenitore  */
    }  
}
console.log(bombs)






