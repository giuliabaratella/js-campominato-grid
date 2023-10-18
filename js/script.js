campoMinato();

// Inserisco tutto in una function per non agire nello scope globale 
function campoMinato (){
    // creo la costante del bottone e del playground
    const btn = document.getElementById('button');
    const playground = document.getElementById('playground');
    // console.log (btn, playground);

    // preparo la funzione per creare un quadrato 
    function drawSquare (){
        const square = document.createElement('div');
        square.classList.add ('square');
        // creo l'evento del click sul quadrato
        square.addEventListener('click',function(){
         square.classList.add('active');
        })
        return square;
    }

    // creo l'evento del bottone 
    btn.addEventListener('click', function(){
        // definisco quanti quadrati devo creare 
        nSquare = 100;
        //creo un ciclo che per nSquare volte crea i quadrati 
        for (i = 1; i <= nSquare; i++){
            let square = drawSquare();
            playground.append (square);
        }
    }
    )

    
 
}