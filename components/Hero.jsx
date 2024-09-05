import React from "react";

function Hero(){
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's 
                     standard dummy text ever since the 1500s, when an unknown 
                     printer took a galley of type and scrambled it to make a type 
                     specimen book.</p>
            
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="cat-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="shop-icon">
                <img src="./images/amazon.png" alt="amazon image" />
                <img src="./images/flipkart.png" alt="flipkart image" />
            
                </div>
                </div>
            </div>
            <div className="hero-image"><img src="../images/shoe_image.png" alt="main image" /></div>
        </main>
    );
}

export default Hero;