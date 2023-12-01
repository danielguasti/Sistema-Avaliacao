import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import alunoService from "../services/alunoService"; 

class alunoController{

    constructor(){}

    async criarAluno(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        
        if(dados.matricula !== "" && dados.nome !== ""){
            const novoAluno = await alunoService.criarAluno(dados)
            res.status(200).json({
                status: 'ok',
                novoleilao: novoAluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarAlunos(req: Request, res: Response){
        const alunos = alunoService.listarAlunos();

        res.status(200).json({
            status: 'ok',
            usuarios: alunos
        })
    }

    async updateAlunos(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        const aluno = alunoService.atualizarAluno

        res.status(200).json({
            status: 'ok',
            aluno: aluno
        })
    }

    async deleteAlunos(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        const aluno = alunoService.deletarAluno

        res.status(200).json({
            status: 'ok',
            aluno: aluno
        })
    }
    }


export default new alunoController;