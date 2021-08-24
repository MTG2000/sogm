import React, { useEffect } from 'react'
import axios from 'axios'

const SocialLogin = () => {

    const login = () => {
        axios.get("https://backend.soundofgoodmusic.com/api/account/provider/Google?redirectUrl=https://leonemil.gitlab.io/sound-of-good-music/home")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="login-page">
            <button onClick={() => {login()}}>Login</button>
        </div>
    )
} 

export default SocialLogin