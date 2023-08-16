// import { createPool } from "mysql2/promise";

// const pool = createPool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// });

// export default pool;

import mysql from "mysql2/promise";

// const dbConfig = {
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// };
const dbConfig = {
  port: 3306,
  user: "root",
  password: "",
  database: "mentorey",
};

async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("Connected to the database");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

export default createConnection;
