import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addCurrentEvent } from './../redux/actionCreators'

let events = [
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Pending',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Approved',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Pending',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Approved',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Pending',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Canceled',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Pending',
    },
    {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Canceled',
    },
]


const EventList = ({addCurrentEvent}) => {

    const [eventSelected, setEventSelected] = useState(events[0])

    const selectEvent = (key) => {
        setEventSelected(events[key])
    }
    
    return (
        <div className="events-list-container">
            <div className="events-list">
                <h2 className="events-list__title">Events</h2>
                <table className="events-list__table">
                    <thead className="events-list__table-head">
                        <th className="events-list__table-head-row">Image</th>
                        <th className="events-list__table-head-row">Name</th>
                        <th className="events-list__table-head-row">Date</th>
                        <th className="events-list__table-head-row">Owner</th>
                        <th className="events-list__table-head-row">Status</th>
                    </thead>
                    <tbody className="events-list__table-body">
                        {
                            events.map((event, key) => (
                                <tr className="events-list__table-body-row" onClick={() => {selectEvent(key)}}>
                                    <td className="events-list__table-body-data"><img src={event.img} alt={event.name} className="events-list__table-body-img"/></td>
                                    <td className="events-list__table-body-data"><span className="events-list__table-body-name">{event.name}</span></td>
                                    <td className="events-list__table-body-data"><span className="events-list__table-body-date">{event.date}</span></td>
                                    <td className="events-list__table-body-data"><span className="events-list__table-body-owner">{event.owner}</span></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="events-details">
                <h2 className="event-details__title">Events Details</h2>
                <img src={eventSelected.img} alt={eventSelected.name} className="event-details__img"/>
                <p className="event-details__img-description">{eventSelected.name}</p>
                <p className="event-details__date">Date: </p>
                <p className="event-details__date-value">{eventSelected.date}</p>
                <p className="event-details__description">Description: </p>
                <p className="event-details__description-value">{eventSelected.description}</p>
                <p className="event-details__status">Status: </p>
                <p className="event-details__status-value">{
                    eventSelected.status === "Pending" ? 
                        <span className="event-details__status-value-pending">Pending</span> : 
                    eventSelected.status === "Canceled" ? <div className="event-details__status-value-canceled"></div> :
                    eventSelected.status === "Approved" ? <div className="event-details__status-value-approved"></div> :
                        null
                }</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCurrentEvent: (event) => {dispatch(addCurrentEvent(event))}
    }
}

export default connect(null, mapDispatchToProps)(EventList)