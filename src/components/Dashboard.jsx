import React from 'react';

import Menu from './Menu'
import TopBar from './TopBar'

let fans = [
    {
        name: "Annette Watson",
        picture: "",
        hours: "9.3"
    },
    {
        name: "",
        picture: "",
        hours: ""
    },
    {
        name: "",
        picture: "",
        hours: ""
    },
    {
        name: "",
        picture: "",
        hours: ""
    },
    {
        name: "",
        picture: "",
        hours: ""
    },
    {
        name: "",
        picture: "",
        hours: ""
    },
    {
        name: "",
        picture: "",
        hours: ""
    },
]

let countries = [
    {
        name: "Spain",
        number: "20",
        percentage: "32%",
    },
    {
        name: "",
        number: "",
        percentage: "",
    },
    {
        name: "",
        number: "",
        percentage: "",
    },
    {
        name: "",
        number: "",
        percentage: "",
    },
]

const Dashboard = () => {
    return (  
        <div className="dashboard-container">
            <Menu />
            <TopBar />
            <main className="dashboard">
                <h2 className="dashboard__title">Dashboard</h2>
                {/* <button className="dashboard__select">My new amazing album</button>
                <div className="dashboard__options">
                    <button className="dashboard__config-button">⚙️</button>
                    <button className="dashboard__last-days-button">Last 7 days</button>
                    <button className="dashboard__download-button">Download as CSV</button>
                    <button className="dashboard__new-dashboard-button">New dashboard</button>
                </div> */}
                <div className="dashboard__small-card listeners-icon">
                    <p className="dashboard__small-card-number">62</p>
                    <span className="dashboard__small-card-text">Listeners</span>
                </div>
                <div className="dashboard__small-card followers-icon">
                    <p className="dashboard__small-card-number">23</p>
                    <span className="dashboard__small-card-text">New followers</span>
                </div>
                <div className="dashboard__small-card unfollows-icon">
                    <p className="dashboard__small-card-number">3</p>
                    <span className="dashboard__small-card-text">Unfollows</span>
                </div>
                <div className="dashboard__small-card streams-icon">
                    <p className="dashboard__small-card-number">83%</p>
                    <span className="dashboard__small-card-text">New streams</span>
                </div>
                <div className="dashboard__small-card playlist-icon">
                    <p className="dashboard__small-card-number">25</p>
                    <span className="dashboard__small-card-text">Saved as playlist</span>
                </div>
                <div className="dashboard__small-card total-streams-icon">
                    <p className="dashboard__small-card-number">1396</p>
                    <span className="dashboard__small-card-text">Streams total hours</span>
                </div>
                <div className="dashboard__fans-card">
                    <h3 className="dashboard__fans-title">Fans/hours listening to you</h3>
                    {/* <button className="dashboard__fans-option">Descending</button>
                    <ul className="dashboard__fans-list">
                        {
                            fans.map((fan, key) => (
                                <li className="dashboard__fans-item" key={key}>
                                    <div className="dashboard__fans-picture">{fan.picture}</div>
                                    <span className="dashboard__fans-name">{fan.name}</span>
                                    <span className="dashboard__fans-hours">{fan.hours}</span>
                                </li>
                            ))
                        }
                    </ul> */}
                </div>
                <div className="dashboard__countries-card">
                    <h3 className="dashboard__countries-title">Streams by countries</h3>
                    <canvas className="dashboard__countries-graphic" id="dashboardCountriesGraphic"></canvas>
                    {/* <ul className="dashboard__countries-list">
                        {
                            countries.map((country, key) => (
                                <li className="dashboard__countries-item" key={key}>
                                    <p className="dashboard__countries-name">{country.name}</p>
                                    <p className="dashboard__countries-number">{country.number}<span>{`(${country.percentage})`}</span></p>
                                </li>
                            ))
                        }
                    </ul> */}
                </div>
                <div className="dashboard__listeners-card">
                    <h3 className="dashboard__listeners-card-title">Listeners by month</h3>
                    {/* <div className="dashboard__listners-card-section">
                        <span className="dashboard__listeners-card-men">Men</span>
                        <span className="dashboard__listener-card-women">Women</span>
                    </div> */}
                    <canvas className="dashboard__listeners-graphic" id="dashboardListenersGraphics"></canvas>
                </div>
            </main>
        </div>
    );
}
 
export default Dashboard;