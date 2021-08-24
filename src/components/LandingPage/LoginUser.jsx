import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { connect } from 'react-redux'
import { addToken, addRefreshToken, addRole } from "./../../redux/actionCreators"

const LoginUser = ({addToken, addRefreshToken, addRole}) => {

    const [redirect, setRedirect] = useState(false)

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please write your email').email('Please write a email'),
            password: Yup.string().required('Please write your password')
        }),
        onSubmit: ({username, password}) => {
            axios.post('https://backend.soundofgoodmusic.com/api/Account/authenticate', {
                "loginRequest": {
                    "grant_type": password,
                    "userName": username,
                    "password": "20212021",
                    "refresh_token":"",
                    "client_id": "123456M78",
                    "client_secret": "sogm"
                },
                "returnUrl": "string"
                })
                .then(response => {
                    console.log(response)
                    addRole(response.data.roleName)
                    addToken(response.data.token)
                    addRefreshToken(response.data.refreshToken)
                    setRedirect(true)
                })
                .catch(error => {
                    alert(error.message)
                })
            
            // auth.signInWithEmailAndPassword(email, password)
            //     .then(() => {
            //     })
            //     .catch(error => {
            //         alert(error.message)
            //     })
        }
    })

    return redirect ? (<Redirect to="/" />) : (
        <div className="login-page">
            <form className="login__form" onSubmit={handleSubmit}>
                <h1 className="login__title">Sign In with email</h1>

                <label htmlFor="username" className="login__label">Email</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    className="login__input"
                    id="login-username"
                    name="username"
                    value={values.username}
                    required
                />
                {
                    errors.username && touched.username ?
                        <span className="login__alert">{errors.username}</span>
                        : null
                }

                <label htmlFor="password" className="login__label">Password</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    className="login__input"
                    id="login-password"
                    name="password"
                    value={values.password}
                    required
                />
                {
                    errors.password && touched.password ?
                        <span className="login__alert">{errors.password}</span>
                        : null
                }

                <input
                    type="submit"
                    value="Sign in"
                    className="login__button"
                />
            </form>
            {/* <div className="login__new-container">
                <h2 className="login__new">¿Nuevo usuario?</h2>
                <Link to="/registrarse" className="login__redirect">
                    <button className="login__button">Crear una cuenta nueva</button>
                </Link>
            </div> */}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToken: (token) => { dispatch(addToken(token)) },
        addRole: (role) => { dispatch(addRole(role)) }
    }
}

export default connect(null, mapDispatchToProps)(LoginUser);
