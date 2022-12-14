const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect(
  `mongodb+srv://austin:cookie88@cluster0.8tpshhm.mongodb.net/tacodb?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Travelers
// scheme for visiting travelers
const travelerSchema = new mongoose.Schema({
  name: String,
  place: String,
});

// create a virtual paramter that turns the default _id field into id
travelerSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
// Ensure virtual fields are serialised when we turn this into a JSON object
travelerSchema.set('toJSON', {
  virtuals: true
});

// create a model for travelers
const Traveler = mongoose.model('Traveler', travelerSchema);

app.get('/api/taco/travelers', async (req, res) => {
  try {
    let travelers = await Traveler.find();
    res.send({
      travelers: travelers
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/taco/travelers', async (req, res) => {
  const traveler = new Traveler({
    name: req.body.name,
    place: req.body.place
  });
  try {
    await traveler.save();
    res.send({
      traveler: traveler
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/taco/travelers/:id', async (req, res) => {
  try {
    await Traveler.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



// Reviews
// scheme for reviews
const reviewSchema = new mongoose.Schema({
  reviewName: String,
  text: String,
  rating: String,
});

// create a virtual paramter that turns the default _id field into id
reviewSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
// Ensure virtual fields are serialised when we turn this into a JSON object
reviewSchema.set('toJSON', {
  virtuals: true
});

// create a model for reviews
const Review = mongoose.model('Review', reviewSchema);

app.get('/api/taco/reviews', async (req, res) => {
  try {
    let reviews = await Review.find();
    res.send({
      reviews: reviews
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/taco/reviews', async (req, res) => {
  const review = new Review({
    reviewName: req.body.reviewName,
    text: req.body.text,
    rating: req.body.rating
  });
  try {
    await review.save();
    res.send({
      review: review
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Update a review
app.put('/api/taco/reviews', async (req, res) => {
  let updatedReview;
  if(req.body.text == "") {
    updatedReview = { reviewName: req.body.reviewName, rating: req.body.rating };
  } else {
    updatedReview = { reviewName: req.body.reviewName, text: req.body.text, rating: req.body.rating };
  }
  const filter = { reviewName: req.body.reviewName };
  try {
    let newReview = await Review.findOneAndUpdate(filter, updatedReview);
    newReview = await Review.findOne(filter); //NOTE - the line above sets newReview to findOne before updating, so that is why I call findOne again.
    res.send(newReview);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/taco/reviews/:id', async (req, res) => {
  try {
    await Review.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3001, () => console.log('Server listening on port 3001!'));
