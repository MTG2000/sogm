import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Dropzone from 'react-dropzone';
import Select from 'react-select'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

const AddEvent = ({token}) => {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            name: '',
            date: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please write the event name'),
            date: Yup.string().required('Please write the event date'),
            description: Yup.string().required('Please write a description')
        }),
        onSubmit: ({name, date, description}) => {
            
            axios.post('https://backend.soundofgoodmusic.com/api/Admin/CreateEvent', {
                headers: {
                    'Access-Control-Allow-Origin': '*', 
                    'Authorization': `Bearer ${token}`
                },
                "CreatetEventDto": {
                    "Description": description,
                    "TicketingDescription": "",
                    "MainPictureId": 1,
                    "Location": "",
                    "Address": "",
                    "Title": name,
                    "EventStatus": "",
                    "IsSpecial": false,
                    "PlaceType": 0,
                    "VenueId": 2
                }
            })
            .then(() => {
                alert("Event saved")
            })
            .catch(error => {
                alert(error.message)
            })

            // axios.post('', {
            //     "loginRequest": {
            //         "grant_type": "string",
            //         "userName": username,
            //         "password": password,
            //         "refresh_Token": "string",
            //         "ccope": "string",
            //         "client_id": "string",
            //         "client_secret": "string"
            //     },
            //     "returnUrl": "https://leonemil.gitlab.io/sound-of-good-music/home"
            //     })
            //     .then(response => {
            //         console.log(response)
            //         setRedirect(true)
            //     })
            //     .catch(error => {
            //         alert(error.message)
            //     })
            
            // auth.signInWithEmailAndPassword(email, password)
            //     .then(() => {
            //     })
            //     .catch(error => {
            //         alert(error.message)
            //     })
        }
    })

    const [venues, setVenues] = useState([])
    const [redirectToEventList, setRedirectToEventList] = useState(false)

    useEffect(() => {
        axios.post('https://backend.soundofgoodmusic.com/api/Event/List', {
            "DtParameters":
               {
                "OrderByColumn":"startdatetime",
                "Dir":"ascend",
                "Current":1,
                "PageSize":10
                //"Search1":"Title"
                }
            }).then(response => {
            setVenues(response.data.data)
        })
    }, [])

    const getVenues = () => {
        let venueNames = []
        venues.forEach(venue => {
            venueNames.push({value: venue.venueName, label: venue.venueName})
        })
        return venueNames
    }

    return (
        redirectToEventList ? <Redirect to="/event-list"/> :
        <main className="add-event-container">
            <h2 className="add-event-title">Add Event</h2>
            <form className="add-event-form" onSubmit={handleSubmit}>
                <Dropzone>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()} className="add-event-form__dropzone-video">
                    <div className="add-event-form__video-icon"></div>
                    <input 
                        {...getInputProps()} 
                        name="video"
                    />
                    <p className="add-event-form__text">Drag and drop event videos here</p>
                    <input type="button" className="add-event-form__button" value="browse"/>
                    </div>
                )}
                </Dropzone>
                <Dropzone>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()} className="add-event-form__dropzone-image">
                        <div className="add-event-form__image-icon"></div>
                    <input 
                        {...getInputProps()}
                        name="image"
                    />
                    <p className="add-event-form__text">Drag and drop a cover photo here</p>
                    <input type="button" className="add-event-form__button" value="browse"/>
                    </div>
                )}
                </Dropzone>
                <label htmlFor="name" className="add-event-form__label-1">Name of the event</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className="add-event-form__input-1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="date" className="add-event-form__label-2">Date of the event</label>
                <input 
                    type="text" 
                    className="add-event-form__input-2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="date"
                    id="date"
                    required
                />
                <div className="add-event-form__wrapper-select">
                    <label htmlFor="venue" className="add-event-form__label-4">Choose a venue</label>
                    <Select defaultValue={getVenues()[0]} options={getVenues()} name="venue" className="add-event-form__select"/>
                </div>
                <label htmlFor="description" className="add-event-form__label-3">Description</label>
                <textarea 
                    name="description" 
                    className="add-event-form__input-3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="description"
                >

                </textarea>
                <div className="add-event-form__wrapper">
                    <input type="submit" value="Done" className="add-event-form__submit" />
                    <span className="add-event-form__span">or</span>
                    <Link to="/" className="add-event-form__cancel">Cancel</Link>
                </div>
            </form>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps, null)(AddEvent)