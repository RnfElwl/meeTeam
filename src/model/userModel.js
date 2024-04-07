import mysql from "mysql2";

class User {
  constructor() {
    this.connection = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Tmdduq11@@",
      database: "test",
    });
  }

  create(userData, callback) {
    const { name, email, id, password, password_check } = userData;
    if (password != password_check) return 0;
    const existSql = `select m_id, email from meet_team_users where m_id=${id} and email=${email}`;
    this.connection.query(existSql, (err, result) => {
      if (result) {
        const errorMessage = {
          errorMessage: "이메일 또는 아이디 이미 존재합니다",
        };
        callback(errorMessage);

        return;
      }
    });

    const sql = `INSERT INTO meet_team_users (email, m_name, m_id, m_password) values(${email}, ${name}, ${id}, ${password});`;
    this.connection.query(sql, (err, result) => {
      if (err) {
        this.connection.end();
        return callback(err, null);
      }
      this.connection.end();
      return callback(null, result.insertId); // 삽입된 레코드의 ID 반환
    });
  }
}

export default User;
