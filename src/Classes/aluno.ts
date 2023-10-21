import Pessoa from "./pessoa";
import Grupo from "./grupo";

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

    criarAvaliacao(){
        
    }
}

export default Aluno;