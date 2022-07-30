import React, { useState } from 'react'
import { Redirect, useHistory, Link } from "react-router-dom";
import { connect } from 'react-redux'
import "../static/css/home/index.css"
import Footer from "./includes/mobile_footer.js"
import Header from "./includes/mobile_header.js"
import Desktopleft from "./includes/desktopleft"
import Desktopright from "./includes/desktopright"
import Pills from "./includes/desktoppillsholder"
import Toppills from "./includes/topdesktoppills"
import Search from "./headers/search"
import Realtime from "./includes/realtime"

import loaderImg from "../static/logos/animation.gif"
import { PageRouter, checkSession, clearCounterController, UserData } from "../controllers/routing"

import promo8 from "../static/logos/logo2.png"

import { logOut } from '../redux'


import { TrackChangesOutlined, HorizontalSplitOutlined, HowToVoteOutlined, SportsRugbyOutlined, } from '@material-ui/icons';

import { Helmet } from "react-helmet";
import logo from "../static/logos/logo2.png"


function Leagues({ appState,logout }) {
  let history = useHistory();
  const state = appState


  React.useEffect((compState) => {
    window.scrollTo(0, 0);
    // setStates({ ...compState, loader: true })
    // setTimeout(() => setStates({ ...compState, loader: false }), 500);
  }, []);

  const leagues = [
    {
      league: 'Legends',
      id: 'regregwt34tds',
      // logo:promo1,
      logo: promo8,
      code: "PL",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 102, 18, 0.15) 46.47%, rgba(53, 72, 139, 0.5) 100%)"
    },
    {
      league: 'Bet Gurus',
      id: 'regregwt3dfs4tds',
      // logo:promo2,
      logo: promo8,
      code: "LALIGA",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(0, 0, 0, 0.8) 100%)"
    },
    {
      league: 'No Jokes',
      id: 'regregwtwenh34tds',
      // logo:promo3,
      logo: promo8,
      code: "BUND",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(217, 44, 44, 0.6) 100%)"
    },
    {
      league: 'Big Boiz',
      id: 'regrewerGKIKG76R56437878Gt34tds',
      // logo:promo4,
      logo: promo8,
      code: "SERIA",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(151, 151, 78, 0.9) 100%)"
    },
    {
      league: 'Veterans',
      id: 'regregwt968587VIKNHJwv4tds',
      // logo:promo5,
      logo: promo8,
      code: "LEAG1",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(87, 151, 78, 0.8) 100%)"
    },
    {
      league: 'Bet Biggies',
      id: 'regregwtrJCKJF666X7DTYTeg34tds',
      // logo:promo6,
      logo: promo8,
      code: "PORT",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(78, 122, 151, 1) 100%)"
    },
    {
      league: 'Champions League',
      id: 'regregwtre0098JGFY65FVJHg34tds',
      // logo:promo7,
      logo: promo8,
      code: "CHAMP",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(173, 160, 148, 0.15) 100%)"
    },
    {
      league: "Ogapredictor's Mixed Games",
      id: 'regregwtrDDY67579reg34tds',
      logo: promo8,
      code: "CHAMP",
      bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(173, 160, 148, 1) 100%)"
    },
    //   {
    //       league: "AFCON",
    //       id: "regregwtrDDY67dsfewew579reg34tds",
    //       logo: promo8,
    //       code: "CHAMP",
    //       bk: "linear-gradient(180deg, rgba(60, 83, 153, 0.15) 0%, rgba(97, 162, 68, 0.15) 46.47%, rgba(173, 160, 148, 1) 100%)",
    //     },
  ]




  const [compState, setStates] = useState('')

  // show loader when rerouting
  let reroute = (category) => {
    // history.push(`./leagues/${category.id}`)
    // setStates({ ...compState, loader: true })
    // setTimeout(() => history.push(`./leagues/${category.id}`), 500);
    history.push(`./leagues/${category.id}`)
  }


  const renderLeagues = () => {
    return leagues.map(category => {
      // console.log(category)
      return (
        <div onClick={() => { reroute(category); }} style={{ background: category.bk }} class="leagues">
          <img alt={category.league} className='stakes2' src={category.logo} />
          <div className="stakes_price">
            <b className='icon' style={{ color: "#4e7a97" }}>{category.league}</b> <br />
            <small className="matches_count">Active || matches</small>
          </div>
        </div>
      )
    })
  }




  return (
    <div id="body bg"> 
      
      {/* {clearCounterController()} */}
      {/* {checkSession(history, logout)} */}
      {PageRouter({
        history,
        state
      })}
      <Realtime />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ogapredictor</title>
        <link rel="icon" href={logo} />
      </Helmet>


      <div className="mobile">

        <div className="header_footer">
          <Footer />
          <Header />
        </div>
        <div>
          <div>

            <div style={{ position: "sticky", top: "0px", zIndex: "1000", background: "#FFFDF2", height: " " }}>

              <Search />
            </div>
            <Toppills />


            <br />
            <div className='explore'><span>Choose Your Class</span></div>


            {console.log(state)}
            {compState.loader != true ?
              <div animateIn='fadeIn'>
                <div className="leagues_holder">
                  {renderLeagues()}
                </div>
              </div>
              :
              <div className="img_loader">  <br /><br /><br /><br /><br /><br /><br /> <img src={loaderImg} /> <br /> <br /><br /><br /><br /><br /><br /><br /></div>
            }
            <Pills />
          </div>
          <br />
        </div>
      </div>

      {/* desktop left */}
      <Desktopleft />


      {/* desktop right */}
      <Desktopright />

    </div>
  )

}


const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    logout: () => dispatch(logOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leagues)
