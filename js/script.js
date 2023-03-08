/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!



*/



// creo l’array di oggetti con le informazioni fornite

let myTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
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

for (i = 0; i < myTeam.length; i++) {
    for (let key in myTeam[i]) {
        let newDiv = document.createElement('div');
        containerEl.append(newDiv);
        newDiv.innerText = `${key}: ${myTeam[i][key]}`;
    }
}