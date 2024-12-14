const { Sequelize } = require("sequelize");

const getNewClient = () => {
  return new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      dialect: "postgres",
      logging: false,
      dialectOptions: {
        ssl: {
          require: process.env.NODE_ENV === "production",
        },
      },
    }
  );
};

const testConnection = async () => {
  try {
    const sequelize = getNewClient();
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default {
  testConnection,
  getNewClient,
};
