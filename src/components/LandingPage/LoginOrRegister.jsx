import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri } from './../../js/settings';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { addUser } from './../../redux/actionCreators'

const LoginOrRegister = ({addUser}) => {

    const [redirect, setRedirect] = useState(false)

    const onSuccess = async (response) => {
        await fetch('https://api.spotify.com/v1/me', {
            headers: {'Authorization': 'Bearer ' + response.access_token}
        })
        .then(response => response.json() )
        .then(data => {
            addUser(data.display_name)
        });
        setRedirect(true)
    }
    
    const onFailure = response => alert.error(response);

    return redirect ? <Redirect to="/home"/> : ( 
        <div className="spotify-login__container">
            <h1 className="spotify-login__title">Login to continue</h1>
            <SpotifyLogin 
                clientId={clientId}
                redirectUri={redirectUri}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
            <Link to="/login-user" className="register__email-button">Sign in with email</Link>
            <span className="register__separator">or</span>
            <Link to="/register-user" className="register__email-button">Sign up with email</Link>
            
        </div>

        // <div className="register__container">
        //     <h1 className="register__title">Sign Up or Sign In</h1>
        //     <Link to="/login-artist" className="register__email-button">Sign in as artist</Link>
        //     <Link to="/register-artist" className="register__email-button">Sign up as artist</Link>
        // </div>
     );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (username) => { dispatch(addUser(username)) }
    }
}
 
export default connect(null, mapDispatchToProps)(LoginOrRegister);