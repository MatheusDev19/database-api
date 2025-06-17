import express, { Request, Response } from 'express';
import { sequelize } from './Config/database';
import { UserService } from './Services/User.service';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
const PORT = 3000;

server.get('/', (req: Request, res: Response) => {
  res.send('Olá do backend. Conexão bem sucedida!');
});

server.post('/users', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserService.createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
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
