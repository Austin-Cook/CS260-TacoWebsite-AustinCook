import React from "react"
import '../App.css';
import tacos5 from '../images/tacos5.jpg';

class Contact extends React.Component {
    render() {
        return (
            <div>
                {/* Cover Photo */}
                <div photo>
                    <img src={tacos5} />
                </div>
    
                {/* Page Content */}
                <div class='page'>
                    <div class='vertical-row top-row'>
                        <div>
                            <h4>Contact Us</h4>
                        </div>
                        <div class='less-bold center'>
                            <p>We cater! If you are interested, call us to find out more:</p>
                            <p class='center !important'>208 515 0001</p>
                            <p>Our address can be found below:</p>
                        </div>
                    </div>           
                </div>
            </div>
        );
    }
}

export default Contact;
