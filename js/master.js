// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const sellBike = 
[
    { nome: "Mountain bike",
     peso:40,
     immagine: "1.jpg"
    },
    {
        nome: "Cross bike",
        peso:20,
        immagine:"2.jpg"
    },
    {
        nome: "Ride bike",
        peso:70,
        immagine:"3.jpg"
    }

]
const cardContainer = document.querySelector(".card-container")

// function getlower(bikesList) {
//     // ORDINARE ARRAY PER PESO IN ORDINE CRESCENTE CON SORT
//     const sortedArray =[...sellBike].sort((a,b)=>{
//         if(a.peso < b.peso){
//             return - 1
//         }

//         if (condition) {
            
//         }
//     })
// }

let eavyBike = sellBike[0]

for (let x = 0; x < sellBike.length; x++) {

    const bike = sellBike[x];
    
    if (eavyBike.peso > bike.peso) {
        eavyBike=bike
    }
   const {peso,nome} = eavyBike
   
}
console.log(eavyBike)

const {nome,peso,immagine} = eavyBike

cardContainer.innerHTML+=
`<div class="col">
<div class="card h-100 shadow-sm">
  <img src=${immagine} alt="">
   <h2 class="text-center">${nome}</h2>
   <p class="text-center">${peso} kg</p>
</div>
</div>`;



// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// creo un array di oggetti composta da squadre di calcio ogni squadra ha diverse proprietà falli e cartellini sono settati a zero
const footballTeam =
[
        { nome: "AC.Milan",
        falli:0,
        cartellini: 0,
        },
    {
        nome: "Inter",
        falli: 0,
        cartellini: 0,
    },
    {
        nome: "Napoli",
        falli:0,
        cartellini:0,
    }
]

//  creo un ciclo for per poter reimpostare a ciascuna squadra il valore dei falli e dei cartellini
for (let x = 0; x < footballTeam.length; x++) {

    const singolaSquadra = footballTeam[x];
    // assegno un valore random da uno a 100 ai falli e cartellini
    singolaSquadra.falli =  Math.round(Math.random() * 100);
    singolaSquadra.cartellini =  Math.round(Math.random() * 100);
}

console.log(footballTeam)


// creo una funzione dove all'interno avro un oggetto vuoto
function array(footballTeam) {

    let arrayVuoto =[]
    // vado a ciclare ogni elemento del mio array di oggetti
    for (let a = 0; a < footballTeam.length; a++) {
        
        const {nome, cartellini} = footballTeam[a];

        // arrayVuoto.nome = nome
        // arrayVuoto.cartellini =cartellini

        // if (!arrayVuoto[nome]) {
        //     arrayVuoto[nome]=[]  
        // }
        arrayVuoto.push({nome,cartellini})

    }

    return arrayVuoto

}

 const gruppoTeam = array(footballTeam)
 console.log(gruppoTeam)






