import express, { Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes/router";

const app = express();

//Configura a aplicação para  usar JSON no body da requisição
app.use(express.json());
app.use(router);

//Tratamento de erros
app.use((err: Error, req: Request, res: Response, next: Function) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

//Porta onde meu servidor está rodando
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);

console.clear();
