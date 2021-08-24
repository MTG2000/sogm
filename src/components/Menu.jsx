import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (  
        <>
            <nav className="dashboard-menu">   
                <div className="dashboard-menu__logo"></div>
                <ul className="dashboard-menu__list">
                    <li className="dashboard-menu__item">
                        <NavLink to="/home" className="home-icon"></NavLink>
                        <span className="sr-only">Home</span>
                    </li>
                    <li className="dashboard-menu__item">
                        <NavLink to="/dashboard" className="dashboard-icon"></NavLink>
                        <span className="sr-only">Dashboard</span>
                    </li>
                    <li className="dashboard-menu__item">
                        <NavLink to="/earnings" className="earnings-icon"></NavLink>
                        <span className="sr-only">Earnings</span>
                    </li>
                    <li className="dashboard-menu__item">
                        <NavLink to="/chat" className="chat-icon"></NavLink>
                        <span className="sr-only">Chat</span>
                    </li>
                </ul>
            </nav>
        </>
    );
}
 
export default Menu;