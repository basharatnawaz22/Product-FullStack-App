module.exports = {
  // HOST: "beq5fga4iw81mpcn2zfo-mysql.services.clever-cloud.com",
  // USER: "uuyi8jywaz7gmmeo",
  // PASSWORD: "lsLOKzQYLEnEvDsGkAzF",
  // DB: "beq5fga4iw81mpcn2zfo",
  // dialect: "mysql",

  HOST: "localhost",
  USER: "root",
  PASSWORD: "Database@22432",
  DB: "node_sequelize_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
