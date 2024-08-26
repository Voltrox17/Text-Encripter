const d = document;
const textArea = d.querySelector(".textbox");
const imagenDibujo = d.querySelector(".dibujo");
const loaderBar = d.querySelector(".loader");
const resultadoTitle = d.querySelector(".headertextbox");
const resultadoText = d.querySelector(".parrafo");
const botonEncriptar = d.querySelector(".button1");
const botonDesencriptar = d.querySelectorAll(".button1");
const botonCopiar = d.querySelector(".button3");
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        ;
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
         mensajeEncriptado += encriptada;
    }

    return mensajeEncriptado;
}

// Funcion para desencriptar

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e) =>{
    imagenDibujo.style.display = "none";
    loaderBar.classList.remove("hidden");
    resultadoTitle.textContent = "Capturando Mensaje";
    resultadoText.textContent = "";

}) 

botonEncriptar.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitle.textContent = "El resultado es:";
})

botonDesencriptar[1].addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener("click", () =>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenDibujo.style.display = "block";
        loaderBar.classList.add("hidden");
        resultadoTitle.textContent = "El texto se copio"
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = "";
    })
});