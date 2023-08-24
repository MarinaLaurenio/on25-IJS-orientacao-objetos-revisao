const { Animal } = require('../Animal');

class Ave extends Animal {
    tipo = "ave"
    qntPenas
    constructor(nome, sexo, qntPenas){
        super(nome, sexo)
        this.qntPenas = qntPenas
    }
    voar(){
        console.log(`${this.nome} está voando!`)
    }
}

module.exports = { Ave };
