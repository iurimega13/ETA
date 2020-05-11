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

class concessionaria {
    private endereco: string
    private listaDeCarros: string[]

    constructor(endereco: string, listaDeCarros: string[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public forneceerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): string[] {
        return this.listaDeCarros
    }
}
let carroA = new Carro('camaro', 2)
console.log(carroA);
carroA.acelerar()
console.log(carroA);
carroA.parar()
console.log(carroA);

