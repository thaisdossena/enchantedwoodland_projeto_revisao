//missão 1

//encapsulamento:
//private = apenas a super calsse usa classe pai
//protected = todos que são pai e filho apenas

export class Guerreiro {
  private nome: string;
    private nivel: number;
    private vida: number;
    private dano: number;

    constructor(nome: string, nivel: number) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = 100;
        this.dano = 10;
    }

    protected getNome(): string{
        return this.nome;
    }

    protected getNivel(): number{
        return this.nivel;
    }
    protected getVida(): number{
        return this.vida;
    }

    protected setDano(dano:number): void {
        this.dano = dano; 
    }
}

