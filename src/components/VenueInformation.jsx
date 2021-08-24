import React from 'react'

const VenueInformation = () => {
    return (
        <div className="venue-information-container">
            <div className="venue-information">
                <h1 className="venue-information__title">Bill Reid Gllery of Northwest Coast Art</h1>
                <p className="venue-information__venue-title">Venue Owner: </p>
                <p className="venue-information__venue">Judge Smith</p>
                <p className="venue-information__capacity-title">Capacity: </p>
                <p className="venue-information__capacity">120 seats</p>
                <p className="venue-information__address-title">Address: </p>
                <p className="venue-information__address">6390 Hornby St, Vancouver, BC V6C 2G3, Canada.</p>
                <p className="venue-information__description-title">Description</p>
                <p className="venue-information__description">
                    Ticket volume or total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversations, which counts all engagement with
                </p>
            </div>
            <div className="venue-gallery">
                {
                    images.map(image => {
                        <div className="venue-gallery__image-container">
                            <img src={image.image} alt={image.alt} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default VenueInformation