import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import grupoService from "../services/grupoService";

class grupoController{

    constructor(){}

    async criarGrupo(req: Request, res: Response){
        const dados: Prisma.GrupoCreateInput = req.body;
        try{
            const novoGrupo = await grupoService.criarGrupo(dados)
            res.status(200).json({
                status: 'ok',
                novoGrupo: novoGrupo
            });

        } catch(error) {
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarGrupos(req: Request, res: Response){
        const Grupos = grupoService.listarGrupo();

        res.status(200).json({
            status: 'ok',
            Grupos: Grupos
        })
    }

    async updateGrupo(req: Request, res: Response){
        const dados: Prisma.GrupoCreateInput = req.body;
        const id: number = req.body
        const Grupo = grupoService.atualizarGrupo(id, dados);

        res.status(200).json({
            status: 'ok',
            Grupo: Grupo
        })
    }

    async deleteGrupo(req: Request, res: Response){
        const id: number = req.body;
        const Grupo = grupoService.deletarGrupo(id);

        res.status(200).json({
            status: 'ok',
            Grupo: Grupo
        })
    }
    }


export default new grupoController;