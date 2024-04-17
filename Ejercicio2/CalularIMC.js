function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const pesoT = parseFloat(prompt("Ingrese su peso en kilogramos:"));
const alturT = parseFloat(prompt("Ingrese su altura en metros:"));

const imc = calcularIMC(pesoT, alturaT);

console.log("Su índice de masa corporal (IMC) es:", imc);
