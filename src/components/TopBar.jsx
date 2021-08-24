import React, { useState } from 'react';
import { connect } from 'react-redux'
import { removeUser } from './../redux/actionCreators'
import { Redirect } from 'react-router-dom'

const TopBar = ({username, role, removeUser}) => {

    const [displaySubMenu, setDisplaySubMenu] = useState(false)
    const [redirect, setRedirect] = useState(false)
    
    return redirect ? <Redirect to="/" /> : (
        <div className="dashboard-main__top">
            <div className="dashboard-main__top-message-container">
                <p className="dashboard-main__top-message">8 people is listening to you</p>
            </div>
            <div className="dashboard-main__user"></div>
            <nav className="dashboard-main__menu">
                <ul className="dashboard-main__menu-list">
                    <li className="dashboard-main__account" onClick={() => { displaySubMenu ? setDisplaySubMenu(false) : setDisplaySubMenu(true)}}>
                        <img src="https://cutewallpaper.org/21/shadow-boy-sunset-wallpapers/Pin-by-HotShot-Sports-on-Dpz-Profile-pictures-instagram-.jpg" alt="User profile" className="dashboard-main__account-img"/>
                        <div className="dashboard-main__account-wrapper">
                            <p className="dashboard-main__account-name">{username}</p>
                            <span className="dashboard-main__account-type">{role}</span>
                        </div>
                        <ul className="dashboard-main__account-submenu" style={displaySubMenu ? {display: 'flex'} : {display: 'none'}}>
                            <li className="dashboard-main__account-submenu-item" onClick={() => {setRedirect(true)}}>Donations</li>
                            <li className="dashboard-main__acccount-item">Upload</li>
                        </ul>
                    </li>
                    <li className="dashboard-main__menu-item bell-icon"></li>
                    <li className="dashboard-main__menu-item logout-icon" onClick={() => {removeUser(); setRedirect(true)}}></li>
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        role: state.role
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: () => { dispatch(removeUser()) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
