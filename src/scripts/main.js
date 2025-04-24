document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#form-sorteador").addEventListener("submit", function(e){
        e.preventDefault();

        let numeroMaximo = document.querySelector("#numero-maximo").value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;

        document.querySelector("#numero-sorteado").innerText = Math.ceil(numeroAleatorio);
        document.querySelector(".resultado").style.display = "block";
    })
})