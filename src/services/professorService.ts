import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class professorService {
    constructor(){

    }


async listarProfessor(id?: number) {
    try{
        if(id){
            const professor = await prisma.professor.findUnique({
                where: {
                    id
                }
            });
            return professor;
        }else{
            const professores = await prisma.professor.findMany();
            return professores;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarProfessor(professor: Prisma.ProfessorCreateInput){

    try{
        const novoProfessor = await prisma.professor.create({
            data: professor
        });
        return novoProfessor;
    }catch(error){
        console.log(error);
        return null;
    }

}

async atualizarProfessor(id: number, professor: Prisma.ProfessorUpdateInput){
    try{
        const atualizarProfessor = await prisma.professor.update({
            where: {
                id
            },
            data: professor
        });

        return atualizarProfessor;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarProfessor(id: number){
    try{
        const deletarProfessor = await prisma.professor.delete({
            where: {
                id
            }
        });

        return deletarProfessor;
    }catch(error){
        console.log(error);
        return null;
    }
}
}

export default new professorService();