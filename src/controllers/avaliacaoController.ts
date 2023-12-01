import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import avaliacaoService from "../services/avaliacaoService";

class avaliacaoController{

    constructor(){}

    async criarAvaliacao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        
        if(dados.matriculaAvaliador !== ""){
            const novoAvaliacao = await avaliacaoService.criarAvaliacao(dados)
            res.status(200).json({
                status: 'ok',
                novoGrupo: novoAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarAvaliacoes(req: Request, res: Response){
        const avaliacoes = avaliacaoService.listarAvaliacao();

        res.status(200).json({
            status: 'ok',
            avaliacoes: avaliacoes
        })
    }

    async updateAvalicao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        const id: number = req.body
        const avaliacao = avaliacaoService.atualizarAvaliacao(id, dados);

        res.status(200).json({
            status: 'ok',
            avaliacao: avaliacao
        })
    }

    async deleteAvaliacao(req: Request, res: Response){
        const id: number = req.body;
        const avaliacao = avaliacaoService.deletarAvaliacao(id);

        res.status(200).json({
            status: 'ok',
            avaliacao: avaliacao
        })
    }
    }


export default new avaliacaoController;