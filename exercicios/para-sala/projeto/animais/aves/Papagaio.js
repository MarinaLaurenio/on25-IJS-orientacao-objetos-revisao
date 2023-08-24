const { Ave } = require('../Ave');

class Papagaio extends Ave {
    tipo = "papagaio"
    raca
    constructor(nome, sexo, qntPenas, raca){
        super(nome, sexo, qntPenas)
        this.raca = raca
    }
}

module.exports = { Papagaio };
