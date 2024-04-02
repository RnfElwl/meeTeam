import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  port: "1521",
  user: "system",
  password: "1234",
  database: "test",
});

function handleDisconnect() {
  db.connect(function (err) {
    db.query("SELECT 1");
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 5000);
    }
  });

  db.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      return handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();
