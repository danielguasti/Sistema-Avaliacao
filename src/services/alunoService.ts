import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class alunoService {
    constructor(){

    }


async listarAlunos(id?: number) {
    try{
        if(id){
            const aluno = await prisma.aluno.findUnique({
                where: {
                    id
                }
            });
            return aluno;
        }else{
            const alunos = await prisma.aluno.findMany();
            return alunos;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarAluno(aluno: Prisma.AlunoCreateInput){

    try{
        const novoAluno = await prisma.aluno.create({
            data: aluno
        });
        return novoAluno;
    }catch(error){
        console.log(error);
        return null;
    }

}

async atualizarAluno(id: number, aluno: Prisma.AlunoUpdateInput){
    try{
        const atualizarAluno = await prisma.aluno.update({
            where: {
                id
            },
            data: aluno
        });

        return atualizarAluno;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarAluno(id: number){
    try{
        const deletarAluno = await prisma.aluno.delete({
            where: {
                id
            }
        });

        return deletarAluno;
    }catch(error){
        console.log(error);
        return null;
    }
}
}

export default new alunoService();