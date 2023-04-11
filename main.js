// DECLARANDO EL OBJETO PARA LOS ENCRIPTADOS:
const claves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

// DECLARACIÓN DE VARIABLES
let btnEncriptar = document.querySelector(".encriptar");
let btnDesencriptar = document.querySelector(".desencriptar");
let contenidoResultado = document.querySelector(".contenido");
let textarea = document.querySelector('textarea');
let mensaje;
let nuevoMensaje;

// DECLARANDO EL BTN PARA LA FUNCIÓNDE COPIAR EN EL PROTAPAPELES
let btnCopiar = document.createElement("button");
btnCopiar.classList.add("copiar");
btnCopiar.innerText = "Copiar";

// FUNCIONES
const encriptarMensaje = mensaje => {
    mensaje = mensaje.toLowerCase();
    let mensajeEncriptado = mensaje.split("");

    mensajeEncriptado = mensajeEncriptado.map(letra => {
        if (claves[letra]) return claves[letra];
        else return letra;
    });

    mensajeEncriptado = mensajeEncriptado.join("");

    crearCajaResultado(mensajeEncriptado);
    return mensajeEncriptado;
}

const desencriptarMensaje = mensajeDesencriptado => {
    for (const clave in claves) {
        const expresionRegular = new RegExp(claves[clave], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(expresionRegular, clave);
    }

    crearCajaResultado(mensajeDesencriptado);
    return mensajeDesencriptado;
}

const copiarMensaje = () => {
    navigator.clipboard.writeText(nuevoMensaje)
        .then(() => {
            alert(`Copiado al portapapeles: ${nuevoMensaje}`);
        })
        .catch((err) => {
            console.error(`Error al copiar al portapapeles: ${err}`);
        });
}

function inicializar() {
    contenidoResultado.insertAdjacentHTML("beforeend", `
    <img src="img/Muñeco.png" alt="muñeco">

        <div class="mensajes">
          <h1>Ningún mensaje fue encontrado</h1>
          <p>Ingresa el texto que desees encriptar o desencriptar</p>
        </div>

    `)
}

function crearCajaResultado(mensajeResultado) {
    contenidoResultado.innerHTML = "";
    let cajaResultado = document.createElement("div");
    let resultadoP = document.createElement("p");
    cajaResultado.classList.add("resultado");
    resultadoP.innerText = mensajeResultado;
    cajaResultado.appendChild(resultadoP);
    cajaResultado.appendChild(btnCopiar);
    contenidoResultado.appendChild(cajaResultado);
}

inicializar();

// EVENTOS
textarea.addEventListener("keyup", () => {
    mensaje = textarea.value;
})

btnEncriptar.addEventListener("click", () => {
    if (!mensaje) {
        alert("Escribe un mensaje a encriptar o desencriptar");
        textarea.focus();
        return;
    } else nuevoMensaje = encriptarMensaje(mensaje);
})

btnDesencriptar.addEventListener("click", () => {
    if (!mensaje) {
        alert("Escribe un mensaje a encriptar o desencriptar");
        textarea.focus();
        return;
    } else nuevoMensaje = desencriptarMensaje(mensaje);
})

btnCopiar.addEventListener("click", copiarMensaje);