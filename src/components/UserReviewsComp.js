import React from "react"
import '../App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

function UserReviewsComp() {
    // setup state
    const [error, setError] = useState(""); //Errors

    const [travelers, setTravelers] = useState([]); // Travelers
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");

    // TODO add Reviews

    const fetchTravelers = async () => {
        try {
            const response = await axios.get("/api/travelers");
            setTravelers(response.data.travelers); //before just response.data.travelers
        }
        catch (error) {
            setError("error retrieving travelers: " + error);
        }
    }
    const createTraveler = async () => {
        try {
            await axios.post("/api/travelers", { name: name, place: place });
        }
        catch (error) {
            setError("error adding a traveler: " + error);
        }
    }
    const deleteOneTraveler = async (traveler) => {
        try {
            await axios.delete("/api/travelers/" + traveler.id);
        }
        catch (error) {
            setError("error deleting a traveler" + error);
        }
    }

    // fetch traveler data
    useEffect(() => {
        fetchTravelers();
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

    // render results
    return (
        <div className='flex-horizontal'>
            <div className='vertical-row top-row'>
                {error}
                <div>
                    <h3>Reviews:</h3>
                </div>
                <div className='less-bold center'>
                    <p>Text</p>
                </div>
                
                <div>
                    <h5>Add a Review:</h5>
                </div>
                <div className='less-bold center'>
                    <p>Text</p>
                </div>
            </div>
            <div className='vertical-row top-row'>
                <div>
                    <h3>Visitors:</h3>
                </div>
                <div className='less-bold center'>
                    <p>Text</p>
                </div>
            
                <div>
                    <h5>Where are you from?</h5>
                </div>
                <form className='less-bold center' onSubmit={addTraveler}>
                    <div>
                      <label className='flex-vertical'>
                        Name:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                      </label>
                    </div>
                    <div>
                      <label className='flex-vertical'>
                        Place:
                        <textarea value={place} onChange={e=>setPlace(e.target.value)}></textarea>
                      </label>
                    </div>
                    <input type="submit" value="Submit" className='add-margin' />
                </form>
            </div>
        </div>
    )
}

export default UserReviewsComp;
