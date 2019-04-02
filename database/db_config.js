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
  client.query('SELECT TOP 4 * FROM reviews ORDER BY reviews.stars DESC INNER JOIN products ON products.sku = reviews.sku_ID', (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.send(200).json(results.rows);
    }
  });
};

const recent = (req, res) => {
  client.query('SELECT TOP 4 * FROM reviews ORDER BY reviews.post_date DESC INNER JOIN products ON products.sku = reviews.sku_ID', (err, result) => {
    if (err) {
      console.error(err);
    }
    else {
      res.send(200).json(result.rows);
    }
  });
};

module.exports = {client, recent, helpful};