import { Router } from "express";
import professorController from "../controllers/professorController";
import avaliacaoController from "../controllers/avaliacaoController";
import grupoController from "../controllers/grupoController";

const professorRouter = Router();

professorRouter.get('/professores', professorController.listarProfessores);

professorRouter.post('/professor', professorController.criarProfessor);

professorRouter.put('/professor', professorController.updateProfessor);

professorRouter.delete('/professor', professorController.deleteProfessor);

professorRouter.post("/professor/avaliacao", avaliacaoController.criarAvaliacao);

professorRouter.put('/professor/avaliacao', avaliacaoController.updateAvalicao);

professorRouter.delete('/professor/avaliacao', avaliacaoController.deleteAvaliacao);

professorRouter.get('/professor/grupos', grupoController.listarGrupos);

professorRouter.post('professor/grupo', grupoController.criarGrupo);

professorRouter.put('/professor/grupo', grupoController.updateGrupo);

professorRouter.delete('/professor/grupo', grupoController.deleteGrupo);

export default professorRouter;