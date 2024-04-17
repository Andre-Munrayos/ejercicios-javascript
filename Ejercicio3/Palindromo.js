function esPalindromo(texto) {
    
    texto = texto.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return texto === texto.split("").reverse().join("");
}

const p = prompt("Ingrese una palabra:");
const resultado = esPalindromo(p);

if (resultado) {
    console.log("Es un palindromo!");
} else {
    console.log("No es un palindromo.");
}
