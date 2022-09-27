const frutas = ["laranja", "limão", "uva"];

let fruta1var = document.getElementById("fruta-1")
fruta1var.innerHTML = frutas[0]

let fruta2var = document.getElementById("fruta-2")
fruta2var.innerHTML = frutas[1]

let fruta3var = document.getElementById("fruta-3")
fruta3var.innerHTML = frutas[2]

let fruta4var = document.getElementById("fruta-4")

let imputVar = document.getElementById("imput")


// function imprimeValor(){
//     console.log(imputVar.value);
// }

function clicarBotao() {
    fruta4var.innerHTML = imputVar.value
    imputVar.value = ""
}


