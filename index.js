const express = require("express") 
const {somar} = require("./calculadora")
const app = express()
const porta = 3001;


app.get("/rota", (requisicao, resposta)=>{
	const respostaDaSoma = somar(2,3)
	resposta.send("A resposta do calculo é: " + respostaDaSoma)
})



app.listen(porta, () => {
	console.log('Opa, nosso servidor levantou ' 
	+ porta)
})
