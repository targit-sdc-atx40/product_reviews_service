const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to the database');
})

const reviewsSchema = new mongoose.Schema({
    _id: Number,
    // header: String,
    stars: String,
    // post_date: Number,
    username: String,
    body: String,
});

const Review = mongoose.model('Review', reviewsSchema);

const addReviews = (review) => {
    const newReview = new Review({ id: review.id, stars: review.stars, username: review.username, body: review.body });
    newReview.addReviews();
}

const getAllReviews = (review, callback) => {
    Review.find({})
        .exec()
        .then((payload) => {
            callback(null, payload)
        })
        .catch((err) => {
            callback(err);
        });
}


