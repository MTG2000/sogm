import React from 'react';

import Menu from './Menu'
import TopBar from './TopBar'

let mostValueSongs = ["Always authentic", "Not for me", "See you tomorrow", "Don't worry", "Go away", "This is the end", "Yesterday", "Too late"]

const Earnings = () => {
    return (  
        <div className="dashboard-container">
            <Menu />
            <TopBar />
            <main className="earnings">
                <h2 className="earnings__title">Earnings</h2>
                {/* <button className="earnings__select">My new amazing album</button> */}
                <div className="earnings__small-card balance-icon">
                    <p className="earnings__small-card-number">$620</p>
                    <span className="earnings__small-card-text">Your balance</span>
                </div>
                <div className="earnings__small-card purchase-icon">
                    <p className="earnings__small-card-number">23</p>
                    <span className="earnings__small-card-text">Purchases</span>
                </div>
                <div className="earnings__small-card costumers-icon">
                    <p className="earnings__small-card-number">13</p>
                    <span className="earnings__small-card-text">New costumers</span>
                </div>
                <div className="earnings__small-card streams-icon">
                    <p className="earnings__small-card-number">83%</p>
                    <span className="earnings__small-card-text">New streams</span>
                </div>
                <div className="earnings__sales-card">
                    <h3 className="earnings__sales-card-title">Sales</h3>
                    <canvas className="earnings__sales-card-graphic" id="earningsSalesCardGraphic"></canvas>
                </div>
                <div className="earnings__songs-card">
                    <h3 className="earnings__songs-title">Most valued tracks</h3>
                    <ol className="earnings__songs-list">
                        {
                            mostValueSongs.map((song, key) => (
                                <li className="earnings__songs-item" key={key}>{song}</li>
                            ))
                        }
                    </ol>
                </div>
            </main>
        </div>
    );
}
 
export default Earnings;