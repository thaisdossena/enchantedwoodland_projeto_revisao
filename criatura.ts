interface HabilidadeMagica {
    usarMagia(): void,
    conjurarFeitico(): void;
}

export class CriaturaMagica implements HabilidadeMagica{
    protected nome: string;
    protected tipo: string;

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.tipo = tipo;
    }

    
    protected getNome(): string {
        return this.nome;
    }

    protected getTipo(): string {
        return this.tipo;
    }

    public  usarMagia(): void {
        console.log(`${this.nome} conjurou Magia`);
    }

    public  conjurarFeitico(): void {
        console.log(`${this.nome} conjurou Feitiço`);
    }
}

export class GuardiaoAnciao extends CriaturaMagica {
    constructor(nome:string) {
        super(nome, "Gandalf, o Guardião Ancião");
    }
}

export class DragaoMilenar extends CriaturaMagica {
    constructor(nome:string) {
        super(nome, "Smaug, o Dragão Milenar");
    }
}

export class SereiaEncantada extends CriaturaMagica {
    constructor(nome:string) {
        super(nome, "Ariel, a Sereia Encatada");
    }
}

