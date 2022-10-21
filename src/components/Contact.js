import React from "react"
import '../App.css';
import tacos5 from '../images/tacos5.jpg';
import map from '../images/map.jpg';

class Contact extends React.Component {
    render() {
        return (
            <div>
                {/* Cover Photo */}
                <div photo>
                    <img src={tacos5} />
                </div>
                {/* Page Content */}
                <div className='page'>
                    <div className='row bottom-row'>
                        <div className='row-text center-aligned'>
                            <h1>Find us in the heart of Sunnyvale</h1>
                        </div>
                
                        <div className='row-image'>
                            <img src={map} />
                        </div>
                    </div>
                    <div className='vertical-row top-row'>
                        <div>
                            <h4>Contact Us</h4>
                        </div>
                        <div className='less-bold center'>
                            <p>We cater! If you are interested, call us to find out more:</p>
                            <p className='center !important'>208 515 0001</p>
                            <p>Our address can be found below:</p>
                        </div>
                    </div>           
                </div>
            </div>
        );
    }
}

export default Contact;
