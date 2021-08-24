import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventCard from "./EventCard";
import styled from "styled-components";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1222 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1222, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const bandsAndSingers = [
  {
    name: "John Buckey",
    image:
      "https://static.wixstatic.com/media/f98edabbd01643bcb93da696f6fcb10e.jpg/v1/fill/w_473,h_315,fp_0.50_0.50,q_90/f98edabbd01643bcb93da696f6fcb10e.webp",
    alt: "Black and white image of a man with a jacket",
  },
  {
    name: "Nora Walker",
    image:
      "https://static.wixstatic.com/media/458b35fd1bebbd6dd2260fed075dde7e.jpg/v1/fill/w_421,h_315,fp_0.50_0.50,q_90/458b35fd1bebbd6dd2260fed075dde7e.webp",
    alt: "Girl singing with a microphone",
  },
  {
    name: "Alexa Hill",
    image:
      "https://static.wixstatic.com/media/06aa8602320e4c4392c9f3eab5c6db3f.jpg/v1/fill/w_419,h_315,fp_0.50_0.50,q_90/06aa8602320e4c4392c9f3eab5c6db3f.webp",
    alt: "Black girl smiling in a white background",
  },
  {
    name: "Eddie Baker",
    image:
      "https://static.wixstatic.com/media/e3b6242c2f2c4e8dbb1d8fd0d547815f.jpg/v1/fill/w_475,h_315,fp_0.50_0.50,q_90/e3b6242c2f2c4e8dbb1d8fd0d547815f.webp",
    alt: "Man looking to the horizon with a musical instrument",
  },
  {
    name: "Lone Journey",
    image:
      "https://static.wixstatic.com/media/b320ad0d3aa549c3956ebcfb86b09d62.jpg/v1/fill/w_483,h_269,fp_0.50_0.50,q_90/b320ad0d3aa549c3956ebcfb86b09d62.webp",
    alt: "Four men looking to the camera",
  },
  {
    name: "Jeremiah",
    image:
      "https://static.wixstatic.com/media/9212cc107cc53b20e0be2326a456a704.jpg/v1/fill/w_411,h_269,fp_0.50_0.50,q_90/9212cc107cc53b20e0be2326a456a704.webp",
    alt: "Black and white image of a baterist and a guitarrist",
  },
];

const djs = [
  {
    name: "ALT_M",
    image:
      "https://static.wixstatic.com/media/329aba79eb4746badb672f82aae8700e.jpg/v1/fill/w_408,h_345,fp_0.50_0.50,q_90/329aba79eb4746badb672f82aae8700e.webp",
    alt: "Black girl smiling",
  },
  {
    name: "Skinny Pete",
    image:
      "https://static.wixstatic.com/media/0210663053904a65972f1ee301cd482f.jpg/v1/fill/w_486,h_345,fp_0.50_0.50,q_90/0210663053904a65972f1ee301cd482f.webp",
    alt: "Young man in a chair",
  },
  {
    name: "DJ Cribs",
    image:
      "https://static.wixstatic.com/media/d46b026e43154d4caa7f84dad2ffecc9.jpg/v1/fill/w_491,h_368,fp_0.50_0.50,q_90/d46b026e43154d4caa7f84dad2ffecc9.webp",
    alt: "DJ playing a song",
  },
  {
    name: "Mr. Sur",
    image:
      "https://static.wixstatic.com/media/558dfcc8cd934e8193198259f6b643a7.jpg/v1/fill/w_403,h_368,fp_0.50_0.50,q_90/558dfcc8cd934e8193198259f6b643a7.webp",
    alt: "Black man looking to the camera",
  },
  {
    name: "Whitenight",
    image:
      "https://static.wixstatic.com/media/1ee945350863b4cd922cd753935b9797.jpg/v1/fill/w_445,h_296,fp_0.50_0.50,q_90/1ee945350863b4cd922cd753935b9797.webp",
    alt: "Young man with sun glases",
  },
  {
    name: "Braincloud",
    image:
      "https://static.wixstatic.com/media/c142e99712d4bb42acc2632cc16bb5bd.jpg/v1/fill/w_449,h_296,fp_0.50_0.50,q_90/c142e99712d4bb42acc2632cc16bb5bd.webp",
    alt: "DJ with light in background",
  },
];

