import React from 'react'

const data = [
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots andHearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots and Hearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots and Hearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots and Hearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots and Hearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots and Hearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg",
        name: "Boots and Hearts Music Festival, Toronto",
        date: "17-04-2021",
        description: "Ticket Volume or Total Tickets tracks all tickets in your support queue over a period of time. A variation of this metric is Total conversations, which counts all engagement with"
    },
]

const Events = () => {
    return (
        <div className="events-container">
            <h2 className="events-title">Events</h2>
            <div className="events-options">
                <label htmlFor="from" className="sr-only">From</label>
                <select name="from" className="events-options__select">
                    <option value="">From: 13-11-2021</option>
                </select>
                <label htmlFor="sr-only" className="sr-only">To</label>
                <select name="sort" className="events-options__select">
                    <option value="">To:</option>
                </select>
                <label htmlFor="sort" className="sr-only">Sort</label>
                <select name="sort" className="events-options__select">
                    <option value="">Sort by mail price</option>
                </select>
                <button className="events-options__button-filter">Filter</button>
                <button className="events-options__button-add">Add +</button>
            </div>
            <table className="events-table">
                <thead className="events-table__thead">
                    <th className="events-table__th">Image</th>
                    <th className="events-table__th">Name</th>
                    <th className="events-table__th">Date</th>
                    <th className="events-table__th">Description</th>
                </thead>
                <tbody className="events-table__tbody">
                    {
                        data.map(data => (
                            <tr className="events-table__tr">
                                <td className="events-table__td">
                                    <img src={data.image} alt={data.name} className="events-table__td-image"/>
                                </td>
                                <td className="events-table__td">
                                    <span className="events-table__td-name">{data.name}</span>
                                </td>
                                <td className="events-table__td">
                                    <span className="events-table__td-date">{data.date}</span>
                                </td>
                                <td className="events-table__td">
                                    <span className="events-table__td-description">{data.description}</span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Events