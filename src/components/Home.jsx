import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./../sass/other/slick.scss";
import "./../sass/other/slick-theme.scss";

import Menu from "./Menu";
import TopBar from "./TopBar";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "./../redux/actionCreators";

let secondaryTrandings = [0, 1, 2, 3, 4];
let songs = [0, 1, 2, 3];
let popularGenres = [
  "Blues",
  "Classical",
  "Country",
  "Dance",
  "Electronic",
  "Hip-Hop",
  "Jazz",
  "Latin",
  "Metal",
  "Party",
  "R&B Soul",
  "Raggae/Dancehall",
  "Soundtracks",
  "World",
];

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = ({ token, addUser }) => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.soundofgoodmusic.com/api/Users/Get-Profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        addUser(response.data.firstName);
      })
      .catch((error) => {
        console.log(error.message);
      });

    axios
      .get("https://backend.soundofgoodmusic.com/api/ArtistPanel/Dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <div className="dashboard-container">
      <Menu />
      <TopBar />
      <main className="home">
        <form action="" className="home__form">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            name="search"
            id=""
            placeholder="🔎 Search for new music, news, artists..."
            className="home__form-input"
          />
        </form>
        <div className="trandings">
          <h2 className="trandings__title">Trendings events</h2>
          <Slider {...settings}>
            <div className="trandings__principal">
              <div className="trandings__principal-container">
                <span className="trandings__principal-category">
                  {"// "}Trendings
                </span>
                <h3 className="trandings__principal-title">
                  Red Snapper: Performance review
                </h3>
                <span className="trandings__principal-author">-Kamelia</span>
              </div>
              <img
                src="https://res.cloudinary.com/leonemil/image/upload/v1614260838/Sound%20of%20good%20music/Red-snapper_ob0z8g.jpg"
                alt=""
                srcset=""
                className="trandings__principal-img"
              />
            </div>
            <div className="trandings__principal">
              <div className="trandings__principal-container">
                <span className="trandings__principal-category">Dashboard</span>
                <h3 className="trandings__principal-title">
                  Best Performance of 2020
                </h3>
                <span className="trandings__principal-author">-Albert</span>
              </div>
              <img
                src="https://focusonbelgium.be/sites/default/files/styles/big_article_image/public/concert.jpg?itok=S1tfPu2F"
                alt=""
                srcset=""
                className="trandings__principal-img"
              />
            </div>
            <div className="trandings__principal">
              <div className="trandings__principal-container">
                <span className="trandings__principal-category">Dashboard</span>
                <h3 className="trandings__principal-title">Shaun Mendez</h3>
                <span className="trandings__principal-author">-Carl</span>
              </div>
              <img
                src="https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbCdfe3fhGODcmpiSmFoxiMsRoUhOiwhpjhF5fQkgntI80WcOnyoUbUuA4VRRDrong0zA6wBacX79AE0FqA3RNopBS37.jpg?r=a18"
                alt=""
                srcset=""
                className="trandings__principal-img"
              />
            </div>
          </Slider>
        </div>
        <div className="artist-of-week">
          <h2 className="artist-of-week__title">Artist of the week</h2>
          <picture className="artist-of-week__image-container">
            <img
              src="https://res.cloudinary.com/leonemil/image/upload/v1614260807/Sound%20of%20good%20music/Monica-lee_fna3yp.jpg"
              alt=""
              srcset=""
              className="artist-of-week__image"
            />
          </picture>
          <div className="artist-of-week__section">
            <span className="artist-of-week__section-span">{"// "}Album</span>
            <h3 className="artist-of-week__album">Always authentic</h3>
            <p className="artist-of-week__author">Monica Lee</p>
            <p className="artist-of-week__description">
              The artist we represent are one of the most successful In Virginia
              and also were a huge breakthrough in the international market,
              topping radio and sales around the world.
            </p>
          </div>
          <div className="artist-of-week__songs">
            <ul className="artist-of-week__songs-list">
              {songs.map((song, key) => (
                <li className="artist-of-week__songs-item" key={key}>
                  <span className="artist-of-week__songs-number">
                    {key + 1}
                  </span>
                  <div className="artist-of-week__songs-like"></div>
                  <span className="artist-of-week__songs-name">
                    No more time
                  </span>
                  <span className="artist-of-week__songs-visits">42,828</span>
                  <span className="artist-of-week__songs-duration">3:21</span>
                  <div className="artist-of-week__songs-download"></div>
                  <div className="artist-of-week__songs-share"></div>
                  <div className="artist-of-week__songs-more"></div>
                </li>
              ))}
            </ul>
            <a href="#fullAlbum" className="artist-of-week__full-album">
              Listen to full album
            </a>
          </div>
        </div>
        <section className="more-news">
          <h3 className="more-news__title">More news</h3>
          <div className="more-news__container">
            <article className="more-news__article">
              <div className="more-news__wrapper">
                <h4 className="more-news__article-title">Thomas Bank</h4>
                <p className="more-news__article-subtitle">
                  Walking in his new album in 2021
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/leonemil/image/upload/v1614260801/Sound%20of%20good%20music/Thomas_Bank_znvjvc.png"
                alt=""
                className="more-news__image"
              />
            </article>
            <article className="more-news__article">
              <div className="more-news__wrapper">
                <h4 className="more-news__title">Thomas Bank</h4>
                <p className="more-news__subtitle">
                  Walking in his new album in 2021
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/leonemil/image/upload/v1614260818/Sound%20of%20good%20music/news_luou8y.png"
                alt=""
                className="more-news__image"
              />
            </article>
            <article className="more-news__article">
              <div className="more-news__wrapper">
                <h4 className="more-news__title">Thomas Bank</h4>
                <p className="more-news__subtitle">
                  Walking in his new album in 2021
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/leonemil/image/upload/v1614260815/Sound%20of%20good%20music/Art_ybtqj0.jpg"
                alt=""
                className="more-news__image"
              />
            </article>
          </div>
        </section>
        <div className="popular-genres">
          <h3 className="popular-genres__title">Popular genres</h3>
          <div className="popular-genres__container">
            {popularGenres.map((genre, key) => (
              <div className="popular-genres__item" key={key}>
                <span className="popular-genres__name">{genre}</span>
              </div>
            ))}
          </div>
        </div>
        <br />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (username) => {
      dispatch(addUser(username));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
