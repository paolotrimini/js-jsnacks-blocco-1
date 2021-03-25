
// Esercizio 1 - Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


function esZucchine1(){

    var zucchine = [
        {
            'varieta': 'verde',
            'peso': 10,
            'lunghezza': 20
        },
        {
            'tipo': 'giallo',
            'peso': 23,
            'lunghezza': 50
        },
        {
            'tipo': 'rosso',
            'peso': 7,
            'lunghezza': 15
        }
    ];

    var sommaPeso = 0;

    for(var i=0; i < zucchine.length; i++){

        var zucchina = zucchine[i];
        sommaPeso += zucchina['peso'];
    }

    console.log('somma peso', sommaPeso);
}

// Esercizio 2 - Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine


function getPesoSum(zucchine){
    var sommaPeso = 0;

    for(var i=0; i < zucchine.length; i++){

        var zucchina = zucchine[i];
        sommaPeso += zucchina['peso'];
    }
    return sommaPeso;

}

function esZucchine2(){

    var zucchine = [
        {
            'varieta': 'verde',
            'peso': 10,
            'lunghezza': 25
        },
        {
            'tipo': 'giallo',
            'peso': 23,
            'lunghezza': 50
        },
        {
            'tipo': 'rosso',
            'peso': 7,
            'lunghezza': 7
        },
        {
            'tipo': 'rosso',
            'peso': 7,
            'lunghezza': 10
        },
        {
            'tipo': 'rosso',
            'peso': 7,
            'lunghezza': 34
        }
    ];

    var small = [];
    var big = [];

    for (var i=0; i<zucchine.length; i++){

        var zucchina = zucchine[i]; // singole zucchine dell'array
        var lunghezza = zucchina['lunghezza']; // lunghezza della zucchina

        if(lunghezza > 15) {

            big.push(zucchina);

        } else {

            small.push(zucchina);
        }

    }
    var smallPesoSum = getPesoSum(small);
    var bigPesoSum = getPesoSum(big);

    console.log(zucchine);
    console.log(smallPesoSum, small);
    console.log(bigPesoSum, big);
}

// Esercizio 3 - Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

function stringReverse() {

    var str = 'hello';
    var revStr = '';
    for (var i=str.length -1;i>=0;i--) {
        var char = str[i];
        revStr += char;
    }
    var revStr2 = '';
    for (var i=0;i<str.length;i++) {

        var char = str[i];
        revStr2 = char + revStr2;
    }
    console.log(revStr2);
}

// Esercizio 4 - Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function arrayFusion (){

    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3];

    var lng = arr1.length; // metto solo arr1 perchè arr1 == arr2
    var res = [];

    for(var i=0; i<lng; i++){

        var elem1 = arr1[i];
        var elem2 = arr2[i];

        res.push(elem1);
        res.push(elem2);

    }
    console.log(res);

}

function init(){

    //esZucchine1();
    //esZucchine2();
    stringReverse();
    //arrayFusion ();

}
//JQUERY
$(document).ready(init);