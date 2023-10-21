import Pessoa from "./pessoa";
import Avaliacao from "./avaliacao";
import Grupo from "./grupo";

class Professor implements Pessoa {
    nome: string;
    matricula: string;


    constructor(nome: string, matricula: string){
        this.nome = nome;
        this.matricula = matricula
    }

    criarAvaliacao(coerencia: number, apresentacao: number, utilidade: number, futuro: number, grupoDestino: Grupo): Avaliacao {
        const matriculaAvaliador: string = this.matricula;
        const avaliacao: Avaliacao = new Avaliacao(matriculaAvaliador, coerencia, apresentacao, utilidade, futuro, grupoDestino);
        return avaliacao;
    }
}

export default Professor;