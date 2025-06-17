import express, { Request, Response } from 'express';
import { sequelize } from './Config/database';
import { userRouters } from './Routes/User.routes';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
const PORT = 3000;

server.get('/', (req: Request, res: Response) => {
  res.send('Olá do backend. Conexão bem sucedida!');
});

server.use('/users', userRouters);

server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('🔴 Erro ao conectar no banco:', error);
  }
  console.log(`🚀 Servidor rodando na porta: ${PORT}`);
});
