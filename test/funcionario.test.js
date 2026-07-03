const request = require('supertest')

const app = require("../app")

// Escrita de um teste
describe('API de funcionários', () => {
    it('Deve cadastrar um funcionário', async() =>{

        const resposta = await request(app)
        .post("/funcionarios")
        .send({
            nome: "Cledisvaldo",
            cargo: "CEO"
        })

        expect(resposta.statusCode).toBe(201)
        expect(resposta.body.nome).toBe("Cledisvaldo")
        expect(resposta.body.cargo).toBe("CEO")
    })

})