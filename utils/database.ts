import sql, { config as SqlConfig, ConnectionPool } from 'mssql';

let isConnected = false;

const config: SqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || 'localhost', // You can use 'localhost\\instance' to connect to named instance (e.g. localhost\\SQLEXPRESS) or 'DB_SERVER_URI,1433' to connect to a specific port
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Use encryption
    enableArithAbort: true, // Enable arithabort
  },
};

let pool: ConnectionPool | null = null;

export const connectToDatabase = async (): Promise<ConnectionPool> => {
  if (!pool) {
    try {
      pool = await sql.connect(config);
      console.log('Connected to the database');
    } catch (err) {
      console.error('Database connection failed', err);
      throw err;
    }
  }
  return pool;
};

export const getConnection = (): ConnectionPool => {
  if (!pool) {
    throw new Error('Database connection not established');
  }
  return pool;
};