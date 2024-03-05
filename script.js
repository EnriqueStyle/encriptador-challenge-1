const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const muneco = document.querySelector(".muneco");
const contenedor = document.querySelector(".texto");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    let cajatexto = recuperarTexto();
    if (cajatexto !== null) {
        ocultarAdelante();
        resultado.textContent = encriptarTexto(cajatexto);
    }
}

function desencriptar() {
    //ocultarAdelante();
    let cajatexto = recuperarTexto();
    if (cajatexto !== null) {
        resultado.textContent = desencriptarTexto(cajatexto);
        mostrarMuneco(); // Mostrar el muñeco solo si hay texto al desencriptar

        // Limpiar la caja de texto después de desencriptar
        document.querySelector(".cajatexto").value = "";

        // Limpiar la caja de texto-resultado después de desencriptar
        //resultado.textContent = "";
    }
}

function recuperarTexto() {
    let cajatexto = document.querySelector(".cajatexto");
    let texto = cajatexto.value; // Eliminar espacios al inicio y al final
    texto = texto.trim();
    // Validar si el texto está vacío
    if (texto === "") {
        // Mostrar notificación por texto vacío
        alert("Por favor, ingrese texto antes de Encriptar o Desencriptar.");
        return null;
    }
    // Validar si contiene caracteres no permitidos
    if (/[^a-z ]/.test(texto)) {
        // Mostrar notificación por mayúsculas, acentos o caracteres especiales
        alert("Por favor, ingrese solo texto en minúsculas sin acentos ni caracteres especiales.");
        // Limpiar la caja de texto
        cajatexto.value = "";
        return null;
    }
    return texto;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function mostrarMuneco() {
    contenedor.classList.remove("ocultar"); // Mostrar el contenedor
    muneco.classList.remove("ocultar"); // Mostrar el muñeco
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if (texto[i] === " "){
            textoFinal += " ";
        }
        else if(texto[i] == "a") {
            textoFinal = textoFinal + "ai" 
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    ocultarAdelante(); // Ocultar el contenedor y el muñeco después de encriptar
    return textoFinal;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] === " "){
            textoFinal += " ";
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    //mostrarMuneco(); // Mostrar el muñeco solo si hay texto al desencriptar
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    let contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);

    // También puedes agregar el texto copiado a la caja de texto
    document.querySelector(".cajatexto").value = contenido;
});

