/* export class Client{ 
    constructor(id, firstName, lastName, email, password, street, number, postalCode, city, country, phone){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.street = street;
        this.number = number;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.phone = phone;
    }
} */

import { DataTypes } from "sequelize";

export function client(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING(30), allowNull: false },
    lastName: { type: DataTypes.STRING(30), allowNull: false },
    email: { type: DataTypes.STRING(30), allowNull: false },
    password: { type: DataTypes.STRING(30), allowNull: false },
    street: { type: DataTypes.STRING(30), allowNull: false },
    number: { type: DataTypes.STRING(30), allowNull: false },
    postalCode: { type: DataTypes.INTEGER, allowNull: false },
    city: { type: DataTypes.STRING(30), allowNull: false },
    country: { type: DataTypes.STRING(30), allowNull: false },
    phone: { type: DataTypes.STRING(30), allowNull: false }
  };
  const options = {
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  };
  return sequelize.define("Client", attributes, options);
}