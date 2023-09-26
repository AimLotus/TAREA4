var resultados = [];
var resultadoIndex = 0;

function realizarOperaciones() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadosDiv = document.getElementById("resultados");
    var siguienteButton = document.getElementById("siguiente");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadosDiv.innerHTML = "Por favor, ingrese números válidos.";
        siguienteButton.style.display = "none";
        return;
    }

    resultados = []; // Limpiar resultados anteriores
    resultadoIndex = 0;

    for (var i = 1; i <= 5; i++) {
        var resultado;
        switch (i) {
            case 1:
                resultado = numero1 + numero2;
                resultados.push(`El resultado de la suma es: ${resultado}`);
                break;
            case 2:
                resultado = numero1 - numero2;
                resultados.push(`El resultado de la resta es: ${resultado}`);
                break;
            case 3:
                resultado = numero1 * numero2;
                resultados.push(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case 4:
                if (numero2 === 0) {
                    resultados.push(`No se puede dividir por 0.`);
                } else {
                    resultado = numero1 / numero2;
                    resultados.push(`El resultado de la división es: ${resultado}`);
                }
                break;
            case 5:
                resultado = numero1 % numero2;
                resultados.push(`El resultado del módulo es: ${resultado}`);
                break;
        }
    }

    resultadosDiv.innerHTML = resultados[resultadoIndex];
    siguienteButton.style.display = "block";
}

function mostrarSiguienteResultado() {
    resultadoIndex++;
    var resultadosDiv = document.getElementById("resultados");
    var siguienteButton = document.getElementById("siguiente");

    if (resultadoIndex < resultados.length) {
        resultadosDiv.innerHTML = resultados[resultadoIndex];
    } else {
        resultadosDiv.innerHTML = "Se han mostrado todos los resultados.";
        siguienteButton.style.display = "none";
    }
}

function getNumeroOrdinal(numero) {
    var ultimoDigito = numero % 10;
    var ultimoDosDigitos = numero % 100;

    if (ultimoDigito === 1 && ultimoDosDigitos !== 11) {
        return numero + "er";
    } else if (ultimoDigito === 2 && ultimoDosDigitos !== 12) {
        return numero + "do";
    } else if (ultimoDigito === 3 && ultimoDosDigitos !== 13) {
        return numero + "er";
    } else {
        return numero + "to";
    }
}
