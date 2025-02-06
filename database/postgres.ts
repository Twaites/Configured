import pg from 'pg';
const { Client } = pg;
import '../config/env.js  '; 

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const pgClient = new Client({
  connectionString: process.env.DATABASE_URL
});

pgClient.connect();

pgClient.on("error", (err) => {
  console.error("PostgreSQL error: ", err);
});

export default pgClient;
