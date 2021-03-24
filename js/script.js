

function init() {
    //console.log('test file script.js');

// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.


    var studente = {

        'nome': 'guybrush',
        'cognome': 'threepwood',
        'eta': 30
    };

    for (var dati in studente) {

        console.log(studente[dati]);
    }


// Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome.

    var studenti = [{

            'nome': 'Paolo',
            'cognome': 'Verdi'
        },
        {
            'nome': 'Marco',
            'cognome': 'Rossi'
        },
        {
            'nome': 'Francesca',
            'cognome': 'Gialli'
        }
    ];

    for (var i = 0; i < studenti.length; i++) {
        var elencoStudenti = studenti[i];
        console.log(elencoStudenti.nome + " " + elencoStudenti.cognome);
    }


// Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.



   var nuovoStudente = studente;


}
$(document).ready(init);



