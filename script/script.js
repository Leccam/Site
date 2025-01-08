function signUp(){
    window.location.href="/sign/sign.html"
}

function restartGame(){
    window.location.href="/home/home.html"
}

function aparecerErro() {
    document.getElementById('erro').style.display = "flex"
    desaparecerRegra()
    if (document.querySelector('.pergunta') != null){
        const pergunta = document.querySelector('.pergunta')
        pergunta.style.filter = 'blur(10px)'
    }
}

function desaparecerErro() {
    document.getElementById('erro').style.display = 'none'
    if (document.querySelector('.pergunta') != null){
        const pergunta = document.querySelector('.pergunta')
        pergunta.style.filter = 'none'
    }
}

function aparecerTutorial() {
    document.getElementById('desaparece2').style.display = "flex"
    desaparecerRegra()
    if (document.querySelector('.pergunta') != null){
        const pergunta = document.querySelector('.pergunta')
        pergunta.style.filter = 'blur(10px)'
    }
}

function desaparecerTutorial() {
    document.getElementById('desaparece2').style.display = 'none'
    if (document.querySelector('.pergunta') != null){
        const pergunta = document.querySelector('.pergunta')
        pergunta.style.filter = 'none'
    }
}

function aparecerRegra() {
    document.getElementById('desaparece').style.display = "flex"
    desaparecerTutorial()
    if (document.querySelector('.pergunta') != null){
        const pergunta = document.querySelector('.pergunta')
        pergunta.style.filter = 'blur(10px)'
    }
}

function desaparecerRegra() {
    document.getElementById('desaparece').style.display = 'none'
    if (document.querySelector('.pergunta') != null){
        const pergunta = document.querySelector('.pergunta')
        pergunta.style.filter = 'none'
    }
}

function aumentar() {
    // Pega o elemento do contador
    let contadorElement = document.getElementById("contador")

    // Converte o valor do contador para um número
    let contador = parseInt(contadorElement.textContent)

    // Verifica se o contador é menor que 10
    if (contador < 10) {
        // Aumenta em 1 e atualiza o contador
        contador += 1
        contadorElement.textContent = contador
    }
}

desaparecerRegra()
desaparecerTutorial()
desaparecerErro()

//Timer

var tempo = parseInt(localStorage.getItem("tempo")) // tempo em segundos
var working = false // sinaliza se o timer está ativado
var intervaloID = 0 // identificação do intervalo que permite limpá-lo

function exibeTempo(){
    let min = parseInt(tempo/60) // pega a parte inteira dos minutos
    let seg = tempo % 60 // calcula os segundos restantes
    let smin = min.toString().padStart(2, '0') // formata o número em duas casas
    let sseg = seg.toString().padStart(2, '0')

    let tempoTela = smin + ':' + sseg // váriavel para formatar no estilo cronômetro
    document.querySelector(".cronometro").value = tempoTela
    tempo--

    localStorage.setItem("tempo", tempo); // Atualiza o tempo no localStorage
    console.log(tempo)
    if (tempo < 0){ // zera temporizador
        working = false
        document.getElementById('timeoutMessage').style.display = "flex"
        clearInterval(intervaloID)
        localStorage.removeItem("tempo"); // Remove o tempo armazenado
    }
}

function temporizador(t){
    if(working == false){
        working = true
        tempo = t
        localStorage.setItem("tempo", tempo); // Salva o tempo inicial
        exibeTempo()
        intervaloID = setInterval(exibeTempo, 1000) // 1s
    }
}

function reiniciarTimer() {
    clearInterval(intervaloID); // Para o timer atual
    localStorage.removeItem("tempo"); // Remove o tempo armazenado
    tempo = 0;
    working = false;
    document.querySelector(".cronometro").value = "00:00"; // Reseta a exibição
    document.getElementById('timeoutMessage').style.display = "flex"
}

if (tempo > 0) {
    working = true;
    intervaloID = setInterval(exibeTempo, 1000); // Continua o timer
} else {
    document.querySelector(".cronometro").value = "00:00"; // Exibição inicial
}

document.getElementById('timeoutMessage').style.display = "none"
