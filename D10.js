/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log("Esercizio B");
console.log("Generiamo un numero casuale: " + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Cristina",
  surname: "Mastellaro",
  age: 25,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "JS", "Groovy"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Python");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  const num = Math.ceil(Math.random() * 6);
  return num;
};

console.log(`\nEsercizio 1 \nGeneriamo un numero a caso: ${dice()}`);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1 + " è il più grande!");
    return num1;
  } else if (num1 === num2) {
    console.log("I due numeri sono uguali!");
    return num1;
  } else {
    console.log(num2 + " è il più grande!");
    return num2;
  }
};

console.log(
  `\nEsercizio 2 \nConfrontiamo due numeri e vediamo qual è il più grande.`
);
whoIsBigger(1, 1);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => {
  const array = string.split(" ");
  return array;
};

console.log(
  `\nEsercizio 3 \nSplittiamo una stringa a caso:`,
  splitMe("Gino è il mio vicino di casa")
);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, bool) => {
  if (bool) {
    string = string.slice(1, string.length);
    return string;
  } else {
    string = string.slice(0, -1);
    return string;
  }
};

console.log(
  `\nEsercizio 4 \nTogliamo una lettera dalla parola: ${deleteOne(
    "pinnacolo",
    true
  )}`
);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (string) => {
  const char = string.split("");
  for (let i = 0; i < char.length; i++) {
    if (parseInt(char[i]) >= 0) {
      char.splice(i, 1);
      // Perché facendo splice, si toglie l'elemento in posizione i, per cui l'elemento che era in posizione i+1 ora assume la posizione i
      // ma così facendo, senza i--, quest'ultimo elemento verrebbe saltato.
      i--;
    }
  }
  string = char.join("");
  return string;
};

console.log(
  `\nEsercizio 5 \nTogliamo i numeri dalla stringa: ${onlyLetters(
    "This is the 10th trial! Help me 12. 25s"
  )}`
);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (s) => {
  // Secondo me, per assicurarmi che una mail sia valida, deve contenere la chiocciola e non contenere spazi
  if (s.includes(" ") || !s.includes("@")) {
    console.log("L'indirizzo mail fornito non è valido!");
    return false;
  } else {
    console.log("L'indirizzo mail fornito è valido!");
    return true;
  }
};

console.log(
  `\nEsercizio 6 \nVerifichiamo che l'indirizzo email "ginetto ginini@gino" sia valido.`
);
isThisAnEmail("ginetto ginini@gino");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const now = new Date();
  const giorniSettimana = [
    "domenica",
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
  ];
  return giorniSettimana[now.getDay()];
};

console.log(
  `\nEsercizio 7 \nChe giorno della settimana è oggi? ${whatDayIsIt()}`
);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (n) => {
  const obj = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < n; i++) {
    const numDice = dice();
    obj.sum += numDice;
    obj.values.push(numDice);
  }

  return obj;
};

console.log(`\nEsercizio 8 \nTi va di tirare i dadi?`, rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  const now = new Date();
  const endDate = new Date(date);
  const difference = Math.floor((now - endDate) / (1000 * 60 * 60 * 24));
  return difference;
};

console.log(
  `\nEsercizio 9 \nQuanti giorni sono passati da Capodanno? ${howManyDays(
    "2025/01/01"
  )}`
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const now = new Date();
  const birthDay = "8/1";
  const today = `${now.getDate()}/${now.getMonth() + 1}`;
  if (birthDay === today) {
    console.log("Tanti auguri!");
    return true;
  } else {
    return false;
  }
};

console.log(
  `\nEsercizio 10 \nOggi è il mio compleanno? ${isTodayMyBirthday()}`
);

isTodayMyBirthday();

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, s) => {
  delete obj[s];
  return obj;
};

console.log(
  `\nEsercizio 11 \nCancelliamo una proprietà dall'oggetto:`,
  deleteProp(me, "skills")
);

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  let year = 0;
  let movie;
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > year) {
      year = movies[i].Year;
      movie = movies[i];
    }
  }
  console.log("Il film più recente è", movie);
  return movie;
};

