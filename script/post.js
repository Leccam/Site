function doPost(url, body){
    console.log(body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

 
function doPoint(){
    event.preventDefault()
    let url = "https://valores-back-w3eu.onrender.com/pontuar"
    
    body = {
        "name": localStorage.getItem("nome"),
        "email": localStorage.getItem("email"),
        "password": localStorage.getItem("password")
    }
    
    console.log(body)
    doPost(url, body)
    console.log(localStorage.getItem("email"))
}

function cadastrarUsuario(){
    event.preventDefault()
    let url = "https://valores-back-w3eu.onrender.com/cadastro"

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    localStorage.setItem("nome", nome)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    body = {
        "name": localStorage.getItem("nome"),
        "email": localStorage.getItem("email"),
        "password": localStorage.getItem("password")
    }
    
    console.log(body)
    doPost(url, body)
    console.log(localStorage.getItem("email"))
}

function loginUsuario(){
    event.preventDefault()
    let url = "https://valores-back-w3eu.onrender.com/login"

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    body = {
        "email": localStorage.getItem("email"),
        "password": localStorage.getItem("password")
    }
    
    console.log(body)
    if(doPost(url, body)){
        localStorage.setItem('boolean', 'true')
        console.log('true')
    }else{
        localStorage.setItem('boolean', 'false')
        console.log('false')
    }
}

// Alinhar as portas do back e do front para que uma tenha acesso a outra
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'https://site-ggqf.onrender.com', // Permitir requisições do frontend
  methods: ['GET', 'POST'],        // Métodos permitidos
}));

app.post('/doPost', (req, res) => {
  res.send('CORS configurado com sucesso!');
});

app.listen(8085, () => console.log('Servidor rodando na porta 8085'));



