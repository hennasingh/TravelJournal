import map from '../assets/map-icon.png'
export default function TravelCard(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="Mount Fuji in Japan" className="card-image"/>
            <div className="card-stats">
                <div className="location">
                    <img src={map} alt="pin drop" className="map-icon"/>
                    <h3>{props.item.location}</h3>
                    <p><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h1>{props.item.title}</h1>
                <p className="travel-dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel-desc">{props.item.description}</p>
            </div>
        </div>
    )
}