// declarando objeto de encriptado:
const claves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

// declarando variables
let btnEncriptar = document.querySelector(".encriptar");
let btnDesencriptar = document.querySelector(".desencriptar");
let mensajeResult = document.querySelector(".contenido");
let textarea = document.querySelector('textarea');
let mensaje;

// funciones
const encriptarMensaje = () => {

}

const desencriptarMensaje = () => {

}

// eventos
textarea.addEventListener("keyup", () => {
    mensaje = textarea.value;
})

btnEncriptar.addEventListener("click", () => {
    alert("hola");
})

btnDesencriptar.addEventListener("click", () => {
    alert("adios");
})