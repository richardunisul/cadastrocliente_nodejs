const express = require('express');
const app = express(); // Inicializa o servidor
const port = 8000; // Define a porta do servidor
// Midleware para analisar o corpo da solicitação
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const rotas = require("./servicos"); //Rotas dos serviços
app.use(rotas); // Carrega os serviços
// Inicia o servidor
app.listen(port, () => {
 console.log(`Servidor ouvindo porta ${port}`);
});