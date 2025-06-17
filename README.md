# Backend - Estrutura MVC com Node.js, Express e Sequelize

Este projeto implementa um backend seguindo o padrão **MVC** (Model-View-Controller) utilizando Node.js, Express e Sequelize para gerenciamento de banco de dados relacional.

---

## 📁 Estrutura de Pastas

```
src/
  Config/
    database.ts         # Configuração do Sequelize
  Controllers/
    User.controller.ts  # Lógica de controle do usuário
  Database/
    Models/
      User.ts           # Model do usuário
    Migrations/
      ...               # Migrações do banco
  Routes/
    User.routes.ts      # Rotas de usuário
  Services/
    User.service.ts     # Lógica de negócio do usuário
  server.ts             # Inicialização do servidor Express
```

---

## 🔄 Fluxo dos Dados

1. **Cliente (Front-end)** faz uma requisição HTTP (ex: POST `/users`).
2. **Routes** recebem a requisição e encaminham para o controller correspondente.
3. **Controller** extrai e valida os dados da requisição, chama o service.
4. **Service** executa a lógica de negócio e interage com o model.
5. **Model** acessa o banco de dados e retorna os dados para o service.
6. **Service** retorna o resultado para o controller.
7. **Controller** monta e envia a resposta HTTP para o cliente.

---

## 🔄 Fluxo dos Dados (segundo exemplo)

1. **Cliente (Front-end)** Faz uma requisição HTTP (ex: POST `/users`).
2. **Rotas** Recebem a requisição e encaminham para o controller correspondente.
3. **Controller** Valida e processa os dados da requisição, chama o service, trata erros e monta a resposta.
4. **Service** Contém a lógica de negócio e chama os models para acessar o banco de dados.
5. **Model** Representa as entidades e faz a comunicação direta com o banco.
6. **Service** Retorna o resultado para o controller.
7. **Controller** Monta e envia a resposta HTTP para o cliente.

---

## ✅ Boas Práticas

- **Validação**: Sempre valide os dados recebidos no controller ou service.
- **Tratamento de Erros**: Use try/catch nos controllers para capturar e responder erros.
- **Separação de Responsabilidades**: Não coloque lógica de negócio no controller ou nas rotas.
- **Reutilização**: Services podem ser reutilizados em diferentes controllers.

---

## 💡 Observações

- O padrão MVC facilita a manutenção e o crescimento do projeto.
- Use middlewares para autenticação, logging e validação de dados.
- Documente sempre os endpoints e a estrutura dos dados esperados.

---

## 🚀 Inicialização

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` com as credenciais do banco.
3. Execute as migrações:
   ```bash
   npx sequelize-cli db:migrate
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

## 📝 Licença

Este projeto está sob a licença
