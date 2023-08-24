const { Animal } = require("../Animal");

class Mamifero extends Animal {
  tipo = "mamífero";
  qntMamas;
  constructor(nome, sexo, qntMamas) {
    super(nome, sexo);
    this.qntMamas = qntMamas;
  }
  amamentar() {
    console.log(`${this.nome} está amamentando com ${this.qntMamas} mamas.`);
  }
  falar() {
    console.log(
      `O ${this.tipo} chamado ${this.nome} está emitindo seu som característico.`
    );
  }
}

module.exports = { Mamifero };
