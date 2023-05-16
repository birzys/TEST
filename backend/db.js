const mysql = require("mysql2");

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...databaseConfig,
  database: "",
});

console.log(" cia papildomas console log", databaseConfig);

dbConnection.query("CREATE DATABASE IF NOT EXISTS blog_posts", function (err) {
  if (err) throw err;
  console.log("Database blog_posts created");

  dbConnection.query("USE blog_posts", (err) => {
    if (err) throw err;

    const blogTabQuery = `
    CREATE TABLE IF NOT EXISTS posts (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        text VARCHAR(255) NOT NULL,
        image VARCHAR(100) NOT NULL,
        primary key (id)
    )`;
    dbConnection.query(blogTabQuery, (err) => {
      if (err) throw err;
      console.log("posts table created");
    });
  });
});
module.exports = {
  dbConnection,
};
