function validarTexto(texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales y/o mayúsculas");
        return true;
    } else if (texto === vacio) {
        alert("Ingrese un mensaje para cifrar");
        return true;
    } else {
        return false;
    }
}

let btnCifrar = document.querySelector("#btn-cifrar");
btnCifrar.addEventListener("click", function() {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;

    if (validarTexto(textoIngresado) === false) {
        let Cifrado = cifrar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Cifrado;
    } else {
        textInput = "";
    }
});

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function cifrar(textoIngresado) {
    let Cifrado = "";
    for (const obj in reglas) {
        Cifrado = textoIngresado.replaceAll(obj, reglas[obj]);
        textoIngresado = Cifrado;
    }
    return Cifrado;
}

function descifrar(textoIngresado) {
    let Cifrado = textoIngresado;
    for (const obj of Object.keys(reglas).reverse()) {
        Cifrado = Cifrado.replaceAll(reglas[obj], obj);
    }
    return Cifrado;
}

let btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click", function() {
    navigator.clipboard.writeText(document.querySelector("#msg").value);
    document.querySelector("#input-texto").value = "";
});

let btnDescifrar = document.querySelector("#btn-descifrar");
btnDescifrar.addEventListener("click", function() {
    let textoIngresado = document.querySelector("#input-texto").value;
    let Descifrado = descifrar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Descifrado;
});