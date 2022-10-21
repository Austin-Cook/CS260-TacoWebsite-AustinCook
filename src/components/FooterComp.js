import React from "react"
import '../App.css';

function FooterComp() {
    return (
        <div>
            <div className='footer'>
                <div className='footer-box'>
                    <h1>Streetside Tacos</h1>
                    <p>154 W El Camino Real, Sunnyvale, CA 94087</p>
                    <p>208 515 0001</p>
                    <hr className='header-hr' />
                    <a href="https://github.com/Austin-Cook/CS260-TacoWebsite-AustinCook" target="_blank">Link to Github Repo</a>
                    <p>© 2022 Supreme Tacos LLC</p>
                </div>
            </div>  
        </div>
    )
}

export default FooterComp;