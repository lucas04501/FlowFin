const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Funcionou!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


/*
req(request) representa a requisição chegou, o que o cliente esta pedindo
res(response) representa a resposta que o servidor vai dar para o cliente
*/