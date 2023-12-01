import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import professorService from "../services/professorService";

class professorController{

    constructor(){}

    async criarProfessor(req: Request, res: Response){
        const dados: Prisma.ProfessorCreateInput = req.body;
        
        if(dados.nome !== "" && dados.matricula !== ""){
            const novoProfessor = await professorService.criarProfessor(dados)
            res.status(200).json({
                status: 'ok',
                novoProfessor: novoProfessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarProfessores(req: Request, res: Response){
        const Professores = professorService.listarProfessor();

        res.status(200).json({
            status: 'ok',
            Professores: Professores
        })
    }

    async updateProfessor(req: Request, res: Response){
        const dados: Prisma.ProfessorCreateInput = req.body;
        const id: number = req.body
        const Professor = professorService.atualizarProfessor(id, dados);

        res.status(200).json({
            status: 'ok',
            Professor: Professor
        })
    }

    async deleteProfessor(req: Request, res: Response){
        const id: number = req.body;
        const Professor = professorService.deletarProfessor(id);

        res.status(200).json({
            status: 'ok',
            Professor: Professor
        })
    }
    }


export default new professorController;