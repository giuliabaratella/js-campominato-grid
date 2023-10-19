campoMinato();

// Inserisco tutto in una function per non agire nello scope globale 
function campoMinato (){
    // creo la costante del bottone e del playground
    const btn = document.getElementById('button');
    const playground = document.getElementById('playground');
    // console.log (btn, playground);
    const alert = document.querySelector('.alert');
    // aggiungo la costante per la select 
    const difficultyBox = document.getElementById('difficulty');
    console.log (difficultyBox);

    // preparo la funzione per creare un quadrato 
    function drawSquare(n,numSquare){
        // calcolo il valore della larghrzza del quadrato in base al num di quadrati
        const squareWidth = Math.sqrt(numSquare);

        const square = document.createElement('div');
        square.classList.add ('square');
        square.innerText = n;
        // aggiungo i valori di largh e alt al quadrato 
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = square.style.width;
        // creo l'evento del click sul quadrato
        square.addEventListener('click',function(){
         square.classList.add('active');
         console.log(n);
        })
        return square;
    }

    // creo l'evento del bottone 
    btn.addEventListener('click', function(){
        // aggiungo il reset 
        alert.innerHTML = '';
        playground.innerHTML = '';
        let nSquare = 0;
        // aggiungo la variabile per la difficoltà 
        let difficulty = difficultyBox.value ;
        console.log(difficulty);
        
        if (difficulty === '1'){
            nSquare = 100;
        } else if (difficulty === '2'){
            nSquare = 81;
        } else if (difficulty === '3'){
            nSquare = 49;
        } else {
            alert.innerHTML = 'Attenzione! scegli la difficoltà a cui vuoi giocare.'
        }
        console.log (nSquare);
        //creo un ciclo che per nSquare volte crea i quadrati 
        for (i = 1; i <= nSquare; i++){
            let square = drawSquare(i,nSquare);
            playground.append (square);
        }
    }
    )

    
 
}