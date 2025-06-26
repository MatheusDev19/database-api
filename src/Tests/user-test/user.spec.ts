import { beforeEach, describe, it } from "node:test";
import assert from "node:assert";
import { UserService } from "../../Services/User.service";
import User from "../../Database/Models/User";
import { Op } from "sequelize";

describe('User tests', () => {
    beforeEach(async () => {
        console.log("Limpando banco de dados...");
        await User.destroy({
            where: {
                email: {
                    [Op.like]: '%@test.com'  
                }
            },
            force: true,
        });
        console.log("Usuários de teste removidos.");
    });

    it("Should create user in data base", async () => {
        const name = "Test user";
        const email = "test@test.com";
        const password = "securePassword123";

        console.log('Criando usuário com dados:', { name, email, password });
        const result = await UserService.createUser(name, email, password);
        console.log('Usuário criado:', result);
        assert.ok(result, 'Usuário deve ser criado com sucesso');
    });
})
