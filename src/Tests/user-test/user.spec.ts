import { beforeEach, describe, it } from "node:test";
import assert from "node:assert";
import { UserService } from "../../Services/User.service";
import { sequelize } from "../../Config/database";

describe('User tests', () => {
    beforeEach(async () => {
        // Breakpoint aqui para debug da configuração inicial
        console.log('Limpando database para teste...');
        await sequelize.truncate({ cascade: true });
        console.log('Database limpo!');
    })

    it("Should create user in data base", async () => {
        // Definindo variáveis de teste
        const name = "Test user";
        const email = "test@example.com";
        const password = "securePassword123";
        
        // Breakpoint aqui para inspecionar as variáveis antes da criação
        console.log('Criando usuário com dados:', { name, email, password });
        
        // Breakpoint aqui para debug do serviço
        const result = await UserService.createUser(name, email, password);
        
        // Breakpoint aqui para inspecionar o resultado
        console.log('Usuário criado:', result);
        
        // Adicionar validação para confirmar que o usuário foi criado
        assert.ok(result, 'Usuário deve ser criado com sucesso');
    });
})
