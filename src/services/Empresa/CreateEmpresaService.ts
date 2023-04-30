import prismaClient from "../../prisma";

interface EmpresaRequest {
  empresa: string;
  cnpj: string
}

class CreateEmpresaService {
  async execute({ empresa, cnpj }: EmpresaRequest) {
    //verficar se campo esta preenchido

    if (!empresa) {
      throw new Error("Empresa invalida!");
    }

    if (!cnpj){
      throw new Error("CNPJ inválido!")
    }

    if(cnpj.length > 14 && cnpj.length < 14 ){
      throw new Error("CNPJ inválido! min 14 digítos")
    }

    const empresaExist = await prismaClient.empresa.findUnique({
      where: {
        empresa: empresa,
      },
    });

    if (empresaExist) {
      throw new Error("Empresa já cadastrada");
    }

    const cnpjExist = await prismaClient.empresa.findFirst({
      where:{
        cnpj: cnpj
      }
    })

    if (cnpjExist){
      throw new Error("CNPJ já cadastrado")
    }


    const createEmpresa = await prismaClient.empresa.create({
      data: {
        empresa: empresa,
        cnpj: cnpj
      },
    });
    return createEmpresa;
  }
}


export { CreateEmpresaService };
