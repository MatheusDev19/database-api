import { beforeEach, describe, it, assert } from "node:test";
import { UserService } from "../../Services/User.service";
import { sequelize } from "../../Config/database";

describe('User tests', () => {
    it("", () => {
        beforeEach(async () => {
            await sequelize.truncate({ cascade: true });
        })

    })

    it("Should create user in data base", async () => {
        const name = "Test user";
        const email = "test@example.com";
        const password = "securePassword123";
        await UserService.createUser(name, email, password);
    });
})