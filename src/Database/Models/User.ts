import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../Config/database';

export class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    paranoid: true, // Adiciona deletedAt para soft delete;
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
