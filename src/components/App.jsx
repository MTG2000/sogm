//import logo from './logo.svg';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './../redux/store'
import './../sass/style.scss';

import LandingPage from './LandingPage/LandingPage'
import LoginUser from './LandingPage/LoginUser'
import LoginArtist from './LandingPage/LoginArtist'
import RegisterUser from './LandingPage/RegisterUser'
import RegisterArtist from './LandingPage/RegisterArtist'
import LoginOrRegister from './LandingPage/LoginOrRegister'
import SocialLogin from './LandingPage/SocialLogin'

import Home from './Home'
import Dashboard from './Dashboard'
import Earnings from './Earnings'
import Chat from './Chat'

import Events from './Events'
import EventList from './EventList'
import AddEvent from './AddEvent'
import NotFound from './NotFound';

function App() {

  const getScroll = () => {
      const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width;
      const cssScrollBarWidth = () => document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`);
      window.addEventListener('load', cssScrollBarWidth);
      window.addEventListener('resize', cssScrollBarWidth);
  };

  useEffect(() => {
    getScroll()

    if(window.location.pathname.includes("/home") || window.location.pathname.includes("/dashboard") || window.location.pathname.includes("earnings") || window.location.pathname.includes("chat")){
      document.body.style.overflow = "hidden"
    }
  })

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/earnings">
            <Earnings />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/event-bookings">
            <AddEvent />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/event-list">
            <EventList />
          </Route>
          <Route path="/social-login">
            <SocialLogin />
          </Route>
          <Route path="/login-or-register">
            <LoginOrRegister />
          </Route>
          <Route path="/login-user">
            <LoginUser />
          </Route>
          <Route path="/login-artist">
            <LoginArtist />
          </Route>
          <Route path="/register-user">
            <RegisterUser />
          </Route>
          <Route path="/register-artist">
            <RegisterArtist />
          </Route>
          <Route component={() => { <NotFound/> }}></Route>
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;
