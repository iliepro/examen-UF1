// TASCA 1
function llegirProductes() {
    let productes; 
    let arrayObjectes = [];
    try { productes = fs.readFileSync('productes.json', 'utf-8');}
    catch (error) { console.error(error);}

    producteObject = JSON.parse(productes);

    for (let i = 0; i < producteObject.length; i++) {
        let producte = producteObject[i];
        arrayObjectes.push(producteJSON);
    }
}