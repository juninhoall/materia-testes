const {somar} = require("../calculadora")
describe("Iremos testar os calculos do nosso sistema", 
()=>{
   it("Vai realizar a soma de dois numeros", () => {
	   // TESTE de Unidade 
	   expect(somar(5,5)).toBe(10)
   })	
})