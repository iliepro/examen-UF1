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