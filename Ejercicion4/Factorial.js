function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
const numero = parseInt(prompt("Ingrese un numero para calcular su factorial:"));
const Total = factorial(numero);

console.log("El factorial de", numero, "es:", Total);
