const fs = require('fs');
// TASCA 1
function llegirProductes() {
    let productes; 
    let arrayObjectes = [];
    let hiHaError = false;
    try { productes = fs.readFileSync('productes.json', 'utf-8');}
    catch (error) { console.error(error); hiHaError = true;}

    producteObject = JSON.parse(productes);

    if (!hiHaError) {
        for (let i = 0; i < producteObject.length; i++) {
            let producte = producteObject[i];
            arrayObjectes.push(producte);
        }
    }
    return arrayObjectes;
}

// TASCA 2

function mostrarProducte(producte) {
    console.log("Nom:", producte.nom);
    console.log("Marca:", producte.marca);
    console.log("Categoria:", producte.categoria);
    console.log("Disponibilitat:", producte.disponibilitat);
    console.log("Característiques:", producte.caracteristiques);
}

// TASCA 3

function mostrarProductes(productes){
    for (let i = 0; i < productes.length; i++) {
        mostrarProducte(productes[i]);
    }
}

// TASCA 4

function mostrarProducteID(productes, id){
    let producteEncontrat = productes.find(producte => producte.id === id);
    if (producteEncontrat) {
        mostrarProducte(producteEncontrat);
    } else {
        console.log("El producte no existeix.");
    }
}

// TASCA 5

// comprovacio tasca 1
comprovarlectura = llegirProductes();
console.log(comprovarlectura);

// comprovacio tasca 2
function obtenirProducte(productes){
    let producte = producteObject[0];
    return producte;
}

mostrarProducte(obtenirProducte(llegirProductes));

// comprovacio tasca 3
mostrarProductes(llegirProductes());

// comprovacio tasca 4
mostrarProducteID(llegirProductes(), 1);