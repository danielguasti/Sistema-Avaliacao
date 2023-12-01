import { Router } from "express";
import alunoController from "../controllers/alunoController";
import avaliacaoController from "../controllers/avaliacaoController";

const alunoRouter = Router();

alunoRouter.get('/alunos', alunoController.listarAlunos);

alunoRouter.post('/aluno', alunoController.criarAluno);

alunoRouter.put('/aluno', alunoController.updateAlunos);

alunoRouter.delete('/aluno', alunoController.deleteAlunos);

alunoRouter.get("aluno/avaliacao", alunoController.avaliacoesFeitas);

alunoRouter.post("/aluno/avaliacao", avaliacaoController.criarAvaliacao);

alunoRouter.put('/aluno/avaliacao', avaliacaoController.updateAvalicao);

alunoRouter.delete('/aluno/avaliacao', avaliacaoController.deleteAvaliacao);

export default alunoRouter;