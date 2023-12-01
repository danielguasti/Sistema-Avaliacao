import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class grupoService {
    constructor(){

    }


async listarGrupo(id?: number) {
    try{
        if(id){
            const grupo = await prisma.grupo.findUnique({
                where: {
                    id
                }
            });
            return grupo;
        }else{
            const grupos = await prisma.grupo.findMany();
            return grupos;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarGrupo(grupo: Prisma.GrupoCreateInput){

    try{
        const novoGrupo = await prisma.grupo.create({
            data: grupo
        });
        return novoGrupo;
    }catch(error){
        console.log(error);
        return null;
    }

}

async atualizarGrupo(id: number, grupo: Prisma.GrupoUpdateInput){
    try{
        const atualizarGrupo = await prisma.grupo.update({
            where: {
                id
            },
            data: grupo
        });

        return atualizarGrupo;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarGrupo(id: number){
    try{
        const deletarGrupo = await prisma.grupo.delete({
            where: {
                id
            }
        });

        return deletarGrupo;
    }catch(error){
        console.log(error);
        return null;
    }
}
}

export default new grupoService();