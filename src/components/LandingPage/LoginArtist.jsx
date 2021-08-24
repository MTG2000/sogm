import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const LoginUser = () => {

    const [redirect, setRedirect] = useState(false)

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please write your username'),
            password: Yup.string().required('Please write your password')
        }),
        onSubmit: ({username, password}) => {
            
            axios.post('', {
                "loginRequest": {
                    "grant_type": "string",
                    "userName": username,
                    "password": password,
                    "refresh_Token": "string",
                    "ccope": "string",
                    "client_id": "string",
                    "client_secret": "string"
                },
                "returnUrl": "https://leonemil.gitlab.io/sound-of-good-music/home"
                })
                .then(response => {
                    console.log(response)
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

    return redirect ? (<Redirect to="/home" />) : (
        <div className="login-page">
            <form className="login__form" onSubmit={handleSubmit}>
                <h1 className="login__title">Sign In as artist</h1>

                <label htmlFor="username" className="login__label">Username</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
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

export default LoginUser;
