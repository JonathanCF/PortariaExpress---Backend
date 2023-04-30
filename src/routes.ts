import { Router } from "express";

import { CreateUserController } from "./controllers/Users/CreateUserController";
import { AuthUserController } from "./controllers/Users/AuthUserController";
import { DetailUserController } from "./controllers/Users/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateEmpresaController } from "./controllers/Empresas/CreateEmpresaController";
import { ListarEmpresaController } from "./controllers/Empresas/ListarEmpresaController";
import { ListByIDEmpresaController } from "./controllers/Empresas/ListByIDEmpresaController";
import { UpdateEmpresaController } from "./controllers/Empresas/UpdateEmpresaController";
import { BuscarEmpresaController } from "./controllers/Empresas/BuscarEmpresaController";

import { CreateRegistroController } from "./controllers/Registro/CreateRegistroController";
import { BuscarIdRegistroController } from "./controllers/Registro/BuscarIdRegistroController";
import { FindRegistroController } from "./controllers/Registro/FindRegistroController";
import { UpdateRegistroController } from "./controllers/Registro/UpdateRegistroController";
import { ListarRegistrosController } from "./controllers/Registro/ListarRegistrosController";

import { CreateCadastroController } from "./controllers/Cadastro/CreateCadastroController";
import { SearchCadastroController } from "./controllers/Cadastro/SearchCadastroController";
import { ListarCadastrosController } from "./controllers/Cadastro/ListarCadastrosController";
import { ListaByIdCadastroController } from "./controllers/Cadastro/ListaByIdCadastroController";

const router = Router();

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS EMPRESA --

router.post("/empresa", isAuthenticated, new CreateEmpresaController().handle);
router.get("/listaempresa",isAuthenticated,new ListarEmpresaController().handle
);
router.get("/empresa/id",isAuthenticated,new ListByIDEmpresaController().handle);
router.put("/update/empresa", isAuthenticated, new UpdateEmpresaController().handle)
router.get("/search_empresa", isAuthenticated, new BuscarEmpresaController().handle)

// -- ROTAS Cadastro --

router.post("/cadastro",isAuthenticated,new CreateCadastroController().handle);

router.get("/search", isAuthenticated, new SearchCadastroController().handle);

router.get("/listacadastro",isAuthenticated,new ListarCadastrosController().handle);

router.get("/listaid",isAuthenticated,new ListaByIdCadastroController().handle);

// -- ROTAS Registro --

router.post("/registro",isAuthenticated,new CreateRegistroController().handle);

router.get("/horasaida/registrar",isAuthenticated,new BuscarIdRegistroController().handle);

router.get("/listaentradas",isAuthenticated,new FindRegistroController().handle);

router.put("/update", isAuthenticated, new UpdateRegistroController().handle);

router.get("/listarregistros",isAuthenticated,new ListarRegistrosController().handle);

export { router };
