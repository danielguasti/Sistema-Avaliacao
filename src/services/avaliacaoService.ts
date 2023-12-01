import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class avaliacaoService {
    constructor(){

    }


async listarAvaliacao(id?: number) {
    try{
        if(id){
            const avaliacao = await prisma.avaliacao.findUnique({
                where: {
                    id
                }
            });
            return avaliacao;
        }else{
            const avaliacoes = await prisma.avaliacao.findMany();
            return avaliacoes;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarAvaliacao(avaliacao: Prisma.AvaliacaoCreateInput){

    try{
        const novoAvaliacao = await prisma.avaliacao.create({
            data: avaliacao
        });
        return novoAvaliacao;
    }catch(error){
        console.log(error);
        return null;
    }

}

async atualizarAvaliacao(id: number, avaliacao: Prisma.AvaliacaoUpdateInput){
    try{
        const atualizarAvaliacao = await prisma.avaliacao.update({
            where: {
                id
            },
            data: avaliacao
        });

        return atualizarAvaliacao;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarAvaliacao(id: number){
    try{
        const deletarAvaliacao = await prisma.avaliacao.delete({
            where: {
                id
            }
        });

        return deletarAvaliacao;
    }catch(error){
        console.log(error);
        return null;
    }
}
}

export default new avaliacaoService();