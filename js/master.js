const sellBike = [
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

let eavyBike = sellBike[0]

for (let x = 0; x < sellBike.length; x++) {

    const bike = sellBike[x];
    
    if (eavyBike.peso > bike.peso) {
        eavyBike=bike
    }
    
//    let peso = eavyBike.peso
//    let nome = eavyBike.nome

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

    // const {peso} = bike
    // console.log(peso)

    


    
//    const largest = Math.max.apply(Math, arrayPeso);
   
//    console.log(largest)
// function bici(sellBike) {

//     const pesoBike = {}

//     for (let a = 0; a < sellBike.length; a++) {
//         const {peso} = sellBike[a];

//     if (!pesoBike[peso]) {
//         pesoBike[peso]=[]
//     }

//        pesoBike[peso].push(sellBike[a])
        
//     }
//     console.log(pesoBike)

// }

// bici(sellBike)
// console.log(bici(sellBike))

// const largest = Math.max.apply(sellBike); // 306

// console.log(largest)