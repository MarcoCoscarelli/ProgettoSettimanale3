document.addEventListener('DOMContentLoaded', function() {
    
    
    
    const movies = [
        {
          Title: 'The Lord of the Rings: The Fellowship of the Ring',
          Year: '2001',
          imdbID: 'tt0120737',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
        },
      
        {
          Title: 'The Lord of the Rings: The Return of the King',
          Year: '2003',
          imdbID: 'tt0167260',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          Title: 'The Lord of the Rings: The Two Towers',
          Year: '2002',
          imdbID: 'tt0167261',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          Title: 'Lord of War',
          Year: '2005',
          imdbID: 'tt0399295',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        },
        {
          Title: 'Lords of Dogtown',
          Year: '2005',
          imdbID: 'tt0355702',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        },
        {
          Title: 'The Lord of the Rings',
          Year: '1978',
          imdbID: 'tt0077869',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        },
        {
          Title: 'Lord of the Flies',
          Year: '1990',
          imdbID: 'tt0100054',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
        },
        {
          Title: 'The Lords of Salem',
          Year: '2012',
          imdbID: 'tt1731697',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
        },
        {
          Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
          Year: '1984',
          imdbID: 'tt0087365',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
        },
        {
          Title: 'Lord of the Flies',
          Year: '1963',
          imdbID: 'tt0057261',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
        },
        {
          Title: 'The Avengers',
          Year: '2012',
          imdbID: 'tt0848228',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        },
        {
          Title: 'Avengers: Infinity War',
          Year: '2018',
          imdbID: 'tt4154756',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        },
        {
          Title: 'Avengers: Age of Ultron',
          Year: '2015',
          imdbID: 'tt2395427',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
        },
        {
          Title: 'Avengers: Endgame',
          Year: '2019',
          imdbID: 'tt4154796',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        },
      ]
      
    //FUNZIONE PER CONTARE IL NUMERO DI FILM
     


    // Funzione per convertire un oggetto in una stringa formattata
    function objectToString(obj) {
        let str = "";
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                str += `${key}: ${obj[key]}, `;
            }
        }
        
        return str.slice(0, -2);
    }

    // Funzione per rimuovere l'ultimo elemento dall'array "skills"
    function removeLastSkill(obj) {
        if (Array.isArray(obj.skills) && obj.skills.length > 0) {
            obj.skills.pop();
        }
    }

    // Funzione per aggiungere un nuovo skill all'array "skills"
    function addSkill(obj, skill) {
        if (!Array.isArray(obj.skills)) {
            obj.skills = [];
        }
        obj.skills.push(skill);
    }
    //funzione splitMe
    function splitMe(phrase) {
        
        const wordsArray = phrase.split(/\s+/);
        return wordsArray;
    }

    /*
    // ESERCIZIO A
    // Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
    */
    const sum = 10 + 20;

    const esercizioAElement = document.getElementById('esercizio-a');
    const soluzioneAElement = esercizioAElement.querySelector('.soluzione');
    soluzioneAElement.textContent = `La variabile "sum" ha il valore: ${sum}`;

    /*
    // ESERCIZIO B
    // Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
    */
    const randomNumberElement = document.getElementById('random-number');

    function generateRandomNumber() {
        const random = Math.floor(Math.random() * 21);
        randomNumberElement.textContent = `Clicca sul valore della variabile "random" per generarne una nuova: ${random}`;
    }

    generateRandomNumber();

    randomNumberElement.addEventListener('click', generateRandomNumber);

    /*
    // ESERCIZIO C
    // Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
    */
    const me = {
        name: "Il tuo nome",
        surname: "Il tuo cognome",
        age: "La tua età"
    };

    const esercizioCElement = document.getElementById('esercizio-c');
    const soluzioneCElement = esercizioCElement.querySelector('.soluzione');
    soluzioneCElement.textContent = `L'oggetto "me" ha i seguenti valori: Name: ${me.name}, Surname: ${me.surname}, Age: ${me.age}`;

    /*
    // ESERCIZIO D
    // Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
    */
    function removeAgeProperty(obj) {
        delete obj.age;
        return obj;
    }

    const updatedMe = removeAgeProperty({ ...me });

    const esercizioDElement = document.getElementById('esercizio-d');
    const soluzioneDElement = esercizioDElement.querySelector('.soluzione');
    soluzioneDElement.textContent = `L'oggetto "me" aggiornato è: Name: ${updatedMe.name}, Surname: ${updatedMe.surname}`;

    /*
    // ESERCIZIO E
    // Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
    */
    function addSkills(obj, skills) {
        obj.skills = skills;
    }

    const skills = ["JavaScript", "HTML", "CSS"];
    addSkills(me, skills);

    const esercizioEElement = document.getElementById('esercizio-e');
    const soluzioneEElement = esercizioEElement.querySelector('.soluzione');
    soluzioneEElement.textContent = `L'oggetto "me" aggiornato con le skills è: Name: ${me.name}, Surname: ${me.surname}, Skills: ${me.skills.join(', ')}`;

    /*
    // ESERCIZIO F
    // Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
    */
    const newSkill = "React";
    addSkill(me, newSkill);

    const esercizioFElement = document.getElementById('esercizio-f');
    const soluzioneFElement = esercizioFElement.querySelector('.soluzione');
    soluzioneFElement.textContent = `L'oggetto "me" aggiornato con il nuovo skill è: ${objectToString(me)}`;

    /*
    // ESERCIZIO G
    // Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
    */
    removeLastSkill(me);

    const esercizioGElement = document.getElementById('esercizio-g');
    const soluzioneGElement = esercizioGElement.querySelector('.soluzione');
    soluzioneGElement.textContent = `L'oggetto "me" con l'ultimo skill rimosso è: ${objectToString(me)}`;

    console.log('----- Console Log dei risultati finali -----');
    console.log('Esercizio A:', sum);
    console.log('Esercizio B: Click sul valore di "random" per generare un nuovo numero.');
    console.log('Esercizio C:', me);
    console.log('Esercizio D:', updatedMe);
    console.log('Esercizio E:', me);
    console.log('Esercizio F:', me);
    console.log('Esercizio G:', me);

    /*
    // ESERCIZIO 1
    // Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
    */
    function dice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    const esercizio1Element = document.getElementById('esercizio-1');
    const soluzione1Element = esercizio1Element.querySelector('.soluzione');
    
    function rollDiceAndUpdate() {
        const result = dice();
        soluzione1Element.textContent = `Clicca sul numero per tirare il dado: ${result}`;
    }
    
    rollDiceAndUpdate();
    
    esercizio1Element.addEventListener('click', rollDiceAndUpdate);

    /*
    // ESERCIZIO 2
    // Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
    */
    function whoIsBigger(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }
    
    const esercizio2Element = document.getElementById('esercizio-2');
    const soluzione2Element = esercizio2Element.querySelector('.soluzione');
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    
    function updateWhoIsBigger() {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
    
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = whoIsBigger(num1, num2);
            soluzione2Element.textContent = `Il numero maggiore tra ${num1} e ${num2} è: ${result}`;
        } else {
            soluzione2Element.textContent = 'Inserisci due numeri validi per confrontarli.';
        }
    }
    
    number1Input.addEventListener('input', updateWhoIsBigger);
    number2Input.addEventListener('input', updateWhoIsBigger);

     /*
    // ESERCIZIO 3
    // Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
    */
    document.addEventListener('DOMContentLoaded', function() {

        
        function splitMe(phrase) {
           
            const wordsArray = phrase.split(/\s+/);
            return wordsArray;
        }
    
        const esercizio3Element = document.getElementById('esercizio-3');
        const inputPhraseElement = document.getElementById('inputPhrase');
        const splitPhraseButton = document.getElementById('splitPhraseButton');
        const soluzione3Element = esercizio3Element.querySelector('.soluzione');
    
        
        splitPhraseButton.addEventListener('click', function() {
            const phrase = inputPhraseElement.value.trim();
    
            if (phrase) {
                const words = splitMe(phrase);
                soluzione3Element.textContent = `Array delle parole: [${words.join(', ')}]`;
            } else {
                soluzione3Element.textContent = 'Inserisci una frase valida.';
            }
        });
    
    });
        
