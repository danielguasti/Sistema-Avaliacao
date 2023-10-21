import Grupo from "./grupo";
import Avaliacao from "./avaliacao";

interface Pessoa {

    criarAvaliacao: (coerencia: number, apresentacao: number, utilidade: number, futuro: number, grupoDestino: Grupo) => Avaliacao;

}

export default Pessoa;