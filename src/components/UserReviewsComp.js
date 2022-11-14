import React from "react"
import '../App.css';
import stars1 from '../images/stars1.png';
import stars2 from '../images/stars2.png';
import stars3 from '../images/stars3.png';
import stars4 from '../images/stars4.png';
import stars5 from '../images/stars5.png';
import errorImage from '../images/errorImage.png';

import { useState, useEffect } from 'react';
import axios from 'axios';

function UserReviewsComp() {
    // setup state
    const [error, setError] = useState(""); //Errors
    const [reviewError, setReviewError] = useState(""); //Error for incorrectly added review

    const [travelers, setTravelers] = useState([]); // Travelers
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");

    const [reviews, setReviews] = useState([]); //Reviews
    const [reviewName, setReviewName] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState("");


    const fetchTravelers = async () => {
        try {
            const response = await axios.get("/api/taco/travelers");
            setTravelers(response.data.travelers); //before just response.data.travelers
        }
        catch (error) {
            setError("error retrieving travelers: " + error);
        }
    }
    const createTraveler = async () => {
        try {
            await axios.post("/api/taco/travelers", { name: name, place: place });
        }
        catch (error) {
            setError("error adding a traveler: " + error);
        }
    }
    const deleteOneTraveler = async (traveler) => {
        try {
            await axios.delete("/api/taco/travelers/" + traveler.id);
        }
        catch (error) {
            setError("error deleting a traveler" + error);
        }
    }
    const deleteOneTravelerByName = async () => {
        const traveler = travelers.find(traveler => {
            return traveler.name === name;
        });

        try {
            await axios.delete("/api/taco/travelers/" + traveler.id);
        }
        catch (error) {
            setError("error deleting a traveler" + error);
        }
    }

    const fetchReviews = async () => {
        try {
            const response = await axios.get("/api/taco/reviews");
            setReviews(response.data.reviews); //before just response.data.reviews
        }
        catch (error) {
            setError("error retrieving reviews: " + error);
        }
    }
    const createReview = async () => {
        try {
            await axios.post("/api/taco/reviews", { reviewName: reviewName, text: text, rating: rating });
        }
        catch (error) {
            setError("error adding a review: " + error);
        }
    }
    const deleteOneReview = async (review) => {
        try {
            await axios.delete("/api/taco/reviews/" + review.id);
        }
        catch (error) {
            setError("error deleting a review" + error);
        }
    }
    const updateOneReview = async (review) => {
        try {
            await axios.put("/api/taco/reviews", { reviewName: reviewName, text: text, rating: rating });
        }
        catch (error) {
            setError("error updating a review" + error);
        }
    }

    // fetch traveler data
    useEffect(() => {
        fetchTravelers();
        fetchReviews();
    }, []);

    const addTraveler = async (e) => {
        e.preventDefault();
        await createTraveler();
        fetchTravelers();
        setName("");
        setPlace("");
    }

    const deleteTraveler = async (traveler) => {
        await deleteOneTraveler(traveler);
        fetchTravelers();
    }

    const deleteTravelerByName = async () => {
        await deleteOneTravelerByName()
        fetchTravelers();
        setName("");
        setPlace("");
    }


    const addReview = async (e) => {
        e.preventDefault();
        if(rating == "1" || rating == "2" || rating == "3" || rating == "4" || rating == "5") {
            if(reviewName != "") {
                setReviewError("")
                await createReview();
                fetchReviews();
                setReviewName("");
                setText("");
                setRating("");
            } else {
                setReviewError("Error: Name box must be full");
            }
        } else {
            setReviewError("Error: Rating must be between 1 and 5 stars");
        }
    }
    
    const updateReview = async () => {
        if(rating == "1" || rating == "2" || rating == "3" || rating == "4" || rating == "5") {
            if(reviewName != "") {
                setReviewError("");
                await updateOneReview();
                fetchReviews();
                setReviewName("");
                setText("");
                setRating("");
            } else {
                setReviewError("Error: Name box must be full");
            }
        } else {
            setReviewError("Error: Rating must be between 1 and 5 stars");
        }
    }

    const deleteReview = async (review) => {
        await deleteOneReview(review);
        fetchReviews();
    }

    // render results
    return (
        <div className='row'>
            <div className='vertical-row top-row'>
                <div>
                    {error}
                    <div>
                        <h3>Reviews:</h3>
                    </div>
                    <div className='less-bold'>
                        {reviews.map( review => (
                            <div key={review.id}>
                                <div className='flex-horizontal space-between'>
                                    <p><strong>{review.reviewName}</strong></p>
                                    <div className='star'>
                                        <img src={review.rating === "5" ? stars5 : review.rating === "4" ? stars4 : review.rating === "3" ? stars3 : review.rating === "2" ? stars2 : review.rating === "1" ? stars1 : "Error"} className='star-format' />
                                    </div>
                                </div>
                                <p><em>{review.text}</em></p>
                            </div>))
                        }
                    </div>
                </div>
                
                <div>
                    <div>
                        <h5>Add a Review:</h5>
                        {reviewError}
                    </div>
                    <div className='less-bold center'>
                        <form className='less-bold center' onSubmit={addReview}>
                            <div>
                              <label className='flex-vertical'>
                                Name:
                                <input id="nameInput" type="text" value={reviewName} onChange={e => setReviewName(e.target.value)} />
                              </label>
                            </div>
                            <div>
                              <label className='flex-vertical'>
                                Stars (1-5):
                                <input type="text" value={rating} onChange={e=>setRating(e.target.value)}></input>
                              </label>
                            </div>
                            <div>
                              <label className='flex-vertical'>
                                Review:
                                <textarea value={text} onChange={e=>setText(e.target.value)}></textarea>
                              </label>
                            </div>
                            <input type="submit" value="Submit Review" className='add-margin' />
                            <button type="button" onClick={e => updateReview() } >Update by Name</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='vertical-row top-row'>
                <div>
                    <div>
                        <h3 className='center'>Visitors from all around:</h3>
                    </div>
                    <div className='less-bold center'>
                        {travelers.map( traveler => (
                            <div key={traveler.id}>
                                <p><strong>{traveler.name}</strong> - <em>{traveler.place}</em></p>
                            </div>))
                        }
                    </div>
                </div>
            
                <div>
                    <div>
                        <h5>Where are you from?</h5>
                    </div>
                    <form className='less-bold center' onSubmit={addTraveler}>
                        <div>
                          <label className='flex-vertical'>
                            Name:
                            <input id="nameInput" type="text" value={name} onChange={e => setName(e.target.value)} />
                          </label>
                        </div>
                        <div>
                          <label className='flex-vertical'>
                            Place:
                            <textarea value={place} onChange={e=>setPlace(e.target.value)}></textarea>
                          </label>
                        </div>
                        <input type="submit" value="Submit" className='add-margin' />
                        <button type="button" onClick={e => deleteTravelerByName() } >Delete by Name</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserReviewsComp;
