"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
        console.log('E morreu!');
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carroA = new Carro('camaro', 2);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.parar();
console.log(carroA);