/*
    // ESERCIZIO 4
    // Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
    // Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
    */
    function deleteOne(inputString, removeFirst) {
        if (removeFirst) {
            return inputString.slice(1);
        } else {
            return inputString.slice(0, -1); 
        }
    }
    
    const esercizio4Element = document.getElementById('esercizio-4');
    const soluzione4Element = esercizio4Element.querySelector('.soluzione');
    const inputStringElement = document.getElementById('inputString');
    const removeFirstCharacterCheckbox = document.getElementById('removeFirstCharacter');
    const executeDeleteButton = document.getElementById('executeDeleteButton');
    
    function executeDeleteOperation() {
        const inputStringValue = inputStringElement.value;
        const removeFirst = removeFirstCharacterCheckbox.checked;
    
        if (inputStringValue) {
            const resultString = deleteOne(inputStringValue, removeFirst);
            soluzione4Element.textContent = `Stringa risultante: "${resultString}"`;
        } else {
            soluzione4Element.textContent = 'Inserisci una stringa valida.';
        }
    }
    
    executeDeleteButton.addEventListener('click', executeDeleteOperation);
 /*
    // ESERCIZIO 5
    // Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
    */
    function onlyLetters(str) {
        return str.replace(/[0-9]/g, '');
    }

    const stringWithNumbers = "Marco Coscarelli di anni 33";
    const esercizio5Element = document.getElementById('esercizio-5');
    const soluzione5Element = esercizio5Element.querySelector('.soluzione');
    soluzione5Element.textContent = `La stringa "${stringWithNumbers}" senza cifre numeriche è: ${onlyLetters(stringWithNumbers)}`;
