const { Client } = require('pg');
const client = new Client({
  database: 'product_info'
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

const helpful = (req, res) => {
  client.query('SELECT * FROM reviews ORDER BY reviews.stars DESC LIMIT 4', (err, results) => {
    if (err) {
      console.error(err);
    }
    res.status(200).json(results.rows);
  });
};

const recent = (req, res) => {
  client.query('SELECT * FROM reviews ORDER BY reviews.post_date DESC LIMIT 4', (err, result) => {
    if (err) {
      console.error(err);
    }
    res.status(200).json(result.rows);
  });
};

module.exports = {client, recent, helpful};