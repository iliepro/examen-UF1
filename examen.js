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

