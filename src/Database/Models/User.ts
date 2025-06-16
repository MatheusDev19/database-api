import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../Config/database';
import bcrypt from 'bcrypt';

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

User.beforeCreate(async (user: User) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

User.beforeUpdate(async (user) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    user.setDataValue('password', await bcrypt.hash(user.password, salt));
  }
});

export default User;
