const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "postgresdb",
  database: "db",
  password: "pass",
  port: 5432
});

const helloWorld = () => {
  pool.query(
    "SELECT $1::text as message",
    ["Hello world!"],
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  );
};

helloWorld();
