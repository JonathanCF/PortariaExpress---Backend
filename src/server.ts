import express, {Request, Response, NextFunction, json} from "express";
import "express-async-errors";
import cors from 'cors'

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);

// Tratamento de erro

app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
	if(err instanceof Error){
		// Se for uma instancia do tipo error
		return res.status(400).json({
			err: err.message
		})
	}

	return res.status(500).json({
		status: 'error',
		message: 'Internal server error'
	})

})

app.listen(3333, () => console.log("Server online port 3333"));
