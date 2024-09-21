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
      isAlpha: {
        args: true,
        msg: "Title of the book should only contain alphabets",
      },
    },
  },

  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        args: true,
        msg: "Author of the book should only contain alphabets",
      },
    },
  },

  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
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
