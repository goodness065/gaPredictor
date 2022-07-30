import React, { useState } from 'react'
import logo from "../../asset/images/fulllpgp.png"
import user from "../../asset/images/icon-human-icon-with-png-removebg-preview.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./style/nav.css"

const NavBar = () => {
    const [click, setClick] = useState(true);

    const openNav = () => setClick(!click);

    const [red, green, blue] = [255, 253, 242];

    window.addEventListener("scroll", () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 15;
        y = y < 1 ? 1 : y;
        const [r, g, b] = [red + y, green + y, blue + y].map(Math.round);
        document.getElementById(
            "nav"
        ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    });

    window.addEventListener("scroll", () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 15;
        y = y < 1 ? 1 : y;
        const [r, g, b] = [red + y, green + y, blue + y].map(Math.round);
        document.getElementById(
            "nav2"
        ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    });

    return (
        <>
            <nav id="nav" className='container desktop-nav'>
                <div className="second-logo">
                    <img src={logo} alt="icon" />
                </div>
                <div className="navbar" id="navbar">
                    <div className="nav">
                        <ul>
                            <li>
                                <a href="/" className='home-nav-link'
                                >HOME</a>
                            </li>
                            <li><a href="/" tabIndex="1">THEMES</a></li>
                            <li><a href="/" tabIndex="2">SUPPORT</a></li>
                            <li><a href="/" tabIndex="3"> ABOUT</a></li>
                        </ul>
                    </div>

                </div>
                <div className="icon">
                    <img
                        src={user}
                        alt="icon"
                    />
                </div>
            </nav>
            <nav id="nav2" className='container mobile-nav'>
                <div className="second-logo">
                    <img src={logo} alt="icon" />
                </div>
                <div className="navbar" id="navbar">
                    <div className="nav">
                        <div className="nav-ham " onClick={openNav}>
                            <GiHamburgerMenu className="ham" />
                        </div>
                    </div>

                </div>
                <div className={click ? "side-nav" : "open-sidenav"}>
        <div className="side-close">
          <div className="nav-ham " onClick={openNav}>
            <GrClose className="ham" />
          </div>
        </div>
        <div className="side-link">
          <div>
            <a href="/" className="mobile-link">
              <p className="mobile-link-text">HOME</p>
            </a>
            <a href="/product" className="mobile-link">
              <p className="mobile-link-text">THEMES</p>
            </a>
            <a href="/cart" className="mobile-link">
              <p className="mobile-link-text">SUPPORT</p>
            </a>
            <a href="/userAdmin" className="mobile-link">
              <p className="mobile-link-text">ABOUT</p>
            </a>
          </div>
        </div>
      </div>
            </nav>
        </>
    )
}

export default NavBar