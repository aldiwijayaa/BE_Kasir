const db = require('../helpers/db');

const { LIMIT_DATA } = process.env;

exports.getAllUsers = (keyword, limit = parseInt(LIMIT_DATA), offset = 0, sortBy, sort, cb) => {
  // console.log(sortBy);
  db.query(`SELECT * FROM users WHERE email LIKE '%${keyword}%' ORDER BY ${sortBy} ${sort} LIMIT $1 OFFSET $2`, [limit, offset], (err, res) => {
    // console.log(res);
    cb(err, res.rows);
  });
};

exports.createUsers = (data, cb) => {
  const query = 'INSERT INTO users(email, password, username, pin) VALUES($1, $2, $3, $4) RETURNING *';
  const value = [data.email, data.password, data.username, data.pin];
  db.query(query, value, (err, res) => {
    if (res) {
      // console.log(res);
      cb(err, res.rows);
    } else {
      console.log(err);
      cb(err);
    }
  });
};

exports.deleteUser = (id, cb) => {
  const query = 'DELETE FROM users WHERE id=$1 RETURNING *';
  const value = [id];
  db.query(query, value, (err, res) => {
    cb(res.rows);
  });
};


