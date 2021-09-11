//define as variáveis
const teclas = document.querySelectorAll("#tecla")
const igual = document.querySelector("#tecla[data-tipo='igualdade']")
const clear = document.querySelector("#tecla[data-tipo='clear']")
const entrada = document.querySelector("#entrada")

teclas.forEach(tecla=> {
    tecla.onclick = ()=>{
        entrada.value = entrada.value + tecla.innerHTML
    }
})

clear.onclick= ()=> {
    entrada.value = ""
}

igual.onclick= ()=> {
    entrada.value = eval(entrada.value)
}

entrada.onkeypress= (e)=> {
    if(e.keyCode > 47 && e.keyCode <58) {
        return
    } else {
        e.preventDefault()
    }
}

// entrada.addEventListener("keypress", function(e) {
//     if(e.keyCode > 47 && e.keyCode < 58) {
//         console.log("numero")
//     } else {
//         console.log("letra")
//         e.preventDefault()
//     }
// })