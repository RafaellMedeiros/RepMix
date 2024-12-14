import { DataTypes } from "sequelize";
import database from "infra/database.js";
const sequelize = database.getNewClient();

const Songs = sequelize.define("songs", {
  title: DataTypes.TEXT,
  tone: DataTypes.TEXT,
  position: DataTypes.INTEGER,
});

(async () => {
  await sequelize.sync();
})();

export default Songs;
