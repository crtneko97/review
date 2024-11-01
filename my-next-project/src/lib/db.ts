// lib/db.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'crtneko',
  password: 'JK@@jk22',
  database: 'reviewdb',
});

export default pool;
