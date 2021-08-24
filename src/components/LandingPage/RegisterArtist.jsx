import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const RegisterArtist = () => {

    const [redirect, setRedirect] = useState(false)

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Please write your first name'),
            lastName: Yup.string().required('Please write your last name'),
            nickName: Yup.string().required('Please write your nick name'),
            email: Yup.string().required('Please write yout email').email('Please write a valid email'),
            password: Yup.string().required('Please write your password')
        }),
        onSubmit: ({firstName, lastName, nickName, email, password}) => {
            
            axios.post('https://79.175.133.102:9000/api/Account/SignUp-Artist', {
                    "firstName": firstName,
                    "lastName": lastName,
                    "nickName": nickName,
                    "password": password,
                    "email": email,
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
                <h1 className="login__title">Sign Up as artist</h1>

                <label htmlFor="firstname" className="login__label">First name</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="login__input"
                    id="login-firstname"
                    name="firstname"
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

                <label htmlFor="nickName" className="login__label">Nick name</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="login__input"
                    id="login-nickname"
                    name="nickName"
                    value={values.nickName}
                    required
                />
                {
                    errors.nickName && touched.nickName ?
                        <span className="login__alert">{errors.nickName}</span>
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

export default RegisterArtist;