/*
    // ESERCIZIO 6
    // Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
    */
    
function isThisAnEmail(email) {
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const esercizio6Element = document.getElementById('esercizio-6');
const soluzione6Element = esercizio6Element.querySelector('.soluzione');
const inputEmailElement = document.getElementById('inputEmail');
const checkEmailButton = document.getElementById('checkEmailButton');

function checkEmailValidity() {
    const emailValue = inputEmailElement.value.trim();

    if (emailValue) {
        const isValidEmail = isThisAnEmail(emailValue);

        if (isValidEmail) {
            soluzione6Element.textContent = `"${emailValue}" è un indirizzo email valido.`;
        } else {
            soluzione6Element.textContent = `"${emailValue}" non è un indirizzo email valido.`;
        }
    } else {
        soluzione6Element.textContent = 'Inserisci un indirizzo email.';
    }
}

checkEmailButton.addEventListener('click', checkEmailValidity);

/*
    // ESERCIZIO 7
    // Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
    */
    function whatDayIsIt() {
        const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const today = new Date().getDay();
        return days[today];
    }

    const esercizio7Element = document.getElementById('esercizio-7');
    const soluzione7Element = esercizio7Element.querySelector('.soluzione');
    soluzione7Element.textContent = `Oggi è ${whatDayIsIt()}`;

    // ESERCIZIO 8
    // Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
    // Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
    // il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
    // L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
    
    function dice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    function rollTheDices(numRolls) {
        const values = [];
        let sum = 0;
    
        for (let i = 0; i < numRolls; i++) {
            const roll = dice();
            values.push(roll);
            sum += roll;
        }
    
        return {
            sum: sum,
            values: values
        };
    }
    
    const esercizio8Element = document.getElementById('esercizio-8');
    const soluzione8Element = esercizio8Element.querySelector('.soluzione');
    const numRollsInput = document.getElementById('numRolls');
    
    function updateRollTheDices() {
        const numRolls = parseInt(numRollsInput.value);
    
        if (!isNaN(numRolls) && numRolls > 0) {
            const result = rollTheDices(numRolls);
            soluzione8Element.textContent = `Somma dei risultati: ${result.sum}, Risultati Estratti: ${result.values.join(', ')}`;
        } else {
            soluzione8Element.textContent = 'Inserisci un numero valido di lanci di dado (deve essere un numero intero positivo).';
        }
    }
    
    numRollsInput.addEventListener('input', updateRollTheDices);
 /*
    // ESERCIZIO 9
    // Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
    */

    function howManyDays(inputDate) {
        
        const dateEntered = new Date(inputDate);
        const today = new Date();
    
        const differenceInTime = today.getTime() - dateEntered.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
        return differenceInDays;
    }
    
    const esercizio9Element = document.getElementById('esercizio-9');
    const soluzione9Element = esercizio9Element.querySelector('.soluzione');
    const inputDateElement = document.getElementById('inputDate');
    
    function updateHowManyDays() {
        const inputDateValue = inputDateElement.value;
    
        if (inputDateValue) {
            const daysPassed = howManyDays(inputDateValue);
            soluzione9Element.textContent = `Da ${inputDateValue} sono passati ${daysPassed} giorni.`;
        } else {
            soluzione9Element.textContent = 'Inserisci una data valida.';
        }
    }
    
    inputDateElement.addEventListener('input', updateHowManyDays);
    /*
    // ESERCIZIO 10
    // Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
    */
    function isTodayMyBirthday(birthday) {
   
    const today = new Date();

  
    const birthdayDate = new Date(birthday);
    const birthdayDay = birthdayDate.getDate();
    const birthdayMonth = birthdayDate.getMonth();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();

   
    return (birthdayDay === todayDay && birthdayMonth === todayMonth);
}

const esercizio10Element = document.getElementById('esercizio-10');
const soluzione10Element = esercizio10Element.querySelector('.soluzione');
const birthdayDateElement = document.getElementById('birthdayDate');

function updateIsTodayMyBirthday() {
    const birthdayValue = birthdayDateElement.value;

    if (birthdayValue) {
        const isBirthday = isTodayMyBirthday(birthdayValue);

        if (isBirthday) {
            soluzione10Element.textContent = 'Buon compleanno!';
        } else {
            soluzione10Element.textContent = 'Non è il tuo compleanno oggi.';
        }
    } else {
        soluzione10Element.textContent = 'Inserisci la tua data di compleanno.';
    }
}

birthdayDateElement.addEventListener('input', updateIsTodayMyBirthday);



 
/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, propToDelete) {
    
    let newObj = { ...obj };
    
    
    if (newObj.hasOwnProperty(propToDelete)) {
        
        delete newObj[propToDelete];
    }
    
    
    return newObj;
}
 console.log('*-----Esercizio 11 array e oggetti-----*')

