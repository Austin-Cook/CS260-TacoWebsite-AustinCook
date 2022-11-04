import React from "react"
import '../App.css';
import tacos3 from '../images/tacos3.jpg';
import eattaco from '../images/eattaco.jpg';
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* Cover Photo */}
                <div photo>
                    <Link to={"/Menu"} ><img src={tacos3} /></Link>
                </div>
                {/* Page Content */}
                <div className='page'>
                    <div className='row bottom-row'>
                        <div className='row-text center-aligned'>
                            <h1>Come on in for Tacos + Friends and good times.</h1>
                        </div>
                
                        <div className='row-image'>
                            <img src={eattaco} />
                        </div>
                    </div>
                    <div className='vertical-row top-row'>
                        <div>
                            <h3>Our Visitors' States/Countries:</h3>
                        </div>
                        <div>
                            <h3>Reviews:</h3>
                        </div>
                        
                        
                        <div>
                            <h5>Add your home State/Country:</h5>
                        </div>
                        <div>
                            <h5>Add a Review:</h5>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            );
    }
}

export default Home;