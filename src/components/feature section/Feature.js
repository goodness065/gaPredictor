import React from 'react'
import Cards from '../cards/Cards'
import gif from '../../asset/images/ogapredictor.gif'
import img from '../../asset/images/class.png'
import "./style/feature.css"

const Feature = () => {
    return (
        <section className='feature container'>
            <div >
                <h1 className="feature-heading">Explore In Five Simple Steps</h1>
            </div>
            <div className='card-main-con'>
                <div className='card-single-con'>
                    <Cards className="bg1" text="Create Account" />
                </div>
                <div className='card-single-con'>
                    <Cards className="bg2" text="Get free 1,000" />
                </div>
                <div className='card-single-con'>
                    <Cards className="bg3" text="Select Class" />
                </div>
                <div className='card-single-con'>
                    <Cards className="bg4" text="Select Category" />
                </div>
                <div className='card-single-con'><Cards className="bg5" text="Predict All matches" /></div>
            </div>
            <div className='card-con'>
                <div className="card-left-image">
                    <img src={gif} alt="" />
                </div>
                <div className="card-right-text">
                    <h2>Bookmaking</h2>
                    <h4>Real 3D FlipBook WordPress Theme</h4>
                    <p>Bookmaking is a Real 3D FlipBook WordPress Theme. It's very perfect for creating an online e-book, magazine, personal resume or photo gallery, even selling products. You can organize everything as a flipbook on your website, brings your visitors different reading experience!</p>
                    <br />
                    <div className='card-a-con'>
                        <a href="/">Create Your FlipBook Website</a>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className="card-right-text">
                    <h2>Choose Your Class</h2>
                    <h4>Online Courses WordPress LMS Theme</h4>
                    <p>
                        In the context of the global epidemic, it's a crisis, but also a
                        chance in online courses business. More and more people oten have to learn at home. It's a good time to start the online education business. <b>Quorse theme, could help you launch an online courses website quickly</b>
                    </p>
                    <br /><br />
                    <a href="/">Learn More</a>
                </div>
                <div className="card-left-image">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='content2'>
                <div className="card-left-image">
                    <img src={img} alt="" />
                </div>
                <div className="card-right-text">
                    <h2>Choose Your Class</h2>
                    <h4>Online Courses WordPress LMS Theme</h4>
                    <p>
                        In the context of the global epidemic, it's a crisis, but also a
                        chance in online courses business. More and more people oten have to learn at home. It's a good time to start the online education business. <b>Quorse theme, could help you launch an online courses website quickly</b>
                    </p>
                    <br /><br />
                    <div className='card-a-con'>
                        <a href="/">Learn More</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Feature