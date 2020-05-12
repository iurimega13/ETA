class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
        console.log('E morreu!');

    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string, listaDeCarros: string[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public forneceerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
    public dizerCarroQueTem(): any {
        return this.carro
    }
    public comprarCarro(carro: any): void {
        this.carro = carro
    }
}
/**
 * Criando carros
 */
const carro1 = new Carro('gol',4)   
const carro2 = new Carro('golf',2)   
const carro3 = new Carro('hilux',4)   
const carro4 = new Carro('sw4',4)   
const carro5 = new Carro('dodge RAM',2)
