-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transporte" (
    "id" SERIAL NOT NULL,
    "placa" TEXT,
    "tipo_tranporte" TEXT,
    "modelo" TEXT,
    "cadastro_id" INTEGER NOT NULL,

    CONSTRAINT "transporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cadastros" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" TEXT,
    "cpf" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "empresa_id" INTEGER NOT NULL,

    CONSTRAINT "cadastros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros" (
    "id" TEXT NOT NULL,
    "hora_entrada" TEXT,
    "hora_saida" TEXT,
    "data_registro" TEXT NOT NULL,
    "observacao" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "cadastro_id" INTEGER NOT NULL,

    CONSTRAINT "registros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresas_cnpj_key" ON "empresas"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "empresas_empresa_key" ON "empresas"("empresa");

-- CreateIndex
CREATE UNIQUE INDEX "cadastros_cpf_key" ON "cadastros"("cpf");

-- AddForeignKey
ALTER TABLE "transporte" ADD CONSTRAINT "transporte_cadastro_id_fkey" FOREIGN KEY ("cadastro_id") REFERENCES "cadastros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cadastros" ADD CONSTRAINT "cadastros_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros" ADD CONSTRAINT "registros_cadastro_id_fkey" FOREIGN KEY ("cadastro_id") REFERENCES "cadastros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
