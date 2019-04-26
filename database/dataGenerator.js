const fs = require('fs');
const faker = require('faker');
const http = require('http');


// const productGenerator = fs.createWriteStream('./tonsOfData.csv');
// fs.open('./tonsOfData.csv', (err, fd) => {
//     if (err) {
//         throw err;
//     }
//     productGenerator.write(`sku,title,photo_url,price,description`);
//     for (let i = 1; i < 10000000; i++) {
//         productGenerator.write(`${i},"${faker.commerce.productName()}","${faker.image.animals()}",${faker.commerce.price()},"${faker.lorem.words()}" \n`);
//     }
//     fs.close(fd, () => {
//         console.log(`finished`)
//     });
// });

const reviewsGenerator = fs.createWriteStream('./evenMoreData.csv');
fs.open('./evenMoreData.csv', (err, fd) => {
    if (err) {
        throw err;
    }
    reviewsGenerator.write(`review_num,stars,username,body, \n`);
    for (let i = 0; i < 10000000; i++) {
        reviewsGenerator.write(`${i + 1},${faker.random.number({ min: 1, max: 5 })},"${faker.internet.userName()}","${faker.lorem.sentence()}" \n`);
    }
    fs.close(fd, () => {
        console.log(`donezo`);
    });
});

// node --max-old-space-size=4096 <path_to_filename>rm 