import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const bookSchema = sequelize.define("Book", {
  entryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: {
      args: true,
      msg: "Entry ID already exists",
    },
    validate: {
      isNumeric: {
        args: true,
        msg: "Entry ID should only contain numbers",
      },
    },
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[A-Za-z0-9 ,:;!?.'"\-()]+$/,
        msg: "The Title of the book entered is invalid",
      },
    },
  },

  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[A-Za-z ,.'\-]+$/,
        msg: "The value for the Author field is invalid",
      },
    },
  },

  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: {
        args: true,
        msg: "Please enter a valid date",
      },
    },
  },

  isbnNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: "ISBN number should only contain numbers",
      },
    },
  },
});

await sequelize.sync();
export default bookSchema;
