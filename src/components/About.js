import React from "react"
import '../App.css';

import family from '../images/family.png';

class About extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='row'>
                    <div className='row-text center-aligned'>
                        <h1>Family owned and love filled.</h1>
                    </div>
                    <div className='row-image'>
                        <img src={family} />
                    </div>
                </div>
                <div className='vertical-row top-row bottom-row'>
                    <div>
                        <h4>Our Story</h4>
                    </div>
                    <div className='less-bold'>
                        <p>Just ten years ago, the Martinez family set out from the mountains of Provo Utah to the warm sunny beaches of California with one goal - to make the world's best tacos. The following years were spent experimenting, refining, and tasting to realize that dream. In 2017, Streetside Tacos was ranked #1 Taco Shop in the United States and still holds that ranking today. It's fan base continues to grow today, making Streetside Tacos a fun and delectable stop for a good time.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;