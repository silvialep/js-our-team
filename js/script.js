


// creo l’array di oggetti con le informazioni fornite

let myTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg'
    }
];


console.log(myTeam);



// stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


for(i = 0; i < myTeam.length; i++) {
    for(let key in myTeam[i]) {
        console.log(`${key}: ${myTeam[i][key]}`);
    }
}





// stampo le stesse informazioni su DOM sottoforma di stringhe



let containerEl = document.getElementById('container');
let cardsContEl = document.getElementById('cards-container');





for (i = 0; i < myTeam.length; i++) {
    createCard(cardsContEl);
}

let allCards = document.querySelectorAll('.card');

for(i = 0; i < allCards.length; i++) {
    shapeCard(allCards[i]);
}

let allImages = document.querySelectorAll('.card-image');
populateImgs(myTeam, allImages);

let allNames = document.querySelectorAll('.card-name');
populateNames(myTeam, allNames);

let allRoles = document.querySelectorAll('.card-role');
populateRoles(myTeam, allRoles);




// for (i = 0; i < myTeam.length; i++) {
//     createCards(cardsContEl, myTeam);
//     let allCards = document.querySelectorAll('.card');
//     for (let key in myTeam[i]) {
//         // BONUS 1: trasformo la stringa foto in una immagine effettiva
//         if (key == 'image') {
//             let newImg = document.createElement('img');
//             allCards[i].append(newImg);
//             newImg.src = `${myTeam[i][key]}`;
//         } else {
//             let newSpan = document.createElement('span');
//             allCards[i].append(newSpan);
//             newSpan.innerText = `${key}: ${myTeam[i][key]}`;
//         }
//     }
// }
// 


/*
BONUS 2:
Organizzare i singoli membri in card/schede
*/

// creo funzione per generare card
function createCard(container) {
    let newDiv = document.createElement('div');
    container.append(newDiv);
    newDiv.classList.add('card');
}

// creo funzione per strutturare gli elementi all'interno della card
function shapeCard(card) {
    let cardImg = document.createElement('img');
    let cardName = document.createElement('span');
    let cardRole = document.createElement('span');
    card.append(cardImg);
    card.append(cardName);
    card.append(cardRole);
    cardImg.classList.add('card-image');
    cardName.classList.add('card-name');
    cardRole.classList.add('card-role');
}

// creo funzione per visualizzare le immagini nelle card
function populateImgs(array1, array2) {
    for(i = 0; i < array2.length; i++) {
        array2[i].src = array1[i]['image'];
    }
}

// creo funzione per visualizzare i nomi nelle card
function populateNames(array1, array2) {
    for (i = 0; i < array2.length; i++) {
        array2[i].innerText = `${array1[i]['name']}`;
    }
}

// creo funzione per visualizzare i ruoli nelle card
function populateRoles(array1, array2) {
    for (i = 0; i < array2.length; i++) {
        array2[i].innerText = `${array1[i]['role']}`;
    }
}