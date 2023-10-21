import Aluno from "./aluno";
import Avaliacao from "./avaliacao";

class Grupo {
    lider: Aluno;
    nome: string;
    descricaoProjeto: string;
    componentes: Aluno[] = [];
    avaliacoes?: Avaliacao[] = [];
    

    constructor(lider: Aluno, nome:string, descricao: string){
        this.lider = lider
        this.nome = nome;
        this.descricaoProjeto = descricao;
        this.componentes.push(lider);
    }

    adicionarAluno(aluno: Aluno): void {
        this.componentes.push(aluno);
    }

}

export default Grupo;