console.log("\nEsercizio 12");
newestMovie();

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => {
  const totMovies = movies.length;
  console.log("Ci sono " + totMovies + " film nell'array");
  return totMovies;
};

console.log("\nEsercizio 13");
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => movies.map((movie) => movie.Year);

console.log(
  "\nEsercizio 14 \n Questo array contiene gli anni dei film nell'array",
  onlyTheYears()
);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  return movies.filter((movie) => movie.Year < 2000);
};

console.log(
  "\nEsercizio 15 \nQuesti sono i film precedenti al secondo millennio",
  onlyInLastMillennium()
);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  const allTheYears = onlyTheYears();
  return allTheYears.reduce((tot, movieYear) => tot + parseInt(movieYear), 0);
};

console.log(
  "\nEsercizio 16 \nSommiamo gli anni in cui sono stati prodotti i film dell'array!",
  sumAllTheYears()
);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (s) =>
  movies.filter((movie) => movie.Title.toLowerCase().includes(s.toLowerCase()));

console.log(
  "\nEsercizio 17 \nQuali sono i film che contengono la parola 'ring' nell'array?",
  searchByTitle("ring")
);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (s) => {
  const doesItMatch = {};

  doesItMatch.match = searchByTitle(s);
  doesItMatch.unmatch = movies.filter(
    (movie) => !movie.Title.toLowerCase().includes(s.toLowerCase())
  );

  return doesItMatch;
};

console.log(
  "\nEsercizio 18 \nQuali sono i film che contengono la parola 'ring' nell'array? E quali non la contiene?",
  searchAndDivide("ring")
);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (index) => {
  if (index < 14) {
    movies.splice(index, 1);
    return movies;
  } else {
    console.log(
      "L'indice selezionato non ha un valore compreso tra 0 e 13, per cui non possiamo trovare il tuo film."
    );
  }
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const contentTds = () => {
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};

console.log("\nEsercizio 22 \nQual è il contenuto dei td della pagina?");
contentTds();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redBackground = () => {
  const a = document.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "red";
  }
};

// redBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newElement = (s) => {
  const ul = document.getElementById("myList");

  const newLi = document.createElement("li");
  newLi.innerText = s;

  ul.appendChild(newLi);
};

// newElement("pane");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const resetUl = () => {
  const ul = document.getElementById("myList");

  ul.innerHTML = "";
};

// resetUl();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassTestTr = () => {
  const tr = document.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};

// addClassTestTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const createTree = (n, div) => {
  for (let i = 1; i <= n; i++) {
    const p = document.createElement("p");
    for (let k = 0; k < i; k++) {
      p.innerText += "*";
    }

    div.appendChild(p);
  }
};

const halfTree = (n) => {
  const div = document.getElementById("half-tree");
  createTree(n, div);
};

console.log(
  "\nEsercizio 27 \nHo voglia di costruire un mezzo albero di 20 asterischi di altezza."
);
halfTree(20);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (n) => {
  const div = document.getElementById("tree");
  div.style.textAlign = "center";
  div.style.display = "inline-block";
  div.style.margin = "2em 0";

  createTree(n, div);
};

console.log(
  "\nEsercizio 28 \nMa perché solo mezzo? Costruiamone uno intero da 35 asterischi di altezza!"
);
tree(35);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (n) => {
  const divisori = [1];
  let i = 2;
  if (n !== 0 && n !== 1 && n !== 2) {
    divisori.push(n);
    while (i < n && divisori.length === 2) {
      if (n % i === 0) {
        divisori.push(i);
      }
      i++;
    }
  }

  if (divisori.length === 2 || n === 2) {
    console.log(n + " è un numero primo!");
    return true;
  } else {
    console.log(n + " non è un numero primo!");
    return false;
  }
};

console.log(
  "\nEsercizio 29 \nScopriamo se il nostro numero è primo! (Spoiler: " +
    isItPrime(5009) +
    ")"
);
isItPrime(5009);
