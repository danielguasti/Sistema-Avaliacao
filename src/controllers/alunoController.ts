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
                novoAluno: novoAluno
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
            alunos: alunos
        })
    }

    async avaliacoesFeitas(req: Request, res: Response){
        const id: number = req.body;
        const avaliacoes = alunoService.avaliacoesFeitas(id);

        res.status(200).json({
            status: 'ok',
            avaliacoes: avaliacoes
        })
    }

    async updateAlunos(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        const id: number = req.body;
        const aluno = alunoService.atualizarAluno(id, dados);

        res.status(200).json({
            status: 'ok',
            aluno: aluno
        })
    }

    async deleteAlunos(req: Request, res: Response){
        const id: number = req.body;
        const aluno = alunoService.deletarAluno(id)

        res.status(200).json({
            status: 'ok',
            aluno: aluno
        })
    }
    }


export default new alunoController;