let events = [
  {
    title: "Spotify December Gig",
    date: "23 June, 2021",
    image:
      "https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/man-2179313-1920-1@1x.png",
    availableTickets: 0,
  },
  {
    title: "XYZ Music Event",
    date: "5 July, 2021",
    image:
      "https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/singer-690117-1920-1@1x.png",
    availableTickets: 19,
  },
  {
    title: "XYZ Music Event",
    date: "24 July, 2021",
    image:
      "https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/dj-1531431-1920-1@1x.png",
    availableTickets: 24,
  },
  {
    title: "XYZ Music Event",
    date: "1 August, 2021",
    image:
      "https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/concert-932098-1920-1@1x.png",
    availableTickets: 102,
  },
];

const LandingPage = ({ username }) => {
  const [trendingEvents, setTrendingEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("https://backend.soundofgoodmusic.com/api/Event/Trending")
      .then((response) => {
        setTrendingEvents(response.data);
      });

    axios
      .post("https://backend.soundofgoodmusic.com/api/Event/List", {
        DtParameters: {
          OrderByColumn: "startdatetime",
          Dir: "ascend",
          Current: 1,
          PageSize: 10,
          //"Search1":"Title"
        },
      })
      .then((response) => {
        setUpcomingEvents(response.data.data);
      });
  }, []);

  const [page, setPage] = useState("main");
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const [labels, setLabels] = useState(false);
  const [traslateSearch, setTraslateSearch] = useState("0px");
  const [leftUpcomingEvents, setLeftUpcomingEvents] = useState(0);
  const [leftTrendingEvents, setLeftTrendingEvents] = useState(0);

  const history = useHistory();

  const handleSearch = (e) => {
    if (e?.preventDefault) e.preventDefault();
    history.push(`/events?search=${searchText}`);
  };

  return (
    <div className="landing-page__container" style={{ width: "100vw" }}>
      <div
        className="landing-page__responsive-menu"
        style={responsiveMenu === true ? { right: "0" } : { right: "100vw" }}
      >
        <div
          className="landing-page__responsive-menu-exit"
          onClick={() => {
            setResponsiveMenu(false);
          }}
        ></div>
        <ul className="landing-page__responsive-menu-list">
          <li className="landing-page__responsive-menu-item">
            <NavLink to="/memories">Memories</NavLink>
          </li>
          <li className="landing-page__responsive-menu-item">
            <NavLink to="/labels">Labels</NavLink>
          </li>
          <li className="landing-page__responsive-menu-item">
            <NavLink to="/performers">Performers</NavLink>
          </li>
          <li className="landing-page__responsive-menu-item">
            <Link to="/event-bookings">
              <span>Event bookings</span>
            </Link>
          </li>
          <li className="landing-page__responsive-menu-item">
            <Link to="/login-or-register">
              <span>Login</span>
            </Link>
          </li>
          <form className="landing-page__responsive-menu-form">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input type="search" name="search" placeholder="Search" />
          </form>
        </ul>
      </div>

      <header className="landing-page__header">
        <Link to="/" className="landing-page__title">
          Sound of Good Music
        </Link>
        <div
          className="landing-page__menu-icon"
          onClick={() => {
            setResponsiveMenu(responsiveMenu ? false : true);
          }}
          onTap={() => {
            setResponsiveMenu(responsiveMenu ? false : true);
          }}
        ></div>
        <nav className="landing-page__menu">
          <ul className="landing-page__menu-list">
            <Menu
              menuButton={
                <li
                  className="landing-page__menu-item labels--item"
                  style={{
                    display: traslateSearch !== "0px" ? "none" : "block",
                  }}
                >
                  Labels
                </li>
              }
            >
              <MenuItem>Label example</MenuItem>
              <MenuItem>Label example</MenuItem>
            </Menu>

            <Menu
              menuButton={
                <li
                  className="landing-page__menu-item performers--item"
                  style={{
                    display: traslateSearch !== "0px" ? "none" : "block",
                  }}
                >
                  Performers
                </li>
              }
            >
              <MenuItem>Erick Marlick</MenuItem>
              <MenuItem>Robin Wayne</MenuItem>
              <MenuItem>John Smith</MenuItem>
            </Menu>
            <li
              className="landing-page__menu-item event-bookings--item"
              onClick={() => {
                setPage("event-bookings");
              }}
              style={{ display: traslateSearch !== "0px" ? "none" : "block" }}
            >
              <Link to="/event-bookings" className="landing-page__menu-link">
                Event bookings
              </Link>
            </li>
            <li
              className="landing-page__menu-item memories--item"
              onClick={() => {
                setPage("main");
              }}
              style={{ display: traslateSearch !== "0px" ? "none" : "block" }}
            >
              Memories
            </li>
            <li
              className="landing-page__responsive-menu-form"
              style={{ transform: `translateX(${traslateSearch})` }}
            >
              <div
                className="landing-page__search-icon"
                onClick={() => setTraslateSearch("-280px")}
              ></div>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                name="search"
                className="landing-page__input-field"
                onClick={() => setSearchText("")}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) handleSearch();
                }}
              />
              <div
                className="landing-page__search-close"
                onClick={() => {
                  setTraslateSearch("0px");
                }}
              ></div>
            </li>
            <li className="landing-page__menu-item landing-page__login-item">
              <div className="landing-page__menu-link-container">
                <Link
                  to="/login-or-register"
                  className="landing-page__menu-link-login button"
                >
                  Log in / Sign up
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="landing-page__video">
        <div className="landing-page__overlay"></div>
        {/* <Link to="" className="landing-page__buy-tickets">Buy tickets</Link> */}
        <div className="landing-page__video-wrapper">
          <h2 className="landing-page__video-wrapper-title">
            Book your good music live show today
          </h2>
          <p className="landing-page__video-wrapper-text">
            Corona is over. Find live show of your favorite musicians near you
            now.
          </p>
          <form
            className="landing-page__video-wrapper-buttons"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              className="landing-page__video-wrapper-search"
              placeholder="Search"
              onClick={() => setSearchText("")}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input
              type="submit"
              value="FIND A VENUE FOR YOUR NEXT GIG"
              className="landing-page__video-wrapper-submit button"
            />
          </form>
        </div>
      </div>
      <main className="landing-page__main">
        <div className="landing-page__events">
          <div className="container">
            <h2 className="landing-page__events-title">Upcoming events</h2>
          </div>
          <Carousel
            responsive={responsive}
            centerMode
            containerClass="landing-page__carousel-container"
          >
            {upcomingEvents.map((event, key) => (
              <EventCard
                key={key}
                title={event.title}
                img={event.image}
                date={new Date(event.firstStrtDate).toDateString()}
                subText={event.venueName}
              />
            ))}
          </Carousel>
        </div>
        <div className="landing-page__events">
          <div className="container">
            <h2 className="landing-page__events-title">Trending events</h2>
          </div>
          <Carousel
            responsive={responsive}
            centerMode
            containerClass="landing-page__carousel-container"
          >
            {trendingEvents.map((event, key) => {
              return (
                <EventCard
                  key={key}
                  title={event.title}
                  img={event.eventPhoto}
                  subText={event.venueName}
                />
              );
            })}
          </Carousel>
        </div>
        {/* <div className="landing-page__trendings">
                    <h2 className="landing-page__trendings-title">Trending events</h2>
                    <p>Events that people are going crazy about</p>
                    <Carousel responsive={responsive}>
                        <div>
                            <div>
                                <img className="landing-page__trendings-image" src="https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/performer-958392-1920-1@1x.png" alt="Red snapper"/>
                                <h3 className="landing-page__trendings-description">Red Snapper - Performance Review - Kamelia</h3>
                            </div>
                            <div>
                                <img className="landing-page__trendings-image" src="https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/performer-958392-1920-1@1x.png" alt="Red snapper"/>
                                <h3 className="landing-page__trendings-description">Red Snapper - Performance Review - Kamelia</h3>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="landing-page__trendings-image" src="https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/performer-958392-1920-1@1x.png" alt="Red snapper"/>
                                <h3 className="landing-page__trendings-description">Red Snapper - Performance Review - Kamelia</h3>
                            </div>
                            <div>
                                <img className="landing-page__trendings-image" src="https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/performer-958392-1920-1@1x.png" alt="Red snapper"/>
                                <h3 className="landing-page__trendings-description">Red Snapper - Performance Review - Kamelia</h3>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="landing-page__trendings-image" src="https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/performer-958392-1920-1@1x.png" alt="Red snapper"/>
                                <h3 className="landing-page__trendings-description">Red Snapper - Performance Review - Kamelia</h3>
                            </div>
                            <div>
                                <img className="landing-page__trendings-image" src="https://cdn.animaapp.com/projects/60a039fdeccb8cc9ee1dee3f/releases/60a05842bcfb67375b76b8fb/img/performer-958392-1920-1@1x.png" alt="Red snapper"/>
                                <h3 className="landing-page__trendings-description">Red Snapper - Performance Review - Kamelia</h3>
                            </div>
                        </div>
                    </Carousel>
                </div> */}
        <div className="social-section">
          {/* <div className="social-section__header">
            <h3 className="social-section__header-title">
              Social media trends
            </h3>
            <p className="social-section__header-subtitle">
              See what everybody is talking about
            </p>
          </div> */}
          {/* <div className="social-section__message">
            <p className="social-section__message-name">
              John L.Doe{" "}
              <span className="social-section__message-social">@jonhdoe</span>
            </p>
            <p className="social-section__message-description">
              Had an amazing time at the xyz live gig last night. Wohoo!
            </p>
            <p className="social-section__message__hashtag">#xyz #concert</p>
            <div className="social-section__message-image"></div>
          </div> */}
          <div className="min-100vh">
            <h3 className="social-section__second-title">Why us?</h3>
            <p className="social-section__second-subtitle">
              Why we're the most trusted platform for music ticket booking ever
            </p>
            <div className="social-section__item-container">
              <div className="social-section__item">
                <div className="social-section__item-image music-icon"></div>
                <p className="social-section__item-title">Best music</p>
                <p className="social-section__item-description">
                  Here is where you'll find the best artists and experience the
                  best events.
                </p>
              </div>
              <div className="social-section__item">
                <div className="social-section__item-image calendar-icon"></div>
                <p className="social-section__item-title">
                  Events all around the year
                </p>
                <p className="social-section__item-description">
                  Don't get bored ever with all sorts of eevents happening
                  throughout the year.
                </p>
              </div>
              <div className="social-section__item">
                <div className="social-section__item-image chat-icon"></div>
                <p className="social-section__item-title">
                  Active support team
                </p>
                <p className="social-section__item-description">
                  Our support team are working 24/7 to ensure the best
                  experience for you.
                </p>
              </div>
              <div className="social-section__item">
                <div className="social-section__item-image build-icon"></div>
                <p className="social-section__item-title">Top venues</p>
                <p className="social-section__item-description">
                  The best venues are working with us because, why not?
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-100vh center flex-column"
            style={{ background: "black" }}
          >
            <h3 className="social-section__third-title">Start today</h3>
            <p className="social-section__third-subtitle">
              It's time to join the world's best gig ticket reservation
              platform.
            </p>
            <Link
              className="social-section__signup-button  button"
              to="/login-or-register"
            >
              Sign up
            </Link>
            <Link className="social-section__signup-artist" to="/">
              I'm an artist
            </Link>
          </div>
        </div>
      </main>

      <footer className="landing-page__footer">
        <h3 className="footer__copyrigth">Stay up to date</h3>
        <form className="footer__form">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="footer__input"
            placeholder="Name"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input type="email" className="footer__input" placeholder="Email" />
          <input
            type="submit"
            value="JOIN OUR MAILING LIST"
            className="footer__submit button"
          />
        </form>
        <ul className="footer__social-list">
          <li>
            <a href="https://soundcloud.com/soundofgoodmusic">
              <div className="footer__social-icon--soundcloud"></div>
              <span className="sr-only">Soundcloud</span>
            </a>
          </li>
          <li>
            <a href="https://studio.youtube.com/channel/UCRUYACGcCTcMQ-gNoO8E_Lw">
              <div className="footer__social-icon--youtube"></div>
              <span className="sr-only">Youtube</span>
            </a>
          </li>
          <li>
            <a href="https://beatport.com/soundofgoodmusic">
              <div className="footer__social-icon--beatport"></div>
              <span className="sr-only">Beatport</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/soundofgoodmusic">
              <div className="footer__social-icon--instagram"></div>
              <span className="sr-only">Instragram</span>
            </a>
          </li>
        </ul>
        <ul className="landing-page__footer-links">
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Legal Mentions</a>
          </li>
          <li>
            <a href="#">GDPR</a>
          </li>
        </ul>
        <p className="copyright">© 2021 Sound of Good Music</p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps, null)(LandingPage);
