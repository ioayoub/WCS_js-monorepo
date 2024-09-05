// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
import mysql from "mysql2/promise";

const client: mysql.Pool = mysql.createPool({
  host: DB_HOST,
  port: Number.parseInt(DB_PORT as string),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Ready to export
export default client;

// Types export
type DatabaseClientType = mysql.Pool;
type ResultType = mysql.ResultSetHeader;
type RowsType = mysql.RowDataPacket[];

export type { DatabaseClientType, ResultType, RowsType };
