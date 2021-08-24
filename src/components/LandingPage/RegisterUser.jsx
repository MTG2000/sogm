import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { connect } from 'react-redux'
import { addToken, addRole } from './../../redux/actionCreators'

const RegisterUser = ({addToken, addRole}) => {

    const [redirect, setRedirect] = useState(false)

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Please write your first name"),
            lastName: Yup.string().required("Please write your last name"),
            email: Yup.string().required('Please write your email').email("Please write a valid email"),
            password: Yup.string().required('Please write your password')
        }),
        onSubmit: ({firstName, lastName, email, password}) => {
            
            axios.post('https://backend.soundofgoodmusic.com/api/Account/SignUp-User', {
                    "firstName": firstName,
                    "lastName": lastName,
                    "password": password,
                    "email": email,
                    "returnUrl": "https://leonemil.gitlab.io/sound-of-good-music/home"
                })
                .then(response => {
                    console.log(response)
                    addRole(response.data.roleName)
                    addToken(response.data.token)
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
                <h1 className="login__title">Sign Up with email</h1>

                <label htmlFor="firstname" className="login__label">First name</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="login__input"
                    id="login-firstname"
                    name="firstName"
                    value={values.firstName}
                    required
                />
                {
                    errors.firstName && touched.firstName ?
                        <span className="login__alert">{errors.firstName}</span>
                        : null
                }

                <label htmlFor="lastName" className="login__label">Last name</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="login__input"
                    id="login-lastname"
                    name="lastName"
                    value={values.lastName}
                    required
                />
                {
                    errors.lastName && touched.lastName ?
                        <span className="login__alert">{errors.lastName}</span>
                        : null
                }

                <label htmlFor="password" className="login__label">Email</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    className="login__input"
                    id="login-email"
                    name="email"
                    value={values.email}
                    required
                />
                {
                    errors.email && touched.email ?
                        <span className="login__alert">{errors.email}</span>
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
                    value="Sign up"
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

export default connect(null, mapDispatchToProps)(RegisterUser);
