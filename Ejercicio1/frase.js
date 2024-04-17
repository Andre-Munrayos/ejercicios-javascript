function contarP(frase) {
    const p = frase.trim().split(/\s+/);
    
    const numP = p.length;
    return numP;
}
const frases = prompt("Ingrese una frase:");
const numP = contarP(frases);
console.log("La cantidad de palabras en la frase es:", numP);
