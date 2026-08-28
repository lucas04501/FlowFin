const express = require("express");
const app = express();
const pool = require('./db');


app.get("/rota", async (req, res) => {
  const resultado = await pool.query('SELECT NOW()');
  res.send(resultado.rows[0]);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


/*
req(request) representa a requisição chegou, o que o cliente esta pedindo
res(response) representa a resposta que o servidor vai dar para o cliente
*/