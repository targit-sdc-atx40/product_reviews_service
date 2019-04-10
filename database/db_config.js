const { Client } = require('pg');
const client = new Client({
  host: 'product-info.cbxobgkygcxr.us-east-2.rds.amazonaws.com',
  port: 5432,
  user: 'dvcastillo37',
  database: 'product_info',
  password: 'password'
})

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

const helpfulReviews = (sku, callback) => {
  client.query(`SELECT * FROM reviews WHERE sku_ID = ${sku} ORDER BY reviews.stars DESC LIMIT 4`, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, results)
    }
  });
};

const recentReviews = (sku, callback) => {
  client.query(`SELECT * FROM reviews WHERE sku_ID = ${sku} ORDER BY reviews.post_date DESC LIMIT 4`, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, result)
    }
  });
};

const allReviews = (sku, callback) => {
  client.query(`SELECT * FROM reviews WHERE sku_ID = ${sku}`, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {client, recentReviews, helpfulReviews, allReviews};