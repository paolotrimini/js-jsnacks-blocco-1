

function init() {
    //console.log('test file script.js');

// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.


    var student = {

        'nome': 'guybrush',
        'cognome': 'threepwood',
        'eta': 30
    };

    for (var data in student) {

        console.log(student[data]);
    }


// Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome.

    var students = [{

            'nome': 'Paolo',
            'cognome': 'Verdi'
        },
        {
            'nome': 'Mario',
            'cognome': 'Rossi'
        },
        {
            'nome': 'Francesca',
            'cognome': 'Gialli'
        }
    ];

    for (var i = 0; i < students.length; i++) {
        var studentList = students[i];
        console.log(studentList.nome + ' ' + studentList.cognome);
    }


// Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.


    var newStudent = {};

    newStudent.nome = prompt('inserisci il nome: ');
    newStudent.cognome = prompt('inserisci il cognome: ');
    newStudent.eta = parseInt(prompt('inserisci l\'eta: '));

    students.push(newStudent);
    console.log(students);

}
//JQUERY
$(document).ready(init);



