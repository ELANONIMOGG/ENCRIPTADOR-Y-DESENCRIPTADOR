function encriptar() {
    let palabra = document.getElementById("inputEncriptar").value;
    let palabraEncriptada = "";
    for (let i = 0; i < palabra.length; i++) {
        switch (palabra[i]) {
            case "a":
                palabraEncriptada += "ai";
                break;
            case "e":
                palabraEncriptada += "enter";
                break;
            case "i":
                palabraEncriptada += "imes";
                break;
            case "o":
                palabraEncriptada += "ober";
                break;
            case "u":
                palabraEncriptada += "ufat";
                break;
            default:
                palabraEncriptada += palabra[i];
                break;
        }
    }
    document.getElementById("outputEncriptar").value = palabraEncriptada;
}

function desencriptar() {
    let palabra = document.getElementById("inputDesencriptar").value;
    let palabraDesencriptada = "";
    let i = 0;
    while (i < palabra.length) {
        if (palabra.substring(i, i + 2) === "ai") {
            palabraDesencriptada += "a";
            i += 2;
        } else if (palabra.substring(i, i + 5) === "enter") {
            palabraDesencriptada += "e";
            i += 5;
        } else if (palabra.substring(i, i + 4) === "imes") {
            palabraDesencriptada += "i";
            i += 4;
        } else if (palabra.substring(i, i + 4) === "ober") {
            palabraDesencriptada += "o";
            i += 4;
        } else if (palabra.substring(i, i + 4) === "ufat") {
            palabraDesencriptada += "u";
            i += 4;
        } else {
            palabraDesencriptada += palabra[i];
            i++;
        }
    }
    document.getElementById("outputDesencriptar").value = palabraDesencriptada;
}

function copyTextEncriptado() {
    let textoEncriptado = document.getElementById("outputEncriptar");
    textoEncriptado.select();
    document.execCommand('copy');
}

function copyTextDesencriptado() {
    let textoDesencriptado = document.getElementById("outputDesencriptar");
    textoDesencriptado.select();
    document.execCommand('copy');
}

function validateInput(input) {
  const regex = /^[a-z]+$/; // Solo permite minúsculas
  return regex.test(input);
}

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const input = document.querySelector("input").value;

  if (!validateInput(input)) {
    alert("Solo se permiten minúsculas y sin acentos");
  } else {
    // Enviar formulario o hacer cualquier otra cosa
  }
})

