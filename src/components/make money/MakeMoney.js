import React from 'react'
import applePlaystore from "../../asset/images/appstore.png"
import googlePlaystore from "../../asset/images/playstore2.jpg"
import "./style/make.css"

const MakeMoney = () => {
    return (
        <section className="make-money-con container">
            <div className="make-left-con">
                <h6>We are in this with you so let's</h6>
                <h3>Make Money.</h3>
                <h4>Show your power.</h4>
                <p>
                    We have heard enough of your bragging, It's time to bring your
                    predicting skill to the table for and become the OgaPredictor.
                </p>
                <div className="playstore-con">
                    <img
                        src={applePlaystore}
                        alt=""
                        srcSet=""
                        
                    />
                    <img
                        src={googlePlaystore}
                        alt=""
                        srcSet=""
                        
                    />
                </div>
            </div>
            <div className="make-right-con">
                <div className="firstrow">
                    <div className="firsttext">
                        <img src="" alt="icon" /> <br />
                        <h6>Group Prediction</h6>
                        <p>Our coding framework has been 10 years. We keep to improving the codes based on our customers feedbacks. Now it's stable enough.</p>
                    </div>
                    <div className="secondtext">
                        <img src="" alt="icon" /> <br />
                        <h6>On On On Prediction</h6>
                        <p>Our talented designers craft the web design for each theme. We don't care the amount of themes in our portfolio, quality is the first.</p>
                    </div>
                </div>
                <div className="secondrow">
                    <div className="firsttext">
                        <img src="" alt="icon" /><br />
                        <h6>Jackpot Prediction</h6>
                        <p>Our team are all SEO Friendly, We optimize the HTML makeup oading speed and the other.</p>
                    </div>
                    <div className="secondtext">
                        <img src="" alt="icon" /> <br />
                        <h6>Buzz My Wallet</h6>
                        <p>We provide cost snd effective support service to our customers, help them to ------------.</p>
                    </div>
                </div>
            </div>
        </section>)
}

export default MakeMoney