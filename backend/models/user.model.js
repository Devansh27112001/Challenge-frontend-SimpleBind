import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const userSchema = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
  },
});

await sequelize.sync();
export default userSchema;
