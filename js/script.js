// controllo js
console.log(`JS OK`);

// elementi presi dal DOM
const membersElement = document.getElementById(`members`);
console.log(membersElement);

// array di oggetti
const workers = [
    // primo lavoratore
    {fullName : `Wayne Barnett`,
    position : `Founder & CEO`,
    photo : `img/wayne-barnett-founder-ceo.jpg`,},
    // secondo lavoratore
    {fullName : `Angela Caroll`,
    position : `Chief Editor`,
    photo : `img/angela-caroll-chief-editor.jpg`},
    // terzo lavoratore
    {fullName : `Walter Gordon`,
    position : `Office Manager`,
    photo : `img/walter-gordon-office-manager.jpg`,},
    // quarto lavoratore
    {fullName : `Angela Lopez`,
    position : `Social Media Manager`,
    photo : `img/angela-lopez-social-media-manager.jpg`,},
    // quinto lavoratore
    {fullName : `Scott Estrada`,
    position : `Developer`,
    photo : `img/scott-estrada-developer.jpg`,},
    // sesto lavoratore
    {fullName : `Barbara Ramos`,
    position : `Graphic Designer`,
    photo : `img/barbara-ramos-graphic-designer.jpg`}
];

// variabile d'appoggio
let listItems = ``

// ciclo per gli oggetti
for (let worker of workers) {
    listItems += `
    <img src="${worker.photo}" alt="photo${worker + 1}">
    <li>${worker.fullName}</li>
    <li>${worker.position}</li>`
}

membersElement.innerHTML = listItems;