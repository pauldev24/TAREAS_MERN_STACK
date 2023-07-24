import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "./config.js";

export const con = new createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});
//Para planet scape
/*export const con = new createPool({
  host: "aws.connect.psdb.cloud",
  user: "9rct3j08b59qo63rrd7v",
  password: "pscale_pw_zpbtHA2oHtzXOx1NbhlJfTItdjwEVUQrZgcg30ylxiJ",
  database: "tasksbd",
  ssl: { rejectUnauthorized: false },
});*/

/*export const con = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tasksbd'
})*/
