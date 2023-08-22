"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const donations_model_1 = require("../models/donations.model");
const connect = () => {
    const hostName = process.env.PG_HOST;
    const userName = process.env.PG_USERNAME;
    const password = process.env.PG_PASSWORD;
    const database = process.env.PG_DATABASE;
    const sequelize = new sequelize_typescript_1.Sequelize(database, userName, password, {
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
    sequelize.addModels([donations_model_1.bloodbankmanagementsystem_sql_user_vidura]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    return db;
};
exports.connect = connect;
//# sourceMappingURL=database.config.js.map