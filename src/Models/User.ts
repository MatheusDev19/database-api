import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Config/database';

export class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Conexão com o banco de dados;
    timestamps: true, // Adiciona createdAt e updatedAt;
    modelName: 'User', // Nome do modelo, por padrão será o nome da classe;
    tableName: 'users', // Nome da tabela no banco de dados;
  }
);

User.sync({ alter: true }) // Tenta alterar a estrutura da tabela para bater com o modelo atual.

  .then(() => {
    console.log('🟢 Modelo User sincronizado com sucesso!');
  })
  .catch((error) => {
    console.error('🔴 Erro ao sincronizar o modelo User:', error);
  });

export default User;
