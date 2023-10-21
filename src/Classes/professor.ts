import Pessoa from "./pessoa";

class Professor implements Pessoa {
    nome: string;
    matricula: string;


    constructor(nome: string, matricula: string){
        this.nome = nome;
        this.matricula = matricula
    }

    criarAvaliacao(){
        
    }
}

export default Professor;