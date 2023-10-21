-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "grupoId" INTEGER NOT NULL,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "liderId" INTEGER NOT NULL,
    CONSTRAINT "Grupo_liderId_fkey" FOREIGN KEY ("liderId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matriculaAvaliador" TEXT NOT NULL,
    "coerencia" INTEGER NOT NULL,
    "apresentacao" INTEGER NOT NULL,
    "utilidadeSocial" INTEGER NOT NULL,
    "futuro" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_liderId_key" ON "Grupo"("liderId");
