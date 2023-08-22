import { Sequelize } from "sequelize-typescript";
import { bloodbankmanagementsystem_sql_user_vidura } from "../models/donations.model";

export const connect = () => {
  const hostName = process.env.PG_HOST;
  const userName = process.env.PG_USERNAME;
  const password = process.env.PG_PASSWORD;
  const database = process.env.PG_DATABASE;

  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: "postgres",
    repositoryMode: true,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  sequelize.addModels([bloodbankmanagementsystem_sql_user_vidura]);

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
};