let person = {
    name: 'Marco',
    age: 33,
    city: 'Naples'
};

let modifiedPerson = deleteProp(person, 'age');
console.log(modifiedPerson); 

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
    
    function newestMovie(movies) {
        if (movies.length === 0) {
            return null;
        }

        let newest = movies[0];

        for (let i = 1; i < movies.length; i++) {
            if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
                newest = movies[i];
            }
        }

        return newest;
    }

    
    let latestMovie = newestMovie(movies);

    
    let latestMovieTitleElement = document.querySelector('#esercizio-12 .soluzione');
    if (latestMovie) {
        latestMovieTitleElement.textContent = `Il film più recente è "${latestMovie.Title}" (${latestMovie.Year})`;
    } else {
        latestMovieTitleElement.textContent = "Nessun film trovato.";
    }
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
    return movies.filter(movie => movie.Type === 'movie').length;
}
    
   
    let movieCount = countMovies(movies);

   
    let movieCountElement = document.querySelector('#esercizio13 .soluzione');
    if (movieCountElement) {
        movieCountElement.textContent = `Il numero totale di film è ${movieCount}.`;
        
    }
    console.log('*-----Esercizio 13-----*');
        console.log(movieCount);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
    return movies.map(movie => movie.Year);
}

let yearsArray = onlyTheYears(movies);
console.log('*-----Esercizio 14-----*')
console.log(yearsArray);


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function  onlyInLastMillennium(movies) {
    return movies.filter(movie => {
        let year = parseInt(movie.Year, 10);
        return year >= 1900 && year <= 1999;
    })
}

let moviesLastMillennium = onlyInLastMillennium(movies);
console.log('*-----Esercizio 15-----*');
console.log(moviesLastMillennium);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
    let totalSum = 0;

    movies.forEach(movie => {
        const year = parseInt(movie.Year); // Converte l'anno da stringa a numero intero
        totalSum += year; // Aggiunge l'anno alla somma totale
    });

    return totalSum;
}

// Test della funzione sumAllTheYears con l'array movies
const totalYears = sumAllTheYears(movies);

console.log('*-----Esercizio 16-----*')
console.log("Somma di tutti gli anni:", totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

});
