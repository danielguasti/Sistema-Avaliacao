import Pessoa from "./pessoa";
import Grupo from "./grupo";
import Avaliacao from "./avaliacao";

class Aluno implements Pessoa {
    lider?: Grupo;
    nome: string;
    matricula: string;
    grupo: Grupo;


    constructor(nome: string, matricula: string, grupo: Grupo){
        this.nome = nome;
        this.matricula = matricula
        this.grupo = grupo;
    }

    criarAvaliacao(coerencia: number, apresentacao: number, utilidade: number, futuro: number, grupoDestino: Grupo): Avaliacao {
        const matriculaAvaliador: string = this.matricula;
        const avaliacao: Avaliacao = new Avaliacao(matriculaAvaliador, coerencia, apresentacao, utilidade, futuro, grupoDestino);
        return avaliacao;
    }
}   

export default Aluno;