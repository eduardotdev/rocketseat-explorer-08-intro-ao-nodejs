const express = require("express")

const app = express()

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params

  response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}.  
  `)
})

app.post("/users", (request, response) => {
  response.send(`Você chamou o Post`)
})

const PORT = 3333
app.listen(PORT, () => 
  console.log(`🚀 HTTP server is running on Port ${PORT}`)
)