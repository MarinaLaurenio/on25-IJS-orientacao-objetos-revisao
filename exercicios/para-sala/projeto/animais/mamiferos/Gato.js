const { Mamifero } = require("../Mamifero");

class Gato extends Mamifero {
  tipo = "gato";
  raca;
  constructor(nome, sexo, qntMamas, raca) {
    super(nome, sexo, qntMamas);
    this.raca = raca;
  }
  ronronar() {
    console.log(
      `O ${this.tipo} chamado ${this.nome}, da raça ${this.raca} está ronronando.`
    );
  }
  falar() {
    super.falar();
    console.log("miau");
  }
}

module.exports = { Gato };
