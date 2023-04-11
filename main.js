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
let contenidoResultado = document.querySelector(".contenido");
let textarea = document.querySelector('textarea');
let mensaje;

// declarando el botón para copiar al portapapeles
let btnCopiar = document.createElement("button");
btnCopiar.classList.add("copiar");
btnCopiar.innerText = "Copiar";

inicializar();


// funciones
const encriptarMensaje = mensaje => {
    mensaje = mensaje.toLowerCase();
    let arrayMensaje = mensaje.split("");
    let cajaResultado = document.createElement("div");
    let resultadoP = document.createElement("p");

    arrayMensaje = arrayMensaje.map(letra => {
        if (claves[letra]) return claves[letra];
        else return letra;
    });
    arrayMensaje = arrayMensaje.join("");

    cajaResultado.classList.add("resultado");
    resultadoP.innerText = arrayMensaje;
    cajaResultado.appendChild(resultadoP);
    cajaResultado.appendChild(btnCopiar);

    contenidoResultado.innerHTML = "";
    contenidoResultado.appendChild(cajaResultado);
}

const desencriptarMensaje = mensaje => {
    console.log(mensaje);
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

// eventos
textarea.addEventListener("keyup", () => {
    mensaje = textarea.value;
})

btnEncriptar.addEventListener("click", () => {
    if (!mensaje) {
        alert("Escribe un mensaje a encriptar o desencriptar");
        textarea.focus();
        return;
    } else encriptarMensaje(mensaje);
})

btnDesencriptar.addEventListener("click", () => {
    if (!mensaje) {
        alert("Escribe un mensaje a encriptar o desencriptar");
        textarea.focus();
        return;
    } else desencriptarMensaje(mensaje);
})