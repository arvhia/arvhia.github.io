const numeroCelular = 524464011430; // Agregar aquí el número de celular



for (let i = 0; i < document.querySelectorAll("#consignar").length; i++) {
    document.querySelectorAll("#consignar")[i].action = `https://wa.me/${numeroCelular}`;

}

//Add number
function addNumber() {
    for (let i = 0; i < document.querySelectorAll("#alinkNumero").length; i++) {
        document.querySelectorAll("#alinkNumero")[i].href = `https://wa.me/${numeroCelular}`;

    }
}
