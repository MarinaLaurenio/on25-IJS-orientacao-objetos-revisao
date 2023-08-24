const { Mamifero } = require("../Mamifero");

class Cachorro extends Mamifero {
  tipo = "cachorro";
  raca;
  constructor(nome, sexo, qntMamas, raca) {
    super(nome, sexo, qntMamas);
    this.raca = raca;
  }
  brincar() {
    console.log(
      `O ${this.tipo} chamado ${this.nome}, da raça ${this.raca} está brincando.`
    );
  }
  falar() {
    super.falar();
    console.log("au au au");
  }
}

module.exports = { Cachorro };
