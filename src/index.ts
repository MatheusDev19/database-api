import express, { Request, Response } from 'express';
import { sequelize } from './Config/database';
import User from './Models/User';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
const PORT = 3000;

server.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API is running!', userModel: User });
}); 


server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('🔴 Erro ao conectar no banco:', error);
  }
  console.log(`🚀 Servidor rodando na porta: ${PORT}`);
});
