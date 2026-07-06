const Funcionario = require("../models/funcionario")

exports.cadastrar = async(req,res) => {

    // insert into funcionario values (?, ?, ?)
    const funcionario = await Funcionario.create(req.body)
    res.status(201).json(funcionario)
}

exports.listar = async(req,res) => {

    // Select * from funcionarios
    const funcionarios = await Funcionario.findAll()
    res.json(funcionarios)
}