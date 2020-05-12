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
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.forneceerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoa;
}());
/**
 * Criando carros
 */
var carro1 = new Carro('gol', 4);
var carro2 = new Carro('golf', 2);
var carro3 = new Carro('hilux', 4);
var carro4 = new Carro('sw4', 4);
var carro5 = new Carro('dodge RAM', 2);
/**
 * Criando lista de carros da concessionaria
 */
var listaDeCarros = [carro1, carro2, carro3, carro4, carro5];
/**
 * Criando concessionaria pra receber lista de carros
 */
var concessionaria = new Concessionaria('parnaiba', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros);
