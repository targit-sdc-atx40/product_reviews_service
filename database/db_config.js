const { Client } = require('pg');
require('dotenv').config();
const client = new Client({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW
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

const addReviews = (header, stars, post_date, username, body, sku_ID, callback) => {
  client.query(`INSERT INTO reviews (header, stars, post_date, username, body, sku_ID) VALUES ('${header}', ${stars}, '${post_date}', '${username}', '${body}', ${sku_ID})`, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {client, recentReviews, helpfulReviews, allReviews, addReviews};