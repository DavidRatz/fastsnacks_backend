/* export const config = {
    user: 'sa',
    password: 'P@$$w0rd',
    server: 'localhost',
    database: 'fastsnacks',
    options:{
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'localhost',
        trustServerCertificate: true
    },
    port: 1433
} */

import { Sequelize } from "sequelize";
import { client } from "./models/client.js";

const sequelize = new Sequelize(
    "fastsnacks",
    "sa",
    "P@$$w0rd",
    {
      host: "localhost",
      port: 1433,
      dialect: "mssql",
      dialectOptions: {
        options: { encrypt: false },
      },
    }
  );
  
  export const db = {};
  db.Client = client(sequelize);
  // sync all models with database
  sequelize.sync({ alter: false });