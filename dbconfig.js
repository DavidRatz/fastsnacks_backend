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
import { order } from "./models/order.js";
import { orderProduct } from "./models/orderProduct.js";
import { product } from "./models/product.js";
import { productFriterie } from "./models/productFriterie.js";
import { friterie } from "./models/friterie.js";
import { state } from "./models/state.js";
import { category } from "./models/category.js";
import { role } from "./models/role.js";

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
  db.Order = order(sequelize);
  db.OrderProduct = orderProduct(sequelize);
  db.Product = product(sequelize);
  db.ProductFriterie = productFriterie(sequelize);
  db.Friterie = friterie(sequelize);
  db.State = state(sequelize);
  db.Category = category(sequelize);
  db.Role = role(sequelize);

  db.Client.hasMany(db.Order);
  db.Order.belongsTo(db.Client);
 
  db.Product.belongsToMany(db.Order, { through: 'OrderProduct' });
  db.Order.belongsToMany(db.Product, { through: 'OrderProduct' });

  db.Product.belongsToMany(db.Friterie, { through: 'ProductFriterie' });
  db.Friterie.belongsToMany(db.Product, { through: 'ProductFriterie' });

  db.State.hasMany(db.Order);
  db.Order.belongsTo(db.State);

  db.Category.hasMany(db.Product);
  db.Product.belongsTo(db.Category);

  db.Role.hasMany(db.Friterie);
  db.Friterie.belongsTo(db.Role);

  // sync all models with database
  sequelize.sync({ alter: false });