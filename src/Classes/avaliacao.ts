import Grupo from "./grupo";

class Avaliacao {
    matriculaAvaliador: string;
    coerencia: number;
    apresentacao: number;
    utilidadeSocial: number;
    futuro: number;
    grupoDestino: Grupo;


    constructor(matricula: string, coerencia: number, apresentacao: number, utilidade: number, futuro: number, grupoDestino: Grupo){
        this.matriculaAvaliador = matricula;
        this.coerencia = coerencia;
        this.apresentacao = apresentacao;
        this.utilidadeSocial = utilidade;
        this.futuro = futuro;
        this.grupoDestino = grupoDestino;
    }

    

}

export default Avaliacao;