// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.

function init() {
    //console.log('test file script.js');

    var studente = {

        'nome': 'guybrush',
        'cognome': 'threepwood',
        'eta': 30
    };

    console.log(studente);
}
$(document).ready(init);