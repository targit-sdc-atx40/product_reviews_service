-- DROP DATABASE IF EXISTS reviews;

-- CREATE DATABASE reviews;

-- USE reviews;

CREATE TABLE IF NOT EXISTS product_reviews (
    sku SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    photo_url VARCHAR(200) NOT NULL,
    price MONEY NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
  review_num SERIAL PRIMARY KEY,
  header VARCHAR(100) NOT NULL, 
  stars INTEGER NOT NULL, 
  post_date TIMESTAMP NOT NULL, 
  body VARCHAR(500) NOT NULL, 
  sku_ID INTEGER REFERENCES product_reviews(sku)
);

CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY,
  username VARCHAR(50) NOT NULL, 
  review_id INTEGER REFERENCES reviews (review_num)
)

-- INSERT INTO product_reviews (title, photo_url, price, description) VALUES ('test', 'https://www.theflavorbender.com/wp-content/uploads/2014/09/Simpsons-Doughnuts-4238-Copy-1.jpg', 4.20, 'more trest');

-- COPY persons(first_name,last_name,dob,email) 
-- Users/jonathonlopez/Desktop/product_reviews_service/database
-- psql -c "COPY tbname FROM '/tmp/the_file.csv' delimiter '|' csv;"
-- CREATE INDEX test1_id_index ON test1 (id);
