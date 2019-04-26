const express = require('express');
const app = express();
const port = 3002;
// const db = require('../database/db_config.js');
// const { recentReviews } = require('../database/db_config.js');
// const { helpfulReviews } = require('../database/db_config.js');
// const { allReviews } = require('../database/db_config.js');
// const { addReviews } = require('../database/db_config.js');
const cors = require('cors')
const { addReviews } = require('../database/db.js');
const template = require('./template.js')

app.use(express.json({ urlencoded: true }));
app.use(cors());
app.use(express.static('./dist'));

app.get('/template', template.get)
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/product/reviews/recent', (req, res) => {
  console.log('in server', req.query.sku);
  recentReviews(req.query.sku, (err, data) => {
    if (err) {
      console.error(error);
    } else {
      res.send(data.rows);
    }
  })
});
app.get('/product/reviews/helpful', (req, res) => {
  helpfulReviews(req.query.sku, (err, data) => {
    if (err) {
      console.error(error);
    } else {
      res.send(data.rows);
    }
  })
});
app.get('/product/reviews/all', (req, res) => {
  allReviews(req.query.sku, (err, data) => {
    if (err) {
      console.error(error);
    } else {
      res.send(data.rows);
    }
  })
});
app.post('/product/reviews', (req, res) => {
  console.log('IVE BEEN CALLED!!!!!!!!!!')
  console.log('wreckkedBod', req.body)
  addReviews(req.body.header, req.body.stars, req.body.post_date, req.body.username, req.body.body, req.body.sku_ID, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.end();
    }
  })
})
/******************* BEGINNING OF THE WORK THAT I AM DOING *****************/
app.post(`/seed`, (req, res) => {
  //write a script that mass inserts data to the db
})

app.listen(port, () => { console.log('Clean up on aisle ', port) });