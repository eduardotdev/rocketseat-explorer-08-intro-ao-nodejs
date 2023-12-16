const express = require("express")

const app = express()
app.use(express.json())

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params

  response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}.  
  `)
})

app.post("/users", (request, response) => {
  const { name, email, password } = request.body

  response.json({name, email, password})
})

const PORT = 3333
app.listen(PORT, () => 
  console.log(`🚀 HTTP server is running on Port ${PORT}`)
)