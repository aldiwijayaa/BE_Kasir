const db = require('../helpers/db');

exports.getAllTransactions = (cb) => {
  db.query('SELECT * FROM transaction ORDER BY id ASC', (err, res) => {
    cb(res.rows);
  });
};

exports.createTransaction = (data, cb) => {
  const query = `INSERT INTO transaction(id, total, created_at, updated_at) VALUES($1, $2, $3, $4) RETURNING *`;
  const val = [data.id, data.total, data.created_at, data.updated_at];
  db.query(query, val, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(err, res.rows);
    }
  });
};