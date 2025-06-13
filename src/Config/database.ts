import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'exercicios',
  'matheus',
  'Linguinha123',
  {
    dialect: 'postgres',
    host: 'localhost',
  }
);
